import os
import datetime
import jwt # PyJWT 라이브러리
from functools import wraps
from flask import Flask, redirect, url_for, request, make_response, jsonify
from flask_dance.contrib.google import make_google_blueprint, google # Flask-Dance
from dotenv import load_dotenv # python-dotenv

# .env 파일에서 환경 변수 로드
load_dotenv()

app = Flask(__name__)
# 매우 중요! Flask 세션 암호화 및 JWT 서명에 사용됩니다. .env 파일에서 불러옵니다.
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

# Flask-Dance Google Blueprint 설정
# Google Cloud Console 에서 얻은 클라이언트 ID와 시크릿 사용
# offline=True는 refresh_token을 얻기 위함 (여기서는 필수는 아님)
# scope는 Google 로부터 얻고 싶은 사용자 정보 범위 (openid, email, profile 필수)
google_bp = make_google_blueprint(
    client_id=os.getenv('GOOGLE_OAUTH_CLIENT_ID'),
    client_secret=os.getenv('GOOGLE_OAUTH_CLIENT_SECRET'),
    scope=["openid", "email", "profile"],
    redirect_to="google.authorized" # 로그인 후 돌아올 라우트 함수 이름
)
app.register_blueprint(google_bp, url_prefix="/login") # '/login/google' 경로로 접근

# --- JWT 관련 함수 ---

def generate_jwt(user_id):
    """사용자 ID를 받아 JWT를 생성합니다."""
    payload = {
        'user_id': user_id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1) # 1시간 유효
    }
    token = jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')
    return token

def verify_jwt(token):
    """JWT를 검증하고 유효하면 사용자 ID를 반환, 아니면 None 반환."""
    try:
        payload = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
        return payload.get('user_id')
    except jwt.ExpiredSignatureError:
        print("JWT expired")
        return None
    except jwt.InvalidTokenError:
        print("Invalid JWT")
        return None

def login_required(f):
    """JWT 쿠키를 확인하는 데코레이터."""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        token = request.cookies.get('auth_token')
        user_id = verify_jwt(token)
        if user_id is None:
            # 유효하지 않으면 로그인 페이지로 리디렉션
            return redirect(url_for('index')) 
        # 유효하면 원래 함수 실행 (여기서 g.user = user_id 등으로 사용자 정보 저장 가능)
        print(f"Authenticated user ID: {user_id}") 
        return f(*args, **kwargs)
    return decorated_function

# --- 라우트(Routes) ---

@app.route('/')
def index():
    """메인 페이지. JWT 쿠키 확인 후 로그인 상태에 따라 다른 내용 표시."""
    token = request.cookies.get('auth_token')
    user_id = verify_jwt(token)

    if user_id:
        # 로그인된 상태
        return f"""
        <h1>환영합니다, 사용자 {user_id}!</h1>
        <p>로그인되었습니다.</p>
        <p><a href="/protected">보호된 페이지 가기</a></p>
        <p><a href="/logout">로그아웃</a></p>
        """
    else:
        # 로그아웃 상태
        return """
        <h1>로그인이 필요합니다.</h1>
        <p><a href="/login/google">Google 계정으로 로그인</a></p>
        """

@app.route('/login/google/authorized')
def authorized():
    """Google 로그인 성공 후 콜백 처리."""
    if not google.authorized:
        return redirect(url_for('index')) # 실패 시 메인으로

    try:
        # Google API를 호출하여 사용자 정보 가져오기
        resp = google.get("/oauth2/v2/userinfo")
        assert resp.ok, resp.text
        user_info = resp.json()
        google_user_id = user_info['id']
        email = user_info['email']
        name = user_info.get('name', email) # 이름 없으면 이메일 사용

        # ----- 실제 앱에서는 여기서 DB에서 사용자를 찾거나 생성 -----
        # 이 예제에서는 간단히 Google ID를 우리 시스템의 user_id로 사용
        user_id = f"google_{google_user_id}" 
        print(f"Google Login Success: ID={user_id}, Email={email}, Name={name}")
        # ---------------------------------------------------------

        # JWT 생성
        jwt_token = generate_jwt(user_id)

        # JWT를 HttpOnly 쿠키에 담아 메인 페이지로 리디렉션
        response = make_response(redirect(url_for('index')))
        # secure=True 는 HTTPS에서만 쿠키 전송, samesite='Lax'는 CSRF 방어
        response.set_cookie('auth_token', jwt_token, httponly=True, secure=True, samesite='Lax', max_age=3600) # 1시간 유효
        return response

    except Exception as e:
        print(f"Error during Google authorization: {e}")
        return redirect(url_for('index')) # 오류 발생 시 메인으로

@app.route('/protected')
@login_required # 이 데코레이터가 JWT를 검증
def protected_area():
    """로그인한 사용자만 접근 가능한 페이지 예시."""
    return "<h1>보호된 페이지</h1><p>로그인해야만 볼 수 있습니다.</p><p><a href='/'>메인으로</a></p>"

@app.route('/logout')
def logout():
    """로그아웃 처리 (JWT 쿠키 삭제)."""
    response = make_response(redirect(url_for('index')))
    response.set_cookie('auth_token', '', expires=0, httponly=True, secure=True, samesite='Lax') # 쿠키 삭제
    return response

# 개발용 테스트 실행 (Gunicorn 사용 시 이 부분은 실행 안 됨)
if __name__ == '__main__':
    # HTTPS를 사용하기 위해 SSL 컨텍스트 설정 (개발용 임시 인증서 사용)
    # 실제 배포 환경(Nginx 뒤)에서는 이 부분이 필요 없습니다.
    # 임시 인증서 생성: pip install pyopenssl, then: openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365
    # 또는 Flask-Dance 가 기본 제공하는 adhoc 사용
    # app.run(host='0.0.0.0', port=5000, debug=True, ssl_context='adhoc')
    
    # 지금은 Nginx가 SSL을 처리하므로, Flask는 HTTP로 실행
     app.run(host='127.0.0.1', port=5000, debug=True)


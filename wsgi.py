# wsgi.py
from src.back import create_app # src/back/__init__.py 에서 앱 팩토리 함수 임포트

# Flask 앱 인스턴스 생성
app = create_app()

# Gunicorn은 이 'app' 변수를 찾아서 실행합니다.
# if __name__ == "__main__": 코드는 필요 없습니다.

# 1. Python 3.12-slim 이미지를 기반으로 시작합니다.
FROM python:3.12-slim

# 2. 컨테이너 내 작업 디렉토리를 /app 으로 설정합니다.
WORKDIR /app

# 3. (선택) 필요한 시스템 패키지를 설치합니다.
# 예: PostgreSQL 클라이언트 라이브러리 등. 지금은 필요 없으므로 주석 처리.
# RUN apt-get update && apt-get install -y --no-install-recommends \
#     libpq-dev \
#  && rm -rf /var/lib/apt/lists/*

# 4. requirements.txt 파일을 먼저 복사하고 pip install을 실행합니다.
#    (이 부분이 변경되지 않으면 Docker 빌드 캐시를 활용하여 속도 향상)
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# 5. 나머지 프로젝트 파일들을 /app 디렉토리로 복사합니다.
#    (.dockerignore 파일에 명시된 파일/폴더는 제외됩니다.)
COPY . .

# 6. Gunicorn을 실행하여 wsgi.py 파일의 'app' 객체를 실행합니다.
#    유닉스 소켓(/app/gunicorn.sock)을 사용하여 Nginx와 통신합니다.
#    -w 4 : 워커 프로세스 4개 (서버 CPU 코어 수에 맞춰 조절)
#    -m 007 : 소켓 파일 권한 설정 (그룹 쓰기 허용)
CMD ["gunicorn", "-w", "4", "--bind", "unix:gunicorn.sock", "-m", "007", "wsgi:app"]

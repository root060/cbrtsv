from flask import Flask
import os
import psutil # Example of using a library to get system info

app = Flask(__name__)

@app.route('/')
def index():
    # Example: Get CPU usage using psutil
    cpu_percent = psutil.cpu_percent(interval=0.1)
    # Example: Get Memory usage
    memory_info = psutil.virtual_memory()

    # Simple HTML response
    html_content = f"""
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <title>CBRT 서버 포털</title>
        <style>
            body {{ font-family: sans-serif; background-color: #f4f4f4; padding: 20px; }}
            h1 {{ color: #333; }}
            p {{ color: #555; }}
            a {{ color: #007bff; text-decoration: none; }}
            .info {{ background-color: #fff; padding: 15px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-top: 20px; }}
        </style>
    </head>
    <body>
        <h1>환영합니다! CBRT 서버 포털입니다.</h1>
        <p>이 페이지는 Python Flask 앱에서 생성되었습니다.</p>
        <p><a href="/nas/">NAS (File Browser)로 이동하기</a></p>
        
        <div class="info">
            <h2>서버 상태 (예시)</h2>
            <p>현재 CPU 사용률: {cpu_percent}%</p>
            <p>현재 메모리 사용률: {memory_info.percent}%</p>
        </div>
    </body>
    </html>
    """
    return html_content

# Note: The following block is mainly for direct 'python app.py' execution for testing.
# Gunicorn runs the 'app' object directly, so it doesn't execute this part.
if __name__ == '__main__':
    # When run directly (not via Gunicorn), listen on 0.0.0.0:5000
    app.run(host='0.0.0.0', port=5000, debug=True)

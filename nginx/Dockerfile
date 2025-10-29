    # 안정적인 Alpine Linux 기반 Nginx 이미지를 사용합니다.
    FROM nginx:stable-alpine

    # 컨테이너의 기본 Nginx 설정 파일을 삭제합니다. (선택 사항)
    # RUN rm /etc/nginx/conf.d/default.conf

    # 로컬의 nginx.conf 파일을 컨테이너의 설정 위치로 복사합니다.
    COPY nginx.conf /etc/nginx/nginx.conf

    # HTTPS 사용 시 주석 해제 (인증서는 docker-compose에서 볼륨으로 마운트)
    # COPY options-ssl-nginx.conf /etc/letsencrypt/options-ssl-nginx.conf
    # COPY ssl-dhparams.pem /etc/letsencrypt/ssl-dhparams.pem

    # 80번(HTTP)과 443번(HTTPS) 포트를 외부에 노출합니다. (실제 매핑은 docker-compose에서)
    EXPOSE 80
    EXPOSE 443
    

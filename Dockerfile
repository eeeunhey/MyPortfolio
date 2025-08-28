# 1) 빌드 단계
FROM node:20-alpine AS build
WORKDIR /app

# 패키지 파일 복사 및 의존성 설치
COPY package*.json ./
RUN npm install
RUN corepack enable

# npm 캐시 정리 및 의존성 설치
RUN npm cache clean --force && \
    npm ci --no-optional --prefer-offline

# 소스 코드 복사
COPY . .

# 포트 열기
EXPOSE 5173

# lucide-react 문제 해결을 위한 추가 설정
RUN npm rebuild lucide-react || true

# 빌드 전 의존성 재검증 및 빌드
RUN npm run build

# 2) 런타임(정적 서버)
FROM nginx:1.27-alpine

# 빌드된 파일 복사
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx 설정 복사
COPY nginx.vh.conf /etc/nginx/conf.d/default.conf

# 포트 노출
EXPOSE 80


# 실행 명령어
CMD ["npm", "run", "dev"]
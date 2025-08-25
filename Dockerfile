# 1) 빌드 단계
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN corepack enable && npm ci
COPY . .
# Vite 빌드(필요 시 ENV 추가 가능)
RUN npm run build

# 2) 런타임(정적 서버)
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Vite SPA 라우팅(History API) 대응
COPY nginx.vh.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

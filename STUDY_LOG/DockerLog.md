.dockerignore 공부 기록 (Node.js/React/Vite)

.dockerignore 는 docker build 시 도커 데몬으로 전송되는 빌드 컨텍스트에서 불필요한 파일을 빼서, 빌드 속도↑ / 이미지 크기↓ / 비밀유출 방지를 해준다

추천 .dockerignore (요청 목록 기준)
# Dependencies & logs
node_modules
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# Local env (절대 이미지에 포함 X)
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
!*.example
!.env.example

# Build outputs (호스트에서 생성된 산출물)
dist
build

# IDE / editor
.vscode
.idea
*.swp
*.swo

# OS junk
.DS_Store
Thumbs.db

# Git
.git
.gitignore

# Docker 관련 (보통 컨텍스트에 굳이 필요 없음)
docker-compose.yml
.dockerignore

# Caches
.vite
.cache

꼭 알아두기

node_modules는 보통 제외
컨테이너 안에서 npm ci/pnpm install --frozen-lockfile로 깨끗하게 설치하는 게 재현성이 좋음

.env*는 전부 제외
API 키/비밀번호가 이미지에 굳어지면 위험합니다. 대신 **.env.example**로 키 이름만 공유

dist/build 제외 여부는 빌드 방식에 따라

컨테이너 내에서 빌드(멀티스테이지) → 제외 유지

로컬에서 빌드 후 산출물만 복사(“런타임 전용 이미지”) → 제외 해제하고 COPY dist ./dist 같은 패턴 사용

Dockerfile은 굳이 제외할 필요 없음
일반적으로 문제 없지만, COPY Dockerfile ... 같은 특수 케이스가 아니라면 컨텍스트에 포함/미포함 상관 없음(보통 포함).

체크리스트 ✅

    docker build 전에 비밀(.env) 이 컨텍스트에 안 실리는지 확인
    컨테이너 내에서 의존성 설치하도록 node_modules 제외


---


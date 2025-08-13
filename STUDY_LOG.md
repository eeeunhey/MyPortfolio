# React + Vite + Tailwind + Dark Mode 기본 세팅
1. Vite란?
Vite는 프론트엔드 빌드 도구(번들러)입니다.
빠른 개발 서버 (HMR — Hot Module Replacement 지원)
최소 설정으로 React, Vue, Svelte 등 다양한 프레임워크 개발 가능
ES 모듈 기반 빌드 → 큰 프로젝트에서도 시작 속도가 빠름
예전 CRA(create-react-app)보다 속도가 빠르고, 설정이 유연합니다. Tailwind 같은 최신 도구와 사용하기 좋다

## 0) 프로젝트 생성
```bash
# Vite(React) 프로젝트 생성
tnpm create vite@latest my-app -- --template react
cd my-app
npm install
```
npm create vite@latest
→ Vite 공식 CLI 스크립트를 실행합니다. @latest는 최신 버전 사용.

my-app
→ 생성할 프로젝트 폴더 이름입니다. (원하면 다른 이름 가능)

-- --template react
→ Vite 템플릿 중 React 버전을 선택해서 초기 세팅.

💡 npm create 대신 yarn create나 pnpm create도 사용 가능합니다.

개발 서버 실행 (확인용)
npm run dev
로컬 서버 실행 → 브라우저에서 http://localhost:5173 접속하면 기본 React 페이지 확인 가능.
---

## 1) Tailwind CSS(v4) + Vite 플러그인 설치
```bash
npm install tailwindcss @tailwindcss/vite
npm install lucide-react react-router-dom tailwind-merge clsx   @radix-ui/react-toast class-variance-authority
```

### 각 라이브러리 역할
- **tailwindcss**: 유틸리티 클래스 기반 스타일링
- **@tailwindcss/vite**: Vite용 Tailwind 플러그인
- **tailwind-merge**: 클래스 충돌/중복 자동 병합
- **clsx**: 조건부 className 조합
- **lucide-react**: React 아이콘
- **react-router-dom**: 라우팅
- **@radix-ui/react-toast**: 접근성 좋은 토스트 UI
- **class-variance-authority**: 컴포넌트 변형 관리

---

## 2) Vite 설정 (별칭 + 플러그인)
`vite.config.js`
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

---

## 3) 글로벌 스타일(index.css)
`src/index.css`
```css
@import "tailwindcss";
```
(App.css는 삭제)

---

## 4) 엔트리(main.jsx)
`src/main.jsx`
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

---

## 5) 라우팅 구조
### pages/Home.jsx
```jsx
export const Home = () => {
  return (
    <div className="min-h-screen">
      HOME 환영합니다
    </div>
  )
}
```

### pages/NotFound.jsx
```jsx
export const NotFound = () => {
  return <div className="min-h-screen p-6">NotFound 페이지</div>
}
```

### App.jsx
```jsx
import { Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { ThemeToggle } from '@/widgets/ThemeToggle'

export default function App() {
  return (
    <>
      <ThemeToggle />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
```

---

## 6) 유틸 함수 (cn)
`src/lib/utils.js`
```js
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}
```

---

## 7) 다크모드 토글
`src/widgets/ThemeToggle.jsx`
```jsx
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
      localStorage.setItem('theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300',
        'hover:bg-gray-100 dark:hover:bg-gray-800',
        'focus:outline-hidden',
        'max-sm:hidden'
      )}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
```

---

## 8) 체크리스트
- [ ] `tailwindcss` 철자 확인 (tailwundcss ❌)
- [ ] 파일명/경로 일치 (`src/lib/utils.js`)
- [ ] `Moon`, `Sun` 아이콘 임포트 필수
- [ ] dark 토글 시 `classList.add/remove` 사용
- [ ] index.css에 `@import "tailwindcss";` 존재
- [ ] Vite alias 등록
- [ ] BrowserRouter로 라우터 감싸기

---

## 9) 한 줄 요약
- **Vite**: 빠른 React 개발환경
- **Tailwind**: 유틸리티 스타일링
- **별칭(@)**: 코드 경로 간결화
- **cn 함수**: className 병합/관리
- **다크모드**: `<html class="dark">` 토글로 구현

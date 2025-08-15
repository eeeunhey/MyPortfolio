# React + Vite + Tailwind + Dark Mode — 전체 가이드

📅 작성일: 2025-08-14

---

## 0. 이해하기 
- **Node.js**: 자바스크립트를 실행하게 해주는 엔진 + 도구 모음.
- **npm**: 프로그램(패키지)을 설치하는 앱스토어 같은 것.
- **Vite**: 개발 서버를 켜주고, 수정하면 즉시 반영(HMR)해 주는 도구.
- **React**: 화면을 컴포넌트로 만들게 해주는 라이브러리.
- **Tailwind CSS**: 미리 준비된 유틸리티 클래스로 빠르게 스타일을 입히는 도구(예: `p-4`, `text-xl`).
- **다크모드**: `<html>`에 `class="dark"`가 붙으면 `dark:` 접두사가 있는 스타일이 적용됨.

> **비유:**  
> Vite = 빠른 주방, React = 요리도구 세트, Tailwind = 예쁘게 담는 플레이팅 키트

---

## 1. 설치부터 앱 실행까지

### 1) Node.js 설치
- 'Node.js LTS' 검색 → 설치(다음, 다음…)
- 설치 후 터미널에서:
```bash
node -v
npm -v
```
버전이 나오면 OK.

### 2) 새 프로젝트 만들기
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
```
- `my-app` 폴더가 생김 → VS Code로 열기.

### 3) 개발 서버 실행
```bash
npm run dev
```
- 브라우저에서 `http://localhost:5173` → Vite 기본 페이지 확인.

---

## 2. Tailwind + 유틸 라이브러리 설치
```bash
npm install tailwindcss @tailwindcss/vite
npm install lucide-react react-router-dom tailwind-merge clsx @radix-ui/react-toast class-variance-authority
```
❗️오타 주의: `tailwindcss` (O), `tailwundcss` (X)

---

## 3. Vite 설정 (Tailwind 플러그인 + 경로 별칭)
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
**왜 필요한가?**
- `tailwindcss` 플러그인을 연결하면 Vite가 Tailwind를 자동 처리.
- `@` 별칭으로 경로를 짧게 쓸 수 있음.

---

## 4. 글로벌 스타일 연결
`src/index.css`
```css
@import "tailwindcss";
```
> Tailwind v4에서는 한 줄이면 OK.

---

## 5. 라우터로 앱 기본 뼈대 만들기

### (1) 엔트리 파일 수정
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

### (2) 페이지 파일 만들기
`src/pages/Home.jsx`
```jsx
export const Home = () => {
  return (
    <div className="min-h-screen p-6">
      HOME 환영합니다
    </div>
  )
}
```

`src/pages/NotFound.jsx`
```jsx
export const NotFound = () => {
  return <div className="min-h-screen p-6">NotFound 페이지</div>
}
```

### (3) App.jsx 생성/수정
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

## 6. 유틸 함수 cn 만들기 (클래스 병합)
`src/lib/utils.js`
```js
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}
```
**왜 필요한가?**
- 조건부 클래스 조합(`clsx`) + Tailwind 클래스 충돌 정리(`twMerge`)

---

## 7. 다크모드 토글 버튼 만들기
`src/widgets/ThemeToggle.jsx`
```jsx
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldDark = stored ? stored === 'dark' : prefersDark

    document.documentElement.classList.toggle('dark', shouldDark)
    setIsDark(shouldDark)
    localStorage.setItem('theme', shouldDark ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    setIsDark(next)
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
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
```

---

## 11. StartBackground 기능 구현

📅 작성일: 2025-08-14

---

### 11.1 작업 목표
- StartBackground 기능 구현하기  
- `Component/ StartBackgound.jsx` 구현하기

---

### 11.2 필수 개념 (원문 유지, 형식만 정돈)
- **import, export 필수**  
- **export const 함수 이름 는 무조건 return**  
- `export const 내가지정한변수명(파일명과 동일하게 지음) = () => {}`  
  = 내가지정한변수명(파일명과 동일하게 지음)라는 이름의 React 함수형 컴포넌트를 만들고, 다른 파일에서도 쓸 수 있게 내보낸다"
- `const [저장 변수, 저장변수를 바꿈(set)] = useState()` **[배열을 반환한다]**

---

### 11.3 함수 선언과 별 개수 계산 (원문 유지)
**1. `const numberOfStars = () => { ... }`**  

이름이 numberOfStars인 함수를 선언  

호출할 때마다 안에 있는 로직을 실행  

화살표 함수 문법이라 () 뒤에 {} 안에 로직이 들어 있음

**2. `Math.floor((window.innerWidth * window.innerHeight) / 10000)`**

- `window.innerWidth` → 현재 브라우저 창의 가로 길이(px)  
- `window.innerHeight` → 현재 브라우저 창의 세로 길이(px)  
- 두 개를 곱하면 → 브라우저 창의 전체 픽셀 수  
- 그걸 `/ 10000` → 픽셀을 10,000으로 나눈 값 (즉, 화면 크기에 비례해서 별 개수 산출)  
- `Math.floor()` → 소수점 버림 (정수만 반환)

> 💡 예시:  
> 화면이 1920 × 1080 → 2,073,600 픽셀  
> 2,073,600 / 10000 = 207.36 → `Math.floor()` → **207개의 별**

---

### 11.4 별 데이터 생성 로직 (원문 코드 + 설명)
```js
const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000)
const newStars = []
for (let i = 0; i < numberOfStars; i++) {
  newStars.push({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    opacity: Math.random() * 0.5 + 0.5,
    animationDuration: Math.random() * 4 + 2,
  })
}
```

설명:

1. `for (let i = 0; i < numberOfStars; i++) { ... }`  
   - numberOfStars 횟수만큼 반복 (별 개수만큼)  
   - `i`는 별의 순번 (0부터 시작)  
   - 매 반복마다 `newStars` 배열에 **별의 속성 객체**를 추가

2. `newStars.push({ ... })`  
   - 배열에 새로운 별 객체를 추가  
   - `{}` 안에는 별 하나의 모든 정보(속성)가 들어감

3. **각 속성 설명 (원문 문장 유지)**  
   - `id: i` — 고유 식별자 (0, 1, 2...) : 각 별을 구분하기 위한 ID  
   - `size: Math.random() * 3 + 1` — 크기(px) (1 ~ 4) : 1~4px 범위의 랜덤 크기  
   - `x: Math.random() * 0.5 + 0.5` — 가로 위치(비율) (0.5 ~ 1.0) : 화면 가로 너비의 절반~전체 범위  
   - `y: Math.random() * 100` — 세로 위치(%) (0 ~ 100) : 화면 높이 비율  
   - `opacity: Math.random() * 0.5 + 0.5` — 투명도 (0.5 ~ 1.0) : 반투명~완전 불투명  
   - `aniationDuration: Math.random() * 4 + 2` — 애니메이션 지속시간(초) (2 ~ 6) : 반짝이는 속도 랜덤

> 💡 이렇게 만든 `newStars` 배열을 `useState`에 넣고, JSX에서 `.map()`으로 `<div>`나 `<span>`으로 렌더링하면 별이 반짝이는 배경을 만들 수 있어요.

---

### 11.5 상태 관리 및 마운트 타이밍 (원문 유지)
**1. `setStars(newStars);`**

목적: 방금 만든 `newStars` 배열을 `stars` 상태에 저장

여기서 `stars`와 `setStars`는 **React의 useState**로 만든 상태

```js
const [stars, setStars] = useState([]);
```

`setStars()`를 호출하면:

- `stars` 값이 `newStars`로 바뀜  
- React가 컴포넌트를 다시 렌더링  
- 렌더링 시 `stars.map(...)` 같은 부분이 최신 별 데이터를 사용

**2. `useEffect(() => { generateStars(); }, []);`**

목적: 컴포넌트가 처음 화면에 나타날 때(mount) 한 번만 `generateStars()` 실행

- `useEffect`는 React 훅으로, 특정 시점에 코드 실행을 가능하게 함  
- `[]` (의존성 배열)이 비어있으면:  
  - 처음 렌더링 직후 단 한 번만 실행  
  - 화면 크기 변경 시나 상태 변경 시 자동 실행 안 함

**실행 흐름**

- 컴포넌트가 처음 렌더링됨  
- `useEffect` 내부의 `generateStars()` 실행  
- `generateStars()` 안에서 `newStars` 생성 후 `setStars(newStars)` 호출  
- 상태가 바뀌어 컴포넌트 재렌더링 → 화면에 별이 보임

---

### 11.6 JSX와 map (원문 유지)
**1. JSX가 뭐냐?**

JSX = JavaScript XML  

JavaScript 안에서 HTML처럼 보이는 문법을 쓸 수 있게 만든 React의 문법 확장

하지만 브라우저가 직접 이해하는 건 아님 → React가 JSX를 JavaScript 코드로 변환해서 실행

예:
```jsx
const element = <h1>Hello</h1>;
```
이 코드는 실제로는
```js
const element = React.createElement('h1', null, 'Hello');
```
로 변환돼서 동작

즉, HTML처럼 보이지만, 사실은 JavaScript로 작성하는 UI 정의 문법이에요.

**2. "배열을 순회해서 별 하나당 JSX를 하나씩 생성"이란?**

우리가 가진 stars 배열은 이런 형태라고 가정할게요:
```js
[
  { id: 0, x: 10, y: 20, size: 3 },
  { id: 1, x: 50, y: 80, size: 2 },
  // ...
]
```
`map()`은 배열을 순회하면서 각 아이템을 변환하는 함수

여기서는 **별 객체 → 별 모양 JSX** 로 변환하는 역할

예:
```jsx
stars.map((star) => {
  return <div key={star.id} style={{ left: star.x, top: star.y }} />;
});
```
→ 각 `star` 객체가 화면에 그려질 `<div>` 하나로 변환됨

**3. 왜 이렇게 하냐?**

HTML에서는 `<div>`를 100개 쓰려면 100줄 써야 함

React에서는 데이터 배열(`stars`)만 있으면 `.map()`으로 반복해서 JSX를 생성 → 코드가 간결하고 동적 UI 가능

**💡 정리**  
- JSX = JavaScript 안에서 HTML처럼 UI 구조를 표현하는 문법  
- `stars.map(...)` → `stars` 배열의 각 항목을 JSX(별 모양)로 변환해서 화면에 출력

---

### 11.7 `.star` 클래스와 index.css (원문 유지)
`<div key={star.id} className="star"/> -> index.css`

**1. `<div key={star.id} className="star"/>`의 의미**

- `key={star.id}` → React가 리스트 요소를 구분하는 데 쓰는 고유 값 (성능 최적화, 렌더링 버그 방지)  
- `className="star"` → CSS에서 `.star` 라는 클래스 스타일 적용

즉, HTML에서는:
```html
<div class="star"></div>
```

**2. index.css의 역할**
```css
@utility star {
  @apply absolute rounded-full bg-white;
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.4);
}
```

- `@utility`와 `@apply` → Tailwind CSS 문법  
- `@apply absolute rounded-full bg-white;` → Tailwind 유틸리티 클래스(absolute, rounded-full, bg-white)를 CSS에서 묶어쓰기  
- `box-shadow: ...` → Tailwind에서 직접 제공 안 하는 커스텀 그림자 추가

이렇게 하면 `.star` 클래스 하나로 별 위치/모양/색이 통일됨

**3. "확인은 왜해?" → 스타일 일관성과 재사용성 때문**

- `className="star"`로 공통 스타일 적용 → 나머지 개별 속성(`width`, `height`, `left`, `top`, `opacity` 등)은 `style={}`로 각 별마다 다르게 적용

**이렇게 분리하면:**

- 스타일 재사용 → 별 100개 만들어도 CSS 하나만 수정  
- 코드 가독성 향상 → JSX 안에서 중복 스타일 제거  
- 유지보수 용이 → 별 모양 바꾸고 싶을 때 CSS만 수정하면 됨

---

### 11.8 최종 작성 예시 (원문 코드)
```jsx
<div
  key={star.id}
  className="star animate-pulse-subtle"
  style={{
    width: star.size + "px",
    height: star.size + "px",
    left: star.x + "px",
    top: star.y + "px",
    opacity: star.opacity,
    animationDuration: star.animationDuration + "s",
  }}
></div>
```

- `className`  
  - `star` → 공통 모양/색/그림자  
  - `animate-pulse-subtle` → Tailwind 애니메이션 클래스(별이 은은하게 깜빡임)

- `style`  
  - 각 별마다 다른 크기, 위치, 투명도, 깜빡이는 속도 적용

**📌 결론**  
- `index.css`에서 `.star` 정의 → 공통 스타일 적용  
- `style={...}`로 개별 속성만 JSX에서 덮어씀  
- 이 방식이 별 배경 같은 대량 요소를 다룰 때 가장 깔끔하고 효율적

---

### 11.9 활용 아이디어 (원문 유지, 항목만 구분)

**1) 화면·브랜딩**  
- 랜딩 히어로 배경: 첫 화면에 은은한 별 반짝임 → 고급스럽고 “살아있는” 느낌.  
- 404/오류 페이지: “우주에서 길을 잃었어요” 같은 컨셉으로 재미있게 처리.  
- 다크모드 전환 연출: 다크모드 켤 때 별이 천천히 나타남 → 전환이 부드러워짐.

**2) 인터랙션·집중 유도**  
- 버튼/CTA 주목도 올리기: 버튼 주변에 작은 별이 살짝 반짝 → 클릭 유도.  
- 마우스 패럴랙스: 커서를 움직이면 배경이 아주 살짝 따라옴 → “깊이감”.  
- 포커스 모드: 공부/글쓰기 모드에서 조용한 반짝임 → 산만함은 줄이고 분위기는 유지.

**3) 피드백·보상**  
- 성공/완료 이펙트: 폼 제출·결제 완료 시 잠깐 유성/폭죽 효과 → “와! 끝났다”.  
- 게이미피케이션: 레벨업/배지 획득 때 별이 모여들었다 흩어짐 → 보상감 강화.  
- 로딩 스피너 대체: 지루한 스피너 대신 별이 천천히 흐르도록 → 기다림 체감↓.

**4) 데이터·상태 표현**  
- 오디오 비주얼라이저: 음악 앱에서 박자에 맞춰 별 밝기/크기 변화.  
- 날씨 테마: 밤엔 별, 비 오면 빗방울 파티클, 눈 오면 스노우 → 같은 엔진 재사용.  
- 진행도 표시: TODO 달성률이 높을수록 별 밀도↑ 밝기↑ → 자연스러운 진행 시각화.

**5) 교육·연습 프로젝트로 쓰기**  
- 리액트 기초 강화: `useEffect`, 상태관리, 이벤트 정리(cleanup) 연습에 딱.  
- 성능 학습: DOM → Canvas → WebGL로 단계별 포팅하며 성능 비교.  
- 컴포넌트 설계: `density`, `speed`, `color`, `layers`를 props로 만들어 재사용성↑.

**6) 스토리·연출**  
- 온보딩 장면: 처음 2초 동안 별이 모여 로고가 나타남(모핑).  
- 이벤트 이스터에그: 특정 키 입력 시 유성우 쏟아짐 ✨  
- 섹션 전환: 스크롤할 때 레이어가 다른 속도로 움직여 장면 전환 느낌(패럴랙스).

**7) 앱·서비스 아이디어**  
- 명상/수면 앱: 호흡 리듬에 맞춰 별이 밝아졌다 어두워짐 → 심리적 안정감.  
- 공부 타이머: 집중 시간 동안 은은히 반짝, 휴식 때는 반짝임 강도↑로 모드 전환 표시.  
- 포트폴리오: 프로젝트 썸네일에 별/파티클을 가볍게 얹어 시선 끌기.

**한 줄 팁**  
- 같은 엔진, 다른 스킨: “별”을 원·선·아이콘(하트, 눈송이 등)으로만 바꾸면 크리스마스/밸런타인/브랜드 테마로 바로 재활용 가능.  
- 모션 과용 금지: `prefers-reduced-motion` 감지해서 모션 줄이기(접근성 배려).  
- 리소스 최적화: 요소 수가 많아지면 Canvas로 옮기기.


## 12. JSX와 map
- **JSX**: JavaScript 안에서 HTML처럼 UI 구조 표현  
- **map()**: 배열을 순회하며 JSX 요소 생성  

예시:
```jsx
stars.map((star) => (
  <div
    key={star.id}
    className="star animate-pulse-subtle"
    style={{
      width: `${star.size}px`,
      height: `${star.size}px`,
      left: `${star.x}px`,
      top: `${star.y}px`,
      opacity: star.opacity,
      animationDuration: `${star.animationDuration}s`,
    }}
  />
))
```

---

## 13. index.css (별 스타일)
```css
@utility star {
  @apply absolute rounded-full bg-white;
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.4);
}
```

---

## 14. 활용 아이디어
- **화면·브랜딩**: 랜딩 페이지, 다크모드 전환 효과  
- **인터랙션**: 버튼 주목도 강화, 마우스 패럴랙스  
- **피드백**: 완료 시 유성 효과, 게이미피케이션 보상  
- **데이터 표현**: 진행도 시각화, 날씨 테마  
- **학습용**: React Hooks, 성능 최적화 실습  
- **스토리 연출**: 온보딩 모션, 이벤트 이펙트  

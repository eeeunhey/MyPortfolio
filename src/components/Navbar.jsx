import { useEffect, useState } from "react";

// cn: Tailwind 클래스 합치기 유틸 함수
// - 여러 클래스를 한 줄로 합쳐줌
// - true/false 조건에 따라 클래스 넣거나 뺄 수 있음
// - 같은 속성이 중복되면 마지막 것만 적용됨
//   예: "p-2 p-4" → 실제로는 "p-4"만 적용됨
//   보통 clsx + tailwind-merge 조합으로 구현함
import { cn } from "@/lib/utils"; // cn 유틸 꼭 추가


// 내비게이션 메뉴 목록 정의
// name: 화면에 보이는 글자
// href: 클릭 시 이동할 페이지 내부 위치(id)
const navItems = [
  { name: "Home", href: "#hero" }, // 홈 섹션으로 이동
  { name: "About", href: "#about" }, // 소개에 관련한 페이지로 이동
  { name: "Skills", href: "#skills" }, // 스킬관련 페이지
  { name: "Projects", href: "#projects" }, // 프로젝트 섹션으로 이동
  { name: "Contact", href: "#contact" }, // 연락처 이동
];

export const Navbar = () => {
  // 스크롤 여부 상태 (스크롤했는지 아닌지 true/false)
  const [isScrolled, setIsScrolled] = useState(false);
  // 모바일 메뉴 열림/닫힘 상태
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    // 스크롤할 때 실행되는 함수
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // 화면이 조금이라도 내려가면(true), 맨 위면(false)
    };

    // 스크롤 이벤트 등록
    window.addEventListener("scroll", handleScroll);
     // 컴포넌트가 사라질 때 이벤트 제거
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // nav 태그: 상단 고정된 네비게이션 바
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300", // 기본 화면 클래스 (이벤트 없을 때 그냥 기본 값)
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" // 스크롤했을 때 스타일
          : "py-5"  // 기본 스타일
      )}
    >
        {/* nav 안의 컨테이너: 좌우 배치 */}
      <div className="container flex items-center justify-between">
        {/* 왼쪽 로고 (Home 섹션으로 이동) */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"    // 클릭 시 hero 섹션으로 스크롤 이동
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">EUNHEY</span>{" "}
            Portfolio
          </span>

        </a>

         {/* 데스크톱 화면에서 보이는 메뉴 */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key} href={item.href} // 각 버튼 클릭 시 해당 위치로 스크롤
              className="text-foreground/80 hover:text-primary transotion-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* 모바일 화면에서 보이는 메뉴 */}

      <div className = {cn(
        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
        "transition-all duration-300 md:hidden",  // 애니메이션, 데스크톱에서는 숨김
        isMenuOpen ? "opacity-100 pointer-events-auto" // 열려있으면 보이기
                    : "opacity-0 pointer-events-none"  // 닫혀있으면 안 보이기
      )}>

         {/* 메뉴 항목들을 세로로 나열 */}
        <div className="flex flex-col space-y-6 text-xl text-center"> 
          {navItems.map((item, key) => (
            <a
              key={key} href={item.href} 
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
        {/* mobile nav - 나중에 햄버거 메뉴 추가 */}
        <div className="md:hidden">
          {/* TODO: mobile menu */}
        </div>
      </div>
    </nav>
  );
};

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/#hero", anchor: true },
  { name: "About", href: "/#about", anchor: true },
  { name: "Skills", href: "/#skills", anchor: true },
  { name: "Projects", href: "/#projects", anchor: true },
  { name: "Contact", href: "/#contact", anchor: true },
  { name: "Resume", href: "/resume", anchor: false },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled
          ? "py-3 glass shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* 로고 */}
        <a
          className="text-xl font-bold text-primary flex items-center gap-1"
          href="/"
        >
          <span className="text-glow text-foreground tracking-tight">EUNHEY</span>
          <span className="font-light text-primary">Portfolio</span>
        </a>

        {/* 데스크톱 메뉴 */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, key) =>
            item.anchor ? (
              <a
                key={key}
                href={item.href}
                className="px-4 py-2 text-sm text-foreground/70 hover:text-primary
                           transition-colors duration-300 rounded-full
                           hover:bg-primary/5"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={key}
                to={item.href}
                className="px-4 py-2 text-sm text-foreground/70 hover:text-primary
                           transition-colors duration-300 rounded-full
                           hover:bg-primary/5"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* 모바일 전체화면 메뉴 */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40",
            "flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl text-center">
            {navItems.map((item, key) =>
              item.anchor ? (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={key}
                  to={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

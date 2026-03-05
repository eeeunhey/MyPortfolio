import { Github, Mail, FileText, ArrowRight, ArrowDown, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* ── 왼쪽: 텍스트 ── */}
          <div className="space-y-6">

            {/* 직함 뱃지 */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full
                             bg-primary/10 text-primary text-xs font-medium
                             border border-primary/20 tracking-wider uppercase
                             opacity-0 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Frontend Developer
            </span>

            {/* 이름 + 가치 문구 */}
            <div className="opacity-0 animate-fade-in-delay-1 space-y-1.5">
              {/* 이름 */}
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                김은혜
              </h1>
              {/* 가치 문구 — 이름 바로 아래, 짧고 강하게 */}
              <p className="text-base md:text-lg text-primary font-medium">
                아이디어를 코드로, 코드를 가치로
              </p>
            </div>

            {/* 구분선 + 소개 */}
            <div className="opacity-0 animate-fade-in-delay-2 space-y-3">
              <div className="w-8 h-0.5 bg-primary/60 rounded-full" />
              <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
                새로운 기술을 직접 경험하며 증명하고,
                사용자에게 가치 있는 결과를 만드는 개발자입니다.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-delay-3">
              <a href="#projects" className="cosmic-button">
                View My Work
                <ArrowRight size={13} />
              </a>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full
                           border border-primary/30 text-primary text-sm font-medium
                           hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FileText size={13} />
                이력서 보기
              </Link>
            </div>

            {/* 소셜 — 아이콘 버튼만 */}
            <div className="flex items-center gap-2 opacity-0 animate-fade-in-delay-4">
              <a
                href="https://github.com/eeeunhey"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full border border-border text-muted-foreground
                           hover:text-primary hover:border-primary/40
                           transition-all duration-300 hover:-translate-y-0.5"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/은혜-김-108265351"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full border border-border text-muted-foreground
                           hover:text-primary hover:border-primary/40
                           transition-all duration-300 hover:-translate-y-0.5"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:dmsgp2627@naver.com"
                aria-label="Email"
                className="p-2.5 rounded-full border border-border text-muted-foreground
                           hover:text-primary hover:border-primary/40
                           transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* ── 오른쪽: 세로형 인물 사진 (뱃지 없음) ── */}
          <div className="flex justify-center md:justify-end
                          opacity-0 animate-fade-in-delay-1">
            <div className="relative">
              {/* 배경 글로우 */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl -z-10"
                style={{ background: "hsl(var(--primary))" }}
              />
              <div
                className="w-56 md:w-64 aspect-[3/4] rounded-3xl overflow-hidden
                            ring-1 ring-primary/20 shadow-2xl"
              >
                <img
                  src="/images/eunhyeprofile.jpg"
                  alt="김은혜 프로필"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2
                      flex flex-col items-center animate-bounce">
        <span className="text-[10px] text-muted-foreground mb-1.5 tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown className="h-3.5 w-3.5 text-primary" />
      </div>
    </section>
  );
};

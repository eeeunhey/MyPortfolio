// React 아이콘 라이브러리(lucide-react)에서 필요한 아이콘 3개 가져오기
import { Briefcase, Code, Code2 } from "lucide-react";


// AboutSection 컴포넌트 정의 (이력서/포트폴리오 사이트의 "About Me" 섹션)
export const AboutSection = () => {
  return (
     // py-24 → 위아래 padding 6rem
    // px-4  → 좌우 padding 1rem
    // relative → 위치 기준(relative positioning) → 안쪽에 절대 위치 요소 배치 가능
    <section id="about" className="py-24 px-4 relative">
      {" "}
      {/* 
        container → 가운데 정렬 + max-width 기본값
        mx-auto → 좌우 margin 자동(가운데 정렬)
        max-w-5xl → 최대 너비 80rem (≈1280px)로 제한
      */}
      <div className="container mx-auto max-w-5xl">

        {/* 
          text-3xl → 글자 크기 (1.875rem)
          md:text-4xl → 화면이 md(768px↑) 이상이면 2.25rem
          font-bold → 굵은 글씨
          mb-12 → 아래쪽 margin 3rem
          text-center → 텍스트 가운데 정렬
        */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">ME</span>
           {/* text-primary → Tailwind 테마에서 지정한 대표 색상 */}
        </h2>

        
        {/* 
          grid grid-cols-1 → 1열 그리드
          md:grid-cols-2 → md 사이즈 이상이면 2열
          gap-12 → 열 사이 간격 3rem
          items-center → 세로 정렬 가운데
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
          {/* space-y-6 → 자식 요소들 사이에 1.5rem 간격 */}
            <h3 className="text-2xl font-semibold">
              passionate Web Developer & tech Creator
            </h3>
            <p className="text-muted-foreground">
              안녕하세요! 저는 코드를 통해 아이디어를 현실로 만드는 것을
              좋아하는 주니어 개발자입니다. 처음에는 단순한 호기심으로
              프로그래밍을 접했지만, 작은 결과물이 눈앞에 보일 때의 성취감이
              저를 계속 성장하게 만들었습니다.
            </p>

            <p className="text-muted-foreground">
              Java와 Spring Boot를 기반으로 한 백엔드 개발, React와
              TailwindCSS를 활용한 프론트엔드 개발을 배우며, 사용자 친화적인
              서비스를 만드는 데 관심을 두고 있습니다. 또한 데이터 분석과
              인공지능 분야에도 흥미를 가지고, 실제 문제 해결에 기술을 어떻게
              적용할 수 있을지 탐구하고 있습니다.
            </p>

            <p className="text-muted-foreground">
              제가 중요하게 생각하는 가치는{" "}
              <span className="font-semibold">꾸준함</span>과
              <span className="font-semibold">성장</span>입니다. 매일
              조금씩이라도 발전하는 개발자가 되기를 원하며, 새로운 기술을 배우는
              과정을 두려워하지 않습니다. 앞으로는 제가 가진 기술과 경험을
              바탕으로 팀과 함께 성장하며, 더 많은 사람들에게 도움이 되는
              서비스를 만들어가는 것이 목표입니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and webapplication with modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div></div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> UI / UX Design </h4>
                  <p className="text-muted-foreground">
                    Desgingin intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Project Management </h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile 
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// React 아이콘 라이브러리(lucide-react)에서 필요한 아이콘 3개 가져오기
import { Brain, Briefcase, Code, Code2, Shrub, Users } from "lucide-react";

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
          ABOUT <span className="text-primary">ME</span>
          {/* text-primary → Tailwind 테마에서 지정한 대표 색상 */}
        </h2>

        {/* 
          grid grid-cols-1 → 1열 그리드
          md:grid-cols-2 → md 사이즈 이상이면 2열
          gap-12 → 열 사이 간격 3rem
          items-center → 세로 정렬 가운데
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-28 items-center">
          <div className="space-y-10">
            {/* <h3 className="text-2xl font-semibold">
              꾸준히 배우며 성장하는 개발자
            </h3> */}
            <div className="flex justify-center my-6">
              <img
                src="/images/eunhyeprofile.jpg"
                alt="김은혜 프로필 사진"
                className="w-48 h-48 object-cover rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 "
              />
            </div>
            <p className="text-muted-foreground">
              안녕하세요. 새로운 기술을 탐구하고, 스스로 더 나은 결과를
              만들어가는 걸 좋아하는 <b>김은혜입니다.</b> 
              <br />
              코드를 통해 아이디어를 현실로 구현하며, 기술이 사람들에게 어떤
              가치를 줄 수 있을지 끊임없이 고민합니다.
            </p>
{/* 
            <p className="text-muted-foreground">
              단순히 주어진 기능을 만드는 데 그치지 않고, 배운 기술을 결합해
              나만의 방식으로 풀어내는 걸 즐깁니다.
              <br />
              그렇게 완성된 결과가 실제로 사람들에게 도움이 될 때 가장 큰 보람을
              느낍니다.
            </p> */}

            <p className="text-muted-foreground">
              앞으로도 꾸준히 배우고 성장하며, 새로운 가능성을 성과로 이어가는
              개발자로 나아가고 싶습니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                연락하기
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                이력서 다운로드
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 ">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> 아이디어 실현 </h4>
                  <p className="text-muted-foreground">
                    단순한 아이디어를 넘어, 실제 성과로 연결합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> 사용자 중심 </h4>
                  <p className="text-muted-foreground">
                    사용자의 입장에서 생각하며, 편리하고 가치 있는 경험을
                    설계하려 합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Shrub className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> 꾸준한 성장 </h4>
                  <p className="text-muted-foreground">
                    매일 조금씩 배우고 도전하며, 팀과 함께 발전하는 개발자가
                    되고 싶습니다.
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

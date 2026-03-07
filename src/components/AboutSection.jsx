import { Brain, Shrub, Users } from "lucide-react";

const strengths = [
  {
    icon: Brain,
    title: "아이디어 실현",
    desc: "단순한 아이디어를 넘어, 실제 성과로 연결합니다.",
  },
  {
    icon: Users,
    title: "사용자 중심",
    desc: "사용자의 입장에서 생각하며, 편리하고 가치 있는 경험을 설계합니다.",
  },
  {
    icon: Shrub,
    title: "꾸준한 성장",
    desc: "매일 조금씩 배우고 도전하며, 팀과 함께 발전하는 개발자를 지향합니다.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 소개 텍스트 */}
          <div className="space-y-5 text-center md:text-left">
            <h3 className="text-xl font-bold">
              안녕하세요, <span className="text-primary">김은혜</span>입니다.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              새로운 기술을 탐구하고, 스스로 더 나은 결과를 만들어가는 걸 좋아합니다.
              코드를 통해 아이디어를 현실로 구현하며, 기술이 사람들에게 어떤 가치를 줄 수 있을지
              끊임없이 고민합니다.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              앞으로도 꾸준히 배우고 성장하며, 새로운 가능성을 성과로 이어가는
              개발자로 나아가고 싶습니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
              <a href="#contact" className="cosmic-button">
                연락하기
              </a>
              <a
                href="/myinfo/이력서_포트폴리오.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                           border border-primary/40 text-primary text-sm font-semibold
                           hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                이력서 다운로드
              </a>
            </div>
          </div>

          {/* 오른쪽: 강점 카드 */}
          <div className="grid grid-cols-1 gap-4">
            {strengths.map((item, idx) => (
              <div key={idx} className="gradient-border p-5 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

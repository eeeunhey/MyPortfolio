// public/images 에 이미지 추가 후
// 프로젝트를 추가할 때 projects 배열에 객체를 추가하면 됩니다.

import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 7,
    title: "Daily Emotion Log — 감정 기록",
    period: "2025.12 (팀)",
    description:
      "하루 감정을 기록하고 시각화하는 감정 로그 서비스. 감정 패턴을 돌아보고 인사이트를 얻는 흐름 제공.",
    image: "/images/EmotionLog.png",
    tags: ["React", "TypeScript", "State", "Chart", "Team"],
    demoUrl: "#",
    githubUrl: "https://github.com/eeeunhey/daily-emotion-log",
  },

  {
    id: 6,
    title: "BalanceEat — AI 식단 관리",
    period: "2025.10–2025.11 (팀)",
    description:
      "사용자 데이터 기반 식단 추천/기록 관리. 섭취 정보 시각화 및 피드백 제공.",
    image: "/images/BalanceEat.png",
    tags: ["React", "TypeScript", "AI", "Visualization", "Team"],
    demoUrl: "#",
    githubUrl: "https://github.com/eeeunhey/balanceeat",
  },

{
  id: 2,
  title: "ResumeBuilder — 이력서 작성 지원 웹",
  period: "2025.10–2025.11 (개인)",
  description:
    "사용자 입력 기반 이력서 작성 및 항목 구조화 지원. 섹션별 입력 가이드와 실시간 미리보기로 작성 효율을 개선.",
  image: "/images/resumeBuild.png",
  tags: [
    "TypeScript",
    "React",
    "State Management",
    "Form Handling",
    "UX",
  ],
  demoUrl: "#",
  githubUrl: "https://github.com/eeeunhey/ResumeBuilder",
},

  {
    id: 1,
    title: "Ascend — 이력서 코칭 웹",
    period: "2025.10–2025.12 (개인)",
    description:
      "이력서 업로드 → 항목별 피드백/점수/문구 개선 제안. ATS 관점의 키워드 맵과 수정 가이드 제공.",
    image: "/images/ascend.png",
    tags: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind",
      "Puter.js",
      "Zustand",
      "React Query",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/eeeunhey/Ascend",
  },

  {
    id: 3,
    title: "Interview Simulator — 팀 프로젝트",
    period: "2025.09 – 2025.11 (팀)",
    description:
      "질문 생성·STT·감정/집중도 시각화·세션 리포트. Recharts/동기화 타임라인·WebRTC·백그라운드 업로드.",
    image: "/images/Mockinterview.png",
    tags: [
      "React",
      "TypeScript",
      "Recharts",
      "WebRTC",
      "Node/Express",
      "MongoDB",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/eeeunhey/MockInterview",
  },

  {
    id: 4,
    title: "Velin — AI Interview Prep",
    period: "2025.08–2025.09 (개인)",
    description:
      "면접 질문·근거·체크리스트 자동 생성, 세션별 분석을 제공하는 웹 서비스.",
    image: "/images/velin-mainpage.png",
    tags: ["Frontend", "Backend", "TypeScript", "React"],
    demoUrl:
      "https://ai-interview-prep-3rshahg4n-eunhyes-projects-b3620ae0.vercel.app/",
    githubUrl: "https://github.com/eeeunhey/AI_InterviewPrep",
  },

  {
    id: 5,
    title: "ALBAIT — 콘솔 구인·구직 실습",
    period: "2025.04–2025.05 (개인)",
    description:
      "콘솔에서 회원/공고/지원 CRUD와 관리자 통계를 구현한 Java·Oracle 실습.",
    image: "/images/ALBA-mainpage.png",
    tags: ["Backend", "Database", "Java", "Oracle"],
    demoUrl: "https://github.com/eeeunhey/ALBAIT",
    githubUrl: "https://github.com/eeeunhey/ALBAIT",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured
          <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          지금까지 완성한 프로젝트들을 모았습니다. 각 프로젝트는 새로운 도전을
          통해 얻은 결과물입니다. 과정을 통해 배운 것들이 저를 조금씩
          성장시켰습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm card-hover"
            >
              {/* 썸네일 */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* 본문 */}
              <div className="p-6">
                {/* 태그 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 제목 / 기간 / 설명 */}
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {project.period}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* 링크 아이콘 */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Demo 보기"
                    className="hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub 보기"
                    className="hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/eeeunhey"
          >
            <Github /> Github에서 보기 <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

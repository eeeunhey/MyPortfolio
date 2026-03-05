import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export const projects = [
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
    overview:
      "하루를 마무리하며 감정을 기록하고, AI 기반 피드백과 패턴 시각화로 자기 이해를 돕는 웹 서비스입니다.",
    features: [
      "감정 선택 + 자유 메모 입력 UI",
      "AI(Gemini API)를 통한 감정 분석 및 피드백",
      "날짜별 감정 시각화 (차트 & 타임라인)",
      "세션 리포트 및 감정 트렌드 확인",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Flask (Python)", "MariaDB", "Google Gemini API", "Cloudtype"],
    role: "PM / Full-stack",
    team: "5인 팀 프로젝트",
    stackCategories: ["JavaScript", "Python", "AI"],
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
    overview:
      "음식 섭취 기록과 AI 식단 분석을 통해 균형잡힌 식단 관리를 도와주는 웹 서비스입니다.",
    features: [
      "Nutrition API 기반 음식 영양 정보 검색",
      "Gemini AI를 활용한 맞춤 식단 추천",
      "섭취량 시각화 (칼로리/영양소 차트)",
      "식단 기록 & 날짜별 히스토리",
      "Local Storage 기반 데이터 영속화",
    ],
    tech: ["React", "TypeScript", "Gemini AI API", "Nutrition API", "Local Storage", "Figma"],
    role: "PO / Frontend",
    team: "4인 팀 프로젝트",
    stackCategories: ["React", "TypeScript", "AI"],
  },
  {
    id: 2,
    title: "ResumeBuilder — 이력서 작성 지원 웹",
    period: "2025.10–2025.11 (개인)",
    description:
      "사용자 입력 기반 이력서 작성 및 항목 구조화 지원. 섹션별 입력 가이드와 실시간 미리보기로 작성 효율을 개선.",
    image: "/images/resumeBuild.png",
    tags: ["TypeScript", "React", "State Management", "Form Handling", "UX"],
    demoUrl: "#",
    githubUrl: "https://github.com/eeeunhey/ResumeBuilder",
    overview:
      "구직자가 항목별 가이드에 따라 이력서를 작성하고, 실시간으로 미리볼 수 있는 이력서 빌더 웹앱입니다.",
    features: [
      "섹션별(경력/학력/스킬/프로젝트) 구조화된 입력 폼",
      "실시간 이력서 미리보기 패널",
      "상태 관리 기반 입력 데이터 유지",
      "UX 중심의 입력 가이드 메시지",
    ],
    tech: ["TypeScript", "React", "Vite", "State Management"],
    role: "개인 프로젝트",
    team: null,
    stackCategories: ["React", "TypeScript"],
  },
  {
    id: 1,
    title: "Ascend — 이력서 코칭 웹",
    period: "2025.10–2025.12 (개인)",
    description:
      "이력서 업로드 → 항목별 피드백/점수/문구 개선 제안. ATS 관점의 키워드 맵과 수정 가이드 제공.",
    image: "/images/ascend.png",
    tags: ["TypeScript", "React", "Vite", "Tailwind", "Puter.js", "Zustand", "React Query"],
    demoUrl: "#",
    githubUrl: "https://github.com/eeeunhey/Ascend",
    overview:
      "이력서 PDF를 업로드하면 AI가 섹션별 점수·피드백·키워드 개선안을 제시하는 이력서 코칭 웹 서비스입니다.",
    features: [
      "이력서 PDF 업로드 및 텍스트 추출",
      "AI 기반 항목별 점수 및 피드백",
      "ATS 키워드 맵 시각화",
      "섹션별 문구 개선 제안",
      "Zustand 전역 상태 관리",
      "React Query 비동기 처리",
    ],
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS", "Puter.js", "Zustand", "React Query"],
    role: "개인 프로젝트",
    team: null,
    stackCategories: ["React", "TypeScript", "AI"],
  },
  {
    id: 3,
    title: "Interview Simulator — 팀 프로젝트",
    period: "2025.09 – 2025.11 (팀)",
    description:
      "질문 생성·STT·감정/집중도 시각화·세션 리포트. Recharts/동기화 타임라인·WebRTC·백그라운드 업로드.",
    image: "/images/Mockinterview.png",
    tags: ["React", "TypeScript", "Recharts", "WebRTC", "Node/Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/eeeunhey/MockInterview",
    overview:
      "AI 면접 질문 생성부터 STT 기반 답변 분석, 감정·집중도 시각화, 세션 리포트까지 제공하는 모의 면접 웹 서비스입니다.",
    features: [
      "AI 기반 면접 질문 자동 생성",
      "STT(Speech-to-Text) 실시간 답변 인식",
      "감정/집중도 분석 시각화 (Recharts)",
      "WebRTC 기반 화상 인터뷰 지원",
      "백그라운드 업로드 및 세션 리포트",
    ],
    tech: ["React", "TypeScript", "Recharts", "WebRTC", "Node.js", "Express", "MongoDB"],
    role: "Frontend",
    team: "팀 프로젝트",
    stackCategories: ["React", "TypeScript", "Node.js"],
  },
  {
    id: 4,
    title: "Velin — AI Interview Prep",
    period: "2025.08–2025.09 (개인)",
    description:
      "면접 질문·근거·체크리스트 자동 생성, 세션별 분석을 제공하는 웹 서비스.",
    image: "/images/velin-mainpage.png",
    tags: ["Frontend", "Backend", "TypeScript", "React"],
    demoUrl: "https://ai-interview-prep-3rshahg4n-eunhyes-projects-b3620ae0.vercel.app/",
    githubUrl: "https://github.com/eeeunhey/AI_InterviewPrep",
    overview:
      "현업 관점의 면접 질문과 근거, 체크리스트를 자동 생성하고 세션별 분석을 제공하는 인터뷰 준비 웹 서비스입니다.",
    features: [
      "직무/포지션 기반 AI 면접 질문 생성",
      "질문별 기대 답변 및 근거 제공",
      "자기 점검용 체크리스트 자동 생성",
      "세션별 면접 기록 분석",
    ],
    tech: ["TypeScript", "React", "Node.js", "Vercel"],
    role: "개인 프로젝트 (Full-stack)",
    team: null,
    stackCategories: ["React", "TypeScript", "Node.js", "AI"],
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
    overview:
      "Java와 Oracle DB를 활용해 구인·구직 플랫폼의 핵심 기능(회원/공고/지원 CRUD 및 관리자 통계)을 콘솔로 구현한 학습 프로젝트입니다.",
    features: [
      "회원 가입/로그인/탈퇴 CRUD",
      "구인 공고 등록·수정·삭제·조회",
      "지원서 작성 및 상태 관리",
      "관리자 통계 대시보드 (지원 현황/인기 공고)",
    ],
    tech: ["Java", "Oracle DB", "JDBC", "SQL"],
    role: "개인 프로젝트",
    team: null,
    stackCategories: ["Java"],
  },
];

// 탭 목록: 모든 stackCategories에서 유니크하게 추출
const ALL_TABS = ["All", "AI", "Python", "React", "TypeScript", "JavaScript", "Node.js", "Java"];

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? projects
    : projects.filter((p) => p.stackCategories?.includes(activeTab));

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
          기술스택별로 프로젝트를 탐색해보세요.
        </p>

        {/* ── 탭 필터 ── */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {ALL_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
                activeTab === tab
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground/60 border-border hover:border-primary/40 hover:text-primary"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── 프로젝트 카드 그리드 ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border
                         transition-all duration-300
                         hover:border-primary/30 hover:-translate-y-1.5 hover:shadow-xl
                         flex flex-col"
            >
              {/* 썸네일 */}
              <Link to={`/projects/${project.id}`} className="block h-44 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700
                             group-hover:scale-105"
                />
              </Link>

              {/* 본문 */}
              <div className="p-5 flex flex-col flex-1">
                {/* 기술 태그 */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-full
                                 bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2.5 py-0.5 text-[11px] font-medium rounded-full
                                     bg-muted text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <Link to={`/projects/${project.id}`} className="block flex-1">
                  <h3 className="text-base font-semibold mb-1
                                 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-xs text-muted-foreground mb-2">{project.period}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* 링크 */}
                <div className="flex items-center gap-3 mt-auto">
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-xs text-primary font-medium hover:underline flex items-center gap-1"
                  >
                    자세히 보기 →
                  </Link>
                  <div className="ml-auto flex gap-2">
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Demo 보기"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub 보기"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 빈 결과 */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground text-sm">
            해당 기술스택으로 진행한 프로젝트가 없습니다.
          </div>
        )}

        <div className="text-center mt-14">
          <a
            className="cosmic-button"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/eeeunhey"
          >
            <Github size={18} />
            Github에서 보기
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

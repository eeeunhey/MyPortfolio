import { ArrowLeft, ExternalLink, Github, Users, Code2, Layers } from "lucide-react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../components/ProjectsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";

export const ProjectDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => String(p.id) === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <p className="text-muted-foreground text-lg">프로젝트를 찾을 수 없습니다.</p>
                <Link to="/" className="cosmic-button text-sm">
                    홈으로 돌아가기
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <StarBackground />
            <Navbar />

            <main className="pt-24 pb-20 px-4">
                <div className="container mx-auto max-w-4xl">

                    {/* ── 뒤로가기 ── */}
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-sm text-muted-foreground
                       hover:text-primary transition-colors duration-300 mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
                        돌아가기
                    </button>

                    {/* ── 헤더 ── */}
                    <div className="mb-8">
                        {/* 태그 */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h1>
                        <p className="text-sm text-muted-foreground">{project.period}</p>
                    </div>

                    {/* ── 썸네일 ── */}
                    <div className="rounded-2xl overflow-hidden border border-border mb-10 shadow-lg">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 md:h-80 object-cover"
                        />
                    </div>

                    {/* ── 본문 그리드 ── */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* 왼쪽: 주요 내용 (2/3) */}
                        <div className="md:col-span-2 space-y-8">
                            {/* 개요 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                                    <Layers className="w-5 h-5 text-primary" />
                                    프로젝트 개요
                                </h2>
                                <div className="gradient-border rounded-xl p-5">
                                    <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
                                </div>
                            </section>

                            {/* 주요 기능 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                                    <Code2 className="w-5 h-5 text-primary" />
                                    주요 기능
                                </h2>
                                <div className="gradient-border rounded-xl p-5">
                                    <ul className="space-y-2.5">
                                        {project.features.map((feat, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 text-primary
                                         flex items-center justify-center text-[10px] font-bold shrink-0">
                                                    {i + 1}
                                                </span>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* 기술 스택 */}
                            <section>
                                <h2 className="text-lg font-bold mb-3">기술 스택</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1.5 text-xs font-medium rounded-lg
                                 bg-secondary text-foreground border border-border"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* 오른쪽: 사이드 정보 (1/3) */}
                        <div className="space-y-5">
                            {/* 역할/팀 */}
                            <div className="gradient-border rounded-xl p-5 space-y-4">
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">역할</p>
                                    <p className="text-sm font-semibold">{project.role}</p>
                                </div>
                                {project.team && (
                                    <div>
                                        <p className="text-xs text-muted-foreground mb-1">팀 규모</p>
                                        <p className="text-sm font-semibold flex items-center gap-1.5">
                                            <Users className="w-4 h-4 text-primary" />
                                            {project.team}
                                        </p>
                                    </div>
                                )}
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">기간</p>
                                    <p className="text-sm font-semibold">{project.period}</p>
                                </div>
                            </div>

                            {/* 링크 */}
                            <div className="space-y-3">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl
                             bg-card border border-border text-sm font-medium
                             hover:border-primary/40 hover:text-primary
                             transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Github className="w-4 h-4" />
                                    GitHub 보기
                                </a>
                                {project.demoUrl !== "#" && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-3 w-full px-4 py-3 rounded-xl
                               cosmic-button justify-center text-sm"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                )}
                            </div>

                            {/* 다른 프로젝트 */}
                            <div>
                                <p className="text-xs text-muted-foreground mb-3">다른 프로젝트</p>
                                <div className="space-y-2">
                                    {projects
                                        .filter((p) => p.id !== project.id)
                                        .slice(0, 3)
                                        .map((p) => (
                                            <Link
                                                key={p.id}
                                                to={`/projects/${p.id}`}
                                                className="block p-3 rounded-xl bg-card border border-border text-xs
                                   font-medium hover:border-primary/30 hover:text-primary
                                   transition-all duration-300 truncate"
                                            >
                                                {p.title}
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── 하단 CTA ── */}
                    <div className="mt-12 text-center">
                        <Link to="/#projects" className="cosmic-button">
                            ← 모든 프로젝트 보기
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

import { Download, Maximize2, FileText, ChevronDown } from "lucide-react";
import { useState } from "react";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";

const resumes = [
    {
        label: "포트폴리오",
        file: "/myinfo/김은혜 포트폴리오.pdf",
        download: "김은혜 포트폴리오.pdf",
    },
    {
        label: "이력서",
        file: "/myinfo/김은혜_이력서.pdf",
        download: "김은혜_이력서.pdf",
    },
];

export const ResumePage = () => {
    const [active, setActive] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <StarBackground />
            <Navbar />

            <main className="pt-24 pb-16 px-4">
                <div className="container mx-auto max-w-5xl">
                    {/* ── 헤더 ── */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                            bg-primary/10 text-primary text-sm font-medium
                            border border-primary/20 mb-4">
                            <FileText className="w-4 h-4" />
                            Resume
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">
                            이력서<span className="text-primary"> 보기 / 다운로드</span>
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            포트폴리오 또는 이력서를 바로 열람하거나 다운로드할 수 있습니다.
                        </p>
                    </div>

                    {/* ── 탭 + 다운로드 버튼 ── */}
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                        {/* 탭 */}
                        <div className="flex gap-2">
                            {resumes.map((r, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === i
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "bg-card text-foreground/60 border border-border hover:text-foreground hover:border-primary/30"
                                        }`}
                                >
                                    {r.label}
                                </button>
                            ))}
                        </div>

                        {/* 액션 버튼 */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setFullscreen((v) => !v)}
                                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                           bg-card border border-border text-foreground/70
                           hover:border-primary/40 hover:text-primary transition-all duration-300"
                            >
                                <Maximize2 className="w-4 h-4" />
                                {fullscreen ? "축소" : "전체화면"}
                            </button>
                            <a
                                href={resumes[active].file}
                                download={resumes[active].download}
                                className="cosmic-button flex items-center gap-2 text-sm px-5 py-2"
                            >
                                <Download className="w-4 h-4" />
                                다운로드
                            </a>
                        </div>
                    </div>

                    {/* ── PDF 뷰어 ── */}
                    <div
                        className={`gradient-border rounded-2xl overflow-hidden transition-all duration-500 ${fullscreen ? "fixed inset-4 z-50 rounded-2xl" : "relative"
                            }`}
                    >
                        {fullscreen && (
                            <button
                                onClick={() => setFullscreen(false)}
                                className="absolute top-3 right-3 z-10 p-2 rounded-xl
                           bg-card/80 backdrop-blur border border-border
                           hover:text-primary transition-colors duration-300"
                            >
                                <ChevronDown className="w-5 h-5" />
                            </button>
                        )}

                        <iframe
                            src={resumes[active].file}
                            title={resumes[active].label}
                            className="w-full border-0"
                            style={{ height: fullscreen ? "100%" : "80vh", minHeight: 600 }}
                        />
                    </div>

                    {/* ── 모바일 대비 메시지 ── */}
                    <p className="text-center text-xs text-muted-foreground mt-4">
                        PDF가 보이지 않으면{" "}
                        <a
                            href={resumes[active].file}
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary hover:underline"
                        >
                            새 탭에서 열기
                        </a>
                        {" "}또는 다운로드 버튼을 이용해 주세요.
                    </p>
                </div>
            </main>
        </div>
    );
};

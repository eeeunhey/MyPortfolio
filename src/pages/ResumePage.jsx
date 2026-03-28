import { Download, Maximize2, FileText, ChevronDown, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { ContactSection } from "../components/ContactSection"; // ⬅️ 새로 임포트

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
    const [isVerified, setIsVerified] = useState(false); // ⬅️ 검증 상태

    useEffect(() => {
        // 이미 연락을 남긴 기록이 있다면 바로 보여줌
        if (localStorage.getItem("hasContacted") === "true") {
            setIsVerified(true);
        }
    }, []);

    // 아직 연락하지 않은 경우 보여줄 가림막 화면
    if (!isVerified) {
        return (
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                <ThemeToggle />
                <StarBackground />
                <Navbar />

                <main className="pt-32 pb-16 px-4">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                                bg-primary/10 text-primary text-sm font-medium
                                border border-primary/20 mb-4">
                                <Mail className="w-4 h-4" />
                                이력서 열람 안내
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                먼저 연락을 남겨주시면, <br className="md:hidden"/> <span className="text-primary">상세 이력서를 보여드릴게요!</span>
                            </h1>
                            <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
                                개인정보가 포함되어 있어 부득이하게 전체 공개를 가려두었습니다.<br />
                                아래 폼으로 짧은 인사와 이메일을 남겨주시면 즉시 전체 문서를 확인하실 수 있습니다. 😊
                            </p>
                        </div>

                        {/* 이력서 페이지 안에 들어가는 미니 Contact 폼 */}
                        <div className="pb-16 max-w-5xl mx-auto">
                            <ContactSection 
                                onSuccess={() => setIsVerified(true)} 
                                hideTitle={true} 
                            />
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    // 연락을 마친 경우 정상적으로 이력서 뷰어 렌더링
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
                            성공적으로 인증되었습니다. 문서를 바로 열람하거나 다운로드할 수 있습니다.
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

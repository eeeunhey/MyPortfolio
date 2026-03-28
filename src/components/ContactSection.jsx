import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Send, Loader2, CheckCircle2 } from "lucide-react";

// 소셜 링크 정보
const socialLinks = [
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/eeeunhey",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/은혜-김-108265351",
    },
];

export const ContactSection = ({ onSuccess, hideTitle = false }) => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg('');

        // EmailJS 환경변수를 통해 안전하게 불러옴 (.env.local 파일)
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, 
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
                form.current, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    setIsSuccess(true);
                    setIsSubmitting(false);
                    form.current.reset(); // 전송 후 입력칸 초기화
                    localStorage.setItem("hasContacted", "true"); // ⬅️ 방문자 연락 기록 저장
                    if (onSuccess) onSuccess(); // ⬅️ 성공 시 ResumePage 화면을 열어주기 위한 콜백
                    setTimeout(() => setIsSuccess(false), 5000); // 5초 뒤 성공 메시지 원복
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setErrorMsg("메일 전송에 실패했습니다. 나중에 다시 시도해주세요.");
                    setIsSubmitting(false);
                },
            );
    };

    return (
        <section id="contact" className={`px-4 relative ${hideTitle ? "py-8" : "py-24"}`}>
            <div className="container mx-auto max-w-5xl">
                {!hideTitle && (
                    <>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                            Get In <span className="text-primary">Touch</span>
                        </h2>

                        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
                            제 이메일 주소 노출 없이, 우측의 폼을 통해 안전하게 메시지를 남겨주세요.<br /> 
                            입력하신 내용은 제 개인 이메일로 즉시 발송됩니다.
                        </p>
                    </>
                )}

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-card rounded-2xl border border-border p-6 md:p-10 shadow-lg">
                    {/* 좌측: 안내 및 링크 */}
                    <div className="md:col-span-2 flex flex-col justify-center space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                프로젝트 협업이나 채용 관련 문의 등 언제든 환영합니다.
                                우측 폼을 작성해주시면 확인 후 입력해주신 이메일로 답변 드리도록 하겠습니다.
                            </p>
                        </div>
                        
                        <div className="flex gap-4">
                            {socialLinks.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center justify-center p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <item.icon className="h-6 w-6 text-primary" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 우측: 이메일 전송 폼 */}
                    <div className="md:col-span-3">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium">성함 (Name)</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        required
                                        placeholder="홍길동"
                                        className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium">답변 받으실 이메일 (Email)</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        required
                                        placeholder="your@email.com"
                                        className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium">문의 내용 (Message)</label>
                                <textarea 
                                    name="message" 
                                    required
                                    rows={5}
                                    placeholder="어떤 일로 연락주셨나요?"
                                    className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none placeholder:text-muted-foreground/50"
                                />
                            </div>
                            
                            {errorMsg && (
                                <p className="text-red-500 text-sm font-medium">{errorMsg}</p>
                            )}

                            <button 
                                type="submit" 
                                disabled={isSubmitting || isSuccess}
                                className={`w-full font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 mt-2
                                    ${isSuccess 
                                        ? "bg-green-500/10 text-green-500 border border-green-500/30" 
                                        : "bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
                                    }
                                `}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" /> 전송 중...
                                    </>
                                ) : isSuccess ? (
                                    <>
                                        <CheckCircle2 className="w-5 h-5" /> 메일이 폼에서 내 이메일로 전송되었습니다!
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" /> 메일 보내기
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
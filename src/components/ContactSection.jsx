import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
    {
        icon: Mail,
        label: "Email",
        value: "dmsgp2627@naver.com",
        href: "mailto:dmsgp2627@naver.com",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "github.com/eeeunhey",
        href: "https://github.com/eeeunhey",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "linkedin.com/in/은혜-김",
        href: "https://www.linkedin.com/in/은혜-김-108265351",
    },
];

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
                    프로젝트 협업이나 채용 관련 문의는 언제든 환영합니다.
                    <br />
                    아래 채널로 편하게 연락해 주세요.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center max-w-2xl mx-auto">
                    {contactLinks.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                            className="group bg-card rounded-xl border border-border p-6
                         flex flex-col items-center gap-3 text-center
                         transition-all duration-300
                         hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-sm">{item.label}</h3>
                            <p className="text-muted-foreground text-xs flex items-center gap-1">
                                {item.value}
                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
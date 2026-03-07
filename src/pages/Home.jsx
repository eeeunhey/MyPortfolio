import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <StarBackground />
            <Navbar />

            <main>
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-border">
                <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © 2025 <span className="text-foreground font-medium">EUNHEY</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/eeeunhey"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/은혜-김-108265351"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:dmsgp2627@naver.com"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';


export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const next = !isDarkMode;
        if (next) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", next ? "dark" : "light");
        setIsDarkMode(next);
    };


    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed top-5 right-5 z-50 p-2.5 rounded-full",
                "glass transition-all duration-300",
                "hover:scale-110 active:scale-95",
                "focus:outline-hidden"
            )}
            aria-label={isDarkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-amber-400" />
            ) : (
                <Moon className="h-5 w-5 text-slate-700" />
            )}
        </button>
    );
};
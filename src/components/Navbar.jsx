import { useState } from "react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll",handleScroll)

    }, [])

    return <nav className={cn("fixed w-full z-40 transition-all duration-300", 
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>

        <div className="container flex items-center justity-between">
            <a 
                className="text-xl font-bold text-primary flex items-center"
                href="#hero"
            >
                <span className="realtive z-10">
                    <span className="text-glow text-foreground"> EUNHEY </span>{" "} 
                    Portfolio
                </span>
            </a>

            {/* desktop nav */}
            <div>
                {navItems.map((item, key) => {


                })}
            </div>

            {/* mobile nav */}

        </div>


    </nav>; 

};
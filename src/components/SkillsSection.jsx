import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", icon: "🌐", category: "frontend" },
  { name: "JavaScript", icon: "⚡", category: "frontend" },
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "TypeScript", icon: "📘", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
  { name: "Next.js", icon: "⬛", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "🟩", category: "backend" },
  { name: "Express", icon: "🚂", category: "backend" },
  { name: "MongoDB", icon: "🍃", category: "backend" },
  { name: "PostgreSQL", icon: "🐘", category: "backend" },
  { name: "GraphQL", icon: "🔺", category: "backend" },

  // Tools
  { name: "Git/Github", icon: "🐙", category: "tools" },
  { name: "Notion", icon: "🗒️", category: "tools" },
  { name: "Docker", icon: "🐳", category: "tools" },
  { name: "Figma", icon: "🎨", category: "tools" },
  { name: "VS Code", icon: "💻", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const categoryLabels = {
  all: "All",
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground/60 hover:bg-secondary hover:text-foreground"
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* 스킬 그리드 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-3 sm:p-5 rounded-xl border border-border
                         flex items-center gap-2 sm:gap-4
                         transition-all duration-300
                         hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-lg sm:text-2xl">{skill.icon}</span>
              <h3 className="font-semibold text-xs sm:text-sm">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

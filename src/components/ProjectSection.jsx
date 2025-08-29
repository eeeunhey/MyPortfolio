// 프로젝트를 추가할 때
// public/projects/porject01(이미지를 추가)

const projects = [{

    id: 1,
    title: "아직 미정",
    description: "곧 추가할 예정임",
    image: "/",    //이미지 경로임
    tags: ["", "", ""],   // 사용한 기술 적으세요
    demoUrl: "#",
    githubUrl: "#",
},
];


export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured 
                <span className="text-primary"> Projects </span></h2>

            <p className="text-center text-muted-foreground mb-12 max-x-2xl mx-auto">
                지금까지 완성한 프로젝트들을 모았습니다.  
                각 프로젝트는 새로운 도전을 통해 얻은 결과물입니다.  
                과정을 통해 배운 것들이 저를 조금씩 성장시켰습니다. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-gidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
};
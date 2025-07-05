import { Code, Server, Database, Settings, Wrench, FolderKanban } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Skills() {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6 text-secondary" />,
      color: "secondary",
      skills: [
        { name: "React.js", level: 90 },
        { name: "React Native", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "HTML/CSS", level: 92 }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-accent" />,
      color: "accent",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Firebase", level: 88 },
        { name: "REST API", level: 85 }
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-green-500" />,
      color: "green-500",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 }
      ]
    },
    {
      title: "State Management",
      icon: <Settings className="w-6 h-6 text-purple-500" />,
      color: "purple-500",
      skills: [
        { name: "Redux", level: 85 },
        { name: "Redux Thunk", level: 80 },
        { name: "Redux Saga", level: 75 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench className="w-6 h-6 text-orange-500" />,
      color: "orange-500",
      skills: [
        { name: "Jenkins", level: 80 },
        { name: "Fastlane", level: 75 },
        { name: "Git/GitHub", level: 90 }
      ]
    },
    {
      title: "Project Management",
      icon: <FolderKanban className="w-6 h-6 text-pink-500" />,
      color: "pink-500",
      skills: [
        { name: "JIRA", level: 85 },
        { name: "Agile (Scrum)", level: 80 },
        { name: "Kanban", level: 80 }
      ]
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "secondary": return "bg-secondary";
      case "accent": return "bg-accent";
      case "green-500": return "bg-green-500";
      case "purple-500": return "bg-purple-500";
      case "orange-500": return "bg-orange-500";
      case "pink-500": return "bg-pink-500";
      default: return "bg-secondary";
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 fade-in ${titleVisible ? 'animate' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Expertise in modern web and mobile technologies for building scalable applications
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover-lift scale-in stagger-delay-${index + 1} ${cardsVisible ? 'animate' : ''}`}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-primary ml-3">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-600">{skill.name}</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${getColorClass(category.color)} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

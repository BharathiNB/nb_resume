import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Crypto Escrow App",
      description: "Secure cryptocurrency escrow platform built with React Native, Web3 integration, and MetaMask support.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Web3", "MetaMask"],
      techColors: ["bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800", "bg-orange-100 text-orange-800"]
    },
    {
      title: "Athlete Tracker App",
      description: "Comprehensive athlete management platform with live video streaming via Agora SDK and performance analytics.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Agora SDK", "Firebase"],
      techColors: ["bg-green-100 text-green-800", "bg-red-100 text-red-800", "bg-yellow-100 text-yellow-800"]
    },
    {
      title: "Foodhub Internal Tool",
      description: "No-code platform for rapid client onboarding with automated app creation and configuration workflows.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "Node.js", "Automation"],
      techColors: ["bg-indigo-100 text-indigo-800", "bg-green-100 text-green-800", "bg-blue-100 text-blue-800"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcase of innovative solutions across mobile and web platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img 
                src={project.image}
                alt={`${project.title} interface`}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      className={`${project.techColors[techIndex]} text-xs`}
                      variant="secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <Button 
                    variant="ghost" 
                    className="text-secondary hover:text-blue-600 font-medium p-0"
                  >
                    View Details
                  </Button>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-secondary p-2">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-secondary p-2">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

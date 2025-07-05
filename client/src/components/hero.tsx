import { ChevronDown, Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const target = document.querySelector(`#${sectionId}`);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg">
      <div className="absolute inset-0 bg-black/20 floating-particles"></div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Professional headshot */}
          <div className={`mb-8 scale-in ${isVisible ? 'animate' : ''}`}>
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-secondary to-accent p-1">
              <img 
                src={"https://media.licdn.com/dms/image/v2/C5603AQFXETBk5H0rgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1625539206148?e=1756944000&v=beta&t=XvgMrFPuhuoU6pyFztSD7mInNHiVhxq-GyUZpJWpnoU"}
                alt="NB - Software Engineer"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 fade-in stagger-delay-1 ${isVisible ? 'animate' : ''}`}>
            Hi, I'm <span className="text-accent">Bharathi N</span>
          </h1>
          <p className={`text-xl sm:text-2xl lg:text-3xl font-medium mb-6 text-gray-200 fade-in stagger-delay-2 ${isVisible ? 'animate' : ''}`}>
            Software Engineer
          </p>
          <p className={`text-lg sm:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in stagger-delay-3 ${isVisible ? 'animate' : ''}`}>
            Full-stack developer with 3+ years of experience building high-performance web and mobile applications. 
            Skilled in React.js, React Native, Node.js, and Firebase.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 fade-in stagger-delay-4 ${isVisible ? 'animate' : ''}`}>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-secondary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection("experience")}
              className="border-white text-blue-600 hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
            >
              View Experience
            </Button>
          </div>
          
          <div className={`flex justify-center space-x-6 text-2xl fade-in stagger-delay-5 ${isVisible ? 'animate' : ''}`}>
            <a 
              href="https://linkedin.com/in/bharathinb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent transition-all hover:scale-110 transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:bharathinb14@gmail.com"
              className="text-gray-300 hover:text-accent transition-all hover:scale-110 transform"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="tel:+918489686346"
              className="text-gray-300 hover:text-accent transition-all hover:scale-110 transform"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}

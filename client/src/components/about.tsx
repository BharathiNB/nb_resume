import { MapPin, Mail, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function About() {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 fade-in ${titleVisible ? 'animate' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className={`slide-in-left ${imageVisible ? 'animate' : ''}`}>
            <img 
              src="https://media.licdn.com/dms/image/v2/C5603AQFXETBk5H0rgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1625539206148?e=1756944000&v=beta&t=XvgMrFPuhuoU6pyFztSD7mInNHiVhxq-GyUZpJWpnoU"
              alt="Bharathi N - Professional software engineer" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover" 
            />
          </div>
          
          <div ref={contentRef} className={`slide-in-right ${contentVisible ? 'animate' : ''}`}>
            <h3 className="text-2xl font-bold text-primary mb-6">Building Digital Solutions</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Full-stack developer with 3+ years of experience building high-performance web and mobile applications. 
              Skilled in React.js, React Native, Node.js, and Firebase. Experienced in CI/CD, Agile methodology, 
              and developing scalable app architectures.
            </p>
            
            <div ref={statsRef} className={`grid grid-cols-2 gap-6 mb-8 scale-in ${statsVisible ? 'animate' : ''}`}>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">1M+</div>
                <div className="text-gray-600">App Users</div>
              </div>
            </div>
            
            <div ref={contactRef} className={`space-y-3 fade-in ${contactVisible ? 'animate' : ''}`}>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-secondary mr-3" />
                <span className="text-gray-600">Chennai, India</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-secondary mr-3" />
                <span className="text-gray-600">bharathinb14@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-secondary mr-3" />
                <span className="text-gray-600">+91 8489686346</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

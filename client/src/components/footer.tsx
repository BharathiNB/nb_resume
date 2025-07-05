import { Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Bharathi N</h3>
          <p className="text-gray-300 mb-6">Building digital solutions with passion and precision</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://linkedin.com/in/bharathinb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent transition-colors text-xl"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:bharathinb14@gmail.com"
              className="text-gray-300 hover:text-accent transition-colors text-xl"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="tel:+918489686346"
              className="text-gray-300 hover:text-accent transition-colors text-xl"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Bharathi N. All rights reserved. Built with ❤️ using modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

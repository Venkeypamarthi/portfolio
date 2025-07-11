import { useState } from "react";
import { Menu, X, Home, User, GraduationCap, Code, Award, FolderOpen, Mail, Briefcase } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/90 backdrop-blur-md border-b border-dark-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold font-poppins group cursor-pointer">
            <span className="text-blue-accent group-hover:animate-pulse transition-all duration-300">V</span>enkannaBabu
            <span className="text-teal-accent group-hover:animate-bounce">.</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="group flex items-center gap-2 hover:text-blue-accent transition-all duration-300 hover:scale-110 cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-accent/10"
            >
              <Home size={16} className="group-hover:animate-pulse" />
              Home
            </a>
            <a
              href="#about"
              className="group flex items-center gap-2 hover:text-blue-accent transition-all duration-300 hover:scale-110 cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-accent/10"
            >
              <User size={16} className="group-hover:animate-pulse" />
              About
            </a>
            <a
              href="#education"
              className="group flex items-center gap-2 hover:text-blue-accent transition-all duration-300 hover:scale-110 cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-accent/10"
            >
              <GraduationCap size={16} className="group-hover:animate-pulse" />
              Education
            </a>
            <a
              href="#skills"
              className="group flex items-center gap-2 hover:text-blue-accent transition-all duration-300 hover:scale-110 cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-accent/10"
            >
              <Code size={16} className="group-hover:animate-pulse" />
              Skills
            </a>
            <a
              href="#certifications"
              className="group flex items-center gap-2 hover:text-blue-accent transition-all duration-300 hover:scale-110 cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-accent/10"
            >
              <Award size={16} className="group-hover:animate-pulse" />
              Certifications
            </a>
            <a
              href="#projects"
              className="group flex items-center gap-2 hover:text-blue-accent transition-all duration-300 hover:scale-110 cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-accent/10"
            >
              <FolderOpen size={16} className="group-hover:animate-pulse" />
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-blue-accent transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#extracurricular"
              className="hover:text-blue-accent transition-colors duration-300"
            >
              Activities
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 hover:text-blue-accent transition-all duration-300 hover:scale-110 cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-accent/10"
            >
              <Mail size={16} className="group-hover:animate-pulse" />
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-text-primary hover:text-blue-accent"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-secondary border-t border-dark-border">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <a
                href="#home"
                className="block hover:text-blue-accent transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="block hover:text-blue-accent transition-colors duration-300"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#education"
                className="block hover:text-blue-accent transition-colors duration-300"
                onClick={toggleMenu}
              >
                Education
              </a>
              <a
                href="#skills"
                className="block hover:text-blue-accent transition-colors duration-300"
                onClick={toggleMenu}
              >
                Skills
              </a>
              <a
                href="#certifications"
                className="block hover:text-blue-accent transition-colors duration-300"
                onClick={toggleMenu}
              >
                Certifications
              </a>
              <a
                href="#projects"
                className="block hover:text-blue-accent transition-colors duration-300"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#experience"
                className="block hover:text-blue-accent transition-colors duration-300"
                onClick={toggleMenu}
              >
                Experience
              </a>
              <a
                href="#extracurricular"
                className="block hover:text-blue-accent transition-colors duration-300"
                onClick={toggleMenu}
              >
                Activities
              </a>
              <a
                href="#contact"
                className="block hover:text-blue-accent transition-colors duration-300"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

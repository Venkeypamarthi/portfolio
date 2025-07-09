import { useEffect } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

export default function Portfolio() {
  useEffect(() => {
    // Apply dark mode class to body
    document.body.classList.add('dark');
    
    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-dark-primary text-text-primary">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-dark-primary border-t border-dark-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-text-muted">
            © 2024 Venkanna Babu Pamarthi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

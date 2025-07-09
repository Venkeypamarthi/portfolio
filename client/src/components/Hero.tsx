import { Code } from "lucide-react";
import profileImage from "@assets/venkey__1__11zon-removebg-preview_11zon-min_1752049378003.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-accent/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-teal-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-green-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="text-sm font-mono text-blue-accent">
              <Code className="inline mr-2" size={16} />
              Welcome to my digital space
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight">
              Hi, I'm <span className="text-blue-accent">VENKANNA BABU</span>
              <br />
              <span className="text-teal-accent">PPAMARTHI</span>
            </h1>
            <p className="text-xl text-text-muted max-w-lg">
              Passionate AI & Data Science student specializing in Full Stack
              Development, Machine Learning, and Cloud Computing solutions.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="bg-blue-accent hover:bg-blue-accent/80 text-dark-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-dark-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-accent to-teal-accent rounded-full blur opacity-75 animate-glow"></div>
              <div className="relative bg-dark-card p-2 rounded-full">
                <img
                  src={profileImage}
                  alt="Venkanna Babu Pamarthi"
                  className="w-80 h-80 rounded-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

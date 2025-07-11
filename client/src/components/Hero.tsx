import { Code, ArrowRight, Download, Sparkles, Zap, MousePointer, Heart, Coffee, Rocket, Star, Globe, Users, Brain } from "lucide-react";
import profileImage from "@assets/1000008001-01~2_1752053099229.jpeg";

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
              <span className="text-teal-accent">PAMARTHI</span>
            </h1>
            <p className="text-xl text-text-muted max-w-lg">
              Passionate AI & Data Science student specializing in Full Stack
              Development, Machine Learning, and Cloud Computing solutions.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="group bg-blue-accent hover:bg-blue-accent/80 text-dark-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-accent/25 flex items-center gap-2"
              >
                <Sparkles size={18} className="group-hover:animate-pulse" />
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="group border border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-dark-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Zap size={18} className="group-hover:animate-pulse" />
                Get In Touch
              </a>
            </div>
            
            {/* Enhanced animated skill badges */}
            <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-dark-border/30">
              <span className="group px-4 py-2 bg-blue-accent/10 text-blue-accent rounded-full text-sm font-medium border border-blue-accent/20 animate-fade-in hover:bg-blue-accent/20 hover:scale-110 hover:shadow-lg hover:shadow-blue-accent/25 transition-all duration-300 cursor-pointer">
                <Brain className="inline mr-1" size={14} />
                AI & ML
              </span>
              <span className="group px-4 py-2 bg-teal-accent/10 text-teal-accent rounded-full text-sm font-medium border border-teal-accent/20 animate-fade-in hover:bg-teal-accent/20 hover:scale-110 hover:shadow-lg hover:shadow-teal-accent/25 transition-all duration-300 cursor-pointer" style={{animationDelay: '0.2s'}}>
                <Code className="inline mr-1" size={14} />
                Full Stack
              </span>
              <span className="group px-4 py-2 bg-green-accent/10 text-green-accent rounded-full text-sm font-medium border border-green-accent/20 animate-fade-in hover:bg-green-accent/20 hover:scale-110 hover:shadow-lg hover:shadow-green-accent/25 transition-all duration-300 cursor-pointer" style={{animationDelay: '0.4s'}}>
                <Globe className="inline mr-1" size={14} />
                Cloud Computing
              </span>
              <span className="group px-4 py-2 bg-purple-500/10 text-purple-500 rounded-full text-sm font-medium border border-purple-500/20 animate-fade-in hover:bg-purple-500/20 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer" style={{animationDelay: '0.6s'}}>
                <Users className="inline mr-1" size={14} />
                Team Player
              </span>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-accent to-teal-accent rounded-full blur opacity-75 animate-glow group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-dark-card p-2 rounded-full group-hover:scale-105 transition-all duration-500">
                <img
                  src={profileImage}
                  alt="Venkanna Babu Pamarthi"
                  className="w-80 h-80 rounded-full object-cover shadow-2xl group-hover:scale-110 transition-transform duration-700"
                />
                {/* Floating icons around profile */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 hover:scale-125 hover:rotate-12 cursor-pointer">
                  <Code className="text-dark-primary" size={20} />
                </div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-teal-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 hover:scale-125 hover:rotate-12 cursor-pointer" style={{transitionDelay: '0.2s'}}>
                  <Sparkles className="text-dark-primary" size={20} />
                </div>
                <div className="absolute top-1/4 -right-4 w-10 h-10 bg-green-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 hover:scale-125 hover:rotate-12 cursor-pointer" style={{transitionDelay: '0.4s'}}>
                  <Zap className="text-dark-primary" size={16} />
                </div>
                <div className="absolute top-1/4 -left-4 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 hover:scale-125 hover:rotate-12 cursor-pointer" style={{transitionDelay: '0.6s'}}>
                  <Heart className="text-white" size={16} />
                </div>
                <div className="absolute bottom-1/4 -right-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 hover:scale-125 hover:rotate-12 cursor-pointer" style={{transitionDelay: '0.8s'}}>
                  <Coffee className="text-dark-primary" size={14} />
                </div>
                <div className="absolute bottom-1/4 -left-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 hover:scale-125 hover:rotate-12 cursor-pointer" style={{transitionDelay: '1s'}}>
                  <Rocket className="text-white" size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

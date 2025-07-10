import { Brain, Code, Cloud, Star, Award, Target, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-secondary relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-blue-accent/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-teal-accent/5 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-green-accent/5 rounded-full animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="text-blue-accent animate-pulse" size={24} />
            <h2 className="text-3xl md:text-4xl font-bold font-poppins">
              About <span className="text-blue-accent">Me</span>
            </h2>
            <Star className="text-teal-accent animate-pulse" size={24} style={{animationDelay: '0.5s'}} />
          </div>
          <p className="text-lg text-text-muted mb-8 leading-relaxed">
            I'm a motivated and detail-oriented Computer Science Engineering student actively seeking opportunities to apply 
            theoretical knowledge and hands-on skills in dynamic engineering environments. Passionate about contributing to 
            innovative projects, leveraging strong academic foundation, and gaining practical experience in AI, ML, and Full Stack Development.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="group bg-dark-card p-6 rounded-xl hover:bg-dark-card/80 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-accent/10 animate-slide-up">
              <div className="text-blue-accent text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain size={32} className="mx-auto group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-accent transition-colors duration-300">AI & Data Science</h3>
              <p className="text-text-muted">Specializing in machine learning, deep learning, and data analysis with hands-on project experience.</p>
              <div className="flex justify-center mt-4">
                <Lightbulb className="text-blue-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
              </div>
            </div>
            <div className="group bg-dark-card p-6 rounded-xl hover:bg-dark-card/80 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-teal-accent/10 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-teal-accent text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code size={32} className="mx-auto group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-accent transition-colors duration-300">Full Stack Development</h3>
              <p className="text-text-muted">Proficient in front-end and back-end technologies including Python, JavaScript, React, and Django.</p>
              <div className="flex justify-center mt-4">
                <Target className="text-teal-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
              </div>
            </div>
            <div className="group bg-dark-card p-6 rounded-xl hover:bg-dark-card/80 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-green-accent/10 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="text-green-accent text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Cloud size={32} className="mx-auto group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-green-accent transition-colors duration-300">Cloud Computing</h3>
              <p className="text-text-muted">Experienced with AWS services including EC2, S3, Lambda, and cloud architecture fundamentals.</p>
              <div className="flex justify-center mt-4">
                <Award className="text-green-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
              </div>
            </div>
          </div>
          
          {/* Achievement stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-dark-border/30">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-blue-accent mb-2 group-hover:scale-110 transition-transform duration-300">8.79</div>
              <p className="text-text-muted text-sm">CGPA</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-teal-accent mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
              <p className="text-text-muted text-sm">Certifications</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-green-accent mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
              <p className="text-text-muted text-sm">Projects</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-purple-500 mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
              <p className="text-text-muted text-sm">Internships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

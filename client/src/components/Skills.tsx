import { Laptop, Brain, Users, Clock, Lightbulb, Handshake, RotateCcw, Crown, Code2, Zap, Target } from "lucide-react";

export default function Skills() {
  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Django Framework", level: 75 },
    { name: "SQL & Database Management", level: 80 },
    { name: "HTML/CSS", level: 85 }
  ];

  const fundamentals = [
    { name: "Data Structures", icon: "📊" },
    { name: "Operating Systems", icon: "💻" },
    { name: "DBMS", icon: "🗄️" },
    { name: "Computer Networks", icon: "🌐" }
  ];

  const softSkills = [
    { name: "Time Management", icon: Clock },
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Team Collaboration", icon: Handshake },
    { name: "Adaptability", icon: RotateCcw },
    { name: "Leadership", icon: Crown }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-secondary relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-16 left-20 w-24 h-24 bg-blue-accent/5 rounded-full animate-float"></div>
      <div className="absolute bottom-24 right-16 w-20 h-20 bg-teal-accent/5 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-green-accent/5 rounded-full animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Code2 className="text-blue-accent animate-pulse" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center">
            My <span className="text-blue-accent">Skills</span>
          </h2>
          <Zap className="text-teal-accent animate-pulse" size={28} style={{animationDelay: '0.5s'}} />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="bg-dark-card p-8 rounded-xl hover:bg-dark-card/80 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-accent/10 animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-blue-accent flex items-center gap-3">
                <div className="p-2 bg-blue-accent/20 rounded-lg">
                  <Laptop size={24} />
                </div>
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="group skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium group-hover:text-blue-accent transition-colors duration-300">{skill.name}</span>
                      <span className="text-text-muted font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-border rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-accent to-teal-accent h-3 rounded-full transition-all duration-1000 hover:shadow-lg hover:shadow-blue-accent/25 group-hover:animate-pulse" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Soft Skills & CS Fundamentals */}
            <div className="space-y-6">
              <div className="bg-dark-card p-8 rounded-xl hover:bg-dark-card/80 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-teal-accent/10 animate-slide-up" style={{animationDelay: '0.2s'}}>
                <h3 className="text-2xl font-semibold mb-6 text-teal-accent flex items-center gap-3">
                  <div className="p-2 bg-teal-accent/20 rounded-lg">
                    <Brain size={24} />
                  </div>
                  CS Fundamentals
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {fundamentals.map((item, index) => (
                    <div key={index} className="group bg-dark-border/50 p-4 rounded-lg text-center hover:bg-dark-border/70 hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                      <p className="text-sm group-hover:text-teal-accent transition-colors duration-300">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-dark-card p-8 rounded-xl hover:bg-dark-card/80 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-green-accent/10 animate-slide-up" style={{animationDelay: '0.4s'}}>
                <h3 className="text-2xl font-semibold mb-6 text-green-accent flex items-center gap-3">
                  <div className="p-2 bg-green-accent/20 rounded-lg">
                    <Users size={24} />
                  </div>
                  Soft Skills
                </h3>
                <div className="space-y-3">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="group flex items-center p-3 rounded-lg hover:bg-dark-border/30 transition-all duration-300 cursor-pointer">
                      <div className="p-2 bg-blue-accent/20 rounded-lg mr-4 group-hover:bg-blue-accent/30 group-hover:scale-110 transition-all duration-300">
                        <skill.icon className="text-blue-accent" size={16} />
                      </div>
                      <span className="group-hover:text-green-accent transition-colors duration-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

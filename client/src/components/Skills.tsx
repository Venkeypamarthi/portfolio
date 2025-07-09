import { Laptop, Brain, Users, Clock, Lightbulb, Handshake, RotateCcw, Crown } from "lucide-react";

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
    <section id="skills" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12">
          My <span className="text-blue-accent">Skills</span>
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="bg-dark-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-blue-accent">
                <Laptop className="inline mr-3" size={24} />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-border rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-accent to-teal-accent h-2 rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Soft Skills & CS Fundamentals */}
            <div className="space-y-6">
              <div className="bg-dark-card p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 text-teal-accent">
                  <Brain className="inline mr-3" size={24} />
                  CS Fundamentals
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {fundamentals.map((item, index) => (
                    <div key={index} className="bg-dark-border/50 p-4 rounded-lg text-center hover:bg-dark-border/70 transition-all duration-300">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <p className="text-sm">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-dark-card p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 text-green-accent">
                  <Users className="inline mr-3" size={24} />
                  Soft Skills
                </h3>
                <div className="space-y-3">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <skill.icon className="text-blue-accent mr-3" size={20} />
                      <span>{skill.name}</span>
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

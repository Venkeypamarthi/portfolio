import { GraduationCap, BookOpen, Trophy, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-blue-accent/5 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-16 w-20 h-20 bg-teal-accent/5 rounded-full animate-float-delayed"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-12">
          <GraduationCap className="text-blue-accent animate-pulse" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center">
            My <span className="text-blue-accent">Education</span>
          </h2>
          <BookOpen className="text-teal-accent animate-pulse" size={28} style={{animationDelay: '0.5s'}} />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-accent to-teal-accent"></div>
            
            {/* Education Items */}
            <div className="space-y-12">
              {/* B.Tech */}
              <div className="relative flex items-center group">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-dark-card p-6 rounded-xl hover:bg-dark-card/80 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-accent/10 animate-slide-up">
                    <div className="flex items-center justify-end gap-2 mb-2">
                      <Calendar className="text-blue-accent" size={16} />
                      <div className="text-blue-accent text-sm font-mono">2023 - 2026</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-accent transition-colors duration-300">B.Tech in Artificial Intelligence & Data Science</h3>
                    <div className="flex items-center justify-end gap-2 mb-2">
                      <MapPin className="text-text-muted" size={16} />
                      <p className="text-text-muted">Velagapudi Ramakrishna Siddhartha Engineering College</p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <Trophy className="text-green-accent" size={16} />
                      <div className="text-green-accent font-semibold">CGPA: 8.79</div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-accent rounded-full border-4 border-dark-primary group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <GraduationCap className="text-dark-primary" size={12} />
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              {/* Diploma */}
              <div className="relative flex items-center group">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-accent rounded-full border-4 border-dark-primary group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <BookOpen className="text-dark-primary" size={12} />
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-dark-card p-6 rounded-xl hover:bg-dark-card/80 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-teal-accent/10 animate-slide-up" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="text-teal-accent" size={16} />
                      <div className="text-teal-accent text-sm font-mono">2020 - 2023</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-accent transition-colors duration-300">Diploma in Engineering</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="text-text-muted" size={16} />
                      <p className="text-text-muted">A.A.N.M & V.V.R.S.R Polytechnic College</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="text-green-accent" size={16} />
                      <div className="text-green-accent font-semibold">Percentage: 90.34%</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* SSC */}
              <div className="relative flex items-center group">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-dark-card p-6 rounded-xl hover:bg-dark-card/80 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-green-accent/10 animate-slide-up" style={{animationDelay: '0.4s'}}>
                    <div className="flex items-center justify-end gap-2 mb-2">
                      <Calendar className="text-blue-accent" size={16} />
                      <div className="text-blue-accent text-sm font-mono">2019 - 2020</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-green-accent transition-colors duration-300">Secondary School Certificate (SSC)</h3>
                    <div className="flex items-center justify-end gap-2 mb-2">
                      <MapPin className="text-text-muted" size={16} />
                      <p className="text-text-muted">Chinnari High School</p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <Trophy className="text-green-accent" size={16} />
                      <div className="text-green-accent font-semibold">CGPA: 9.0</div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-accent rounded-full border-4 border-dark-primary group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <Trophy className="text-dark-primary" size={12} />
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

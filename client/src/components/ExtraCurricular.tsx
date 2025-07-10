import { Heart, Trophy, Code2, Users, Award, Lightbulb } from "lucide-react";

export default function ExtraCurricular() {
  const activities = [
    {
      title: "NSS Volunteer",
      description: "National Service Scheme volunteer contributing to community development and social welfare initiatives",
      icon: Heart,
      color: "teal-accent",
      category: "Social Service",
      year: "2023-2024"
    },
    {
      title: "SIH Internal Hackathon Participant",
      description: "Participated in Smart India Hackathon internal competition, developing innovative solutions for real-world problems",
      icon: Lightbulb,
      color: "blue-accent",
      category: "Innovation",
      year: "2024"
    },
    {
      title: "UI-Path Hackathon Participant",
      description: "Competed in automation-focused hackathon using UiPath RPA tools to create efficient business process solutions",
      icon: Code2,
      color: "green-accent",
      category: "Technology",
      year: "2024"
    }
  ];

  return (
    <section id="extracurricular" className="py-20 bg-dark-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
          Extra-Curricular <span className="text-blue-accent">Activities</span>
        </h2>
        <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
          Beyond academics, I actively participate in various activities that enhance my leadership, innovation, and social impact skills.
        </p>
        
        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Scroll Container */}
          <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 snap-x snap-mandatory">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex-none w-80 md:w-96 snap-start"
              >
                <div className="group relative bg-dark-card p-8 rounded-2xl h-full hover:bg-dark-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-accent/10">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Badge Category */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full bg-${activity.color}/20 text-${activity.color} border border-${activity.color}/30`}>
                        {activity.category}
                      </span>
                      <span className="text-text-muted text-sm font-mono">{activity.year}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-${activity.color}/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <activity.icon className={`text-${activity.color} w-8 h-8`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-accent transition-colors duration-300">
                      {activity.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      {activity.description}
                    </p>
                    
                    {/* Animated bottom border */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-${activity.color} to-blue-accent w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {activities.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === 0 ? 'bg-blue-accent w-6' : 'bg-dark-border hover:bg-blue-accent/50'
                }`}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Interactive Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-teal-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="text-teal-accent w-8 h-8" />
            </div>
            <div className="text-2xl font-bold text-teal-accent mb-1">1+</div>
            <div className="text-text-muted text-sm">Social Initiatives</div>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-blue-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Trophy className="text-blue-accent w-8 h-8" />
            </div>
            <div className="text-2xl font-bold text-blue-accent mb-1">2+</div>
            <div className="text-text-muted text-sm">Hackathons</div>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-green-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Code2 className="text-green-accent w-8 h-8" />
            </div>
            <div className="text-2xl font-bold text-green-accent mb-1">100%</div>
            <div className="text-text-muted text-sm">Participation</div>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="text-purple-500 w-8 h-8" />
            </div>
            <div className="text-2xl font-bold text-purple-500 mb-1">Active</div>
            <div className="text-text-muted text-sm">Contributor</div>
          </div>
        </div>
      </div>
      
      {/* Floating animation elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-accent/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-teal-accent/10 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-green-accent/10 rounded-full animate-float-slow"></div>
    </section>
  );
}
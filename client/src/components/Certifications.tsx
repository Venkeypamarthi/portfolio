import { Award, Shield, Database, Server, Smartphone, Terminal, Cog, Wifi, BarChart, Lock, Brain, Code, Target, Calendar, ExternalLink, Trophy, Star } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Java Programming Fundamentals",
      provider: "GalileoX (Universidad Galileo)",
      description: "Comprehensive course covering Java basics, object-oriented programming, and application development fundamentals. Certificate ID: e1aa48c31c824fa589ff926625979612",
      icon: Award,
      color: "blue-accent",
      date: "May 6, 2024"
    },
    {
      title: "Introduction to Data Science with Python",
      provider: "HarvardX (Harvard University)",
      description: "Data analysis, visualization, and statistical computing using Python with pandas, numpy, and matplotlib. Certificate ID: 21eb232c05ca4d699bdcc67f9412c29e",
      icon: BarChart,
      color: "teal-accent",
      date: "May 19, 2024"
    },
    {
      title: "Production Machine Learning Systems",
      provider: "Google Cloud via Coursera",
      description: "ML model deployment, scaling, monitoring, and maintaining production-ready machine learning systems. Certificate ID: 95MVIN9450PJ",
      icon: Cog,
      color: "green-accent",
      date: "October 5, 2024"
    },
    {
      title: "Deep Learning with PyTorch: Object Localization",
      provider: "Coursera Project Network",
      description: "Advanced deep learning project focused on object localization using PyTorch framework. Certificate ID: 47I9XSPKTD7N",
      icon: Brain,
      color: "blue-accent",
      date: "March 18, 2025"
    },
    {
      title: "Python Case Study - Cryptography",
      provider: "Wingspan",
      description: "Applied cryptography concepts and implementations using Python programming language for secure application development.",
      icon: Lock,
      color: "teal-accent",
      date: "November 13, 2024"
    },
    {
      title: "Database Foundations",
      provider: "Oracle",
      description: "Comprehensive database fundamentals including SQL, database design, and database management systems.",
      icon: Database,
      color: "green-accent",
      date: "December 2, 2023"
    },
    {
      title: "Hack-a-bot Participation",
      provider: "UiPath",
      description: "Participated in automation bot development using UiPath tools at Velagapudi Ramakrishna Siddhartha Engineering College.",
      icon: Target,
      color: "blue-accent",
      date: "August 23, 2024"
    },
    {
      title: "Google AI-ML Virtual Internship",
      provider: "Eduskills",
      description: "Hands-on training in machine learning workflows, TensorFlow, and AI model development using Google Cloud Platform.",
      icon: Server,
      color: "teal-accent"
    },
    {
      title: "Google Android Developer Virtual Internship",
      provider: "Eduskills",
      description: "Android app development using Java/Kotlin, UI/UX design, and Firebase integration for mobile applications.",
      icon: Smartphone,
      color: "green-accent"
    },
    {
      title: "NDG Linux Essentials",
      provider: "Cisco Networking Academy",
      description: "Linux system administration, command line operations, and network configuration fundamentals.",
      icon: Terminal,
      color: "blue-accent"
    },
    {
      title: "IOT - Connecting Certificate",
      provider: "Cisco",
      description: "Internet of Things concepts, device connectivity, and network protocols for IoT applications.",
      icon: Wifi,
      color: "teal-accent"
    },
    {
      title: "Foundation of R Software",
      provider: "NPTEL",
      description: "Statistical computing and data analysis using R programming language for data science applications.",
      icon: Code,
      color: "green-accent"
    },
    {
      title: "Ethical Hacking",
      provider: "NPTEL",
      description: "Cybersecurity fundamentals, penetration testing, and ethical hacking methodologies for system security.",
      icon: Shield,
      color: "blue-accent"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-16 right-16 w-28 h-28 bg-blue-accent/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-teal-accent/5 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-green-accent/5 rounded-full animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Trophy className="text-blue-accent animate-pulse" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center">
            My <span className="text-blue-accent">Certifications</span>
          </h2>
          <Star className="text-teal-accent animate-pulse" size={28} style={{animationDelay: '0.5s'}} />
        </div>
        
        {/* Stats overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="text-center group cursor-pointer animate-bounce-in">
            <div className="text-3xl font-bold text-blue-accent mb-2 group-hover:scale-110 transition-transform duration-300">13</div>
            <p className="text-text-muted text-sm">Total Certificates</p>
          </div>
          <div className="text-center group cursor-pointer animate-bounce-in" style={{animationDelay: '0.2s'}}>
            <div className="text-3xl font-bold text-teal-accent mb-2 group-hover:scale-110 transition-transform duration-300">5</div>
            <p className="text-text-muted text-sm">Major Platforms</p>
          </div>
          <div className="text-center group cursor-pointer animate-bounce-in" style={{animationDelay: '0.4s'}}>
            <div className="text-3xl font-bold text-green-accent mb-2 group-hover:scale-110 transition-transform duration-300">2024</div>
            <p className="text-text-muted text-sm">Recent Year</p>
          </div>
          <div className="text-center group cursor-pointer animate-bounce-in" style={{animationDelay: '0.6s'}}>
            <div className="text-3xl font-bold text-purple-500 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
            <p className="text-text-muted text-sm">Completion Rate</p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className={`group bg-dark-card p-6 rounded-xl hover:bg-dark-card/80 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-${cert.color}/10 animate-slide-up cursor-pointer`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-${cert.color}/20 rounded-xl group-hover:bg-${cert.color}/30 group-hover:scale-110 transition-all duration-300`}>
                  <cert.icon size={28} className={`text-${cert.color} group-hover:animate-pulse`} />
                </div>
                {cert.date && (
                  <div className="flex items-center gap-1 text-xs text-text-muted">
                    <Calendar size={12} />
                    {cert.date}
                  </div>
                )}
              </div>
              <h3 className={`text-lg font-semibold mb-2 group-hover:text-${cert.color} transition-colors duration-300`}>{cert.title}</h3>
              <p className="text-text-muted text-sm mb-3 flex items-center gap-2">
                <Award size={14} className={`text-${cert.color}`} />
                {cert.provider}
              </p>
              <p className="text-text-muted text-xs leading-relaxed group-hover:text-text-primary transition-colors duration-300">{cert.description}</p>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl animate-shimmer"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

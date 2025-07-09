import { Award, Shield, Database, Server, Smartphone, Terminal, Cog, Wifi, BarChart, Lock, Brain, Code, Target } from "lucide-react";

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
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12">
          My <span className="text-blue-accent">Certifications</span>
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-dark-card p-6 rounded-xl hover:bg-dark-card/80 transition-all duration-300 hover:scale-105">
              <div className={`text-${cert.color} text-2xl mb-3`}>
                <cert.icon size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-text-muted text-sm mb-2">{cert.provider}</p>
              {cert.date && (
                <p className="text-blue-accent text-xs font-mono mb-2">{cert.date}</p>
              )}
              <p className="text-text-muted text-xs">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

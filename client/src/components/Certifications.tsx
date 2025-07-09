import { Award, Shield, Database, Server, Smartphone, Terminal, Cog, Wifi, BarChart } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Java Programming Fundamentals",
      provider: "GalileoX (Universidad Galileo)",
      description: "Comprehensive course covering Java basics, object-oriented programming, and application development fundamentals.",
      icon: Award,
      color: "blue-accent"
    },
    {
      title: "Introduction to Data Science with Python",
      provider: "HarvardX (Harvard University)",
      description: "Data analysis, visualization, and statistical computing using Python with pandas, numpy, and matplotlib.",
      icon: BarChart,
      color: "teal-accent"
    },
    {
      title: "Google AI-ML Virtual Internship",
      provider: "Eduskills",
      description: "Hands-on training in machine learning workflows, TensorFlow, and AI model development using Google Cloud Platform.",
      icon: Server,
      color: "green-accent"
    },
    {
      title: "Google Android Developer Virtual Internship",
      provider: "Eduskills",
      description: "Android app development using Java/Kotlin, UI/UX design, and Firebase integration for mobile applications.",
      icon: Smartphone,
      color: "blue-accent"
    },
    {
      title: "NDG Linux Essentials",
      provider: "Cisco Networking Academy",
      description: "Linux system administration, command line operations, and network configuration fundamentals.",
      icon: Terminal,
      color: "teal-accent"
    },
    {
      title: "Production Machine Learning Systems",
      provider: "Coursera",
      description: "ML model deployment, scaling, monitoring, and maintaining production-ready machine learning systems.",
      icon: Cog,
      color: "green-accent"
    },
    {
      title: "IOT - Connecting Certificate",
      provider: "Cisco",
      description: "Internet of Things concepts, device connectivity, and network protocols for IoT applications.",
      icon: Wifi,
      color: "blue-accent"
    },
    {
      title: "Foundation of R Software",
      provider: "NPTEL",
      description: "Statistical computing and data analysis using R programming language for data science applications.",
      icon: Database,
      color: "teal-accent"
    },
    {
      title: "Ethical Hacking",
      provider: "NPTEL",
      description: "Cybersecurity fundamentals, penetration testing, and ethical hacking methodologies for system security.",
      icon: Shield,
      color: "green-accent"
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
              <p className="text-text-muted text-sm mb-3">{cert.provider}</p>
              <p className="text-text-muted text-xs">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

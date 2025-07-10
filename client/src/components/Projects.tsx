import { Shield, Fish, Hand, Github, ExternalLink, Play, Code, Sparkles, Eye } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Fileless Malware Detection System",
      category: "Machine Learning • Cybersecurity",
      description:
        "Advanced machine learning system designed to detect fileless malware attacks using behavioral analysis and pattern recognition. Implemented using Python with scikit-learn and TensorFlow for real-time threat detection.",
      technologies: [
        "Python",
        "Machine Learning",
        "Behavioral Analysis",
        "TensorFlow",
      ],
      icon: Shield,
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      links: [
        {
          type: "github",
          icon: Github,
          url: "https://github.com/Venkeypamarthi",
        },
        { type: "demo", icon: ExternalLink, url: "#" },
      ],
    },
    {
      title: "Seafood Supply Chain Communication Platform",
      category: "Full Stack • Real-time Communication",
      description:
        "Revolutionary platform addressing communication gaps between fishermen and buyers in the seafood supply chain. Built with ReactJS frontend, Node.js backend, MongoDB database, and Firebase for real-time updates and notifications.",
      technologies: ["ReactJS", "Node.js", "MongoDB", "Firebase"],
      icon: Fish,
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      links: [
        { type: "github", icon: Github, url: "#" },
        { type: "live", icon: ExternalLink, url: "#" },
      ],
    },
    {
      title: "Hand Gesture Controlled System",
      category: "Computer Vision • Automation",
      description:
        "Innovative computer vision system that recognizes hand gestures to control computer functions. Developed using Python with OpenCV for image processing, MediaPipe for hand tracking, and PyAutoGUI for system automation.",
      technologies: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
      icon: Hand,
      image:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      links: [
        { type: "github", icon: Github, url: "#" },
        { type: "demo", icon: Play, url: "#" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-secondary relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-16 w-28 h-28 bg-blue-accent/5 rounded-full animate-float"></div>
      <div className="absolute bottom-28 right-20 w-24 h-24 bg-teal-accent/5 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-green-accent/5 rounded-full animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Code className="text-blue-accent animate-pulse" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center">
            Featured <span className="text-blue-accent">Projects</span>
          </h2>
          <Sparkles className="text-teal-accent animate-pulse" size={28} style={{animationDelay: '0.5s'}} />
        </div>
        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-dark-card rounded-xl overflow-hidden hover:bg-dark-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-accent/10 ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="md:flex">
                <div
                  className={`md:w-1/2 ${index % 2 === 0 ? "order-1" : "order-2"} p-8`}
                >
                  <div className="text-blue-accent text-sm font-mono mb-2 flex items-center gap-2">
                    <div className="p-1 bg-blue-accent/20 rounded group-hover:bg-blue-accent/30 transition-colors duration-300">
                      <project.icon size={16} className="group-hover:animate-pulse" />
                    </div>
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-accent transition-colors duration-300">{project.title}</h3>
                  <p className="text-text-muted mb-6 group-hover:text-text-primary transition-colors duration-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${
                          techIndex % 3 === 0
                            ? "bg-blue-accent/20 text-blue-accent border border-blue-accent/30"
                            : techIndex % 3 === 1
                              ? "bg-teal-accent/20 text-teal-accent border border-teal-accent/30"
                              : "bg-green-accent/20 text-green-accent border border-green-accent/30"
                        } px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-110 cursor-pointer hover-lift`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className="text-blue-accent hover:text-blue-accent/80 transition-colors"
                      >
                        <link.icon className="inline mr-2" size={16} />
                        {link.type === "github"
                          ? "View Code"
                          : link.type === "live"
                            ? "Live Site"
                            : link.type === "demo"
                              ? "Live Demo"
                              : "Demo Video"}
                      </a>
                    ))}
                  </div>
                </div>
                <div
                  className={`md:w-1/2 ${index % 2 === 0 ? "order-2" : "order-1"} p-8 flex items-center justify-center`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

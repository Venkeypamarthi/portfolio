import { Briefcase, Building, MapPin, Calendar, ExternalLink, TrendingUp, Award, Users } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer - Python (Internship)",
      company:
        "Lineysha and Thevan Software Technologies Pvt. Ltd., Vijayawada",
      duration: "Dec 26, 2022 – Jun 26, 2023",
      responsibilities: [
        "Completed intensive industrial training program on Full Stack Development using Python",
        "Gained hands-on experience in front-end and back-end technologies including Python frameworks",
        "Applied practical coding and problem-solving skills to build real-world web applications",
        "Worked with database integration and application deployment processes",
      ],
    },
    {
      title: "AI-ML Virtual Internship (Student Intern)",
      company: "EduSkills Foundation in collaboration with Google",
      duration: "2024",
      responsibilities: [
        "Completed virtual internship focused on Artificial Intelligence and Machine Learning",
        "Worked on projects involving data processing, model building, and predictive analysis",
        "Developed foundational understanding of ML workflows and best practices using Google Cloud tools",
      ],
    },
    {
      title: "Virtual Internship – AWS Cloud Computing",
      company: "EduSkills Foundation in collaboration with Google",
      duration: "Aug 19, 2024 – Aug 24, 2024",
      responsibilities: [
        "Participated in hands-on virtual internship focused on foundational cloud computing skills",
        "Explored core AWS services including EC2, S3, Lambda, and IAM",
        "Gained exposure to deploying scalable applications and understanding cloud architecture fundamentals",
      ],
    },
    {
      title: "Virtual Internship – Data Engineering on AWS",
      company: "EduSkills Foundation in collaboration with Google",
      duration: "Via Eduskills",
      responsibilities: [
        "Completed structured program around AWS data engineering tools and workflows",
        "Developed skills in ETL processes, data lakes, data warehousing",
        "Worked with AWS services like Glue, Redshift, and S3",
        "Built pipelines to ingest, transform, and analyze datasets in simulated enterprise environment",
      ],
    },
    {
      title: "Virtual Internship – Google Android Developer",
      company: "Eduskills – Google Developer Program",
      duration: "2024",
      responsibilities: [
        "Engaged in practical development of Android applications using Java and Kotlin",
        "Learned UI/UX best practices, application lifecycle, and backend integration",
        "Built and deployed working prototypes demonstrating key Android components",
        "Gained experience with Firebase integration for mobile applications",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-16 w-24 h-24 bg-blue-accent/5 rounded-full animate-float"></div>
      <div className="absolute bottom-28 right-20 w-20 h-20 bg-teal-accent/5 rounded-full animate-float-delayed"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Briefcase className="text-blue-accent animate-pulse" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center">
            Professional <span className="text-blue-accent">Experience</span>
          </h2>
          <Building className="text-teal-accent animate-pulse" size={28} style={{animationDelay: '0.5s'}} />
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-dark-card p-8 rounded-xl hover:bg-dark-card/80 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-accent/10 animate-slide-up cursor-pointer"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-blue-accent/10 rounded-lg group-hover:bg-blue-accent/20 transition-colors duration-300">
                    <Briefcase className="text-blue-accent group-hover:animate-pulse" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-accent transition-colors duration-300 text-hover-glow">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-teal-accent group-hover:text-text-primary transition-colors duration-300">
                      <Building size={16} />
                      <p>{exp.company}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-text-muted font-mono text-sm group-hover:text-green-accent transition-colors duration-300">
                  <Calendar size={16} />
                  {exp.duration}
                </div>
              </div>
              <ul className="text-text-muted space-y-3 group-hover:text-text-primary transition-colors duration-300">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start gap-3 hover:scale-105 hover:text-blue-accent transition-all duration-300 cursor-pointer">
                    <TrendingUp className="text-green-accent mt-1 flex-shrink-0" size={16} />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-end gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Award className="text-yellow-500" size={16} />
                <span className="text-sm text-text-muted">Professional Experience</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

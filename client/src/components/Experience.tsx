export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer - Python (Internship)",
      company: "Lineysha and Thevan Software Technologies Pvt. Ltd., Vijayawada",
      duration: "Dec 26, 2022 – Jun 26, 2023",
      responsibilities: [
        "Completed intensive industrial training program on Full Stack Development using Python",
        "Gained hands-on experience in front-end and back-end technologies including Python frameworks",
        "Applied practical coding and problem-solving skills to build real-world web applications",
        "Worked with database integration and application deployment processes"
      ]
    },
    {
      title: "AI-ML Virtual Internship (Student Intern)",
      company: "EduSkills Foundation in collaboration with Google",
      duration: "2024",
      responsibilities: [
        "Completed virtual internship focused on Artificial Intelligence and Machine Learning",
        "Worked on projects involving data processing, model building, and predictive analysis",
        "Developed foundational understanding of ML workflows and best practices using Google Cloud tools"
      ]
    },
    {
      title: "Virtual Internship – AWS Cloud Computing",
      company: "Velagapudi Ramakrishna Siddhartha Engineering College",
      duration: "Aug 19, 2024 – Aug 24, 2024",
      responsibilities: [
        "Participated in hands-on virtual internship focused on foundational cloud computing skills",
        "Explored core AWS services including EC2, S3, Lambda, and IAM",
        "Gained exposure to deploying scalable applications and understanding cloud architecture fundamentals"
      ]
    },
    {
      title: "Virtual Internship – Data Engineering on AWS",
      company: "Siddhartha Academy of Higher Education",
      duration: "Via Eduskills",
      responsibilities: [
        "Completed structured program around AWS data engineering tools and workflows",
        "Developed skills in ETL processes, data lakes, data warehousing",
        "Worked with AWS services like Glue, Redshift, and S3",
        "Built pipelines to ingest, transform, and analyze datasets in simulated enterprise environment"
      ]
    },
    {
      title: "Virtual Internship – Google Android Developer",
      company: "Eduskills – Google Developer Program",
      duration: "2024",
      responsibilities: [
        "Engaged in practical development of Android applications using Java and Kotlin",
        "Learned UI/UX best practices, application lifecycle, and backend integration",
        "Built and deployed working prototypes demonstrating key Android components",
        "Gained experience with Firebase integration for mobile applications"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12">
          Professional <span className="text-blue-accent">Experience</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-dark-card p-8 rounded-xl hover:bg-dark-card/80 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-teal-accent">{exp.company}</p>
                </div>
                <div className="text-text-muted font-mono text-sm">
                  {exp.duration}
                </div>
              </div>
              <ul className="text-text-muted space-y-2">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>• {responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

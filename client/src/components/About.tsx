import { Brain, Code, Cloud } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            About <span className="text-blue-accent">Me</span>
          </h2>
          <p className="text-lg text-text-muted mb-8 leading-relaxed">
            I'm a motivated and detail-oriented Computer Science Engineering student actively seeking opportunities to apply 
            theoretical knowledge and hands-on skills in dynamic engineering environments. Passionate about contributing to 
            innovative projects, leveraging strong academic foundation, and gaining practical experience in AI, ML, and Full Stack Development.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-dark-card p-6 rounded-xl hover:bg-dark-card/80 transition-all duration-300 hover:scale-105">
              <div className="text-blue-accent text-2xl mb-4">
                <Brain size={32} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI & Data Science</h3>
              <p className="text-text-muted">Specializing in machine learning, deep learning, and data analysis with hands-on project experience.</p>
            </div>
            <div className="bg-dark-card p-6 rounded-xl hover:bg-dark-card/80 transition-all duration-300 hover:scale-105">
              <div className="text-teal-accent text-2xl mb-4">
                <Code size={32} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Stack Development</h3>
              <p className="text-text-muted">Proficient in front-end and back-end technologies including Python, JavaScript, React, and Django.</p>
            </div>
            <div className="bg-dark-card p-6 rounded-xl hover:bg-dark-card/80 transition-all duration-300 hover:scale-105">
              <div className="text-green-accent text-2xl mb-4">
                <Cloud size={32} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Computing</h3>
              <p className="text-text-muted">Experienced with AWS services including EC2, S3, Lambda, and cloud architecture fundamentals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12">
          My <span className="text-blue-accent">Education</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-accent to-teal-accent"></div>
            
            {/* Education Items */}
            <div className="space-y-12">
              {/* B.Tech */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-dark-card p-6 rounded-xl hover:bg-dark-card/80 transition-all duration-300">
                    <div className="text-blue-accent text-sm font-mono mb-2">2023 - 2026</div>
                    <h3 className="text-xl font-semibold mb-2">B.Tech in Artificial Intelligence & Data Science</h3>
                    <p className="text-text-muted mb-2">Velagapudi Ramakrishna Siddhartha Engineering College</p>
                    <div className="text-green-accent font-semibold">CGPA: 8.79</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-accent rounded-full border-4 border-dark-primary"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              {/* Diploma */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-accent rounded-full border-4 border-dark-primary"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-dark-card p-6 rounded-xl hover:bg-dark-card/80 transition-all duration-300">
                    <div className="text-teal-accent text-sm font-mono mb-2">2020 - 2023</div>
                    <h3 className="text-xl font-semibold mb-2">Diploma in Engineering</h3>
                    <p className="text-text-muted mb-2">A.A.N.M & V.V.R.S.R Polytechnic College</p>
                    <div className="text-green-accent font-semibold">Percentage: 90.34%</div>
                  </div>
                </div>
              </div>
              
              {/* SSC */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-dark-card p-6 rounded-xl hover:bg-dark-card/80 transition-all duration-300">
                    <div className="text-blue-accent text-sm font-mono mb-2">2019 - 2020</div>
                    <h3 className="text-xl font-semibold mb-2">Secondary School Certificate (SSC)</h3>
                    <p className="text-text-muted mb-2">Chinnari High School</p>
                    <div className="text-green-accent font-semibold">CGPA: 9.0</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-accent rounded-full border-4 border-dark-primary"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

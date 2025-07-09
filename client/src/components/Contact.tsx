import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12">
          Get In <span className="text-blue-accent">Touch</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect!</h3>
                <p className="text-text-muted mb-6">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation. Feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-accent/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Email</p>
                    <p className="font-semibold">1918171venkannababu@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-accent/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-teal-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Phone</p>
                    <p className="font-semibold">+91 6304319191</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-accent/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-green-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Location</p>
                    <p className="font-semibold">Vijayawada, Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Find me on</h4>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-blue-accent/20 rounded-lg flex items-center justify-center hover:bg-blue-accent/30 transition-all duration-300">
                    <Linkedin className="text-blue-accent" size={20} />
                  </div>
                  <div className="w-12 h-12 bg-dark-card rounded-lg flex items-center justify-center hover:bg-dark-border transition-all duration-300">
                    <Github className="text-text-primary" size={20} />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    <Instagram className="text-white" size={20} />
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-text-muted">
                  <p>LinkedIn: https://www.linkedin.com/in/venkanna-babu-pamarthi-05a71a293/</p>
                  <p>GitHub: https://github.com/Venkeypamarthi</p>
                  <p>Instagram: https://www.instagram.com/mr_scilence_/?hl=en</p>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark-border border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-accent transition-colors duration-300" 
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-dark-border border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-accent transition-colors duration-300" 
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={5} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-dark-border border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-accent transition-colors duration-300" 
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-accent hover:bg-blue-accent/80 text-dark-primary font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

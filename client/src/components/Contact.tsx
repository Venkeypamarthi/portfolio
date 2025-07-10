import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send, MessageCircle, User, AtSign } from "lucide-react";
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
    <section id="contact" className="py-20 bg-dark-secondary relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-16 left-16 w-24 h-24 bg-blue-accent/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-teal-accent/5 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-accent/5 rounded-full animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-12">
          <MessageCircle className="text-blue-accent animate-pulse" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center">
            Get In <span className="text-blue-accent">Touch</span>
          </h2>
          <Send className="text-teal-accent animate-pulse" size={28} style={{animationDelay: '0.5s'}} />
        </div>
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
                <div className="group flex items-center space-x-4 p-4 rounded-xl bg-dark-card/50 hover:bg-dark-card transition-all duration-300 hover:scale-105 animate-slide-up">
                  <div className="w-12 h-12 bg-blue-accent/20 rounded-lg flex items-center justify-center group-hover:bg-blue-accent/30 group-hover:scale-110 transition-all duration-300">
                    <Mail className="text-blue-accent group-hover:animate-pulse" size={20} />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Email</p>
                    <p className="font-semibold group-hover:text-blue-accent transition-colors duration-300">1918171venkannababu@gmail.com</p>
                  </div>
                </div>
                
                <div className="group flex items-center space-x-4 p-4 rounded-xl bg-dark-card/50 hover:bg-dark-card transition-all duration-300 hover:scale-105 animate-slide-up" style={{animationDelay: '0.2s'}}>
                  <div className="w-12 h-12 bg-teal-accent/20 rounded-lg flex items-center justify-center group-hover:bg-teal-accent/30 group-hover:scale-110 transition-all duration-300">
                    <Phone className="text-teal-accent group-hover:animate-pulse" size={20} />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Phone</p>
                    <p className="font-semibold group-hover:text-teal-accent transition-colors duration-300">+91 6304319191</p>
                  </div>
                </div>
                
                <div className="group flex items-center space-x-4 p-4 rounded-xl bg-dark-card/50 hover:bg-dark-card transition-all duration-300 hover:scale-105 animate-slide-up" style={{animationDelay: '0.4s'}}>
                  <div className="w-12 h-12 bg-green-accent/20 rounded-lg flex items-center justify-center group-hover:bg-green-accent/30 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="text-green-accent group-hover:animate-pulse" size={20} />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Location</p>
                    <p className="font-semibold group-hover:text-green-accent transition-colors duration-300">Vijayawada, Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span>Find me on</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-accent to-transparent"></div>
                </h4>
                <div className="flex space-x-4">
                  <div className="group w-12 h-12 bg-blue-accent/20 rounded-lg flex items-center justify-center hover:bg-blue-accent/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-accent/25 cursor-pointer animate-fade-in">
                    <Linkedin className="text-blue-accent group-hover:animate-pulse" size={20} />
                  </div>
                  <div className="group w-12 h-12 bg-dark-card rounded-lg flex items-center justify-center hover:bg-dark-border transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer animate-fade-in" style={{animationDelay: '0.2s'}}>
                    <Github className="text-text-primary group-hover:animate-pulse" size={20} />
                  </div>
                  <div className="group w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <Instagram className="text-white group-hover:animate-pulse" size={20} />
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-text-muted">
                  <p>LinkedIn: https://www.linkedin.com/in/venkanna-babu-pamarthi-05a71a293/</p>
                  <p>GitHub: https://github.com/Venkeypamarthi</p>
                  <p>Instagram: https://www.instagram.com/mr_scilence_/?hl=en</p>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-card p-8 rounded-xl hover:bg-dark-card/80 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Send className="text-blue-accent" size={20} />
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <User size={16} className="text-blue-accent" />
                    Name
                  </label>
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
                <div className="group">
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <AtSign size={16} className="text-teal-accent" />
                    Email
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-dark-border border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-teal-accent focus:bg-dark-card transition-all duration-300 group-hover:border-teal-accent/50" 
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <MessageCircle size={16} className="text-green-accent" />
                    Message
                  </label>
                  <textarea 
                    rows={5} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-dark-border border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-green-accent focus:bg-dark-card transition-all duration-300 resize-none group-hover:border-green-accent/50" 
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="group w-full bg-blue-accent hover:bg-blue-accent/80 text-dark-primary font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-accent/25 flex items-center justify-center gap-2"
                >
                  <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
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

import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Twitter, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    

  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Ahmad',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  const isSubmitting = status === 'sending';

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4 text-sm sm:text-base">
          Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <a 
                href="mailto:ahmadsubair2005@gmail.com" 
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-2 md:p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-sm md:text-base">Email</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">ahmadsubair2005@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+2347049567031" 
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-2 md:p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-sm md:text-base">Phone</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">+2347049567031</p>
                </div>
              </a>
            </div>
            
            {/* Social Links - Your actual profiles */}
            <div className="pt-4 md:pt-6">
              <h4 className="font-medium mb-3 md:mb-4 text-sm md:text-base">Follow Me</h4>
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/ahmad-subair-03a997339/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 md:p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all"
                >
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a 
                  href="https://github.com/Abu-Sumayyah-05" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 md:p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all"
                >
                  <Github className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a 
                  href="https://x.com/AhmadSubair15" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 md:p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all"
                >
                  <Twitter className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* EmailJS Contact Form */}
          <div className="bg-card rounded-2xl p-4 md:p-6 border border-border">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <input 
                type="text" 
                name="name"
                autoComplete="name"
                placeholder="Your Name" 
                required
                disabled={isSubmitting}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-sm md:text-base disabled:opacity-50"
              />
              
              <input 
                type="email" 
                name="email"
                autoComplete="email"
                placeholder="Your Email" 
                required
                disabled={isSubmitting}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-sm md:text-base disabled:opacity-50"
              />
              
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows={4}
                required
                disabled={isSubmitting}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors resize-none text-sm md:text-base disabled:opacity-50"
              ></textarea>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="cosmic-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 text-sm animate-fade-in">
                  <CheckCircle className="h-4 w-4" />
                  <span>Message sent! I'll reply soon.</span>
                </div>
              )}
              
              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 text-sm animate-fade-in">
                  <AlertCircle className="h-4 w-4" />
                  <span>Failed to send. Email me directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
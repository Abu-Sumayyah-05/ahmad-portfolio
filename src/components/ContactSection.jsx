
import { Mail, Phone, Linkedin, Github, Twitter, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';


export const ContactSection = () => {
    



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
          
            
            
         

        </div>
      </div>
    </section>
  );
};
import { Briefcase, Code, User } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-4 md:space-y-6 text-left">
            <h3 className="text-xl md:text-2xl font-semibold">Experienced Web Developer & ECE Student</h3>
            
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              I'm a 1+ year experienced web developer and Electronics & Computer Engineering student. I build responsive, user-friendly applications with Vue, React, TypeScript, and Tailwind CSS.
            </p>
            
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              I'm passionate about building interactive and visually appealing web applications, creating seamless user experiences, and applying engineering principles to solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 md:pt-4">
              <a href="#contact" className="cosmic-button">Get in Touch</a>
              <a href="#" className="px-6 py-2.5 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center text-sm sm:text-base">
                Download CV
              </a>
            </div>
          </div>

          {/* Optional: Add a visual element here */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full h-64 bg-secondary/50 rounded-2xl flex items-center justify-center">
              <Code className="w-24 h-24 text-primary/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
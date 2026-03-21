import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in inline-block"> Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 inline-block"> Ahmad</span>
            <span className="text-foreground ml-2 opacity-0 animate-fade-in-delay-2 inline-block">Subair</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 px-2 sm:px-4 leading-relaxed">
            Frontend Developer specializing in NEXT Js, VUE JS, and TypeScript. I build responsive, scalable, and user-focused web applications with clean architecture and modern design principles.
          </p>
          
          <div className="pt-4 md:pt-6 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a href="#projects" className="cosmic-button w-full sm:w-auto">View My Work</a>
            <a href="#contact" className="px-6 py-2.5 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 w-full sm:w-auto text-sm sm:text-base">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs md:text-sm text-muted-foreground mb-1">Scroll</span>
        <ArrowDown className="h-4 w-4 md:h-5 md:w-5 text-primary" />
      </div>
    </section>
  );
};
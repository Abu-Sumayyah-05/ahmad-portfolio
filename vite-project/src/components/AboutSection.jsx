import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left Column: About Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Experienced Web Developer & ECE Student
            </h3>
            <p className="text-muted-foreground">
              I’m a 1+ year experienced web developer and Electronics & Computer Engineering student. 
              I build responsive, user-friendly applications with Vue, React, TypeScript, and Tailwind CSS,
              and I’m skilled in problem-solving, circuit design, and bridging software with hardware.
            </p>
            <p className="text-muted-foreground">
              I’m passionate about building interactive and visually appealing web applications,
              creating seamless user experiences, and applying engineering principles to solve real-world problems.
            </p>
            <p className="text-muted-foreground">
              I’m currently expanding my skills in advanced Vue and React patterns, state management, and API integration,
              while continuously exploring new technologies in web development and electronics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">Get in Touch</a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column: Skill Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend development</h4>
                  <p className="text-muted-foreground">Building responsive,
                     user-friendly web applications with Vue, 
                     React, TypeScript, and Tailwind CSS.
                     </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Electronics & Engineering</h4>
                  <p className="text-sm text-muted-foreground">Circuit design, problem-solving, software-hardware integration</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Problem Solving and system design</h4>
                  <p className="text-sm text-muted-foreground">Analyzing complex problems and designing structured, 
                    scalable solutions. I focus on clean architecture, efficient logic flow, and building systems that are maintainable
                     and performance-driven.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
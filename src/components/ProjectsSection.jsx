import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'eCommerce Website',
    description: 'A modern e-commerce web app built with React and Tailwind CSS featuring dynamic products, cart functionality, and a fully responsive UI.',
    image: '/Projects/project 1.png',
    tags: ['React', 'Tailwind CSS', 'Paystack API'],
    demoUrl: 'https://ecommercewebsitealtschool.netlify.app/',
    githubUrl: 'https://github.com/Abu-Sumayyah-05/ecommerce',
  },
  {
    id: 2,
    title: 'Mini Blog API',
    description: 'A lightweight mini-blog application built with Vue, consuming a REST API to display dynamic posts with responsive UI design.',
    image: '/Projects/project 2.png',
    tags: ['Vue', 'REST API', 'TailwindCSS'],
    demoUrl: 'https://alt-school-assessment.netlify.app/',
    githubUrl: 'https://github.com/Abu-Sumayyah-05/blog-api',
  },
  {
    id: 3,
    title: 'Markdown Preview App',
    description: 'A Markdown editor built with modern JavaScript, featuring live preview rendering, efficient state handling, and responsive UI design.',
    image: '/Projects/Project 3.png',
    tags: ['React', 'JavaScript', 'TailwindCSS'],
    demoUrl: 'https://markdown-vuepp.netlify.app/',
    githubUrl: 'https://github.com/Abu-Sumayyah-05/markdown-vue-project',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4 text-sm sm:text-base">
          Here are some of the projects I've worked on, showcasing my skills in web development and design.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-card rounded-xl overflow-hidden shadow-sm card-hover border border-border">
              <div className="h-48 overflow-hidden bg-secondary">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <div className="p-4 md:p-6">
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 md:py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cosmic-button text-xs py-2"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-xs font-medium inline-flex items-center justify-center gap-2"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
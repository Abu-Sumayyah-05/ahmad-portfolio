import { ExternalLink, Github, ArrowRight } from 'lucide-react';
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
    title: 'mini-blog-api',
    description: 'A lightweight mini-blog application built with Vue, consuming a REST API to display dynamic posts with responsive UI design.',
    image: '/Projects/project 2.png',
    tags: ['Vue', 'REST API', 'TailwindCSS'],
    demoUrl: 'https://alt-school-assessment.netlify.app/',
    githubUrl: 'https://github.com/Abu-Sumayyah-05/blog-api?tab=readme-ov-file',
  },
  {
    id: 3,
    title: 'markdown preview app',
    description: 'A Markdown editor built with modern JavaScript, featuring live preview rendering, efficient state handling, and responsive UI design.',
    image: '/Projects/Project 3.png',
    tags: ['React', 'JavaScript', 'TailwindCSS'],
    demoUrl: 'https://markdown-vuepp.netlify.app/',
    githubUrl: 'https://github.com/Abu-Sumayyah-05/markdown-vue-project?',
  },
];
export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary">Projects</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in web development and design. Each project highlights my ability to create responsive, user-friendly applications using modern technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground text-se" key={tag}>{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center gap-4">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="cosmic-button flex items-center gap-2">
                    Demo <ExternalLink size={16} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="cosmic-button flex items-center gap-2">
                    Code <Github size={16} />
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
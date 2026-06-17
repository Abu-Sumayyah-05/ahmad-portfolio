import { cn } from '../lib/utils';
import { useState } from 'react';

const skills = [
  { name: 'HTML/CSS', level: 'Advanced', category: 'frontend' },
  { name: 'JavaScript', level: 'Advanced', category: 'frontend' },
  { name: 'React', level: 'Advanced', category: 'frontend' },
  { name: 'Vue', level: 'Proficient', category: 'frontend' },
  { name: 'TypeScript', level: 'Proficient', category: 'frontend' },
  { name: 'Tailwind CSS', level: 'Advanced', category: 'frontend' },
  { name: 'Git & GitHub', level: 'Advanced', category: 'tools' },
  { name: 'VS Code', level: 'Advanced', category: 'tools' },
  { name: 'Figma', level: 'Proficient', category: 'tools' },
  { name: 'Postman', level: 'Proficient', category: 'tools' },
  { name: 'Vite', level: 'Advanced', category: 'tools' },
  { name: 'Chrome DevTools', level: 'Advanced', category: 'tools' },
  { name: 'REST API Integration', level: 'Advanced', category: 'tools' },
  { name: 'Netlify', level: 'Proficient', category: 'deployment' },
  { name: 'Vercel', level: 'Proficient', category: 'deployment' },
  { name: 'Render', level: 'Proficient', category: 'deployment' },
  { name: 'Environment Configuration', level: 'Proficient', category: 'deployment' },
];

const categories = ['all', 'frontend', 'tools', 'engineering', 'deployment'];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredSkills = skills.filter((skill) => activeCategory === 'all' || skill.category === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                'px-3 md:px-5 py-1.5 md:py-2 rounded-full transition-all duration-300 capitalize text-xs md:text-sm font-medium',
                activeCategory === category 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'bg-card text-foreground hover:bg-secondary border border-border'
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="bg-card rounded-lg p-4 md:p-5 shadow-sm border border-border">
          <div className="flex justify-between items-center mb-2">
           <h4 className="font-semibold text-sm md:text-base">{skill.name}</h4>
           <span className="text-xs md:text-sm text-primary font-medium">{skill.level}</span>
            </div>
              <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-primary h-full rounded-full transition-all duration-500" 
                  style={{ width: skill.level + '%' }}
                ></div>
              </div>
              <span className="text-xs text-muted-foreground mt-1.5 inline-block capitalize">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import { cn } from '../lib/utils';
import { useState } from 'react';

const skills = [
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend' },
  { name: 'Vue', level: 75, category: 'frontend' },
  { name: 'TypeScript', level: 70, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'GitHub', level: 70, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Vite', level: 80, category: 'tools' },
  { name: 'Figma', level: 70, category: 'tools' },
  { name: 'Postman', level: 75, category: 'tools' },
  { name: 'Chrome DevTools', level: 90, category: 'tools' },
  { name: 'Problem Solving', level: 85, category: 'engineering' },
  { name: 'System Design', level: 75, category: 'engineering' },
  { name: 'Circuit Analysis', level: 70, category: 'engineering' },
  { name: 'Software-Hardware Integration', level: 70, category: 'engineering' },
  { name: 'Git Workflow', level: 80, category: 'deployment' },
  { name: 'Netlify', level: 70, category: 'deployment' },
  { name: 'Vercel', level: 70, category: 'deployment' },
  { name: 'Environment Configuration', level: 65, category: 'deployment' },
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
                <span className="text-xs md:text-sm text-muted-foreground font-medium">{skill.level}%</span>
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
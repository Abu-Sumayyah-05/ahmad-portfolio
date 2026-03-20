import { useState } from 'react';
import { cn } from '../lib/utils';
const skills = [
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend' },
  { name: 'Vue', level: 75, category: 'frontend' },
  { name: 'TypeScript', level: 70, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Github', level: 70, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Vite', level: 80, category: 'tools' },
  { name: 'Figma', level: 70, category: 'tools' },
  { name: 'Postman', level: 75, category: 'tools' },
  { name: 'ChromeDevTOols', level: 90, category: 'tools' },
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
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bd-secondary'
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card rounded-lg p-6 shadow-xs">
              <h4 className="font-semibold text-lg">{skill.name}</h4>
              <div className="w-full bg-secondary rounded-full h-2 mt-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: skill.level + '%' }}></div>
              </div>
              <span className="text-xs text-muted-foreground mt-1">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
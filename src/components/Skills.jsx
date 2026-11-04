import { skillGroups } from '../data/skills';
import { useInView } from '../hooks/useInView';
import { cn } from '../lib/utils';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';

const levelTag = { worked: 'Worked with', learning: 'Learning' };

// One category column. Its items slide in one after another once the column is visible.
const SkillGroup = ({ group, index }) => {
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <div ref={ref} className="border-t border-line pt-6">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="label-mono text-accent">{group.title}</h3>
        <span className="label-mono text-[.6rem] text-muted">0{index + 1}</span>
      </div>
      <p className="mt-2 mb-4 font-serif text-lg italic text-muted">{group.blurb}</p>

      <ul>
        {group.items.map((item, i) => (
          <li
            key={item.name}
            style={{ transitionDelay: inView ? `${i * 45}ms` : '0ms' }}
            className={cn(
              'group/item flex items-center justify-between gap-3 border-b border-dashed border-fg/10 py-2.5',
              'transition-[opacity,translate] duration-700 ease-out-expo',
              inView ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            )}
          >
            {/* The diamond fills in and the name nudges right on hover */}
            <span className="flex items-center gap-2.5 transition-transform duration-300 group-hover/item:translate-x-1">
              <span
                aria-hidden="true"
                className={cn(
                  'size-1.5 rotate-45 border border-accent transition-colors duration-300 group-hover/item:bg-accent',
                  !item.level && 'bg-accent'
                )}
              />
              <span className={item.level ? 'text-muted' : ''}>{item.name}</span>
            </span>
            {item.level && <span className="label-mono shrink-0 text-[.58rem] text-muted">{levelTag[item.level]}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Skills = () => (
  <section id="skills" className="defer-render py-24 lg:py-32">
    <div className="wrap">
      <SectionLabel className="text-accent">03 — Toolkit</SectionLabel>
      <Reveal as="h2" className="max-w-[20ch] font-serif text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.08] font-[350] tracking-[-.015em]">
        No progress bars. <em className="font-light text-accent">Just what I actually use.</em>
      </Reveal>

      {/* Legend: filled = regular toolkit; hollow + tag = worked with or learning */}
      <Reveal as="ul" delay={0.1} className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
        <li className="flex items-center gap-2"><span className="size-1.5 rotate-45 bg-accent" />Regular toolkit</li>
        <li className="flex items-center gap-2"><span className="size-1.5 rotate-45 border border-accent" />Tagged: worked with on projects, or currently learning</li>
      </Reveal>

      <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <SkillGroup key={group.title} group={group} index={i} />
        ))}
      </div>
    </div>
  </section>
);

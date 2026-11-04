import { useEffect, useRef } from 'react';
import { featured, more } from '../data/projects';
import { prefersReducedMotion } from '../lib/motion';
import { CaseStudy } from './CaseStudy';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';

export const Work = () => {
  const cards = useRef([]);

  // Desktop "deck" effect: cards are sticky, and as the next card slides over,
  // the one underneath shrinks and dims slightly. One update per animation frame.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    if (prefersReducedMotion()) return;
    let frame;

    const update = () => {
      cards.current.forEach((card, i) => {
        const next = cards.current[i + 1];
        if (!card) return;
        if (!next || !desktop.matches) {
          card.style.transform = '';
          card.style.filter = '';
          return;
        }
        // 0 while the next card is a full card-height away, 1 once it has fully covered this one
        const gap = next.getBoundingClientRect().top - card.getBoundingClientRect().top;
        const progress = Math.min(1, Math.max(0, 1 - gap / card.offsetHeight));
        card.style.transform = `scale(${1 - progress * 0.05})`;
        card.style.filter = `brightness(${1 - progress * 0.15})`;
      });
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="work" className="defer-render bg-paper py-24 text-ink lg:py-32">
      <div className="wrap">
        <SectionLabel className="text-paper-accent">02 — Selected work</SectionLabel>
        <Reveal as="h2" className="max-w-[18ch] font-serif text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.08] font-[350] tracking-[-.015em]">
          Products I've helped <em className="font-light text-paper-accent">ship.</em>
        </Reveal>

        <div className="mt-14 space-y-8 lg:space-y-12">
          {featured.map((project, i) => (
            <CaseStudy key={project.id} project={project} index={i} ref={(el) => (cards.current[i] = el)} />
          ))}
        </div>

        {/* Smaller projects */}
        <div className="mt-24">
          <Reveal as="h3" className="label-mono mb-6 text-paper-accent">More things I've built</Reveal>
          <ul className="grid border-t border-paper-line md:grid-cols-2 md:gap-x-12">
            {more.map((item, i) => {
              const Row = item.href ? 'a' : 'div';
              return (
                <Reveal as="li" key={item.title} delay={(i % 2) * 0.08} className="border-b border-paper-line">
                  <Row
                    {...(item.href && { href: item.href, target: '_blank', rel: 'noopener noreferrer' })}
                    className="group block py-6 transition-[padding] duration-500 ease-out-expo hover:px-3"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="font-serif text-xl">{item.title}</h4>
                      <span className="label-mono shrink-0 text-[.62rem] text-ink-muted">{item.tag}</span>
                    </div>
                    <p className="mt-2 text-sm text-ink-muted">{item.text}</p>
                    {item.href && (
                      <span className="mt-3 inline-block text-sm font-semibold text-paper-accent transition-transform duration-300 group-hover:translate-x-1">
                        View ↗
                      </span>
                    )}
                  </Row>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

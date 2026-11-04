import { useEffect, useRef } from 'react';
import { journey } from '../data/skills';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';

export const Journey = () => {
  const list = useRef(null);
  const fill = useRef(null);

  // The glowing line grows down the timeline as you scroll: its height is however
  // much of the list has passed 60% of the way down the screen.
  useEffect(() => {
    let frame;
    const update = () => {
      const r = list.current.getBoundingClientRect();
      const h = Math.min(r.height, Math.max(0, window.innerHeight * 0.6 - r.top));
      fill.current.style.height = `${h}px`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="journey" className="defer-render bg-bg-2 py-24 lg:py-32">
      <div className="wrap">
        <SectionLabel className="text-accent">04 — Journey</SectionLabel>
        <Reveal as="h2" className="max-w-[18ch] font-serif text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.08] font-[350] tracking-[-.015em]">
          Where I've been <em className="font-light text-accent">building.</em>
        </Reveal>

        {/* --rail is where the vertical line sits: left edge on mobile, after the date column on desktop */}
        <ol ref={list} className="relative mt-14 [--rail:0px] md:[--rail:11rem]">
          <span aria-hidden="true" className="absolute top-0 bottom-0 left-[var(--rail)] w-px bg-line" />
          <span
            ref={fill}
            aria-hidden="true"
            className="absolute top-0 left-[var(--rail)] h-0 w-px bg-accent shadow-[0_0_12px_var(--accent)]"
          />

          {journey.map((item) => (
            <Reveal
              as="li"
              key={item.title}
              className="relative grid gap-1 py-6 pl-8 md:grid-cols-[11rem_1fr] md:gap-0 md:pl-0"
            >
              {/* Diamond marker sitting on the rail */}
              <span
                aria-hidden="true"
                className="absolute top-[2.15rem] left-[calc(var(--rail)-5px)] size-[11px] rotate-45 border border-accent bg-bg-2"
              />
              <span className="label-mono pt-1.5 text-muted md:pr-6">{item.when}</span>
              <div className="md:pl-10">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-0.5 text-sm font-medium text-accent">{item.org}</p>
                <p className="mt-2 max-w-2xl text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

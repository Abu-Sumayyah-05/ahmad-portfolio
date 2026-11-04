import { marqueeStack } from '../data/site';

// Endless scrolling strip of the stack. The list is rendered twice and the track
// slides left by exactly half its width, so the loop has no visible seam.
export const Marquee = () => (
  <div className="marquee overflow-hidden border-y border-line bg-bg-2 py-5">
    <div className="marquee-track flex w-max">
      {[0, 1].map((copy) => (
        <ul key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
          {marqueeStack.map((tech) => (
            <li key={tech} className="flex items-center font-serif text-2xl italic">
              {tech}
              <span className="mx-12 text-base not-italic text-accent" aria-hidden="true">✦</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

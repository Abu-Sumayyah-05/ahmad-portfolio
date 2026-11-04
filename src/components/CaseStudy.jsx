import { useInView } from '../hooks/useInView';
import { WalkthroughVideo } from './WalkthroughVideo';
import { cn } from '../lib/utils';

const kindLabel = {
  company: (p) => `Company work · ${p.org}`,
  client: () => 'Client project',
  team: () => 'Team project',
  own: () => 'Own project · with friends',
  personal: () => 'Personal project',
};

// One case study card. On desktop it's sticky, so successive cards stack like a deck;
// `index` offsets each card's sticky position so the edges of earlier cards peek out.
export const CaseStudy = ({ project, index, ref }) => {
  const [viewRef, inView] = useInView({ threshold: 0.15 });
  // Screenshots default to 1280×800 (16:10); a project can override with imageSize
  const [w, h] = project.imageSize ?? [1280, 800];
  // Address shown in the mock browser bar: an explicit host, or the link's domain
  const host = project.host ?? new URL(project.link?.href ?? 'https://example.com').hostname.replace('www.', '');

  return (
    <article
      ref={ref}
      style={{ '--stick': `calc(6.5rem + ${index * 1.4}rem)` }}
      className="origin-top lg:sticky lg:top-[var(--stick)]"
    >
      <div
        ref={viewRef}
        className={cn(
          'group grid gap-8 border border-paper-line bg-paper-hi p-6 shadow-[0_-20px_60px_-30px_rgba(0,0,0,.35)] sm:p-10 lg:min-h-[520px] lg:grid-cols-[1fr_1.1fr] lg:gap-12',
          'reveal',
          inView && 'is-visible'
        )}
      >
        <div className="flex flex-col">
          <span className="text-outline font-serif text-7xl leading-none">0{index + 1}</span>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="label-mono bg-deep px-2.5 py-1 text-[.62rem] text-on-deep">{kindLabel[project.kind](project)}</span>
            <span className="label-mono border border-paper-line px-2.5 py-1 text-[.62rem] text-ink-muted">{project.status}</span>
          </div>

          <h3 className="mt-5 font-serif text-4xl leading-tight">{project.title}</h3>
          <p className="mt-3 text-ink-muted">{project.summary}</p>

          <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2.5 text-[.92rem]">
            {project.details.map(([term, desc]) => (
              <div key={term} className="contents">
                <dt className="label-mono pt-1 text-[.62rem] text-paper-accent">{term}</dt>
                <dd>{desc}</dd>
              </div>
            ))}
          </dl>
          {project.note && <p className="mt-4 text-sm text-ink-muted italic">{project.note}</p>}

          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex w-fit items-center gap-2 border-b border-current pt-7 pb-0.5 font-semibold transition-colors hover:text-paper-accent"
            >
              {project.link.label} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>

        {/* Visual: screenshot in a browser frame on a patterned panel.
            The frame sits tilted in 3D and straightens on hover; the pattern rotates. */}
        <div className="relative isolate order-first grid min-h-[240px] place-items-center overflow-hidden rounded-md bg-deep p-5 sm:p-8 lg:order-none">
          <div className="star-pattern-sm absolute -inset-1/2 -z-10 bg-on-deep opacity-[.12] transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110 group-hover:rotate-12" />
          <figure className="tilt-frame w-full overflow-hidden rounded-md bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,.55)]">
            <div className="flex items-center gap-1.5 border-b border-black/10 bg-[#f4f3f0] px-3 py-2">
              <i className="size-2 rounded-full bg-black/15" />
              <i className="size-2 rounded-full bg-black/15" />
              <i className="size-2 rounded-full bg-black/15" />
              <span className="ml-3 truncate rounded bg-black/5 px-2 py-0.5 font-mono text-[.62rem] text-black/55">{host}</span>
            </div>
            {project.video ? (
              <WalkthroughVideo video={project.video} title={project.title} />
            ) : (
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                width={w}
                height={h}
                loading="lazy"
                decoding="async"
                style={{ aspectRatio: `${w} / ${h}` }}
                className="block w-full object-cover object-top"
              />
            )}
          </figure>
        </div>
      </div>
    </article>
  );
};

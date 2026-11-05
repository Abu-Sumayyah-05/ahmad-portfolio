import { useEffect } from 'react';
import { alQanitaat as cs } from '../data/alQanitaat';
import { cn } from '../lib/utils';
import { BrowserFrame } from '../components/BrowserFrame';
import { Panel, TopBar } from '../components/CaseLayout';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/Reveal';
import { Rosette } from '../components/Rosette';
import { SectionLabel } from '../components/SectionLabel';

const host = 'al-qanitaat.onrender.com';
const h2 = 'max-w-[20ch] font-serif text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.08] font-[350] tracking-[-.015em]';

export const AlQanitaatCase = () => {
  // Page title and description for this route (the home page sets its own in index.html)
  useEffect(() => {
    const prevTitle = document.title;
    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.content;
    document.title = 'Al Qanitaat case study · Ahmad Subair';
    desc?.setAttribute('content', 'How Ahmad Subair built Al Qanitaat end to end: a React, Node.js, Express and PostgreSQL platform for Islamic knowledge for Muslim women.');
    window.scrollTo(0, 0);
    // The case study shows the site's real fonts in its Design section, so load them here only
    const fonts = document.createElement('link');
    fonts.rel = 'stylesheet';
    fonts.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&family=IBM+Plex+Sans+Arabic:wght@500&display=swap';
    document.head.appendChild(fonts);
    return () => {
      document.title = prevTitle;
      if (prevDesc) desc.setAttribute('content', prevDesc);
      fonts.remove();
    };
  }, []);

  return (
    <>
      <TopBar />
      <main>
        {/* ---------- Intro ---------- */}
        <header id="top" className="relative overflow-hidden pt-32 pb-16 lg:pt-40">
          <Rosette withTraces={false} className="pointer-events-none absolute -top-40 -right-40 -z-0 size-[560px] opacity-[.08]" />
          <div className="wrap relative">
            <p className="label-mono fade-up mb-6 text-accent">Case study · {cs.meta[2][1]}</p>
            <h1 className="font-serif text-[clamp(3rem,9vw,7.5rem)] leading-[.95] font-[350] tracking-[-.025em]">
              <span className="rise-line"><span>{cs.title}</span></span>
            </h1>
            <p className="fade-up mt-5 max-w-[30ch] font-serif text-[clamp(1.4rem,2.6vw,2.1rem)] leading-snug font-light text-accent italic" style={{ '--d': '.25s' }}>
              {cs.subtitle}
            </p>
            <p className="fade-up mt-6 max-w-2xl text-lg text-muted" style={{ '--d': '.4s' }}>{cs.lede}</p>

            <dl className="fade-up mt-12 grid border-y border-line sm:grid-cols-2 lg:grid-cols-4" style={{ '--d': '.55s' }}>
              {cs.meta.map(([term, desc], i) => (
                <div key={term} className={cn('py-5 lg:px-6', i && 'border-t border-line sm:border-t-0', i % 2 && 'sm:border-l sm:pl-6', i === 2 && 'lg:border-l', i === 0 && 'lg:pl-0')}>
                  <dt className="label-mono text-[.62rem] text-accent">{term}</dt>
                  <dd className="mt-1.5 text-[.95rem]">{desc}</dd>
                </div>
              ))}
            </dl>

            <a
              href={cs.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary fade-up mt-10 inline-flex items-center gap-2.5 rounded-sm px-6 py-4 font-semibold"
              style={{ '--d': '.7s' }}
            >
              Visit the live site <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="wrap fade-up relative mt-16" style={{ '--d': '.8s' }}>
            <Panel>
              <BrowserFrame {...cs.hero} host={host} eager />
            </Panel>
          </div>
        </header>

        {/* ---------- 01 The idea ---------- */}
        <section className="py-20 lg:py-28">
          <div className="wrap">
            <SectionLabel className="text-accent">01 — The idea</SectionLabel>
            <Reveal as="h2" className={h2}>Knowledge that's <em className="font-light text-accent">easy to return to.</em></Reveal>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
              <Reveal className="space-y-5 text-lg text-muted">
                {cs.idea.paragraphs.map((p) => <p key={p}>{p}</p>)}
              </Reveal>
              <Reveal as="figure" delay={0.1} className="border-l-2 border-accent bg-bg-2 p-7">
                <blockquote className="font-serif text-xl leading-relaxed italic">“{cs.idea.quote}”</blockquote>
                <figcaption className="label-mono mt-4 text-[.62rem] text-muted">{cs.idea.quoteSource}</figcaption>
              </Reveal>
            </div>
            <Reveal className="mt-14">
              <img
                src={cs.idea.topics.src}
                alt={cs.idea.topics.alt}
                width={cs.idea.topics.size[0]}
                height={cs.idea.topics.size[1]}
                loading="lazy"
                decoding="async"
                className="w-full rounded-md border border-line"
              />
              <p className="mt-3 text-sm text-muted">Nine topics from the categories API, each marked with an Arabic letter.</p>
            </Reveal>
          </div>
        </section>

        {/* ---------- 02 What I built ---------- */}
        <section className="bg-paper py-20 text-ink lg:py-28">
          <div className="wrap">
            <SectionLabel className="text-paper-accent">02 — What I built</SectionLabel>
            <Reveal as="h2" className={h2}>From first read to <em className="font-light text-paper-accent">published.</em></Reveal>

            <div className="mt-16 space-y-20 lg:space-y-28">
              {cs.features.map((f, i) =>
                f.image ? (
                  <div key={f.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                    <Reveal className={cn(i % 2 && 'lg:order-2')}>
                      <span className="text-outline font-serif text-5xl leading-none">0{i + 1}</span>
                      <h3 className="mt-4 font-serif text-3xl leading-tight">{f.title}</h3>
                      <p className="mt-4 text-lg text-ink-muted">{f.text}</p>
                    </Reveal>
                    <Reveal delay={0.1}>
                      <Panel className="p-4 sm:p-6 lg:p-8">
                        <BrowserFrame {...f.image} host={host} className="tilt-frame" />
                      </Panel>
                    </Reveal>
                  </div>
                ) : (
                  // The admin editor sits behind a login, so it's described rather than shown
                  <Reveal key={f.title} className="grid gap-6 border-y border-paper-line py-10 lg:grid-cols-[auto_1fr] lg:gap-12">
                    <span className="text-outline font-serif text-5xl leading-none">0{i + 1}</span>
                    <div>
                      <h3 className="font-serif text-3xl leading-tight">{f.title}</h3>
                      <p className="mt-4 max-w-2xl text-lg text-ink-muted">{f.text}</p>
                    </div>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>

        {/* ---------- 03 Under the hood ---------- */}
        <section className="py-20 lg:py-28">
          <div className="wrap">
            <SectionLabel className="text-accent">03 — Under the hood</SectionLabel>
            <Reveal as="h2" className={h2}>One stack, <em className="font-light text-accent">top to bottom.</em></Reveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
              {/* Architecture: three layers joined by a vertical "trace" */}
              <Reveal>
                <ol className="relative space-y-5">
                  <span aria-hidden="true" className="absolute top-6 bottom-6 left-[1.35rem] w-px bg-accent/40" />
                  {cs.architecture.layers.map((layer, i) => (
                    <li key={layer.name} className="relative flex gap-5">
                      <span className="z-10 grid size-11 shrink-0 place-items-center rounded-full border border-accent bg-bg font-mono text-sm text-accent">0{i + 1}</span>
                      <div className="flex-1 border border-line bg-bg-2 p-5">
                        <p className="font-serif text-xl">{layer.name}</p>
                        <p className="mt-1 text-sm text-muted">{layer.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-sm text-muted">{cs.architecture.hosting}</p>
              </Reveal>

              {/* The real API surface, as seen from the live site */}
              <Reveal delay={0.1}>
                <div className="overflow-hidden rounded-md border border-line">
                  <p className="label-mono border-b border-line bg-bg-2 px-5 py-3 text-[.62rem] text-accent">REST API</p>
                  <ul className="divide-y divide-line">
                    {cs.architecture.endpoints.map(([method, path, what]) => (
                      <li key={path} className="grid gap-1 px-5 py-3 sm:grid-cols-[auto_1fr] sm:gap-4">
                        <code className="font-mono text-[.8rem] whitespace-nowrap">
                          <span className="text-accent">{method}</span> {path}
                        </code>
                        <span className="text-sm text-muted sm:text-right">{what}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <p className="label-mono text-[.62rem] text-muted">An article carries</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {cs.architecture.articleFields.map((f) => (
                      <li key={f} className="rounded-sm border border-line px-2.5 py-1 font-mono text-xs">{f}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- 04 Built for trust ---------- */}
        <section className="bg-bg-2 py-20 lg:py-28">
          <div className="wrap">
            <SectionLabel className="text-accent">04 — Built for trust</SectionLabel>
            <Reveal as="h2" className={h2}>Editorial promises, <em className="font-light text-accent">kept in code.</em></Reveal>
            <Reveal as="p" className="mt-5 max-w-2xl text-lg text-muted">
              The site's About page makes clear promises about authorship, sources and privacy. Each one is something the product actually does.
            </Reveal>
            <ul className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {cs.trust.map(([promise, how], i) => (
                <Reveal as="li" key={promise} delay={(i % 3) * 0.08} className="bg-bg-2 p-6">
                  <span aria-hidden="true" className="block size-2 rotate-45 bg-accent" />
                  <p className="mt-4 font-serif text-xl">{promise}</p>
                  <p className="mt-2 text-sm text-muted">{how}</p>
                </Reveal>
              ))}
              {/* Sixth cell: where these promises come from */}
              <Reveal as="li" delay={0.16} className="bg-bg-2">
                <a
                  href={`${cs.live}about`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between gap-6 p-6 transition-colors hover:bg-bg"
                >
                  <p className="font-serif text-xl">Read the promises in full</p>
                  <span className="label-mono text-[.62rem] text-accent transition-transform duration-300 group-hover:translate-x-1">
                    Al Qanitaat · About ↗
                  </span>
                </a>
              </Reveal>
            </ul>
          </div>
        </section>

        {/* ---------- 05 Design ---------- */}
        <section className="py-20 lg:py-28">
          <div className="wrap">
            <SectionLabel className="text-accent">05 — Design</SectionLabel>
            <Reveal as="h2" className={h2}>Warm, calm and <em className="font-light text-accent">readable.</em></Reveal>
            <Reveal as="p" className="mt-5 max-w-2xl text-lg text-muted">{cs.design.note}</Reveal>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
              <div className="space-y-10">
                {/* Palette swatches */}
                <Reveal>
                  <p className="label-mono mb-4 text-[.62rem] text-muted">Palette</p>
                  <ul className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {cs.design.palette.map(([name, hex]) => (
                      <li key={hex}>
                        <span className="block aspect-square rounded-md border border-line" style={{ background: hex }} />
                        <span className="mt-2 block text-sm">{name}</span>
                        <span className="block font-mono text-xs text-muted">{hex}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                {/* Type specimens in the site's real fonts */}
                <Reveal className="grid gap-4 sm:grid-cols-2">
                  {cs.design.fonts.map((font) => (
                    <div key={font.name} className="border border-line p-6" style={{ background: '#fff9ea', color: '#6e2e12' }}>
                      <p
                        dir={font.rtl ? 'rtl' : undefined}
                        lang={font.rtl ? 'ar' : undefined}
                        className={cn('leading-tight font-bold', font.rtl ? 'text-5xl' : 'text-2xl')}
                        style={{ fontFamily: `"${font.name}", sans-serif` }}
                      >
                        {font.sample}
                      </p>
                      <p className="mt-4 text-sm font-semibold">{font.name}</p>
                      <p className="text-xs opacity-75">{font.role}</p>
                    </div>
                  ))}
                </Reveal>
              </div>

              {/* Phones */}
              <Reveal delay={0.1} className="flex justify-center gap-4 lg:gap-5">
                {cs.design.mobile.map((m, i) => (
                  <div key={m.src} className={cn('w-[44%] max-w-[210px] overflow-hidden rounded-[1.6rem] border-[6px] border-[#141414] shadow-xl lg:w-[200px]', i === 1 && 'mt-10')}>
                    <img src={m.src} alt={m.alt} width={m.size[0]} height={m.size[1]} loading="lazy" decoding="async" className="block w-full" />
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Closing ---------- */}
        <section className="relative isolate overflow-hidden border-t border-line py-24 text-center">
          <Rosette withTraces={false} className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[700px] -translate-x-1/2 -translate-y-1/2 opacity-[.07]" />
          <div className="wrap">
            <Reveal as="h2" className="mx-auto max-w-[16ch] font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] font-[350]">
              See it for <em className="shimmer font-light">yourself.</em>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={cs.live} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2.5 rounded-sm px-6 py-4 font-semibold">
                Visit Al Qanitaat <span aria-hidden="true">↗</span>
              </a>
              <a href="/#work" className="inline-flex items-center rounded-sm border border-fg/25 px-6 py-4 font-semibold transition-colors hover:border-accent hover:text-accent">
                Back to all work
              </a>
              <a href="/#contact" className="inline-flex items-center rounded-sm border border-fg/25 px-6 py-4 font-semibold transition-colors hover:border-accent hover:text-accent">
                Get in touch
              </a>
            </Reveal>
            <p className="mt-10 text-xs text-muted">Screenshots taken from the live site, November 2026.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

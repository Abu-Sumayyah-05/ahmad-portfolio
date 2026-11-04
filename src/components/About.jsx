import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';

const facts = [
  ['Based in', 'Lagos, NG'],
  ['Focus', 'Full-stack'],
  ['Learning', 'Payments & AI'],
];

export const About = () => (
  <section id="about" className="defer-render py-24 lg:py-32">
    <div className="wrap">
      <SectionLabel className="text-accent">01 — About</SectionLabel>
      <Reveal as="h2" className="max-w-[18ch] font-serif text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.08] font-[350] tracking-[-.015em]">
        An engineer who builds for <em className="font-light text-accent">real conditions</em>, not demo days.
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="space-y-5 text-lg text-muted [&_b]:font-medium [&_b]:text-fg">
          <p>
            I'm Ahmad Subair, though most people call me <b>Abu Sumayyah</b>. I'm a full-stack developer in Lagos. I'm
            strongest on the frontend with React, Next.js and TypeScript, and I build backends with Node.js, Express and
            PostgreSQL.
          </p>
          <p>
            Right now I'm a frontend developer at <b>A4 Technologies</b>, working on EduGear, and I've been building React
            frontends for <b>Quant</b> since May 2025. Alongside commercial work, I build tools for the Muslim community,
            from Islamic resource sites to madrasah tooling.
          </p>
          <p>
            I'm also training as a backend engineer with <b>TechCrush</b> on the Payaza fintech track, digging into how
            money actually moves: payment rails like NIP and RTGS, double-entry accounting and reconciliation.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {/* "Circuits by day / Code by night" split card */}
          <div className="grid border border-line sm:grid-cols-2">
            <div className="p-7">
              <span className="label-mono text-accent">By day</span>
              <h3 className="mt-2 mb-1 font-serif text-2xl">Circuits</h3>
              <p className="text-sm text-muted">B.Eng. Electronic & Computer Engineering at LASU. 300 level, graduating 2028.</p>
            </div>
            <div className="border-t border-line p-7 sm:border-t-0 sm:border-l">
              <span className="label-mono text-accent">By night</span>
              <h3 className="mt-2 mb-1 font-serif text-2xl">Code</h3>
              <p className="text-sm text-muted">Shipping products at A4 Technologies and Quant, plus client work.</p>
            </div>
          </div>
          <dl className="grid grid-cols-3 border border-t-0 border-line">
            {facts.map(([label, value], i) => (
              <div key={label} className={i ? 'border-l border-line px-4 py-5 sm:px-7' : 'px-4 py-5 sm:px-7'}>
                <dt className="text-xs text-muted sm:text-sm">{label}</dt>
                <dd className="font-serif text-base sm:text-lg">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </div>
  </section>
);

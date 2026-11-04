import { links, profile } from '../data/site';

export const Footer = () => (
  <footer className="border-t border-line py-8 text-sm text-muted">
    <div className="wrap flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <p>
        © {new Date().getFullYear()} {profile.name} · {profile.alias}
      </p>
      <p className="label-mono text-[.62rem]">
        <span className="text-accent">◆</span> Circuits by day · Code by night
      </p>
      <div className="flex items-center gap-5">
        <a className="link-draw hover:text-fg" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="link-draw hover:text-fg" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#top" className="label-mono rounded-full border border-line px-3 py-1.5 text-[.62rem] transition-colors hover:border-accent hover:text-accent">
          Top ↑
        </a>
      </div>
    </div>
  </footer>
);

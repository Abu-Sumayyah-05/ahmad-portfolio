import { profile } from '../data/site';
import { cn } from '../lib/utils';
import { ThemeSwitcher } from './ThemeSwitcher';

// Shared pieces of the case study pages (/work/...)

// Small fixed bar: back to the portfolio, palette switcher, résumé
export const TopBar = () => (
  <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 py-3 backdrop-blur-md">
    <div className="wrap flex items-center justify-between gap-4">
      <a href="/#work" className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
        All work
      </a>
      <a href="/" className="hidden font-serif text-lg sm:block">{profile.alias}</a>
      <div className="flex items-center gap-3">
        <ThemeSwitcher />
        <a href={profile.cv} download className="hidden rounded-sm border border-accent px-4 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-on-accent sm:inline-block">
          Résumé ↓
        </a>
      </div>
    </div>
  </nav>
);

// Decorative panel behind screenshots, matching the case-study cards on the home page
export const Panel = ({ children, className }) => (
  <div className={cn('relative isolate overflow-hidden rounded-md bg-deep p-4 sm:p-8 lg:p-12', className)}>
    <div className="star-pattern-sm absolute -inset-1/2 -z-10 bg-on-deep opacity-[.12]" />
    {children}
  </div>
);

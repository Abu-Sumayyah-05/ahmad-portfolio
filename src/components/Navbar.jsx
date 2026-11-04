import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { navItems, profile } from '../data/site';
import { useMagnetic } from '../hooks/useMagnetic';
import { ThemeSwitcher } from './ThemeSwitcher';

const StarMark = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" strokeWidth="5" className={cn('stroke-accent', className)} aria-hidden="true">
    <path d="M50 5 L61 39 L95 50 L61 61 L50 95 L39 61 L5 50 L39 39 Z" />
  </svg>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const cvRef = useMagnetic(0.25);

  // Solid background once the page has scrolled a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Underline the link for whichever section crosses the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navItems.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled || menuOpen
            ? 'border-b border-line bg-bg/85 py-3 backdrop-blur-md'
            : 'border-b border-transparent py-5'
        )}
      >
        <div className="wrap flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2.5 font-serif text-xl" onClick={() => setMenuOpen(false)}>
            <StarMark className="size-7 animate-[spin_18s_linear_infinite]" />
            {profile.alias}
          </a>

          <div className="hidden items-center gap-8 text-[.92rem] lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={active === item.href}
                className={cn('link-draw transition-colors hover:text-fg', active === item.href ? 'text-fg' : 'text-muted')}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeSwitcher />
            <a
              ref={cvRef}
              href={profile.cv}
              download
              className="hidden rounded-sm border border-accent px-4 py-2 text-sm text-accent transition-[background,color,transform] duration-300 hover:bg-accent hover:text-on-accent sm:inline-block"
            >
              Résumé ↓
            </a>

            {/* Hamburger: two lines that cross into an X */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="relative size-10 lg:hidden"
            >
              <span className={cn('absolute left-2 h-px w-6 bg-fg transition-all duration-500', menuOpen ? 'top-1/2 rotate-45' : 'top-[15px]')} />
              <span className={cn('absolute left-2 h-px w-6 bg-fg transition-all duration-500', menuOpen ? 'top-1/2 -rotate-45' : 'top-[24px]')} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu: wipes down from the top, then the links rise in one after another.
          While closed it isn't rendered at all (content-visibility: hidden), so it costs
          nothing on page load; transition-discrete keeps it visible until the close wipe ends. */}
      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col justify-center bg-bg-2 transition-[clip-path,content-visibility] transition-discrete duration-700 ease-out-expo lg:hidden',
          menuOpen ? '[clip-path:inset(0_0_0_0)]' : 'pointer-events-none [clip-path:inset(0_0_100%_0)] [content-visibility:hidden]'
        )}
        aria-hidden={!menuOpen}
      >
        <div className="star-pattern drift pointer-events-none absolute inset-0 -right-20 -bottom-20 bg-accent-2 opacity-[.05]" />
        <ul className="wrap relative space-y-2">
          {navItems.map((item, i) => (
            <li key={item.href} className="overflow-hidden">
              <a
                href={item.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'flex items-baseline gap-4 font-serif text-5xl transition-transform duration-700 ease-out-expo sm:text-6xl',
                  menuOpen ? 'translate-y-0' : 'translate-y-full'
                )}
                style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : '0ms' }}
              >
                <span className="label-mono text-accent">0{i + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="wrap relative mt-12">
          <a href={profile.cv} download tabIndex={menuOpen ? 0 : -1} className="label-mono text-accent">
            Download résumé ↓
          </a>
        </div>
      </div>
    </>
  );
};

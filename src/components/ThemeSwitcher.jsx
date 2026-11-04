import { useState } from 'react';
import { palettes } from '../data/site';
import { prefersReducedMotion } from '../lib/motion';

const applyPalette = (id) => {
  document.documentElement.dataset.theme = id;
  // Keep the mobile browser's address bar in step with the page colour
  const color = palettes.find((p) => p.id === id)?.themeColor;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
};

// Three swatches. Picking one "spills" the new palette out in a circle from the click point.
export const ThemeSwitcher = () => {
  // index.html already applied the saved palette before React loaded; read it back
  const [active, setActive] = useState(() => document.documentElement.dataset.theme);

  const choose = (id, e) => {
    if (id === active) return;
    setActive(id);
    try {
      localStorage.setItem('palette', id);
    } catch {
      // Private browsing can block storage; the switch still works for this visit
    }

    // No View Transitions support, reduced motion, or keyboard activation (no pointer position): switch instantly
    if (!document.startViewTransition || prefersReducedMotion() || !e.clientX) {
      applyPalette(id);
      return;
    }

    // The browser snapshots the old page, we apply the new palette, then we animate the
    // new snapshot's clip-path from a 0px circle at the click to one covering the screen.
    const x = e.clientX, y = e.clientY;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(() => applyPalette(id)).ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 750, easing: 'cubic-bezier(.65,0,.35,1)', pseudoElement: '::view-transition-new(root)' }
      );
    });
  };

  return (
    <div role="radiogroup" aria-label="Colour palette" className="flex gap-1.5 rounded-full border border-line p-1">
      {palettes.map((p) => (
        <button
          key={p.id}
          role="radio"
          aria-checked={active === p.id}
          aria-label={`${p.label} palette`}
          onClick={(e) => choose(p.id, e)}
          className="group relative size-[22px] rounded-full transition-transform duration-300 hover:scale-115 aria-checked:shadow-[0_0_0_2px_var(--bg),0_0_0_3.5px_var(--accent)]"
          style={{ background: `linear-gradient(135deg, ${p.swatch[0]} 50%, ${p.swatch[1]} 50%)` }}
        >
          {/* Name tooltip on hover */}
          <span className="label-mono pointer-events-none absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 -translate-y-1 rounded-sm bg-fg px-2 py-1 text-[.6rem] whitespace-nowrap text-bg opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
            {p.label}
          </span>
        </button>
      ))}
    </div>
  );
};

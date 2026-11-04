import { useEffect, useRef, useState } from 'react';
import { hasFinePointer, prefersReducedMotion } from '../lib/motion';

// Decorative cursor: a dot that tracks the pointer exactly, and a ring that
// eases after it and swells over links/buttons. The real cursor stays visible,
// so nothing is lost if this doesn't render (touch devices, reduced motion).
export const Cursor = () => {
  const [enabled] = useState(() => hasFinePointer() && !prefersReducedMotion());
  const ring = useRef(null);
  const dot = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let frame;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.current.style.transform = `translate(${mx}px, ${my}px)`;
      // Event delegation: one listener checks whether we're over something clickable
      ring.current.classList.toggle('is-big', !!e.target.closest('a, button'));
    };

    // Each frame the ring moves 15% of the way to the pointer, which creates the lag
    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', move);
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('pointermove', move);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90]">
      {/* Outer wrapper is positioned by JS; inner element is centred on it and handles the size change */}
      <div ref={ring} className="absolute top-0 left-0">
        <div className="cursor-ring -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent" />
      </div>
      <div ref={dot} className="absolute top-0 left-0">
        <div className="size-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
      </div>
    </div>
  );
};

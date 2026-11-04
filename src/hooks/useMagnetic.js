import { useEffect, useRef } from 'react';
import { hasFinePointer, prefersReducedMotion } from '../lib/motion';

// Pulls an element toward the pointer while hovered, then lets it spring back.
// `strength` is how far it follows: 0.3 = 30% of the pointer's distance from centre.
export const useMagnetic = (strength = 0.3) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !hasFinePointer() || prefersReducedMotion()) return;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const reset = () => {
      el.style.transform = '';
    };

    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', reset);
    return () => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', reset);
    };
  }, [strength]);

  return ref;
};

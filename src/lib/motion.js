// Media-query helpers so effects only run where they make sense.

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// True for mouse/trackpad users; false on phones and tablets
export const hasFinePointer = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

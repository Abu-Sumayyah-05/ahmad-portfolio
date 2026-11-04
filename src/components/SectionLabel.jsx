import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { prefersReducedMotion } from '../lib/motion';
import { cn } from '../lib/utils';

const GLYPHS = '◆✦01<>/{}#*';

// "01 — About" style label. On first view the characters cycle through random
// glyphs and settle left to right. Screen readers get the real text via aria-label.
export const SectionLabel = ({ children, className }) => {
  const text = String(children);
  const [ref, inView] = useInView({ threshold: 0.6 });
  const [shown, setShown] = useState(text);

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    let frame = 0;
    const id = setInterval(() => {
      // Characters before frame/2 are settled; the rest are random glyphs
      setShown(
        text
          .split('')
          .map((ch, i) => (i < frame / 2 || ch === ' ' ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join('')
      );
      if (++frame > text.length * 2) {
        setShown(text);
        clearInterval(id);
      }
    }, 28);
    return () => clearInterval(id);
  }, [inView, text]);

  return (
    <p ref={ref} className={cn('label-mono mb-6 flex items-center gap-4', className)}>
      {/* Screen readers read the stable text; sighted users see the scrambling copy */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{shown}</span>
      <span aria-hidden="true" className="h-px w-14 bg-current" />
    </p>
  );
};

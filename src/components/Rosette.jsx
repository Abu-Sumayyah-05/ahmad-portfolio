import { useEffect, useMemo, useRef } from 'react';
import { prefersReducedMotion } from '../lib/motion';
import { cn } from '../lib/utils';

const C = 250; // centre of the 500×500 drawing
const PULSE_MS = 3200;

// Path for an n-point star: alternates between an outer radius r1 and inner radius r2.
const starPath = (r1, r2, n, rotation = 0) => {
  let d = '';
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 ? r2 : r1;
    const a = (Math.PI / n) * i + rotation;
    d += `${i ? 'L' : 'M'}${(C + r * Math.cos(a)).toFixed(1)} ${(C + r * Math.sin(a)).toFixed(1)}`;
  }
  return d + 'Z';
};

// Eight circuit traces leaving the rosette: out, a right-angle jog, out again, ending in a pad.
const buildTraces = () =>
  Array.from({ length: 8 }, (_, i) => {
    const a = (Math.PI / 4) * i + Math.PI / 8;
    const jog = i % 2 ? 40 : -40;
    const p0 = [C + 150 * Math.cos(a), C + 150 * Math.sin(a)];
    const p1 = [C + 200 * Math.cos(a), C + 200 * Math.sin(a)];
    const p2 = [p1[0] + jog * Math.sin(a), p1[1] - jog * Math.cos(a)];
    const p3 = [C + 240 * Math.cos(a) + (p2[0] - p1[0]), C + 240 * Math.sin(a) + (p2[1] - p1[1])];
    const points = [p0, p1, p2, p3];
    return { points, d: 'M' + points.map((p) => p.join(' ')).join('L') };
  });

// Keyframes that move a dot along the trace's corners at constant speed.
// It travels during the first 40% of the cycle and stays hidden for the rest,
// so each trace "fires" now and then rather than constantly.
const pulseKeyframes = (points) => {
  const segs = points.slice(1).map((p, i) => Math.hypot(p[0] - points[i][0], p[1] - points[i][1]));
  const total = segs.reduce((a, b) => a + b, 0);
  let run = 0;
  const frames = points.map((p, i) => {
    if (i) run += segs[i - 1];
    return { offset: (run / total) * 0.4, transform: `translate(${p[0]}px, ${p[1]}px)`, opacity: i === points.length - 1 ? 0 : 1 };
  });
  frames[0].opacity = 0;
  frames.push({ offset: 1, transform: frames.at(-1).transform, opacity: 0 });
  return frames;
};

const layer = 'absolute inset-0 size-full overflow-visible';

// The signature emblem: an Islamic 8-point rosette whose edges become circuit traces.
// Performance notes: every moving part animates only `transform`/`opacity`, which the
// GPU handles without the browser recalculating styles each frame. Each spinning ring
// is its own <svg>, and the pulses are small HTML dots rather than animated strokes.
export const Rosette = ({ withTraces = true, className }) => {
  const traces = useMemo(() => (withTraces ? buildTraces() : []), [withTraces]);
  const box = useRef(null);
  const stage = useRef(null);

  useEffect(() => {
    if (!withTraces) return;
    // The pulse dots live on a 500×500 "stage" (same units as the SVG) scaled to fit the box
    const fit = () => {
      stage.current.style.transform = `scale(${box.current.offsetWidth / 500})`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(box.current);

    if (prefersReducedMotion()) return () => ro.disconnect();
    const animations = [...stage.current.children].map((dot, i) =>
      dot.animate(pulseKeyframes(traces[i].points), {
        duration: PULSE_MS,
        delay: i * 400,
        iterations: Infinity,
        easing: 'linear',
      })
    );
    return () => {
      ro.disconnect();
      animations.forEach((a) => a.cancel());
    };
  }, [withTraces, traces]);

  return (
    <div ref={box} className={cn('relative aspect-square', className)} aria-hidden="true">
      {withTraces && (
        <>
          <svg viewBox="0 0 500 500" className={layer}>
            {traces.map((t, i) => (
              <g key={i}>
                <path d={t.d} className="trace" />
                <circle cx={t.points[3][0]} cy={t.points[3][1]} r="5" className="pad" />
              </g>
            ))}
          </svg>
          <div ref={stage} className="absolute top-0 left-0 size-[500px] origin-top-left">
            {traces.map((_, i) => (
              <span key={i} className="pulse-dot" />
            ))}
          </div>
        </>
      )}

      {/* Outer ring turns slowly one way... */}
      <svg viewBox="0 0 500 500" className={cn(layer, 'spin-slow')}>
        <circle cx={C} cy={C} r="150" className="r-faint" />
        <path d={starPath(150, 100, 8)} className="r-main" />
        <path d={starPath(150, 100, 8, Math.PI / 8)} className="r-faint" />
      </svg>

      {/* ...inner layers turn the other way */}
      <svg viewBox="0 0 500 500" className={cn(layer, 'spin-rev')}>
        <path d={starPath(100, 62, 8)} className="r-inner" />
        <circle cx={C} cy={C} r="62" className="r-faint" />
        <path d={starPath(58, 30, 8, Math.PI / 8)} className="r-core" />
        <circle cx={C} cy={C} r="10" className="r-hole" />
      </svg>
    </div>
  );
};

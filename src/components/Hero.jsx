import { useEffect, useRef } from 'react';
import { profile } from '../data/site';
import { useMagnetic } from '../hooks/useMagnetic';
import { hasFinePointer, prefersReducedMotion } from '../lib/motion';
import { Rosette } from './Rosette';

export const Hero = () => {
  const emblem = useRef(null);
  const primaryRef = useMagnetic(0.3);
  const ghostRef = useMagnetic(0.3);

  // Tilt the emblem in 3D toward the pointer. Batched to one update per frame.
  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return;
    let frame;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        emblem.current.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header id="top" className="relative flex min-h-svh items-center overflow-hidden">
      {/* Faint star tiling drifting diagonally behind everything */}
      <div className="star-pattern drift pointer-events-none absolute inset-0 -right-20 -bottom-20 bg-accent-2 opacity-[.07]" />
      {/* Fade into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-bg" />

      <div className="wrap relative z-10 grid items-center gap-8 pt-28 pb-16 lg:grid-cols-[1.15fr_.85fr] lg:pt-20">
        <div>
          <p className="label-mono fade-up mb-6 inline-flex items-center gap-3 text-accent">
            <span className="beacon size-2 rounded-full bg-accent" />
            {profile.name} · {profile.location}
          </p>

          {/* Each line rises from behind its own mask; --d staggers them */}
          <h1 className="font-serif text-[clamp(2.6rem,6.4vw,5.6rem)] leading-[1.02] font-[350] tracking-[-.02em]">
            <span className="rise-line"><span>Full-stack developer</span></span>
            <span className="rise-line"><span style={{ '--d': '.12s' }}>building <em className="shimmer font-light">fast, reliable</em></span></span>
            <span className="rise-line"><span style={{ '--d': '.24s' }}>products that ship.</span></span>
          </h1>

          <p className="fade-up mt-7 max-w-[34rem] text-lg text-muted" style={{ '--d': '.7s' }}>
            For <b className="font-medium text-fg">startups</b>, <b className="font-medium text-fg">businesses</b> and{' '}
            <b className="font-medium text-fg">teams in any industry</b>, built to hold up in the real world, where the
            internet doesn't always cooperate.
          </p>

          <div className="fade-up mt-10 flex flex-wrap gap-4" style={{ '--d': '.9s' }}>
            <a ref={primaryRef} href="#work" className="btn-primary inline-flex items-center gap-2.5 rounded-sm px-6 py-4 font-semibold transition-transform duration-300">
              See the work <span aria-hidden="true">→</span>
            </a>
            <a ref={ghostRef} href="#contact" className="inline-flex items-center rounded-sm border border-fg/25 px-6 py-4 font-semibold transition-[border-color,color,transform] duration-300 hover:border-accent hover:text-accent">
              Let's talk
            </a>
          </div>

          <p className="label-mono fade-up mt-10 flex flex-col gap-2 text-muted sm:flex-row sm:gap-6" style={{ '--d': '1.1s' }}>
            <span><span className="text-accent">◆</span> Circuits by day</span>
            <span><span className="text-accent">◆</span> Code by night</span>
          </p>
        </div>

        <div className="fade-up order-first mx-auto w-full max-w-[300px] sm:max-w-[380px] lg:order-none lg:max-w-[520px]" style={{ '--d': '.3s' }}>
          <div ref={emblem} className="relative aspect-square transition-transform duration-300 ease-out">
            <div className="core-glow absolute inset-[30%] rounded-full" />
            <Rosette className="relative size-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

import { cn } from '../lib/utils';

// A screenshot inside a simple mock browser window (three dots + address bar).
export const BrowserFrame = ({ src, alt, size: [w, h], host, className, eager = false }) => (
  <figure className={cn('overflow-hidden rounded-md bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,.45)]', className)}>
    <div className="flex items-center gap-1.5 border-b border-black/10 bg-[#f4f3f0] px-3 py-2">
      <i className="size-2 rounded-full bg-black/15" />
      <i className="size-2 rounded-full bg-black/15" />
      <i className="size-2 rounded-full bg-black/15" />
      {host && <span className="ml-3 truncate rounded bg-black/5 px-2 py-0.5 font-mono text-[.62rem] text-black/55">{host}</span>}
    </div>
    <img
      src={src}
      alt={alt}
      width={w}
      height={h}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      style={{ aspectRatio: `${w} / ${h}` }}
      className="block w-full object-cover object-top"
    />
  </figure>
);

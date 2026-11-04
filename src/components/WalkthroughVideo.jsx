import { useState } from 'react';

// Click-to-play video. Until the visitor presses play, only the small poster image
// loads; the video itself (several MB) is never downloaded for people who don't watch it.
export const WalkthroughVideo = ({ video, title }) => {
  const [playing, setPlaying] = useState(false);
  const [w, h] = video.size;

  if (playing) {
    return (
      <video
        src={video.src}
        poster={video.poster}
        width={w}
        height={h}
        controls
        autoPlay
        playsInline
        muted
        style={{ aspectRatio: `${w} / ${h}` }}
        className="block w-full bg-black"
      />
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      aria-label={`Play the ${title} walkthrough video (${video.duration}, no sound)`}
      className="group/play relative block w-full cursor-pointer"
    >
      <img
        src={video.poster}
        alt=""
        width={w}
        height={h}
        loading="lazy"
        decoding="async"
        style={{ aspectRatio: `${w} / ${h}` }}
        className="block w-full object-cover"
      />
      {/* Dim the poster slightly so the play button stands out */}
      <span className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover/play:bg-black/10" />
      <span className="absolute inset-0 grid place-items-center">
        <span className="flex flex-col items-center gap-3">
          {/* Play button with a pulsing ring (transform/opacity only, so it's cheap to animate) */}
          <span className="relative grid size-16 place-items-center rounded-full bg-accent text-on-accent shadow-lg transition-transform duration-300 group-hover/play:scale-110 sm:size-20">
            <span aria-hidden="true" className="play-ring absolute inset-0 rounded-full bg-accent" />
            <svg viewBox="0 0 24 24" className="relative ml-1 size-7 sm:size-8" fill="currentColor" aria-hidden="true">
              <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.4-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z" />
            </svg>
          </span>
          <span className="label-mono rounded-full bg-black/70 px-3 py-1.5 text-[.62rem] text-white">
            Watch the walkthrough · {video.duration}
          </span>
        </span>
      </span>
    </button>
  );
};

// The "AS" monogram, redrawn as vectors from the original artwork (coordinates are in
// the source image's 1280×1280 pixel space). It paints in `currentColor`, so it takes
// whatever text colour the active palette gives it.

const RADIUS = 12;

// Closed path through `points` (clockwise) with every corner rounded to `r`.
// At each corner the path stops short along both edges and joins them with an arc.
const roundedPath = (points, r = RADIUS) => {
  const n = points.length;
  let d = '';
  points.forEach(([x, y], i) => {
    const [ax, ay] = points[(i - 1 + n) % n];
    const [bx, by] = points[(i + 1) % n];
    const la = Math.hypot(ax - x, ay - y);
    const lb = Math.hypot(bx - x, by - y);
    const ux = (ax - x) / la, uy = (ay - y) / la;
    const vx = (bx - x) / lb, vy = (by - y) / lb;
    // Distance from the corner to where the arc touches each edge
    const t = r / Math.tan(Math.acos(ux * vx + uy * vy) / 2);
    d += `${i ? 'L' : 'M'}${(x + ux * t).toFixed(1)} ${(y + uy * t).toFixed(1)}`;
    d += `A${r} ${r} 0 0 1 ${(x + vx * t).toFixed(1)} ${(y + vy * t).toFixed(1)}`;
  });
  return d + 'Z';
};

const SHAPES = [
  // Long diagonal stroke shared by the A and the S
  [[500.5, 381], [628.5, 381], [805, 898.5], [677, 898.5]],
  // Top-right block
  [[677, 381], [863, 381], [863, 617], [764, 617]],
  // Upper part of the A's left leg
  [[494, 505], [592, 775], [444.5, 775]],
  // Foot of the A's left leg
  [[449, 808.5], [593, 808.5], [623, 898.5], [415.5, 898.5]],
].map((points) => roundedPath(points));

export const Logo = ({ className }) => (
  <svg viewBox="319 268 642 744" className={className} fill="currentColor" role="img" aria-label="Ahmad Subair logo">
    <rect x="324" y="273" width="632" height="734" rx="7" fill="none" stroke="currentColor" strokeWidth="10" />
    {SHAPES.map((d) => (
      <path key={d} d={d} />
    ))}
  </svg>
);

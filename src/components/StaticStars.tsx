// Server component — fully static, rendered at build time.
// Deterministic seeded PRNG so star positions are stable across builds.

type Star = {
  x: number; // percent
  y: number; // percent
  size: number; // px
  opacity: number;
  color: string;
  glow: number; // px
};

function mulberry32(seed: number) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const TINT_COLORS = [
  "#ffffff",
  "#ffffff",
  "#ffffff",
  "#a5f3fc", // cyan
  "#fde68a", // amber
  "#f5d0fe", // pink
  "#ddd6fe", // violet
];

function generate(seed: number, count: number, big: boolean): Star[] {
  const rnd = mulberry32(seed);
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: rnd() * 100,
      y: rnd() * 100,
      size: big ? 1.6 + rnd() * 2.2 : 0.7 + rnd() * 1.3,
      opacity: big ? 0.75 + rnd() * 0.25 : 0.25 + rnd() * 0.6,
      color: big
        ? TINT_COLORS[Math.floor(rnd() * TINT_COLORS.length)]
        : "#ffffff",
      glow: big ? 3 + rnd() * 5 : 0,
    });
  }
  return stars;
}

export default function StaticStars() {
  const small = generate(20260409, 320, false);
  const big = generate(99887766, 55, true);
  const all = [...small, ...big];

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {all.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: s.color,
            opacity: s.opacity,
            boxShadow: s.glow ? `0 0 ${s.glow}px ${s.color}` : undefined,
          }}
        />
      ))}
    </div>
  );
}

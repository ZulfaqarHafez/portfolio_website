const TAU = Math.PI * 2;

/** Closed Catmull-Rom loop through 8 irregular radial points -> smooth cubic path. */
function contour(cx: number, cy: number, r: number, mults: number[]): string {
  const pts = mults.map((m, j) => {
    const t = (TAU * j) / mults.length;
    return [cx + r * m * Math.cos(t), cy + r * m * Math.sin(t)];
  });
  const n = pts.length;
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i + n - 1) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d + " Z";
}

// Peak system: 9 nested loops around an off-canvas summit near (650,120).
const PEAK_RADII = [30, 58, 88, 122, 160, 204, 254, 310, 372];
const PEAK_SHAPE = [1.0, 0.88, 1.1, 0.95, 1.14, 0.9, 1.05, 0.86];
const PEAK_DRIFT = [0.004, 0.012, -0.006, 0.009, -0.004, 0.014, -0.009, 0.006];

// Foothill system: 4 quiet loops bottom-left around (90,430).
const HILL_RADII = [26, 54, 86, 124];
const HILL_SHAPE = [1.06, 0.9, 1.12, 0.94, 1.08, 0.88, 1.02, 0.96];
const HILL_DRIFT = [-0.006, 0.016, -0.01, 0.012, 0.006, 0.018, -0.008, 0.01];
const HILL_OPACITY = [0.08, 0.067, 0.053, 0.04];

export default function ArtTopo() {
  return (
    <svg
      viewBox="0 0 800 500"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Quiet topographic contour lines for the hero backdrop"
    >
      <g fill="none" stroke="var(--accent)" strokeWidth={1}>
        {PEAK_RADII.map((r, i) => (
          <path
            key={`ato-peak-${i}`}
            d={contour(
              650 - i * 7,
              120 + i * 5,
              r,
              PEAK_SHAPE.map((m, j) => m + i * PEAK_DRIFT[j])
            )}
            opacity={0.13 - i * 0.01}
          />
        ))}
      </g>
      <g fill="none" stroke="var(--emerald)" strokeWidth={1}>
        {HILL_RADII.map((r, i) => (
          <path
            key={`ato-hill-${i}`}
            d={contour(
              90 - i * 5,
              430 + i * 4,
              r,
              HILL_SHAPE.map((m, j) => m + i * HILL_DRIFT[j])
            )}
            opacity={HILL_OPACITY[i]}
          />
        ))}
      </g>
    </svg>
  );
}

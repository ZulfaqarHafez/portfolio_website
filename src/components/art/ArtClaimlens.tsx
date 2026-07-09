export default function ArtClaimlens() {
  return (
    <svg
      viewBox="0 0 800 500"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="A claim weighed against evidence on a fine balance, verified"
    >
      <defs>
        <radialGradient id="aclGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity={1} />
          <stop offset="70%" stopColor="var(--accent)" stopOpacity={0.25} />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity={0} />
        </radialGradient>
      </defs>

      {/* canvas */}
      <rect x={0} y={0} width={800} height={500} fill="var(--surface-2)" />

      {/* dot texture on 8-col grid, bleeding off right edge */}
      {[40, 135, 230, 325, 420, 515, 610, 705, 800].map((x) =>
        [64, 116, 168, 220, 272, 324, 376, 428].map((y) => (
          <circle key={`acl-d${x}-${y}`} cx={x} cy={y} r={1.5} fill="var(--ink)" opacity={0.08} />
        ))
      )}

      {/* dashed horizon, bleeding off both edges */}
      <line x1={-12} y1={330} x2={812} y2={330} stroke="var(--line-strong)" strokeWidth={1} strokeDasharray="2 9" opacity={0.5} />

      {/* soft gold glow behind the verification mark */}
      <circle cx={646} cy={181} r={72} fill="url(#aclGlow)" opacity={0.18} />

      {/* verification seal: thin ring + bold check */}
      <circle cx={646} cy={181} r={46} fill="none" stroke="var(--accent)" strokeWidth={1} opacity={0.35} />
      <path
        d="M618 184 L640 206 L678 156"
        fill="none"
        stroke="var(--accent)"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.9}
      />

      {/* pedestal */}
      <path d="M400 330 L460 330 L474 346 L386 346 Z" fill="none" stroke="var(--ink)" strokeWidth={1.5} opacity={0.35} />
      <line x1={372} y1={352} x2={488} y2={352} stroke="var(--ink)" strokeWidth={1} opacity={0.2} />

      {/* stem and finial */}
      <line x1={430} y1={118} x2={430} y2={330} stroke="var(--accent)" strokeWidth={2.5} opacity={0.9} />
      <circle cx={430} cy={112} r={5} fill="none" stroke="var(--accent)" strokeWidth={2} opacity={0.9} />

      {/* beam, tilted 6 degrees — evidence outweighs */}
      <line x1={271} y1={133} x2={589} y2={167} stroke="var(--accent)" strokeWidth={2.5} strokeLinecap="round" opacity={0.9} />
      <circle cx={430} cy={150} r={5} fill="var(--surface-2)" stroke="var(--accent)" strokeWidth={2} opacity={0.9} />
      <circle cx={271} cy={133} r={2.5} fill="none" stroke="var(--accent)" strokeWidth={1.5} opacity={0.7} />
      <circle cx={589} cy={167} r={2.5} fill="none" stroke="var(--accent)" strokeWidth={1.5} opacity={0.7} />

      {/* suspension triangles */}
      <path d="M271 133 L226 205 M271 133 L316 205" fill="none" stroke="var(--ink)" strokeWidth={1} opacity={0.4} />
      <path d="M589 167 L544 238 M589 167 L634 238" fill="none" stroke="var(--ink)" strokeWidth={1} opacity={0.4} />

      {/* pans: shallow arcs */}
      <path d="M226 205 A70 70 0 0 0 316 205" fill="none" stroke="var(--accent)" strokeWidth={2} opacity={0.85} />
      <path d="M544 238 A70 70 0 0 0 634 238" fill="none" stroke="var(--accent)" strokeWidth={2} opacity={0.85} />

      {/* the claim: hollow speech bubble on the left pan */}
      <path
        d="M250 160 H292 Q298 160 298 166 V182 Q298 188 292 188 H274 L265 201 L267 188 H250 Q244 188 244 182 V166 Q244 160 250 160 Z"
        fill="none"
        stroke="var(--ink)"
        strokeWidth={1.5}
        opacity={0.5}
      />
      <line x1={254} y1={170} x2={286} y2={170} stroke="var(--ink)" strokeWidth={1} opacity={0.35} />
      <line x1={254} y1={178} x2={276} y2={178} stroke="var(--ink)" strokeWidth={1} opacity={0.35} />

      {/* the evidence: three stacked documents on the right pan */}
      {[
        [570, 224, 42],
        [573, 211, 40],
        [576, 198, 38],
      ].map(([x, y, w]) => (
        <g key={`acl-doc-${y}`}>
          <rect x={x} y={y} width={w} height={11} rx={1.5} fill="none" stroke="var(--emerald)" strokeWidth={1.5} opacity={0.8} />
          <line x1={x + 6} y1={y + 5.5} x2={x + w - 6} y2={y + 5.5} stroke="var(--emerald)" strokeWidth={1} opacity={0.5} />
        </g>
      ))}
    </svg>
  );
}

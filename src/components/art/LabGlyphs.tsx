/**
 * Bespoke glyphs for The Lab — one per experiment. Stroke-drawn,
 * theme-aware via CSS variables, 96x96 grid.
 */

const frame = {
  viewBox: '0 0 96 96',
  width: '100%',
  height: '100%',
  fill: 'none' as const,
  'aria-hidden': true,
};

/** TraceRazor: a razor slicing a token trace into audited segments */
export const GlyphRazor = () => (
  <svg {...frame}>
    <path d="M8 62 h18 m6 0 h10 m6 0 h14 m6 0 h16" stroke="var(--ink)" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
    <path d="M14 62 c6 -10 12 -10 18 0 c6 10 12 10 18 0 c6 -10 12 -10 18 0" stroke="var(--ink)" strokeWidth="1.5" opacity="0.25" />
    <path d="M30 18 L66 54 L58 62 L54 50 L42 46 Z" stroke="var(--accent)" strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M30 18 L24 24" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="70" cy="74" r="8" stroke="var(--emerald)" strokeWidth="1.8" />
    <path d="M66.5 74 l2.5 2.5 l4.5 -5" stroke="var(--emerald)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Assay: a shield with a gauge needle — guardrails, measured */
export const GlyphShield = () => (
  <svg {...frame}>
    <path d="M48 12 L76 22 v22 c0 20 -12 32 -28 40 c-16 -8 -28 -20 -28 -40 V22 Z" stroke="var(--accent)" strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M32 52 a16 16 0 0 1 32 0" stroke="var(--ink)" strokeWidth="1.6" opacity="0.45" />
    <path d="M48 52 L58 40" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="48" cy="52" r="2.6" fill="var(--accent)" />
    {[0, 1, 2, 3, 4].map((i) => {
      const a = Math.PI * (1 + i / 4);
      const x1 = 48 + 19 * Math.cos(a);
      const y1 = 52 + 19 * Math.sin(a);
      const x2 = 48 + 22 * Math.cos(a);
      const y2 = 52 + 22 * Math.sin(a);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--ink)" strokeWidth="1.4" opacity="0.4" />;
    })}
  </svg>
);

/** AgenticPDF: a document under a lens, citations lifting off */
export const GlyphDocLens = () => (
  <svg {...frame}>
    <path d="M26 14 h30 l12 12 v50 a4 4 0 0 1 -4 4 H26 a4 4 0 0 1 -4 -4 V18 a4 4 0 0 1 4 -4 Z" stroke="var(--ink)" strokeWidth="1.8" opacity="0.55" strokeLinejoin="round" />
    <path d="M56 14 v12 h12" stroke="var(--ink)" strokeWidth="1.8" opacity="0.55" strokeLinejoin="round" />
    <path d="M30 36 h24 M30 44 h28 M30 52 h20" stroke="var(--ink)" strokeWidth="1.6" opacity="0.35" strokeLinecap="round" />
    <circle cx="58" cy="60" r="13" stroke="var(--accent)" strokeWidth="2.2" />
    <path d="M67 69 L76 78" stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M52 58 h12 M52 63 h9" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/** Apologue: an orchestration ring — one conductor, many parts */
export const GlyphOrchestra = () => (
  <svg {...frame}>
    <circle cx="48" cy="48" r="30" stroke="var(--ink)" strokeWidth="1.4" opacity="0.35" strokeDasharray="3 6" />
    <circle cx="48" cy="48" r="7" stroke="var(--accent)" strokeWidth="2.2" />
    <circle cx="48" cy="48" r="2.4" fill="var(--accent)" />
    {[[48, 18], [74, 62], [22, 62]].map(([cx, cy], i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r="5.5" stroke="var(--emerald)" strokeWidth="1.8" fill="var(--surface-2)" />
        <line x1={48 + (cx - 48) * 0.28} y1={48 + (cy - 48) * 0.28} x2={48 + (cx - 48) * 0.75} y2={48 + (cy - 48) * 0.75} stroke="var(--accent)" strokeWidth="1.6" opacity="0.7" />
      </g>
    ))}
  </svg>
);

/** AgenticAgentAgenting: three agents delegating to each other, forever */
export const GlyphAgents = () => (
  <svg {...frame}>
    {[[48, 26], [70, 62], [26, 62]].map(([cx, cy], i) => (
      <g key={i}>
        <rect x={cx - 9} y={cy - 9} width="18" height="18" rx="5" stroke={i === 0 ? 'var(--accent)' : 'var(--ink)'} strokeWidth={i === 0 ? 2.2 : 1.7} opacity={i === 0 ? 1 : 0.55} />
        <circle cx={cx - 3.2} cy={cy - 1} r="1.4" fill={i === 0 ? 'var(--accent)' : 'var(--ink)'} opacity={i === 0 ? 1 : 0.55} />
        <circle cx={cx + 3.2} cy={cy - 1} r="1.4" fill={i === 0 ? 'var(--accent)' : 'var(--ink)'} opacity={i === 0 ? 1 : 0.55} />
      </g>
    ))}
    <path d="M58 32 A30 30 0 0 1 68 52" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
    <path d="M60 62 A22 22 0 0 1 36 62" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
    <path d="M28 52 A30 30 0 0 1 38 32" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
    <path d="M66 48 l2 5 l-5 1" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M41 63 l-5 -1 l2 -5" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 36 l2 -5 l5 2" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** OsciWriting: an oscilloscope wave, sampled and clustered */
export const GlyphWave = () => (
  <svg {...frame}>
    <rect x="12" y="20" width="72" height="52" rx="6" stroke="var(--ink)" strokeWidth="1.8" opacity="0.5" />
    <path d="M18 50 q7 -22 14 0 t14 0 t14 0 t14 0" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" />
    {[[32, 39], [46, 50], [60, 39], [74, 50]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="2.4" fill="var(--emerald)" />
    ))}
    <path d="M22 80 h10 M38 80 h10 M54 80 h10 M70 80 h4" stroke="var(--ink)" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
  </svg>
);

export default function ArtFairwork() {
  const ledger: Array<[number, number]> = [
    [178, 244],
    [200, 218],
    [222, 236],
    [244, 206],
    [266, 230],
    [288, 196],
  ];

  const spokes: Array<[number, number, number, number]> = [
    [302, 366, 311, 366],
    [300.2, 361.8, 306.6, 355.4],
    [296, 360, 296, 351],
    [291.8, 361.8, 285.4, 355.4],
    [290, 366, 281, 366],
    [291.8, 370.2, 285.4, 376.6],
    [296, 372, 296, 381],
    [300.2, 370.2, 306.6, 376.6],
  ];

  const glyphs: Array<{ stroke: string; opacity: number; xs: number[]; y: number }> = [
    { stroke: "var(--accent)", opacity: 0.85, xs: [666, 680, 694], y: 106 },
    { stroke: "var(--emerald)", opacity: 0.6, xs: [684, 698, 712], y: 227 },
    { stroke: "var(--ink)", opacity: 0.3, xs: [652, 666, 680], y: 361 },
  ];

  return (
    <svg
      viewBox="0 0 800 500"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="A payslip document unfolding into parallel translated ribbons with a seal of fairness"
    >
      <defs>
        <radialGradient id="afwGlow">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="1" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="800" height="500" fill="var(--surface-2)" />

      <line x1="0" y1="140" x2="800" y2="140" stroke="var(--line-strong)" strokeWidth="1" opacity="0.4" />
      <line x1="0" y1="360" x2="800" y2="360" stroke="var(--line-strong)" strokeWidth="1" opacity="0.4" />

      <path
        d="M282,196 C420,186 470,104 640,118"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M282,248 C420,250 500,240 662,238"
        fill="none"
        stroke="var(--emerald)"
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M282,302 C410,312 480,384 630,372"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.18"
      />

      {glyphs.map((g, gi) =>
        g.xs.map((x, i) => (
          <line
            key={`${gi}-${i}`}
            x1={x}
            y1={g.y}
            x2={x - 6}
            y2={g.y + 21}
            stroke={g.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            opacity={g.opacity}
          />
        ))
      )}

      <rect
        x="120"
        y="140"
        width="170"
        height="220"
        rx="10"
        fill="var(--surface-2)"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />

      {ledger.map(([y, x2], i) => (
        <line
          key={i}
          x1="146"
          y1={y}
          x2={x2}
          y2={y}
          stroke="var(--ink)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.3"
        />
      ))}

      <line
        x1="146"
        y1="318"
        x2="246"
        y2="318"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />

      <circle cx="296" cy="366" r="58" fill="url(#afwGlow)" opacity="0.15" />
      <circle cx="296" cy="366" r="26" fill="var(--surface-2)" fillOpacity="0.9" stroke="var(--accent)" strokeWidth="2" opacity="0.9" />
      <circle cx="296" cy="366" r="19" fill="none" stroke="var(--accent)" strokeWidth="2" opacity="0.75" />

      {spokes.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="var(--accent)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.8"
        />
      ))}
    </svg>
  );
}

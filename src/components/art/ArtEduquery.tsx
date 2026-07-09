export default function ArtEduquery() {
  // 7 record lines lifting off the right-hand page, straightening as they rise
  const records: Array<[number, number, number, number, number]> = [
    [330, 346, 428, 324, 0.15],
    [358, 316, 462, 298, 0.2],
    [390, 286, 498, 272, 0.24],
    [424, 254, 536, 244, 0.28],
    [486, 195, 612, 195, 0.32],
    [486, 165, 612, 165, 0.36],
    [486, 135, 612, 135, 0.4],
  ];
  // constellation arcing from the book spine to the lens
  const stars: Array<[number, number]> = [
    [254, 324],
    [296, 266],
    [350, 222],
    [416, 192],
    [484, 176],
  ];
  const tableRows = [135, 165, 195];
  return (
    <svg
      viewBox="0 0 800 500"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="An open book whose pages become database records under a search lens"
    >
      <defs>
        <radialGradient id="aeqGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="1" />
          <stop offset="0.55" stopColor="var(--accent)" stopOpacity="0.3" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <clipPath id="aeqLensClip">
          <circle cx="560" cy="165" r="32" />
        </clipPath>
      </defs>

      <rect x="0" y="0" width="800" height="500" fill="var(--surface-2)" />

      {/* editorial hairlines on the 8-column grid, bleeding off the edges */}
      <line x1="700" y1="0" x2="700" y2="500" stroke="var(--line-strong)" strokeWidth="1" opacity="0.5" />
      <line x1="0" y1="120" x2="100" y2="120" stroke="var(--line-strong)" strokeWidth="1" opacity="0.5" />
      <line x1="0" y1="402" x2="420" y2="402" stroke="var(--line-strong)" strokeWidth="1" opacity="0.6" />

      {/* open book, anchored lower-left: spine at x=250, baseline y=380 */}
      <g stroke="var(--ink)" strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 250 342 C 205 326, 155 328, 120 342 L 120 380 C 155 366, 205 364, 250 390" />
        <path d="M 250 342 C 295 326, 345 328, 380 342 L 380 380 C 345 366, 295 364, 250 390" />
        <line x1="250" y1="342" x2="250" y2="390" />
      </g>
      {/* cover thickness */}
      <g stroke="var(--ink)" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round">
        <path d="M 250 396 C 205 370, 155 372, 120 386 L 120 380" />
        <path d="M 250 396 C 295 370, 345 372, 380 386 L 380 380" />
        <line x1="250" y1="390" x2="250" y2="396" />
      </g>
      {/* resting text on the pages */}
      <g stroke="var(--ink)" strokeWidth="1" fill="none" opacity="0.22" strokeLinecap="round">
        <path d="M 238 354 C 202 342, 162 344, 134 354" />
        <path d="M 238 365 C 202 353, 162 355, 134 365" />
        <path d="M 262 354 C 298 342, 338 344, 366 354" />
      </g>

      {/* records lifting off the page into neat rows */}
      <g strokeWidth="1.5" strokeLinecap="round">
        {records.map((r, i) => (
          <line key={i} x1={r[0]} y1={r[1]} x2={r[2]} y2={r[3]} stroke="var(--ink)" opacity={r[4]} />
        ))}
      </g>

      {/* constellation from spine to lens */}
      <g opacity="0.5">
        <polyline
          points={stars.map((p) => p.join(",")).join(" ")}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1"
        />
        {stars.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill="var(--accent)" />
        ))}
      </g>

      {/* soft gold glow behind the lens */}
      <circle cx="560" cy="165" r="86" fill="url(#aeqGlow)" opacity="0.15" />

      {/* table enclosing the top three rows */}
      <rect x="470" y="120" width="210" height="90" rx="10" fill="none" stroke="var(--emerald)" strokeWidth="1.5" opacity="0.7" />
      <g stroke="var(--emerald)" strokeWidth="1" opacity="0.3">
        <line x1="470" y1="150" x2="680" y2="150" />
        <line x1="470" y1="180" x2="680" y2="180" />
      </g>
      {/* record keys */}
      <g fill="var(--emerald)" opacity="0.6">
        {tableRows.map((y, i) => (
          <circle key={i} cx="478" cy={y} r="2" />
        ))}
      </g>

      {/* magnified records inside the lens */}
      <g clipPath="url(#aeqLensClip)">
        <g stroke="var(--accent)" strokeWidth="1" opacity="0.45">
          <line x1="470" y1="150" x2="680" y2="150" />
          <line x1="470" y1="180" x2="680" y2="180" />
        </g>
        <g stroke="var(--accent)" strokeWidth="1.5" opacity="0.9" strokeLinecap="round">
          {tableRows.map((y, i) => (
            <line key={i} x1="486" y1={y} x2="612" y2={y} />
          ))}
        </g>
      </g>

      {/* magnifying glass */}
      <circle cx="560" cy="165" r="32.5" fill="var(--accent)" opacity="0.06" />
      <g stroke="var(--accent)" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <circle cx="560" cy="165" r="34" />
        <line x1="584" y1="189" x2="612" y2="217" />
      </g>
    </svg>
  );
}

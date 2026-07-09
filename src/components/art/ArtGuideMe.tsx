export default function ArtGuideMe() {
  const bgLines: { d: string; o: number }[] = [
    { d: "M -30 430 L 170 430 L 310 290 L 550 290 L 690 150 L 830 150", o: 0.18 },
    { d: "M -30 110 L 150 110 L 280 240 L 500 240 L 650 390 L 830 390", o: 0.22 },
    { d: "M -30 340 L 90 340 L 230 200 L 470 200 L 590 80 L 830 80", o: 0.14 },
    { d: "M -30 55 L 210 55 L 400 245 L 640 245 L 770 375 L 830 375", o: 0.16 },
  ];

  const interchanges: [number, number][] = [
    [170, 430],
    [550, 290],
    [280, 240],
    [650, 390],
    [230, 200],
    [590, 80],
    [400, 245],
  ];

  // stations sit on the stepped hero route: corners and midpoints of its runs
  const heroStations: [number, number][] = [
    [56, 460],
    [140, 460],
    [140, 372],
    [300, 372],
    [300, 268],
    [452, 268],
    [452, 178],
    [536, 178],
  ];

  const ticks: [number, number, number, number][] = [
    [96, 84, 102, 84],
    [668, 60, 668, 66],
    [730, 262, 734, 266],
    [508, 452, 514, 452],
    [60, 180, 60, 186],
  ];

  return (
    <svg
      viewBox="0 0 800 500"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Abstract transit map with a highlighted route and destination pin"
    >
      <defs>
        <radialGradient id="agmGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="1" />
          <stop offset="55%" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="800" height="500" fill="var(--surface-2)" />

      {/* background metro lines */}
      {bgLines.map((l, i) => (
        <path
          key={i}
          d={l.d}
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity={l.o}
        />
      ))}

      {/* map ticks */}
      {ticks.map((t, i) => (
        <line
          key={i}
          x1={t[0]}
          y1={t[1]}
          x2={t[2]}
          y2={t[3]}
          stroke="var(--ink)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.2"
        />
      ))}

      {/* soft gold glow behind destination */}
      <circle cx="610" cy="130" r="70" fill="url(#agmGlow)" opacity="0.18" />

      {/* dashed emerald accessibility route */}
      <path
        d="M -30 444 L 154 444 L 154 356 L 314 356 L 314 252 L 466 252 L 466 164 L 578 164"
        fill="none"
        stroke="var(--emerald)"
        strokeWidth="1.5"
        strokeDasharray="2 6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />

      {/* hero route */}
      <path
        d="M -30 460 L 140 460 L 140 372 L 300 372 L 300 268 L 452 268 L 452 178 L 610 178 L 610 164"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.95"
      />

      {/* hero stations */}
      {heroStations.map((s, i) => (
        <circle key={i} cx={s[0]} cy={s[1]} r="5" fill="var(--accent)" opacity="0.95" />
      ))}

      {/* interchange nodes */}
      {interchanges.map((n, i) => (
        <circle
          key={i}
          cx={n[0]}
          cy={n[1]}
          r="4"
          fill="var(--surface-2)"
          stroke="var(--line-strong)"
          strokeWidth="1.5"
        />
      ))}

      {/* destination pin */}
      <circle cx="610" cy="124" r="10" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <path
        d="M 602 130 L 610 150 L 618 130"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

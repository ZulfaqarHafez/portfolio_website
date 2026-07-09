export default function ArtHelplah() {
  // 5 incoming message bubbles (top-left corners), staggered off the left edge
  const bubbles: Array<[number, number]> = [
    [-8, 82],
    [30, 150],
    [8, 228],
    [42, 318],
    [14, 402],
  ];
  // convergence beziers: bubble right-edge -> junction rim at (390,250)
  const inflows = [
    "M 18 90 C 140 90, 256 182, 373 243",
    "M 56 158 C 164 158, 262 206, 373 246",
    "M 34 236 C 152 236, 262 248, 373 250",
    "M 68 326 C 182 326, 268 290, 373 254",
    "M 40 410 C 172 410, 264 328, 373 257",
  ];
  // speed ticks riding the hero branch: [x, y, angle]
  const ticks: Array<[number, number, number]> = [
    [442, 226, -27],
    [479, 207, -25],
    [518, 187, -22],
    [560, 167, -20],
    [597, 151, -19],
    [638, 136, -17],
  ];
  return (
    <svg
      viewBox="0 0 800 500"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Messages being routed through a triage branch to the right recipient"
    >
      <defs>
        <radialGradient id="ahlGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="1" />
          <stop offset="0.55" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="800" height="500" fill="var(--surface-2)" />

      {/* editorial hairlines on the 8-column grid, bleeding off the edges */}
      <line x1="290" y1="0" x2="290" y2="500" stroke="var(--line-strong)" strokeWidth="1" opacity="0.45" />
      <line x1="590" y1="120" x2="590" y2="500" stroke="var(--line-strong)" strokeWidth="1" opacity="0.35" />
      <line x1="732" y1="120" x2="800" y2="120" stroke="var(--line-strong)" strokeWidth="1" opacity="0.5" />
      <line x1="0" y1="452" x2="470" y2="452" stroke="var(--line-strong)" strokeWidth="1" opacity="0.35" />

      {/* incoming message bubbles with engraved text-line hints */}
      {bubbles.map(([bx, by]) => (
        <g key={`${bx}-${by}`}>
          <rect x={bx} y={by} width="26" height="16" rx="8" fill="none" stroke="var(--ink)" strokeWidth="1.2" opacity="0.3" />
          <line x1={bx + 7} y1={by + 6.5} x2={bx + 19} y2={by + 6.5} stroke="var(--ink)" strokeWidth="1" opacity="0.22" />
          <line x1={bx + 7} y1={by + 10.5} x2={bx + 15} y2={by + 10.5} stroke="var(--ink)" strokeWidth="1" opacity="0.16" />
        </g>
      ))}

      {/* convergence paths into the triage junction */}
      {inflows.map((d) => (
        <path key={d} d={d} fill="none" stroke="var(--ink)" strokeWidth="1" opacity="0.2" />
      ))}

      {/* declined branches: thin, ending in hollow nodes */}
      <path d="M 405 253 C 498 260, 582 234, 646 211" fill="none" stroke="var(--ink)" strokeWidth="1.2" opacity="0.25" />
      <path d="M 403 260 C 488 300, 578 330, 660 340" fill="none" stroke="var(--ink)" strokeWidth="1.2" opacity="0.25" />
      <circle cx="653" cy="208" r="5" fill="none" stroke="var(--ink)" strokeWidth="1.2" opacity="0.25" />
      <circle cx="668" cy="341" r="5" fill="none" stroke="var(--ink)" strokeWidth="1.2" opacity="0.25" />

      {/* soft gold glow behind the destination bubble */}
      <circle cx="700" cy="120" r="72" fill="url(#ahlGlow)" opacity="0.16" />

      {/* hero branch: the routed message, swept up-right */}
      <path d="M 404 242 C 490 210, 560 150, 693 122" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />

      {/* hairline speed ticks perpendicular to the hero branch */}
      {ticks.map(([tx, ty, ta]) => (
        <line
          key={`${tx}-${ty}`}
          x1="0"
          y1="-5"
          x2="0"
          y2="5"
          transform={`translate(${tx} ${ty}) rotate(${ta})`}
          stroke="var(--accent)"
          strokeWidth="1"
          opacity="0.35"
        />
      ))}

      {/* triage junction: focal node */}
      <circle cx="390" cy="250" r="44" fill="none" stroke="var(--ink)" strokeWidth="1" opacity="0.08" />
      <circle cx="390" cy="250" r="28" fill="none" stroke="var(--emerald)" strokeWidth="1.2" strokeDasharray="3 7" opacity="0.6" />
      <circle cx="390" cy="250" r="16" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="390" cy="250" r="7" fill="var(--accent)" />

      {/* destination: filled gold bubble with a check */}
      <rect x="683" y="109" width="34" height="22" rx="10" fill="var(--accent)" />
      <path d="M 693 120 L 698 126" fill="none" stroke="var(--surface-2)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M 698 126 L 708 114" fill="none" stroke="var(--surface-2)" strokeWidth="2.2" strokeLinecap="round" />

      {/* quiet emerald counterweight, bleeding off the bottom-right */}
      <path d="M 620 500 C 680 452, 760 430, 800 426" fill="none" stroke="var(--emerald)" strokeWidth="1.2" opacity="0.3" />
    </svg>
  );
}

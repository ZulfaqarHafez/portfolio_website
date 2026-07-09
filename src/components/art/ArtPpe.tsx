export default function ArtPpe() {
  // 12 pose joints: head, neck, shoulders, elbows, wrists, spine, pelvis, hips
  const joints: Array<[number, number]> = [
    [520, 150], // 0 head
    [520, 192], // 1 neck
    [470, 204], // 2 L shoulder
    [570, 200], // 3 R shoulder
    [446, 264], // 4 L elbow
    [598, 256], // 5 R elbow
    [434, 324], // 6 L wrist
    [620, 312], // 7 R wrist
    [522, 262], // 8 spine
    [524, 330], // 9 pelvis
    [486, 338], // 10 L hip
    [560, 336], // 11 R hip
  ];
  const bones: Array<[number, number]> = [
    [0, 1],
    [1, 2],
    [1, 3],
    [2, 4],
    [4, 6],
    [3, 5],
    [5, 7],
    [1, 8],
    [8, 9],
    [9, 10],
    [9, 11],
  ];
  // detection-log constellations, left column
  const logs: Array<Array<[number, number]>> = [
    [[96, 74], [112, 86], [86, 94], [104, 110]],
    [[150, 142], [136, 158], [158, 168], [144, 184]],
    [[92, 216], [110, 224], [98, 242], [118, 252]],
    [[152, 288], [138, 302], [156, 316], [142, 332]],
    [[94, 358], [112, 368], [100, 386], [120, 394]],
    [[148, 426], [134, 442], [154, 454], [140, 470]],
  ];
  return (
    <svg
      viewBox="0 0 800 500"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Pose-estimation skeleton wearing a hard hat inside detection frame corners"
    >
      <defs>
        <radialGradient id="appGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="1" />
          <stop offset="0.6" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="800" height="500" fill="var(--surface-2)" />

      {/* editorial hairlines on the 8-column grid, bleeding off the edges */}
      <line x1="300" y1="0" x2="300" y2="500" stroke="var(--line-strong)" strokeWidth="1" opacity="0.5" />
      <line x1="0" y1="70" x2="300" y2="70" stroke="var(--line-strong)" strokeWidth="1" opacity="0.5" />
      <line x1="700" y1="430" x2="800" y2="430" stroke="var(--line-strong)" strokeWidth="1" opacity="0.5" />

      {/* detection-log constellations */}
      {logs.map((pts, i) => (
        <g key={i} stroke="var(--ink)" opacity="0.15">
          <polyline
            points={pts.map((p) => p.join(",")).join(" ")}
            fill="none"
            strokeWidth="1"
          />
          {pts.map((p, j) => (
            <circle key={j} cx={p[0]} cy={p[1]} r="2" fill="var(--ink)" stroke="none" />
          ))}
        </g>
      ))}

      {/* soft gold glow behind head and hard hat */}
      <circle cx="520" cy="130" r="118" fill="url(#appGlow)" opacity="0.15" />

      {/* detection frame corners, 300x360 region */}
      <g stroke="var(--emerald)" strokeWidth="2" fill="none" opacity="0.9" strokeLinecap="square">
        <path d="M 380 98 L 380 70 L 408 70" />
        <path d="M 652 70 L 680 70 L 680 98" />
        <path d="M 680 402 L 680 430 L 652 430" />
        <path d="M 408 430 L 380 430 L 380 402" />
      </g>

      {/* focus ticks at bracket midpoints */}
      <g stroke="var(--emerald)" strokeWidth="1.5" opacity="0.5">
        <line x1="376" y1="250" x2="386" y2="250" />
        <line x1="674" y1="250" x2="684" y2="250" />
        <line x1="530" y1="66" x2="530" y2="76" />
        <line x1="530" y1="424" x2="530" y2="434" />
      </g>

      {/* scan line */}
      <line x1="380" y1="300" x2="680" y2="300" stroke="var(--emerald)" strokeWidth="1.2" opacity="0.35" />

      {/* skeleton bones */}
      <g stroke="var(--ink)" strokeWidth="1.8" opacity="0.55" strokeLinecap="round">
        {bones.map((b, i) => (
          <line
            key={i}
            x1={joints[b[0]][0]}
            y1={joints[b[0]][1]}
            x2={joints[b[1]][0]}
            y2={joints[b[1]][1]}
          />
        ))}
      </g>

      {/* faint head outline */}
      <circle cx="520" cy="152" r="20" fill="none" stroke="var(--ink)" strokeWidth="1" opacity="0.3" />

      {/* hard hat: dome arc, ridge, brim */}
      <g stroke="var(--accent)" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M 482 126 A 39 32 0 0 1 558 126" />
        <path d="M 506 101 Q 520 92 534 101" strokeWidth="1.5" opacity="0.8" />
        <line x1="470" y1="126" x2="572" y2="126" />
      </g>

      {/* pose joints */}
      <g fill="var(--accent)">
        {joints.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="4.5" />
        ))}
      </g>
    </svg>
  );
}

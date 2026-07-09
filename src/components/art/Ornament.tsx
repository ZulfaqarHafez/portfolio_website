interface OrnamentProps {
  width?: number;
  className?: string;
}

/**
 * A slim botanical divider: hairline rules meeting a central diamond,
 * flanked by two leaf sprigs. Gold via CSS variables.
 */
const Ornament = ({ width = 180, className = '' }: OrnamentProps) => (
  <svg
    width={width}
    height={width * (24 / 180)}
    viewBox="0 0 180 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <g stroke="var(--accent)" strokeWidth="1" strokeLinecap="round">
      <path d="M4 12 H62" opacity="0.6" />
      <path d="M118 12 H176" opacity="0.6" />
      {/* leaf sprigs */}
      <path d="M66 12 C71 8, 76 8, 80 11" opacity="0.9" />
      <path d="M70 10.5 q1.5 -4 5 -4.5 q-0.5 4 -5 4.5" fill="var(--accent)" fillOpacity="0.35" />
      <path d="M114 12 C109 8, 104 8, 100 11" opacity="0.9" />
      <path d="M110 10.5 q-1.5 -4 -5 -4.5 q0.5 4 5 4.5" fill="var(--accent)" fillOpacity="0.35" />
    </g>
    {/* central diamond */}
    <rect x="86" y="8" width="8" height="8" transform="rotate(45 90 12)" fill="none" stroke="var(--accent)" strokeWidth="1.2" />
    <rect x="88.6" y="10.6" width="2.8" height="2.8" transform="rotate(45 90 12)" fill="var(--accent)" />
  </svg>
);

export default Ornament;

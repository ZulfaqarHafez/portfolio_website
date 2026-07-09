interface MonogramProps {
  size?: number;
  className?: string;
}

/**
 * The estate seal: a champagne-gold Z monogram inside a double ring,
 * flanked by two wheat sprigs — a quiet nod to agriculture AI.
 * Inherits color from CSS variables, so it adapts to both themes.
 */
const Monogram = ({ size = 40, className = '' }: MonogramProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    role="img"
    aria-label="Zulfaqar Hafez monogram seal"
    className={className}
  >
    {/* double ring */}
    <circle cx="50" cy="50" r="47" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="2" />
    <circle cx="50" cy="50" r="40.5" fill="none" stroke="var(--accent)" strokeWidth="0.8" opacity="0.65" />

    {/* ring dots at compass points */}
    {[
      [50, 6.5],
      [50, 93.5],
      [6.5, 50],
      [93.5, 50],
    ].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.6" fill="var(--accent)" />
    ))}

    {/* Z — drawn as strokes so it stays crisp and inherits gold */}
    <path
      d="M36 33.5 H64 L36 66.5 H64"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* serif ticks on the Z */}
    <path d="M36 29.5 v8 M64 62.5 v8" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" />

    {/* wheat sprigs, left and right */}
    <g stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.85">
      <path d="M22 62 C20 54, 20 46, 23 38" />
      <path d="M22.5 56 l-4.5 -2.5 M22 50 l-4.5 -2.5 M22.3 44 l-4.2 -2.6" />
      <path d="M22.5 56 l3.6 -3.4 M22 50 l3.6 -3.4 M22.3 44 l3.4 -3.4" />
      <path d="M78 62 C80 54, 80 46, 77 38" />
      <path d="M77.5 56 l4.5 -2.5 M78 50 l4.5 -2.5 M77.7 44 l4.2 -2.6" />
      <path d="M77.5 56 l-3.6 -3.4 M78 50 l-3.6 -3.4 M77.7 44 l-3.4 -3.4" />
    </g>
  </svg>
);

export default Monogram;

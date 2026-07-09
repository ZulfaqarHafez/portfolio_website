import { useEffect, useRef, useState } from 'react';

/**
 * A soft bioluminescent glow that trails the pointer.
 * Desktop pointer devices only; disabled for reduced motion.
 */
const CursorGlow = () => {
  const [enabled, setEnabled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -600, y: -600 });
  const pos = useRef({ x: -600, y: -600 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (raf.current === null) tick();
    };

    const tick = () => {
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      pos.current.x += dx * 0.12;
      pos.current.y += dy * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        raf.current = requestAnimationFrame(tick);
      } else {
        raf.current = null;
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!enabled) return null;

  return <div ref={ref} className="cursor-glow hidden md:block" aria-hidden="true"></div>;
};

export default CursorGlow;

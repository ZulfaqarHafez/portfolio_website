import { useEffect, useRef, useState } from 'react';

/**
 * A CAD-style crosshair that follows the pointer with a live coordinate
 * readout. Desktop pointer devices only; disabled for reduced motion.
 */
const DraftingCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const xRef = useRef<HTMLDivElement>(null);
  const yRef = useRef<HTMLDivElement>(null);
  const readoutRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        if (xRef.current) xRef.current.style.transform = `translateY(${e.clientY}px)`;
        if (yRef.current) yRef.current.style.transform = `translateX(${e.clientX}px)`;
        if (readoutRef.current) {
          readoutRef.current.style.transform = `translate(${e.clientX + 12}px, ${e.clientY + 14}px)`;
          readoutRef.current.textContent = `X ${e.clientX} · Y ${e.clientY}`;
        }
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="drafting-cursor hidden md:block" aria-hidden="true">
      <div ref={xRef} className="dc-x" style={{ top: 0 }}></div>
      <div ref={yRef} className="dc-y" style={{ left: 0 }}></div>
      <div ref={readoutRef} className="dc-readout" style={{ top: 0, left: 0 }}></div>
    </div>
  );
};

export default DraftingCursor;

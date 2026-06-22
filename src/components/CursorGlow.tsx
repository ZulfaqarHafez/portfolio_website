import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

/**
 * A soft gold spotlight that trails the cursor for a premium, tactile feel.
 * Desktop only. Hidden for touch pointers and reduced-motion users.
 */
const CursorGlow = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = glowRef.current;
    if (!node) return;

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || prefersReducedMotion) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;

    const render = () => {
      // ease toward the pointer for a smooth trailing glow
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      node.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    const handleMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      node.style.opacity = '1';
    };

    const handleLeave = () => {
      node.style.opacity = '0';
    };

    window.addEventListener('pointermove', handleMove);
    document.addEventListener('pointerleave', handleLeave);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handleMove);
      document.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-30 h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-500"
      style={{
        background: isDark
          ? 'radial-gradient(circle, rgba(177,139,87,0.10) 0%, rgba(177,139,87,0.04) 35%, transparent 68%)'
          : 'radial-gradient(circle, rgba(163,127,70,0.10) 0%, rgba(163,127,70,0.035) 35%, transparent 68%)',
        mixBlendMode: isDark ? 'screen' : 'multiply',
      }}
    />
  );
};

export default CursorGlow;

import { useEffect, useRef } from 'react';

/**
 * Gives an element a subtle magnetic pull toward the cursor on hover.
 * Disabled for touch pointers and when reduced motion is preferred.
 */
export const useMagnetic = <T extends HTMLElement>(strength = 0.28) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || prefersReducedMotion) return;

    const handleMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const relX = event.clientX - (rect.left + rect.width / 2);
      const relY = event.clientY - (rect.top + rect.height / 2);
      node.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
    };

    const reset = () => {
      node.style.transform = '';
    };

    node.addEventListener('pointermove', handleMove);
    node.addEventListener('pointerleave', reset);
    return () => {
      node.removeEventListener('pointermove', handleMove);
      node.removeEventListener('pointerleave', reset);
    };
  }, [strength]);

  return ref;
};

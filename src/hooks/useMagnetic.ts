import { useEffect, useRef } from 'react';

/**
 * Magnetic hover: the element leans toward the pointer while hovered.
 * No-op on touch devices and for reduced-motion users.
 */
export const useMagnetic = <T extends HTMLElement>(strength = 0.25) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => {
      el.style.transform = '';
      el.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)';
      window.setTimeout(() => {
        if (el) el.style.transition = '';
      }, 450);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return ref;
};

import { useEffect } from 'react';
import { animate } from 'motion';

export default function useMagnetic(selector = '[data-magnet]') {
  useEffect(() => {
    const mags = document.querySelectorAll<HTMLElement>(selector);
    const handlers: Array<[HTMLElement, (e: MouseEvent) => void, () => void]> = [];

    mags.forEach((el) => {
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        animate(el, { x: mx * 0.22, y: my * 0.32 }, { duration: 0.4, ease: [0.2, 0.7, 0.2, 1] });
      };
      const onLeave = () => {
        animate(el, { x: 0, y: 0 }, { type: 'spring', stiffness: 220, damping: 14 });
      };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      handlers.push([el, onMove, onLeave]);
    });

    return () => {
      handlers.forEach(([el, m, l]) => {
        el.removeEventListener('mousemove', m);
        el.removeEventListener('mouseleave', l);
      });
    };
  }, [selector]);
}

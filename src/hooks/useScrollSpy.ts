import { useEffect } from 'react';

export default function useScrollSpy(ids: string[], onChange: (id: string) => void) {
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.3) {
            onChange(e.target.id);
          }
        });
      },
      { threshold: [0.3, 0.6] }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [ids, onChange]);
}

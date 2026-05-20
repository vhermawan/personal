import { useEffect, useState } from 'react';
import { animate } from 'motion';

type Theme = 'paper' | 'dark';

const THEMES: Record<Theme, { bg: string; fg: string; navDark: boolean }> = {
  paper: { bg: '#F2EFE7', fg: '#0A1A3F', navDark: false },
  dark: { bg: '#0A1A3F', fg: '#F2EFE7', navDark: true },
};

export default function useThemeScroll() {
  const [navDark, setNavDark] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-theme]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const theme = (e.target.getAttribute('data-theme') as Theme) || 'paper';
          const t = THEMES[theme];
          animate(document.body, { backgroundColor: t.bg, color: t.fg }, { duration: 0.8, ease: 'easeInOut' });
          setNavDark(t.navDark);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return { navDark };
}

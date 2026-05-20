import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { animate } from 'motion';
import { useTheme } from '../contexts/ThemeContext';

type Theme = 'paper' | 'dark';

const SLAB_BG = '#0A1A3F';
const SLAB_FG = '#F2EFE7';

export default function useThemeScroll() {
  const [navDark, setNavDark] = useState(false);
  const { mode } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-theme]');

    if (!els.length) {
      // No data-theme sections — clear Motion inline styles and let CSS vars handle theming
      document.body.style.removeProperty('background-color');
      document.body.style.removeProperty('color');
      setNavDark(mode === 'dark');
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const theme = (e.target.getAttribute('data-theme') as Theme) || 'paper';
          if (theme === 'paper') {
            const cs = getComputedStyle(document.documentElement);
            const bg = cs.getPropertyValue('--paper').trim();
            const fg = cs.getPropertyValue('--ink').trim();
            animate(document.body, { backgroundColor: bg, color: fg }, { duration: 0.8 });
            setNavDark(mode === 'dark');
          } else {
            animate(document.body, { backgroundColor: SLAB_BG, color: SLAB_FG }, { duration: 0.8 });
            setNavDark(true);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [mode, pathname]);

  return { navDark };
}

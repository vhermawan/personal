import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Mode = 'light' | 'dark';

interface ThemeCtx {
  mode: Mode;
  toggle: (e?: React.MouseEvent | MouseEvent) => void;
}

const Ctx = createContext<ThemeCtx | null>(null);

function readInitial(): Mode {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('darkMode');
  if (stored === '1') return 'dark';
  if (stored === '0') return 'light';
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(readInitial);

  useEffect(() => {
    document.documentElement.classList.toggle('theme-dark', mode === 'dark');
    localStorage.setItem('darkMode', mode === 'dark' ? '1' : '0');
  }, [mode]);

  const toggle = (e?: React.MouseEvent | MouseEvent) => {
    const root = document.documentElement;
    if (e) {
      const x = e.clientX;
      const y = e.clientY;
      const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
      root.style.setProperty('--vt-x', `${x}px`);
      root.style.setProperty('--vt-y', `${y}px`);
      root.style.setProperty('--vt-r', `${r}px`);
    }
    const apply = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'));
    if ('startViewTransition' in document) {
      (document as Document & {
        startViewTransition: (cb: () => void) => unknown;
      }).startViewTransition(apply);
    } else {
      apply();
    }
  };

  return <Ctx.Provider value={{ mode, toggle }}>{children}</Ctx.Provider>;
}

export function useTheme() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useTheme must be used inside ThemeProvider');
  return v;
}

import { useTheme } from '../contexts/ThemeContext';
import { MoonIcon, SunIcon } from './Icons';

export default function ThemeToggle() {
  const { mode, toggle } = useTheme();
  const isDark = mode === 'dark';
  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={(e) => toggle(e)}
      className="w-10 h-10 shrink-0 rounded-full bg-surface text-ink grid place-items-center transition-colors hover:bg-line"
    >
      {isDark ? <SunIcon className="w-[18px] h-[18px]" /> : <MoonIcon className="w-[18px] h-[18px]" />}
    </button>
  );
}

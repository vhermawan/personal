import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useScrollSpy from '../hooks/useScrollSpy';
import ThemeToggle from './ThemeToggle';
import { CloseIcon, MenuIcon } from './Icons';

const SECTIONS: Array<{ id: string; label: string }> = [
  { id: 'work', label: 'Work' },
  { id: 'journey', label: 'Journey' },
  { id: 'about', label: 'About' },
];

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative w-[38px] h-[38px] shrink-0 rounded-[11px] bg-solid overflow-hidden grid place-items-center">
        <span className="absolute left-0 bottom-0 w-full h-2 bg-accent" />
        <span className="relative font-display font-bold text-[20px] leading-5 tracking-[-2px] text-on-solid">
          vh
        </span>
      </span>
      <span className="flex items-start gap-0.5">
        <span className="font-display font-bold text-[22px] tracking-[-1.1px] text-ink">vihermawan</span>
        <span className="text-[9px] text-muted">™</span>
      </span>
    </span>
  );
}

export default function Nav() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === '/';
  useScrollSpy(['home', ...SECTIONS.map((s) => s.id), 'contact'], setActive);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  const linkClass = (on: boolean) =>
    `no-underline text-[14px] transition-colors ${on ? 'text-ink' : 'text-muted hover:text-ink'}`;

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color] duration-300 border-b ${
        scrolled || open ? 'bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-xl border-line' : 'bg-bg border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-[1440px] flex items-center justify-between gap-6 px-4 py-4 sm:px-10 sm:py-7">
        <a href={href('home')} aria-label="vihermawan, back to top" className="no-underline">
          <Logo />
        </a>

        <div className="hidden md:flex items-center gap-9">
          {SECTIONS.map((s) => (
            <a key={s.id} href={href(s.id)} className={linkClass(onHome && active === s.id)}>
              {s.label}
            </a>
          ))}
          <Link to="/blog" className={linkClass(pathname.startsWith('/blog'))}>
            Writing
          </Link>
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden w-10 h-10 shrink-0 rounded-full bg-surface text-ink grid place-items-center transition-colors hover:bg-line"
          >
            {open ? <CloseIcon className="w-[18px] h-[18px]" /> : <MenuIcon className="w-[18px] h-[18px]" />}
          </button>
          <a
            href={href('contact')}
            className="hidden sm:inline-flex px-5 py-3 rounded-full bg-solid text-on-solid text-[13px] font-semibold no-underline transition-colors hover:bg-accent hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="md:hidden px-4 pb-5 flex flex-col"
          >
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={href(s.id)}
                onClick={() => setOpen(false)}
                className="py-3 border-t border-line font-display font-semibold text-[22px] tracking-[-0.5px] text-ink no-underline"
              >
                {s.label}
              </a>
            ))}
            <Link
              to="/blog"
              className="py-3 border-t border-line font-display font-semibold text-[22px] tracking-[-0.5px] text-ink no-underline"
            >
              Writing
            </Link>
            <a
              href={href('contact')}
              onClick={() => setOpen(false)}
              className="mt-3 self-start px-5 py-3 rounded-full bg-accent text-white text-[13px] font-semibold no-underline"
            >
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

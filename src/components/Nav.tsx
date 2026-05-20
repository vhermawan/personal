import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useScrollSpy from '../hooks/useScrollSpy';
import ThemeToggle from './ThemeToggle';

interface NavProps {
  dark: boolean;
}

const LINKS: Array<{ id: string; label: string }> = [
  { id: 'home', label: 'Home' },
  { id: 'journey', label: 'Journey' },
  { id: 'project', label: 'Projects' },
  { id: 'about', label: 'About' },
];

export default function Nav({ dark }: NavProps) {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  useScrollSpy(['home', 'journey', 'project', 'about'], setActive);

  const handleMobileLink = () => setMobileOpen(false);

  return (
    <div className="fixed top-[18px] left-1/2 z-50 -translate-x-1/2 flex flex-col items-center w-[calc(100%-32px)] max-w-fit">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 0.1 }}
        className={`flex items-center gap-1.5 p-1.5 rounded-full backdrop-blur-xl text-[13px] transition-colors duration-700 w-full ${
          dark
            ? 'border border-white/20 bg-ink/70 text-white'
            : 'border border-ink/15 bg-paper/70 text-ink'
        }`}
      >
        <a
          href={pathname === '/' ? '#home' : '/#home'}
          className={`inline-flex items-center gap-2 pl-2 pr-3 py-2 font-serif italic text-[18px] no-underline transition-colors ${
            dark ? 'text-white' : 'text-ink'
          }`}
        >
          <span
            className={`w-[22px] h-[22px] rounded-full grid place-items-center font-sans not-italic font-semibold text-[11px] transition-colors flex-shrink-0 ${
              dark ? 'bg-white text-ink' : 'bg-ink text-paper'
            }`}
          >
            VH
          </span>
          Vihermawan
        </a>
        <span className={`hidden sm:block w-px h-[18px] mx-1 ${dark ? 'bg-white/20' : 'bg-ink/15'}`} />
        {LINKS.map((l) => {
          const isActive = pathname === '/' && active === l.id;
          return (
            <a
              key={l.id}
              href={pathname === '/' ? `#${l.id}` : `/#${l.id}`}
              className={`hidden sm:inline-block relative px-3.5 py-2 rounded-full no-underline transition-colors ${
                isActive
                  ? dark
                    ? 'bg-white text-ink'
                    : 'bg-ink text-paper'
                  : dark
                  ? 'text-white hover:bg-white/10'
                  : 'text-ink hover:bg-ink/5'
              }`}
            >
              {l.label}
            </a>
          );
        })}
        <Link
          to="/blog"
          className={`hidden sm:inline-block relative px-3.5 py-2 rounded-full no-underline transition-colors ${
            pathname.startsWith('/blog')
              ? dark
                ? 'bg-white text-ink'
                : 'bg-ink text-paper'
              : dark
              ? 'text-white hover:bg-white/10'
              : 'text-ink hover:bg-ink/5'
          }`}
        >
          Blog
        </Link>
        <span className={`hidden sm:block w-px h-[18px] mx-1 ${dark ? 'bg-white/20' : 'bg-ink/15'}`} />

        {/* Theme toggle */}
        <ThemeToggle />

        {/* Desktop Connect */}
        <a
          data-magnet
          href={pathname === '/' ? '#contact' : '/#contact'}
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-blue text-white font-medium no-underline transition-colors hover:bg-blue-deep"
        >
          Connect
          <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
            <path
              d="M2 10L10 2M10 2H4M10 2V8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Mobile right side */}
        <div className="sm:hidden flex items-center gap-1.5 ml-auto">
          <a
            href={pathname === '/' ? '#contact' : '/#contact'}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-blue text-white font-medium no-underline transition-colors hover:bg-blue-deep text-[12px]"
          >
            Connect
          </a>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className={`w-9 h-9 rounded-full grid place-items-center transition-colors ${
              dark ? 'hover:bg-white/10' : 'hover:bg-ink/5'
            }`}
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              {mobileOpen ? (
                <path
                  d="M3 3L13 13M13 3L3 13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2 4h12M2 8h12M2 12h12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
            className={`sm:hidden mt-2 w-full rounded-2xl backdrop-blur-xl border p-2 flex flex-col gap-1 ${
              dark
                ? 'border-white/20 bg-ink/80 text-white'
                : 'border-ink/15 bg-paper/80 text-ink'
            }`}
          >
            {LINKS.map((l) => {
              const isActive = pathname === '/' && active === l.id;
              return (
                <a
                  key={l.id}
                  href={pathname === '/' ? `#${l.id}` : `/#${l.id}`}
                  onClick={handleMobileLink}
                  className={`px-4 py-2.5 rounded-xl no-underline transition-colors text-[14px] ${
                    isActive
                      ? dark
                        ? 'bg-white text-ink font-medium'
                        : 'bg-ink text-paper font-medium'
                      : dark
                      ? 'text-white hover:bg-white/10'
                      : 'text-ink hover:bg-ink/5'
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <Link
              to="/blog"
              onClick={handleMobileLink}
              className={`px-4 py-2.5 rounded-xl no-underline transition-colors text-[14px] ${
                pathname.startsWith('/blog')
                  ? dark
                    ? 'bg-white text-ink font-medium'
                    : 'bg-ink text-paper font-medium'
                  : dark
                  ? 'text-white hover:bg-white/10'
                  : 'text-ink hover:bg-ink/5'
              }`}
            >
              Blog
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

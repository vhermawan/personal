import { motion } from 'motion/react';
import { useState } from 'react';
import useScrollSpy from '../hooks/useScrollSpy';

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
  useScrollSpy(['home', 'journey', 'project', 'about'], setActive);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 0.1 }}
      className={`fixed top-[18px] left-1/2 z-50 -translate-x-1/2 flex items-center gap-1.5 p-1.5 rounded-full backdrop-blur-xl text-[13px] transition-colors duration-700 ${
        dark
          ? 'border border-white/20 bg-ink/70 text-white'
          : 'border border-ink/15 bg-paper/70 text-ink'
      }`}
    >
      <a
        href="#home"
        className={`inline-flex items-center gap-2 pl-2 pr-3 py-2 font-serif italic text-[18px] no-underline transition-colors ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        <span
          className={`w-[22px] h-[22px] rounded-full grid place-items-center font-sans not-italic font-semibold text-[11px] transition-colors ${
            dark ? 'bg-white text-ink' : 'bg-ink text-paper'
          }`}
        >
          VH
        </span>
        Vihermawan
      </a>
      <span className={`hidden sm:block w-px h-[18px] mx-1 ${dark ? 'bg-white/20' : 'bg-ink/15'}`} />
      {LINKS.map((l) => {
        const isActive = active === l.id;
        return (
          <a
            key={l.id}
            href={`#${l.id}`}
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
      <span className={`hidden sm:block w-px h-[18px] mx-1 ${dark ? 'bg-white/20' : 'bg-ink/15'}`} />
      <a
        data-magnet
        href="#contact"
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-blue text-white font-medium no-underline transition-colors hover:bg-blue-deep"
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
    </motion.nav>
  );
}

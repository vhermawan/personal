import { motion } from 'motion/react';
import { TerminalIcon } from '../components/Icons';
import chipMobile from '../assets/home/chip-mobile.jpg';
import heroTl from '../assets/home/hero-tl.jpg';
import heroBl from '../assets/home/hero-bl.jpg';
import heroTr from '../assets/home/hero-tr.jpg';
import heroBr from '../assets/home/hero-br.jpg';

const EASE = [0.2, 0.7, 0.2, 1] as const;

const CARDS = [
  { src: heroTl, className: 'left-[-60px] top-[120px] w-[300px] h-[210px]', rotate: 6 },
  { src: heroBl, className: 'left-5 top-[440px] w-[330px] h-[230px]', rotate: -4 },
  { src: heroTr, className: 'right-[-70px] top-[90px] w-[320px] h-[220px]', rotate: -5 },
  { src: heroBr, className: 'right-[-50px] top-[430px] w-[340px] h-[240px]', rotate: 4 },
];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-[1440px] min-h-[480px] sm:min-h-[560px] xl:h-[720px] flex flex-col items-center justify-center gap-[26px] px-4 sm:px-10 py-20 xl:py-0">
        <h1 className="m-0 text-balance sm:flex sm:flex-col sm:items-center sm:gap-0.5 font-display font-bold text-ink text-center text-[clamp(38px,6.4vw,68px)] leading-[1.074] tracking-[-0.035em]">
          <motion.span {...rise(0.05)} className="inline sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-[0.2em]">
            <span>I Build Software</span>{' '}
            <img
              src={chipMobile}
              alt=""
              className="inline-block align-[-0.12em] w-[1.41em] h-[0.85em] rounded-[0.2em] object-cover"
            />{' '}
            <span>That</span>
          </motion.span>{' '}
          <motion.span {...rise(0.15)} className="inline sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-[0.2em]">
            <span>Ships, Scales</span>{' '}
            <span className="inline-grid align-[-0.12em] w-[1em] h-[0.85em] rounded-[0.2em] bg-solid text-on-solid place-items-center">
              <TerminalIcon className="w-[0.41em] h-[0.41em]" />
            </span>{' '}
            <span>and Lasts.</span>
          </motion.span>
        </h1>

        <motion.p {...rise(0.25)} className="relative z-[1] m-0 max-w-[470px] text-center text-[14px] leading-[22px] text-muted">
          Fullstack engineer in Surabaya. Six years turning ideas into web and mobile products —
          React, React Native, Laravel, and Go.
        </motion.p>

        <motion.a
          {...rise(0.35)}
          href="#contact"
          className="relative z-[2] px-[26px] py-3.5 rounded-full bg-accent text-white text-[14px] font-semibold no-underline shadow-[0_8px_24px_-4px_#FF5B0455] transition-[background-color,transform] duration-200 hover:bg-accent-deep active:scale-[0.97]"
        >
          Let's collaborate
        </motion.a>

        {CARDS.map((card, i) => (
          <motion.img
            key={card.src}
            src={card.src}
            alt=""
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: card.rotate }}
            transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: EASE }}
            style={{ transformOrigin: 'top left' }}
            className={`hidden min-[1360px]:block absolute z-[3] rounded-2xl object-cover shadow-[0_18px_40px_-10px_#0000001F] ${card.className}`}
          />
        ))}
      </div>
    </section>
  );
}

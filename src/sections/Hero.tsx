import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import SplitWords from '../components/SplitWords';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-22%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.65]);
  const glyphY = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);
  const glyphRot = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <section
      ref={ref}
      className="relative z-[3] min-h-screen flex flex-col justify-end px-[6vw] pt-[140px] pb-[5vh]"
      id="home"
      data-screen-label="01 Home"
      data-theme="paper"
    >
      <motion.div
        className="absolute right-[6vw] top-[18vh] font-serif italic text-blue/10 pointer-events-none z-[1] leading-none"
        style={{ fontSize: 'clamp(120px,22vw,360px)', y: glyphY, rotate: glyphRot }}
      >
        ✦
      </motion.div>

      <Reveal
        className="flex flex-wrap items-end justify-between gap-5 mb-9 font-mono text-[11px] uppercase tracking-[0.16em]"
        style={{ color: 'var(--muted)' }}
      >
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{ border: '1px solid var(--line)', background: 'var(--card)' }}
        >
          <span className="relative w-2 h-2 rounded-full bg-blue">
            <span className="absolute -inset-[3px] rounded-full border-[1.5px] border-blue animate-ping2" />
          </span>
          Available for collaboration · 2026
        </span>
        <span>Surabaya, ID · UTC+7</span>
      </Reveal>

      <motion.h1
        className="font-sans font-light m-0 relative z-[2]"
        style={{
          letterSpacing: '-0.05em',
          fontSize: 'clamp(56px, 11.5vw, 200px)',
          lineHeight: 0.86,
          color: 'var(--fg-now)',
          y: titleY,
          opacity: titleOpacity,
        }}
      >
        <SplitWords delay={0.2}>
          {['Hello,', "I'm", <span key="v" className="font-serif italic font-normal text-blue" style={{ letterSpacing: '-0.02em' }}>Vicky</span>]}
        </SplitWords>
        <SplitWords delay={0.4}>
          {[<span key="h" className="stroke-text">Hermawan, a</span>]}
        </SplitWords>
        <SplitWords delay={0.55}>
          {['Fullstack Engineer']}
        </SplitWords>
      </motion.h1>

      <div className="grid lg:grid-cols-[1.2fr_1fr] grid-cols-1 gap-10 items-end mt-12 relative z-[2]">
        <div>
          <Reveal
            className="text-[clamp(18px,1.4vw,22px)] leading-[1.45] max-w-[540px]"
            style={{ color: 'var(--fg-now)' }}
          >
            <p>
              Building <em className="font-serif italic text-blue text-[1.15em]">thoughtful</em>{' '}
              products on the web. Two years as a fullstack developer, an endless student of the
              craft — happiest when an idea, a database, and a good cup of coffee are all on the
              same desk.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-3.5 mt-7">
            <a
              data-magnet
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-ink text-paper font-medium text-sm no-underline transition-colors hover:bg-blue"
            >
              Let's collaborate
              <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
            <a
              href="#project"
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-transparent font-medium text-sm no-underline transition-colors hover:bg-ink hover:text-paper"
              style={{ color: 'var(--fg-now)', border: '1px solid var(--line)' }}
            >
              View portfolio
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="flex flex-col gap-4 items-start">
          <div
            className="w-full rounded-[18px] p-[22px] backdrop-blur-md"
            style={{ border: '1px solid var(--line)', background: 'var(--card)' }}
          >
            <h4
              className="m-0 mb-3.5 font-mono text-[11px] uppercase tracking-[0.18em] font-medium"
              style={{ color: 'var(--muted)' }}
            >
              Currently
            </h4>
            {[
              ['Role', 'Fullstack Developer'],
              ['Stack', 'Next · Laravel · PG'],
              ['Reading', 'A Philosophy of Software Design'],
              ['Listening', 'Lo-fi · Indie'],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={`flex items-baseline justify-between py-2 text-sm ${
                  i === 0 ? '' : 'border-t border-dashed'
                }`}
                style={i !== 0 ? { borderColor: 'var(--line-2)' } : undefined}
              >
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.1em]"
                  style={{ color: 'var(--muted)' }}
                >
                  {k}
                </span>
                <span className="font-medium" style={{ color: 'var(--fg-now)' }}>{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Marquee />
    </section>
  );
}

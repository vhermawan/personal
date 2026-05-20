import { motion, useScroll, useTransform, useMotionValue, useVelocity, animate } from 'motion/react';
import { useEffect, useRef } from 'react';

const ITEMS = [
  'Fullstack Development',
  'Interface Design',
  'Type Systems',
  'Realtime Apps',
  'Database Modeling',
  'Workaholic Energy',
];

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  useEffect(() => {
    let frame = 0;
    let last = performance.now();
    const speed = 30; // px/s baseline
    let boost = 1;

    const unsub = scrollVelocity.on('change', (v) => {
      boost = 1 + Math.min(Math.abs(v) / 1200, 3);
    });

    const tick = () => {
      const now = performance.now();
      const dt = (now - last) / 1000;
      last = now;
      const next = baseX.get() - speed * boost * dt;
      // wrap to -50% width
      const w = containerRef.current ? containerRef.current.scrollWidth / 2 : 0;
      if (w === 0) { frame = requestAnimationFrame(tick); return; }
      baseX.set(-((-next) % w));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      unsub();
    };
  }, [baseX, scrollVelocity]);

  return (
    <div className="relative z-[3] mt-20 border-y border-ink/15 py-[22px] overflow-hidden marquee-mask">
      <motion.div
        ref={containerRef}
        className="flex gap-12 w-max font-serif italic text-[34px] text-black items-center dark:text-white will-change-transform"
        style={{ x: baseX }}
      >
        {[0, 1].map((rep) => (
          <span key={rep} className="inline-flex items-center gap-12">
            {ITEMS.map((t) => (
              <span key={t} className="inline-flex items-center gap-12">
                {t}
                <span className="text-blue not-italic font-sans text-[18px] inline-block animate-spin6">
                  ✦
                </span>
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

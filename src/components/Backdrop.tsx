import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import { useRef } from 'react';

interface Orb {
  className: string;
  speed: number;
}

const ORBS: Orb[] = [
  { className: 'w-[55vw] h-[55vw] -left-[15vw] -top-[10vw] opacity-45 bg-[radial-gradient(circle,#B9C8FF_0%,#4A6FFF_60%,transparent_70%)]', speed: 0.15 },
  { className: 'w-[60vw] h-[60vw] -right-[20vw] top-[30vh] opacity-25 bg-[radial-gradient(circle,#2D5BFF_0%,#0A1A3F_60%,transparent_70%)]', speed: 0.35 },
  { className: 'w-[48vw] h-[48vw] left-[25vw] top-[120vh] opacity-40 bg-[radial-gradient(circle,#DCE5FF_0%,#2D5BFF_60%,transparent_70%)]', speed: 0.55 },
  { className: 'w-[65vw] h-[65vw] -right-[10vw] top-[220vh] opacity-35 bg-[radial-gradient(circle,#4A6FFF_0%,#0A1A3F_60%,transparent_70%)]', speed: 0.25 },
];

export default function Backdrop() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {ORBS.map((o, i) => (
          <Orb key={i} className={o.className} speed={o.speed} />
        ))}
      </div>
      <GridDrift />
      <div className="grain" />
    </>
  );
}

function Orb({ className, speed }: Orb) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => v * speed * 1.4);
  const x = useTransform(scrollY, (v) => (speed - 0.3) * 120 + v * 0);
  return (
    <motion.div
      ref={ref}
      style={{ y, x, filter: 'blur(80px)', mixBlendMode: 'multiply' }}
      className={`absolute rounded-full will-change-transform ${className}`}
    />
  );
}

function GridDrift() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => -v * 0.05);
  const transform = useMotionTemplate`translate3d(0, ${y}px, 0)`;
  return <motion.div className="bg-grid" style={{ transform }} />;
}

import { motion, useScroll, useSpring } from 'motion/react';

export default function Progress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 h-[2px] z-[60] origin-left bg-gradient-to-r from-blue to-blue-deep"
      style={{ scaleX }}
    />
  );
}

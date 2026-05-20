import { motion, useInView } from 'motion/react';
import { useRef, type ReactNode } from 'react';

interface SplitWordsProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
}

/**
 * Splits children (an array of word strings) into individual <motion.span>
 * elements that rise from below on enter. Pass an array — strings, JSX, etc.
 */
export default function SplitWords({
  children,
  className,
  stagger = 0.045,
  duration = 1,
  delay = 0,
  once = true,
  amount = 0.4,
}: SplitWordsProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, amount });
  const words = (Array.isArray(children) ? children : [children]) as ReactNode[];

  return (
    <span ref={ref} className={`split-line ${className ?? ''}`}>
      {words.map((w, i) => (
        <span key={i} style={{ display: 'inline-block' }}>
          <motion.span
            className="word"
            initial={{ y: '110%', opacity: 0 }}
            animate={inView ? { y: '0%', opacity: 1 } : undefined}
            transition={{
              duration,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * stagger,
            }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
}

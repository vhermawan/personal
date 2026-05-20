import Reveal from '../components/Reveal';
import SplitWords from '../components/SplitWords';

export default function Statement() {
  return (
    <section className="relative z-[2] px-[6vw] py-20 pb-40" data-screen-label="Statement">
      <div className="h-px bg-white/10 mb-16" />
      <Reveal>
        <span className="section-tag" style={{ color: 'rgba(255,255,255,.55)' }}>
          Statement
        </span>
      </Reveal>

      <h2
        className="font-sans font-light text-paper m-0 max-w-[1200px] [&_em]:font-serif [&_em]:italic [&_em]:text-blue-soft [&_em]:font-normal"
        style={{ letterSpacing: '-0.045em', fontSize: 'clamp(56px,10vw,160px)', lineHeight: 0.94 }}
      >
        <SplitWords amount={0.2} duration={1.2}>{['Build', 'software']}</SplitWords>
        <SplitWords amount={0.2} duration={1.2} delay={0.05}>{['like', 'it', 'will']}</SplitWords>
        <SplitWords amount={0.2} duration={1.2} delay={0.1}>{['be', <em key="r">read</em>]}</SplitWords>
        <SplitWords amount={0.2} duration={1.2} delay={0.15}>{['by', 'a', 'human.']}</SplitWords>
      </h2>

      <Reveal delay={0.2} className="mt-9 max-w-[560px] text-[17px] leading-[1.6] text-white/65">
        <p>
          A small principle I keep coming back to: the next person to open the file might be tired,
          in a hurry, or me at 2 a.m. Be kind to them.
        </p>
      </Reveal>
    </section>
  );
}

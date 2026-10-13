import Reveal from '../components/Reveal';

export default function Statement() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-10 lg:px-20 py-16 lg:py-20">
      <Reveal className="flex flex-col gap-7 rounded-[28px] bg-slab px-6 py-14 sm:px-12 lg:px-[72px] lg:py-24 overflow-hidden">
        <span className="font-mono text-[11px] tracking-[0.8px] text-accent">STATEMENT</span>
        <h2 className="m-0 font-display font-bold text-slab-fg text-[clamp(38px,5vw,72px)] leading-[1.08] tracking-[-0.042em] text-balance lg:text-wrap">
          Build software like it will <br className="hidden lg:block" />
          be <em className="text-accent italic">read</em> by a human.
        </h2>
        <p className="m-0 max-w-[560px] text-[14px] leading-[23px] text-slab-muted">
          A small principle I keep coming back to: the next person to open the file might be
          tired, in a hurry, or me at 2 a.m. Be kind to them.
        </p>
      </Reveal>
    </section>
  );
}

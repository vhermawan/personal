import Reveal from '../components/Reveal';
import SplitWords from '../components/SplitWords';

export default function Contact() {
  return (
    <section
      className="relative z-[3] px-[6vw] pt-16 pb-36"
      id="contact"
      data-screen-label="05 Contact"
      data-theme="paper"
    >
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[36px] px-[6vw] py-20 text-white"
          style={{ background: 'linear-gradient(135deg,#2D5BFF 0%, #1A3DD9 60%, #0A1A3F 120%)' }}
        >
          <div
            className="absolute inset-[-2px] rounded-[36px] pointer-events-none"
            style={{
              background:
                'radial-gradient(60% 80% at 80% 20%, rgba(255,255,255,.18), transparent 60%), radial-gradient(50% 60% at 10% 100%, rgba(255,255,255,.12), transparent 60%)',
            }}
          />
          <span className="relative font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
            Section 05 — Get in touch
          </span>
          <h2
            className="relative font-sans font-light text-white m-0 mt-4 mb-7 [&_em]:font-serif [&_em]:italic [&_em]:font-normal"
            style={{
              letterSpacing: '-0.04em',
              fontSize: 'clamp(40px, 7vw, 110px)',
              lineHeight: 0.95,
            }}
          >
            <SplitWords amount={0.3}>{['Have', 'an', 'idea?']}</SplitWords>
            <SplitWords amount={0.3} delay={0.1}>
              {[
                <em key="l">Let's</em>,
                <em key="m">make</em>,
                <em key="i">it</em>,
                <em key="r">real.</em>,
              ]}
            </SplitWords>
          </h2>
          <div className="relative flex flex-wrap gap-3.5">
            <a
              data-magnet
              href="https://twitter.com/vihermawan"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-white text-ink font-medium text-sm no-underline transition-colors hover:bg-paper"
            >
              @vihermawan on Twitter
              <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
            <a
              data-magnet
              href="https://www.linkedin.com/in/vicky-hermawan/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-transparent text-white border border-white/40 font-medium text-sm no-underline transition-colors hover:bg-white hover:text-ink hover:border-white"
            >
              LinkedIn
              <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
            <a
              data-magnet
              href="mailto:hello@vihermawan.space"
              className="group inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-transparent text-white border border-white/40 font-medium text-sm no-underline transition-colors hover:bg-white hover:text-ink hover:border-white"
            >
              hello@vihermawan.space
              <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal';

const STATS = [
  { value: '6+', label: 'Years Shipping' },
  { value: '20%', label: 'Release Velocity Lift' },
  { value: '454', label: 'Users on Launch Week' },
  { value: 'IDR 26.8B', label: 'DPK Growth Driven' },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1440px] flex flex-col gap-16 lg:gap-[88px] px-4 sm:px-10 lg:px-20 pt-20 lg:pt-[110px] pb-20 lg:pb-24">
      <Reveal className="flex flex-col lg:flex-row gap-6 lg:gap-15">
        <span className="shrink-0 font-mono text-[11px] tracking-[0.6px] text-accent lg:pt-4">Who I am</span>
        <p className="m-0 flex-1 font-display font-medium text-ink text-[clamp(24px,2.6vw,34px)] leading-[1.44] tracking-[-0.03em] max-w-[1000px]">
          I'm a fullstack engineer in Surabaya. I started with{' '}
          <span className="inline-block align-middle -translate-y-[0.08em] px-3.5 py-1.5 rounded-2xl bg-solid text-on-solid font-mono font-normal text-[0.47em] leading-none tracking-normal">
            PHP
          </span>{' '}
          and Laravel, then grew into React, React Native, and Next.js. From poultry-farm SaaS to
          fintech under OJK — the domain changes, the{' '}
          <em className="text-accent italic">craft</em> doesn't.
        </p>
      </Reveal>

      <div className="flex flex-col items-center gap-9">
        <Reveal as="span" className="font-mono text-[11px] tracking-[0.6px] text-faint">
          Numbers That Define The Work
        </Reveal>
        <StaggerGroup className="w-full grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="flex flex-col items-center gap-2.5 text-center">
              <span className="font-display font-bold text-ink text-[clamp(36px,4vw,52px)] tracking-[-0.04em] leading-tight tabular-nums">
                {s.value}
              </span>
              <span className="text-[12px] text-muted">{s.label}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

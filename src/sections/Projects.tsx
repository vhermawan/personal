import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, type ReactNode } from 'react';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal';
import SplitWords from '../components/SplitWords';
import { CmsMock, CodeMock, DashMock, PhoneMock } from '../components/ProjectMocks';

interface Project {
  size: 'lg' | 'md' | 'sm';
  acc: 1 | 2 | 3 | 4;
  idx: string;
  badge: string;
  title: ReactNode;
  sub: string;
  Mock: () => JSX.Element;
}

const PROJECTS: Project[] = [
  {
    size: 'lg',
    acc: 1,
    idx: '01 / 04',
    badge: 'Fullstack · 2020',
    title: <>SaaS <em>BroilerX</em></>,
    sub: 'Farm Management · GraphQL · React JS',
    Mock: DashMock,
  },
  {
    size: 'md',
    acc: 2,
    idx: '02 / 04',
    badge: 'Final Project · 2020',
    title: <>Event<em>In</em></>,
    sub: 'React · Redux · Laravel · PostgreSQL',
    Mock: PhoneMock,
  },
  {
    size: 'sm',
    acc: 3,
    idx: '03 / 04',
    badge: 'Client work · 2019',
    title: <>KO<em>PAJA</em></>,
    sub: 'Tax info system · Laravel · MySQL',
    Mock: CodeMock,
  },
  {
    size: 'sm',
    acc: 4,
    idx: '04 / 04',
    badge: 'Client work · 2019',
    title: <>Public <em>Safety</em> Center</>,
    sub: 'Community · Laravel · REST API',
    Mock: CmsMock,
  },
];

const sizeClass: Record<Project['size'], string> = {
  lg: 'lg:col-span-7 col-span-12 lg',
  md: 'lg:col-span-5 col-span-12 md',
  sm: 'lg:col-span-6 col-span-12 sm',
};

const aspectClass: Record<Project['size'], string> = {
  lg: 'aspect-[16/10.5]',
  md: 'aspect-[5/4]',
  sm: 'aspect-[4/3]',
};

const accBg: Record<Project['acc'], string> = {
  1: 'radial-gradient(120% 90% at 30% 0%, #1B3FAD 0%, #0A1A3F 70%)',
  2: 'radial-gradient(110% 80% at 50% 100%, #2D5BFF 0%, #0A1A3F 70%)',
  3: 'linear-gradient(135deg,#06112A 0%, #112F75 100%)',
  4: 'radial-gradient(120% 100% at 80% 50%, #1F47C2 0%, #0A1A3F 70%)',
};

export default function Projects() {
  return (
    <section className="relative z-[2] px-[6vw] pt-[140px] pb-[120px]" id="project" data-screen-label="03 Projects">
      <div className="relative z-[2] grid lg:grid-cols-[1fr_auto] grid-cols-1 gap-15 items-end border-b border-white/12 pb-10 mb-16">
        <Reveal>
          <span className="section-tag !text-white/60 [&::before]:!bg-sky">Section 03 — Selected work</span>
          <h2 className="section-title !text-paper [&_em]:!text-blue-soft">
            <SplitWords>{['Things', 'I', 'made', 'with']}</SplitWords>{' '}
            <SplitWords delay={0.15}>{[<em key="i">intent.</em>]}</SplitWords>
          </h2>
          <p className="text-[17px] leading-[1.55] text-white/70 max-w-[520px] mt-5">
            A small set, chosen on purpose. Each one taught me something I still carry forward —
            about people, about systems, about shipping.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="flex items-baseline gap-3 font-mono text-white/55 text-[13px] uppercase tracking-[0.14em] whitespace-nowrap">
          <b className="font-serif italic font-normal text-blue-soft text-[74px] leading-[0.9]" style={{ letterSpacing: '-0.03em' }}>
            04
          </b>
          <div>
            <div>Projects</div>
            <span className="font-mono text-[11px]">2018 — Now</span>
          </div>
        </Reveal>
      </div>

      <StaggerGroup className="grid grid-cols-12 gap-7 relative z-[2]" stagger={0.12}>
        {PROJECTS.map((p, i) => (
          <StaggerItem key={i} className={sizeClass[p.size]}>
            <ProjectCard project={p} aspect={aspectClass[p.size]} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="relative z-[2] mt-14 pt-9 border-t border-white/12 flex flex-wrap justify-between items-center gap-5">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
          More work available on request
        </span>
        <a
          data-magnet
          href="https://github.com/vihermawan"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3.5 font-sans text-lg text-white no-underline border border-white/22 rounded-full px-5 py-3.5 transition-colors hover:bg-paper hover:text-ink hover:border-paper"
        >
          See everything on GitHub
          <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, aspect }: { project: Project; aspect: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const visualY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <motion.a
      ref={ref}
      data-magnet
      href="#"
      className={`proj ${p.size === 'lg' ? 'lg' : ''} group relative flex flex-col w-full rounded-[24px] overflow-hidden bg-[#0E2350] border border-white/8 no-underline text-inherit will-change-transform`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <span className="absolute top-[22px] left-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/72 z-[3] px-2.5 py-[5px] rounded-full bg-black/35 backdrop-blur-md border border-white/10">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-soft" />
        {p.badge}
      </span>
      <span className="absolute top-[22px] right-6 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60 z-[3]">
        {p.idx}
      </span>

      <motion.div
        className={`relative overflow-hidden ${aspect} will-change-transform`}
        style={{ background: accBg[p.acc], y: visualY }}
      >
        <p.Mock />
      </motion.div>

      <div className="flex items-end justify-between gap-5 px-6 py-[22px] bg-black/15">
        <div>
          <p
            className={`m-0 font-sans font-medium text-paper [&>em]:font-serif [&>em]:italic [&>em]:text-blue-soft [&>em]:font-normal ${
              p.size === 'lg' ? 'text-[30px]' : 'text-[24px]'
            }`}
            style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            {p.title}
          </p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
            {p.sub}
          </p>
        </div>
        <span className="flex-shrink-0 w-11 h-11 rounded-full border border-white/22 grid place-items-center text-paper transition-all duration-300 group-hover:bg-paper group-hover:text-ink group-hover:border-paper group-hover:rotate-45">
          ↗
        </span>
      </div>
    </motion.a>
  );
}

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal';
import SplitWords from '../components/SplitWords';

interface Item {
  year: string;
  role: React.ReactNode;
  org: string;
  desc: string;
  tags: string[];
}

const ITEMS: Item[] = [
  {
    year: '2025 — Now',
    role: <>Senior Software Engineer at <em>Apotek Digital Indonesia</em></>,
    org: 'Jakarta · Mobile & Web Platform',
    desc:
      'Architecting and maintaining the core web platform and mobile apps (iOS & Android). Led a major React Native upgrade (v0.76 → v0.81) that brought Play Store compliance and cut Android bundle size by 10% (38MB → 34MB). Automated deployment previews for PRs, lifting team release productivity by 20%.',
    tags: ['React Native', 'iOS', 'Android', 'CI/CD'],
  },
  {
    year: '2025 — Now',
    role: <>Mentor at <em>Dibimbing</em></>,
    org: 'Remote · Bootcamp Mentoring',
    desc:
      'Coaching students on frontend fundamentals, modern React patterns, and the practical gap between bootcamp and production code.',
    tags: ['React', 'Mentoring', 'Frontend'],
  },
  {
    year: 'Apr 2024 — Feb 2025',
    role: <>Senior Frontend Engineer at <em>Hijra</em></>,
    org: 'Jakarta · P2P Lending & Islamic Finance',
    desc:
      'Implemented the Deposito feature that drove IDR 26.8B growth in DPK across 454 users. Maintained the web funder platform and Alami mobile backend under OJK compliance. Received an Exceptional Performance rating in the 2023 review.',
    tags: ['React', 'React Native', 'OJK', 'Fintech'],
  },
  {
    year: 'May — Sep 2023',
    role: <>Frontend Facilitator at <em>Binar Academy</em></>,
    org: 'Remote · Bootcamp',
    desc:
      'Coached bootcamp students on frontend fundamentals, React JS, and Redux for state management — translating real-world experience into lessons that actually stick.',
    tags: ['React', 'Redux', 'Mentoring'],
  },
  {
    year: 'Jun 2022 — Apr 2024',
    role: <>Frontend Engineer at <em>Hijra</em></>,
    org: 'Jakarta · Islamic Fintech',
    desc:
      'Built the Vertical Banking stream for Hijra for Business — 100% post-release transaction success, IDR 150M balance in 3 months, 4k users in month one. Engineered a PR-triggered auto-deploy pipeline and optimised a 1.5 GB image asset down to 66 MB.',
    tags: ['Next.js', 'React', 'TypeScript', 'DevOps'],
  },
  {
    year: '2021 — 2022',
    role: <>Fullstack Developer at <em>Aino</em></>,
    org: 'Fulltime · Yogyakarta',
    desc:
      'First fulltime role. Shipped features across the stack, deepened expertise in Vue.js and Golang, and learned what it means to own something in production.',
    tags: ['Vue.js', 'Golang', 'PostgreSQL', 'MongoDB'],
  },
  {
    year: '2017 — 2020',
    role: <>Student & Early career at <em>Gadjah Mada University</em></>,
    org: 'D3 → D4 · Yogyakarta',
    desc:
      'Studied computer science, worked part-time at BroilerX building a poultry farm SaaS, interned at the Ministry of Social Affairs, and taught Laravel & React as a lab assistant. The years that built the foundation.',
    tags: ['PHP', 'Laravel', 'React JS', 'GraphQL'],
  },
];

export default function Journey() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 70%', 'end 65%'],
  });
  const fillHeight = useTransform(scrollYProgress, (v) => `${Math.min(100, v * 100)}%`);

  return (
    <section
      className="relative z-[3] px-[6vw] pt-40 pb-36"
      id="journey"
      data-screen-label="02 Journey"
      data-theme="paper"
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-15 gap-y-6 items-end mb-20">
        <Reveal>
          <span className="section-tag">Section 02 — Journey</span>
          <h2 className="section-title">
            <SplitWords>{['A', 'path', 'made', 'of']}</SplitWords>{' '}
            <SplitWords delay={0.15}>
              {[<em key="sc">small commits.</em>]}
            </SplitWords>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="text-[18px] leading-[1.5] text-ink max-w-[460px]">
          <p>
            Every line in this timeline started as a{' '}
            <em className="font-serif italic text-blue">nervous first PR</em>. From classroom labs
            to production releases, here's how curiosity turned into a craft I keep showing up for.
          </p>
        </Reveal>
      </div>

      <StaggerGroup className="relative mt-5">
        <div ref={timelineRef} className="absolute top-0 bottom-0 w-px bg-ink/15 left-[60px] md:left-[140px]">
          <motion.div
            className="absolute top-0 left-0 w-px bg-gradient-to-b from-blue to-blue-deep"
            style={{ height: fillHeight }}
          />
        </div>
        {ITEMS.map((it, i) => (
          <StaggerItem
            key={i}
            className={`group relative grid grid-cols-[60px_1fr] md:grid-cols-[140px_1fr] gap-5 md:gap-10 py-8 border-t border-ink/15 ${
              i === ITEMS.length - 1 ? 'border-b' : ''
            }`}
          >
            <div className="font-mono text-[13px] tracking-[0.08em] text-ink/55 pt-1">
              {it.year}
            </div>
            <span className="absolute top-[46px] left-[60px] md:left-[140px] w-[11px] h-[11px] rounded-full bg-paper border-[1.5px] border-ink -translate-x-1/2 transition-all duration-300 group-hover:bg-blue group-hover:border-blue group-hover:scale-[1.4]" />
            <div className="pl-5 md:pl-9">
              <h3
                className="font-sans font-normal text-ink m-0 [&>em]:font-serif [&>em]:italic [&>em]:text-blue"
                style={{
                  letterSpacing: '-0.02em',
                  fontSize: 'clamp(24px,3vw,38px)',
                  lineHeight: 1.05,
                }}
              >
                {it.role}
              </h3>
              <p className="mt-2 text-sm text-ink/55 font-mono tracking-[0.04em]">{it.org}</p>
              <p className="mt-3.5 text-[15px] leading-[1.55] max-w-[680px] text-ink">{it.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3.5">
                {it.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] tracking-[0.06em] px-2.5 py-1 border border-ink/15 rounded-full text-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

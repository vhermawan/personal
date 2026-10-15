import Reveal from '../components/Reveal';

const ROLES = [
  {
    date: '2025 — Now',
    role: 'Senior Software Engineer',
    company: 'Apotek Digital Indonesia',
    meta: 'Jakarta · Mobile & Web Platform',
    desc: 'Architecting the core web platform and mobile apps (iOS & Android). Led a React Native upgrade (v0.76 → v0.81) that restored Play Store compliance and cut the Android bundle 38MB → 34MB, plus automated PR deploy previews — 20% uplift in release velocity.',
    tags: ['React Native', 'iOS', 'Android', 'CI/CD'],
  },
  {
    date: '2025 — Now',
    role: 'Mentor',
    company: 'Dibimbing',
    meta: 'Remote · Bootcamp Mentoring',
    desc: 'Coaching students on frontend fundamentals, modern React patterns, and the practical gap between bootcamp and production code.',
    tags: ['React', 'Mentoring', 'Frontend'],
  },
  {
    date: 'Apr 2024 — Feb 2025',
    role: 'Senior Frontend Engineer',
    company: 'Hijra',
    meta: 'Jakarta · P2P Lending & Islamic Finance',
    desc: 'Shipped the Deposito feature that drove IDR 26.8B DPK growth across 454 users. Maintained the web funder platform and Alami mobile backend under OJK compliance. Exceptional Performance rating in the 2023 review.',
    tags: ['React', 'React Native', 'OJK', 'Fintech'],
  },
  {
    date: 'May — Sep 2023',
    role: 'Frontend Facilitator',
    company: 'Binar Academy',
    meta: 'Remote · Bootcamp',
    desc: 'Coached bootcamp students on frontend fundamentals, React JS, and Redux — translating real-world experience into lessons that actually stick.',
    tags: ['React', 'Redux', 'Mentoring'],
  },
  {
    date: 'Jun 2022 — Apr 2024',
    role: 'Frontend Engineer',
    company: 'Hijra',
    meta: 'Jakarta · Islamic Fintech',
    desc: 'Built the Vertical Banking stream for Hijra for Business — 100% post-release transaction success, IDR 150M balance in month one. Engineered a PR-triggered auto-deploy pipeline and optimised a 1.5 GB image asset down to 66 MB.',
    tags: ['Next.js', 'React', 'TypeScript', 'DevOps'],
  },
  {
    date: '2021 — 2022',
    role: 'Fullstack Developer',
    company: 'Aino',
    meta: 'Fulltime · Yogyakarta',
    desc: 'First fulltime role. Shipped features across the stack, deepened expertise in Vue.js and Golang, and learned what it means to own something in production.',
    tags: ['Vue.js', 'Golang', 'PostgreSQL', 'MongoDB'],
  },
  {
    date: '2017 — 2020',
    role: 'Student & Early Career',
    company: 'Gadjah Mada University',
    meta: 'D3 → D4 · Yogyakarta',
    desc: 'Studied computer science, worked part-time at BroilerX building a poultry farm SaaS, interned at the Ministry of Social Affairs, and taught Laravel & React as a lab assistant.',
    tags: ['PHP', 'Laravel', 'React JS', 'GraphQL'],
  },
];

export default function Journey() {
  return (
    <section id="journey" className="bg-surface">
      <div className="mx-auto max-w-[1440px] flex flex-col gap-11 px-4 sm:px-10 lg:px-20 pt-20 lg:pt-24 pb-20 lg:pb-[110px]">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[11px] tracking-[0.8px] text-accent">SECTION 03 — JOURNEY</span>
            <h2 className="m-0 max-w-[560px] font-display font-bold text-ink text-[clamp(38px,4.6vw,56px)] leading-[1.05] tracking-[-0.04em]">
              A path made of small commits.
            </h2>
          </div>
          <p className="m-0 lg:w-[380px] shrink-0 text-[14px] leading-[22px] text-muted">
            Every line in this timeline started as a nervous first PR. From classroom labs to
            production releases, here's how curiosity turned into a craft I keep showing up for.
          </p>
        </Reveal>

        <ol className="m-0 p-0 list-none flex flex-col">
          {ROLES.map((r) => (
            <Reveal
              key={`${r.company}-${r.role}`}
              as="li"
              amount={0.3}
              className="flex flex-col md:flex-row gap-3 md:gap-12 py-7 border-t border-line"
            >
              <span className="md:w-[170px] shrink-0 font-mono text-[11px] leading-[17px] tracking-[0.4px] text-faint md:pt-2.5">
                {r.date}
              </span>
              <div className="flex-1 flex flex-col gap-2.5 min-w-0">
                <h3 className="m-0 font-display font-semibold text-ink text-[clamp(22px,2.2vw,28px)] leading-tight tracking-[-1px]">
                  {r.role} at <em className="text-accent italic">{r.company}</em>
                </h3>
                <span className="font-mono text-[11px] tracking-[0.4px] text-faint">{r.meta}</span>
                <p className="m-0 max-w-[680px] text-[14px] leading-[23px] text-muted">{r.desc}</p>
                <ul className="m-0 p-0 pt-1.5 list-none flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <li
                      key={t}
                      className="px-3 py-1.5 rounded-full bg-bg border border-line font-mono text-[10px] text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

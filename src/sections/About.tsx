import Reveal from '../components/Reveal';
import SplitWords from '../components/SplitWords';

const FACTS: Array<[string, React.ReactNode]> = [
  ['Based in', 'Surabaya, Indonesia'],
  ['Working', 'Fulltime at Apotek Digital'],
  ['Languages', 'Bahasa, English'],
  ['Graduate', <><em className="font-serif italic text-blue">D4</em> — Gadjah Mada University</>],
  ['Hobby', 'Workaholic energy'],
];

const SKILLS: string[] = [
  'React Native','Vue.js', 'Golang', 'React JS', 'Laravel',
  'Express JS', 'Next.js', 'TypeScript', 'Redux',
  'Vuex', 'GraphQL', 'PostgreSQL', 'MongoDB',
  'MySQL', 'Chakra UI', 'Tailwind CSS', 'Figma',
];

export default function About() {
  return (
    <section
      className="relative z-[3] px-[6vw] pt-40 pb-32"
      id="about"
      data-screen-label="04 About"
      data-theme="paper"
    >
      <Reveal className="mb-15">
        <span className="section-tag">Section 04 — About</span>
        <h2 className="section-title">
          <SplitWords>{['Developer,', 'learner,']}</SplitWords>{' '}
          <SplitWords delay={0.15}>
            {[<em key="ss">workaholic.</em>]}
          </SplitWords>
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-20 gap-y-10 items-start">
        <Reveal>
          <div className="[&_p]:text-[clamp(20px,1.7vw,26px)] [&_p]:leading-[1.45] [&_p]:tracking-[-0.01em] [&_p]:text-[var(--fg-now)] [&_p]:m-0 [&_p]:mb-5 [&_p]:font-light [&_em]:font-serif [&_em]:italic [&_em]:text-blue [&_em]:font-normal">
            <p>
              I'm a developer based in Surabaya. I started working with <em>PHP</em> and
              the Laravel framework, then expanded into Express JS, React JS, Redux, and GraphQL.
            </p>
            <p>
              These days I work primarily with <em>React.js</em> and <em>React Native or Next.js</em> — building
              things at Apotek Digital while always finding time to learn something new on the side.
            </p>
            <p>
              From poultry farm SaaS to government information systems — the problem domain
              changes, the <em>craft</em> doesn't.
            </p>
          </div>
          <span className="font-serif italic text-[42px] text-blue mt-9 inline-block">
            — Vicky.
          </span>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-5 lg:sticky lg:top-[120px]">
          <div
            className="rounded-[22px] p-7 backdrop-blur-md"
            style={{ border: '1px solid var(--line)', background: 'var(--card)' }}
          >
            <h4
              className="m-0 mb-4 font-mono text-[11px] uppercase tracking-[0.18em] font-medium"
              style={{ color: 'var(--muted)' }}
            >
              Quick facts
            </h4>
            {FACTS.map(([k, v], i) => (
              <div
                key={k}
                className={`flex items-start justify-between gap-5 py-3.5 ${
                  i === 0 ? 'pt-0' : 'border-t border-dashed'
                }`}
                style={i !== 0 ? { borderColor: 'var(--line-2)' } : undefined}
              >
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.1em] min-w-[100px] pt-[3px]"
                  style={{ color: 'var(--muted)' }}
                >
                  {k}
                </span>
                <span
                  className="text-[15px] text-right leading-[1.5] flex-1"
                  style={{ color: 'var(--fg-now)' }}
                >
                  {v}
                </span>
              </div>
            ))}
          </div>

          <div
            className="rounded-[22px] p-7 backdrop-blur-md"
            style={{ border: '1px solid var(--line)', background: 'var(--card)' }}
          >
            <h4
              className="m-0 mb-4 font-mono text-[11px] uppercase tracking-[0.18em] font-medium"
              style={{ color: 'var(--muted)' }}
            >
              Working with
            </h4>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  data-skill
                  className="px-3.5 py-[7px] rounded-full text-[13px] transition-colors hover:bg-blue hover:text-white hover:border-blue cursor-default"
                  style={{
                    border: '1px solid var(--line)',
                    color: 'var(--fg-now)',
                    background: 'var(--paper)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

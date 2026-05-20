import Reveal from '../components/Reveal';
import SplitWords from '../components/SplitWords';

const FACTS: Array<[string, React.ReactNode]> = [
  ['Based in', 'Yogyakarta, Indonesia'],
  ['Working', 'Fulltime at Aino'],
  ['Languages', 'Bahasa, English'],
  ['Studying', <><em className="font-serif italic text-blue">D4</em> — Gadjah Mada University</>],
  ['Hobby', 'Workaholic energy'],
];

const SKILLS: string[] = [
  'Vue.js', 'Golang', 'React JS', 'Laravel',
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
          <div className="[&_p]:text-[clamp(20px,1.7vw,26px)] [&_p]:leading-[1.45] [&_p]:tracking-[-0.01em] [&_p]:text-ink [&_p]:m-0 [&_p]:mb-5 [&_p]:font-light [&_em]:font-serif [&_em]:italic [&_em]:text-blue [&_em]:font-normal">
            <p>
              I'm a developer based in Yogyakarta. I started working with <em>PHP</em> and
              the Laravel framework, then expanded into Express JS, React JS, Redux, and GraphQL.
            </p>
            <p>
              These days I work primarily with <em>Vue.js</em> and <em>Golang</em> — building
              things at Aino while always finding time to learn something new on the side.
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
          <div className="border border-ink/15 rounded-[22px] p-7 bg-white/50 backdrop-blur-md">
            <h4 className="m-0 mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55 font-medium">
              Quick facts
            </h4>
            {FACTS.map(([k, v], i) => (
              <div
                key={k}
                className={`flex items-start justify-between gap-5 py-3.5 ${
                  i === 0 ? 'pt-0' : 'border-t border-dashed border-ink/10'
                }`}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink/55 min-w-[100px] pt-[3px]">
                  {k}
                </span>
                <span className="text-[15px] text-ink text-right leading-[1.5] flex-1">{v}</span>
              </div>
            ))}
          </div>

          <div className="border border-ink/15 rounded-[22px] p-7 bg-white/50 backdrop-blur-md">
            <h4 className="m-0 mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55 font-medium">
              Working with
            </h4>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  data-skill
                  className="px-3.5 py-[7px] border border-ink/15 rounded-full text-[13px] text-ink bg-paper transition-colors hover:bg-blue hover:text-white hover:border-blue cursor-default"
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

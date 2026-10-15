import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal';
import { ArrowUpRightIcon } from '../components/Icons';
import andalan from '../assets/home/work-andalan.jpg';
import repair from '../assets/home/work-repair.jpg';
import apotek from '../assets/home/work-apotek.jpg';
import jaklingko from '../assets/home/work-jaklingko.jpg';

const PROJECTS = [
  { title: 'Andalan Consulting', meta: 'CLIENT WORK', tags: 'CORPORATE SITE · LEGAL & BUSINESS SERVICES', image: andalan, url: 'https://andalanconsulting.com/legal-service/' },
  { title: 'Repair Project', meta: 'CLIENT WORK', tags: 'COMPANY PROFILE · CIRCULAR MATERIAL', image: repair, url: 'https://www.repairproject.id/' },
  { title: 'Apotek Digital', meta: 'CLIENT WORK', tags: 'SAAS · PHARMACY MANAGEMENT', image: apotek, url: 'https://apotekdigital.com/' },
  { title: 'Ticketing Jaklingko', meta: 'CLIENT WORK', tags: 'TICKETING · PUBLIC TRANSPORT', image: jaklingko, url: 'https://jaklingkoindonesia.co.id/' },
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-[1440px] flex flex-col gap-12 px-4 sm:px-10 lg:px-20 pt-20 lg:pt-24 pb-20 lg:pb-[110px]">
      <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[11px] tracking-[0.8px] text-accent">SECTION 02 — SELECTED WORK</span>
          <h2 className="m-0 max-w-[620px] font-display font-bold text-ink text-[clamp(38px,4.6vw,56px)] leading-[1.05] tracking-[-0.04em]">
            Things I made with intent.
          </h2>
        </div>
        <p className="m-0 lg:w-[380px] shrink-0 text-[14px] leading-[22px] text-muted">
          A small set, chosen on purpose. Each one taught me something I still carry forward —
          about people, about systems, about shipping.
        </p>
      </Reveal>

      <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {PROJECTS.map((p, i) => (
          <StaggerItem key={p.title}>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-[20px] bg-surface overflow-hidden no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <div className="flex items-center justify-between px-[22px] py-5">
                <span className="inline-flex items-center gap-[7px] px-[13px] py-[7px] rounded-full bg-bg font-mono text-[10px] tracking-[0.6px] text-ink">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {p.meta}
                </span>
                <span className="font-mono text-[10px] tracking-[0.6px] text-faint tabular-nums">
                  {String(i + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
                </span>
              </div>
              <div className="h-[220px] sm:h-[300px] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-[22px] pt-[22px] pb-6">
                <div className="flex flex-col gap-2 min-w-0">
                  <h3 className="m-0 font-display font-bold text-ink text-[clamp(22px,2vw,26px)] tracking-[-1px]">
                    {p.title}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.6px] text-muted">{p.tags}</span>
                </div>
                <span
                  aria-hidden="true"
                  className="w-11 h-11 shrink-0 rounded-full bg-solid text-on-solid grid place-items-center transition-[background-color,transform] duration-300 group-hover:bg-accent group-hover:text-white group-hover:rotate-45"
                >
                  <ArrowUpRightIcon className="w-[18px] h-[18px]" />
                </span>
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
        <span className="font-mono text-[10px] tracking-[0.8px] text-faint">MORE WORK AVAILABLE ON REQUEST</span>
        <a
          href="https://github.com/vihermawan"
          target="_blank"
          rel="noreferrer"
          className="group self-start inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line text-ink text-[13px] font-semibold no-underline transition-colors hover:bg-solid hover:text-on-solid hover:border-solid"
        >
          See everything on GitHub
          <ArrowUpRightIcon className="w-[15px] h-[15px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-[3] flex flex-wrap items-center justify-between gap-5 px-[6vw] py-8 border-t border-ink/15 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/55">
      <div className="flex items-center gap-3.5">
        <span>Vihermawan™</span>
        <span>·</span>
        <span>Crafted in Jakarta, 2026</span>
      </div>
      <a
        href="#home"
        className="text-ink no-underline border-b border-transparent hover:border-blue transition-colors"
      >
        Back to top ↑
      </a>
    </footer>
  );
}

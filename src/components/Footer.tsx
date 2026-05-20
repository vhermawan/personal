export default function Footer() {
  return (
    <footer
      className="relative z-[3] flex flex-wrap items-center justify-between gap-5 px-[6vw] py-8 font-mono text-[11px] uppercase tracking-[0.12em]"
      style={{ borderTop: '1px solid var(--line)', color: 'var(--muted)' }}
    >
      <div className="flex items-center gap-3.5">
        <span>Vihermawan™</span>
        <span>·</span>
        <span>Crafted in Surabaya, 2026</span>
      </div>
      <a
        href="#home"
        className="no-underline border-b border-transparent hover:border-blue transition-colors"
        style={{ color: 'var(--fg-now)' }}
      >
        Back to top ↑
      </a>
    </footer>
  );
}

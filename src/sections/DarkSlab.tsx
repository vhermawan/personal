import Projects from './Projects';
import Statement from './Statement';

export default function DarkSlab() {
  return (
    <div
      className="relative z-[3] mx-[4vw] rounded-[36px] bg-ink text-paper overflow-hidden"
      data-theme="dark"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 40% at 80% 8%, rgba(45,91,255,.30), transparent 60%), radial-gradient(40% 35% at 10% 95%, rgba(157,182,255,.18), transparent 70%), radial-gradient(35% 30% at 90% 60%, rgba(45,91,255,.18), transparent 70%)',
        }}
      />
      <Projects />
      <Statement />
    </div>
  );
}

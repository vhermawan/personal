# Vihermawan Portfolio — Vite + React + TS + Tailwind + Motion + Lenis

A faithful port of `Vihermawan Portfolio v2.html` to a typed React project.

## Setup

```bash
cd vite-app
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b + production build → dist/
npm run preview
```

## Stack

- **Vite 5** + **React 18** + **TypeScript** (strict mode)
- **Tailwind CSS 3** — design tokens defined in `tailwind.config.ts`
- **Motion** (the framer-motion successor, `motion@11`) — entry, scroll-linked transforms, layout, magnetic, marquee velocity
- **Lenis** — smooth wheel scroll, synced with motion's `useScroll`
- **Google Fonts** — Geist · Geist Mono · Instrument Serif

## Animation map

| Effect | Where it lives |
|---|---|
| Smooth wheel scroll + smooth anchor jumps | `hooks/useLenis.ts` |
| Theme color swap (paper ↔ dark) per section | `hooks/useThemeScroll.ts` — uses `IntersectionObserver` + Motion's `animate()` |
| Background orbs parallax (4 layers) | `components/Backdrop.tsx` — `useScroll` + `useTransform` |
| Background grid drift | `components/Backdrop.tsx` (`<GridDrift>`) |
| Scroll progress bar (spring-smoothed) | `components/Progress.tsx` — `useSpring(useScroll().scrollYProgress)` |
| Hero title parallax + opacity fade | `sections/Hero.tsx` — `useScroll({ target, offset })` |
| Floating glyph drift + rotation | `sections/Hero.tsx` |
| Word-rise reveals | `components/SplitWords.tsx` |
| Section title reveals | `<SplitWords>` inside each section's `<h2 class="section-title">` |
| Generic fade-up reveals | `components/Reveal.tsx`, `StaggerGroup`, `StaggerItem` |
| Magnetic CTAs | `hooks/useMagnetic.ts` — `animate()` to spring |
| Timeline fill that grows on scroll | `sections/Journey.tsx` — `useScroll({ target, offset })` → `useTransform` to a CSS height |
| Project card hover lift | `sections/Projects.tsx` — `whileHover={{ y: -6 }}` |
| Project visual inner parallax | `sections/Projects.tsx` (per-card `useScroll`) |
| Marquee accelerates with scroll velocity | `components/Marquee.tsx` — `useVelocity(scrollY)` |
| Scroll-spy nav links | `hooks/useScrollSpy.ts` |
| Custom cursor (ring + dot, hover-grow) | `components/Cursor.tsx` (DOM-driven for perf) |

## Structure

```
vite-app/
├─ index.html
├─ tailwind.config.ts
├─ tsconfig.json
├─ vite.config.ts
└─ src/
   ├─ main.tsx
   ├─ App.tsx
   ├─ styles/globals.css      Tailwind + tokens + mock-UI styles
   ├─ hooks/
   │  ├─ useLenis.ts          Smooth-scroll + anchor handler
   │  ├─ useThemeScroll.ts    Animates body bg between sections
   │  ├─ useScrollSpy.ts      Reports active nav id
   │  └─ useMagnetic.ts       [data-magnet] spring follow
   ├─ components/
   │  ├─ Backdrop.tsx         Orbs + grid + grain
   │  ├─ Cursor.tsx
   │  ├─ Nav.tsx              Floating pill, theme-aware
   │  ├─ Progress.tsx         Scroll progress bar
   │  ├─ Marquee.tsx          Velocity-boosted infinite scroller
   │  ├─ Reveal.tsx           <Reveal>, <StaggerGroup>, <StaggerItem>
   │  ├─ SplitWords.tsx       Word-rise reveal helper
   │  ├─ ProjectMocks.tsx     Dashboard / Phone / Code / CMS preview components
   │  └─ Footer.tsx
   └─ sections/
      ├─ Hero.tsx
      ├─ Journey.tsx
      ├─ DarkSlab.tsx         Wrapper that hosts Projects + Statement on one rounded dark panel
      ├─ Projects.tsx
      ├─ Statement.tsx
      ├─ About.tsx
      └─ Contact.tsx
```

## Design tokens

Defined in `tailwind.config.ts`:

```ts
colors: {
  paper:  '#F2EFE7',
  ink:    '#0A1A3F',
  blue:   { DEFAULT:'#2D5BFF', deep:'#1A3DD9', soft:'#9DB6FF' },
  sky:    '#DCE5FF',
}
```

Use as `bg-paper`, `text-ink`, `bg-blue hover:bg-blue-deep`, `text-blue-soft`.

## Adding a project

```tsx
// src/sections/Projects.tsx
const PROJECTS: Project[] = [
  // ...
  {
    size: 'sm', acc: 2, idx: '05 / 05',
    badge: 'New',
    title: <>My <em>thing</em></>,
    sub: 'Stack · Notes',
    Mock: CodeMock,           // or write your own in ProjectMocks.tsx
  },
];
```

## Notes

- Custom cursor and per-element parallax are disabled below 820px (touch).
- `motion@11` is the rebranded successor to `framer-motion`. The API is the same; imports come from `motion/react`.
- All scroll-driven animations use `useScroll`/`useTransform` — no `requestAnimationFrame` loops in components except the cursor and marquee, which need pixel-level control.

export type Category = 'engineering' | 'design' | 'essay' | 'tutorial';

export interface Post {
  id: string;
  title: string; // may contain <em>...</em>
  date: string;
  excerpt: string;
  category: Category;
  readTime: number; // minutes
  featured?: boolean;
}

export const POSTS: Post[] = [
  {
    id: 'quiet-architecture',
    title: 'The case for <em>quiet architecture</em>',
    date: 'May 14, 2026',
    excerpt:
      "The best systems I've worked on aren't loud about how clever they are. They're easy to delete, easy to extend, and rarely the topic of stand-up. Here's how I think about building them — one boring decision at a time.",
    category: 'engineering',
    readTime: 12,
    featured: true,
  },
  {
    id: 'trpc-cold-start',
    title: 'Cold-starting <em>tRPC</em> on edge runtimes',
    date: 'May 02, 2026',
    excerpt:
      'What I learned moving a busy logistics app from Node to Vercel Edge — including the parts the docs are too polite to mention.',
    category: 'engineering',
    readTime: 9,
  },
  {
    id: 'type-pair',
    title: 'The <em>two-typeface</em> rule',
    date: 'Apr 18, 2026',
    excerpt:
      'Why I almost always pair one neutral sans with one expressive italic — and the small ways it changes everything from buttons to body copy.',
    category: 'design',
    readTime: 6,
  },
  {
    id: 'craft-tax',
    title: 'Paying the <em>craft tax</em>',
    date: 'Mar 26, 2026',
    excerpt:
      'An essay on why the right amount of polish almost never feels worth it — and why I keep paying it anyway.',
    category: 'essay',
    readTime: 5,
  },
  {
    id: 'motion-scroll',
    title: 'Scroll-driven UI with <em>Motion</em>: a field guide',
    date: 'Mar 10, 2026',
    excerpt:
      'A practical walkthrough — from useScroll to spring smoothing — using examples pulled from real client work.',
    category: 'tutorial',
    readTime: 11,
  },
  {
    id: 'postgres-rls',
    title: 'Postgres <em>row-level security</em>, without the foot-guns',
    date: 'Feb 22, 2026',
    excerpt:
      "A short note on the policies I reach for first, why I avoid SECURITY DEFINER, and a pattern for testing RLS at the SQL level.",
    category: 'engineering',
    readTime: 8,
  },
  {
    id: 'on-side-projects',
    title: 'On <em>side projects</em> that survive',
    date: 'Jan 30, 2026',
    excerpt:
      "Most don't. Here's what I've noticed about the few that do — and what that tells me about how to start the next one.",
    category: 'essay',
    readTime: 4,
  },
];

export function getPost(id: string): Post | undefined {
  return POSTS.find((p) => p.id === id);
}

export const CATEGORIES: Array<{ value: 'all' | Category; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'design', label: 'Design' },
  { value: 'essay', label: 'Essays' },
  { value: 'tutorial', label: 'Tutorials' },
];

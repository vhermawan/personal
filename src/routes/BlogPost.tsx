import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import Reveal from '../components/Reveal';
import { getPost, POSTS } from '../data/blogPosts';

export default function BlogPost() {
  const { id = '' } = useParams<{ id: string }>();
  const post = getPost(id);
  const articleRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: articleRef, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [id]);

  if (!post) {
    return (
      <section className="px-[6vw] pt-[170px] pb-40">
        <h1 className="font-sans font-light text-[64px]" style={{ color: 'var(--fg-now)' }}>
          Not here.
        </h1>
        <p className="mt-4" style={{ color: 'var(--muted)' }}>
          That note doesn't exist yet —{' '}
          <Link to="/blog" className="text-blue underline">
            see all notes ↗
          </Link>
        </p>
      </section>
    );
  }

  const nextPost =
    POSTS[(POSTS.findIndex((p) => p.id === post.id) + 1) % POSTS.length];

  return (
    <>
      {/* Reading progress bar */}
      <motion.div
        className="fixed left-0 top-0 h-[2px] z-[60] bg-gradient-to-r from-blue to-blue-deep origin-left"
        style={{ scaleX: progress, width: '100%' }}
      />

      <section
        className="relative z-[2] px-[6vw] pt-[170px] pb-16 border-b"
        style={{ borderColor: 'var(--line)' }}
      >
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] inline-flex items-center gap-2.5 flex-wrap" style={{ color: 'var(--muted)' }}>
            <Link to="/" className="no-underline" style={{ color: 'var(--muted)' }}>
              Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="no-underline" style={{ color: 'var(--muted)' }}>
              Notes
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--fg-now)' }}>{post.title.replace(/<[^>]+>/g, '')}</span>
          </div>
        </Reveal>
        <Reveal>
          <span className="inline-block mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-blue px-3 py-1.5 border border-blue rounded-full capitalize">
            {post.category}
            {post.featured ? ' · Featured' : ''}
          </span>
        </Reveal>
        <Reveal>
          <h1
            className="font-sans font-light m-0 mt-6 max-w-[1100px] [&_em]:font-serif [&_em]:italic [&_em]:font-normal [&_em]:text-blue"
            style={{
              letterSpacing: '-0.045em',
              fontSize: 'clamp(48px,7.5vw,120px)',
              lineHeight: 0.94,
              color: 'var(--fg-now)',
            }}
            dangerouslySetInnerHTML={{ __html: post.title + '.' }}
          />
        </Reveal>
        <Reveal>
          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-4 font-mono text-[12px]" style={{ color: 'var(--muted)' }}>
            <MetaItem k="Published" v={post.date} />
            <MetaItem k="Reading time" v={`${post.readTime} min`} />
            <MetaItem k="Author" v="Vicky Hermawan" />
            <MetaItem k="Topics" v={post.category} />
          </div>
        </Reveal>
      </section>

      <article ref={articleRef} className="prose-article relative z-[2] px-[6vw] py-20">
        {post.id === 'quiet-architecture' ? <QuietArchitectureBody /> : <DefaultBody />}
      </article>

      <Signoff />

      <NextUp next={nextPost} />
    </>
  );
}

function MetaItem({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <span className="block text-[10px] tracking-[0.18em] uppercase mb-1" style={{ color: 'var(--muted)' }}>
        {k}
      </span>
      <span className="font-sans text-[14px]" style={{ color: 'var(--fg-now)' }}>
        {v}
      </span>
    </div>
  );
}

function QuietArchitectureBody() {
  return (
    <>
      <p>
        The best systems I've ever worked on are the ones nobody talked about. They don't show up
        in retros, don't get rewritten on Slack, and rarely earn a spot on the architecture diagram
        pinned above someone's desk. They are <em>quiet</em>. And quietness, I think, is a feature.
      </p>
      <p>
        In the early years of my career I spent a lot of time being clever. I built abstractions
        for problems I might one day have. I split files because I had read somewhere you should. I
        shipped a generic plugin system before I had a second plugin. None of it was wrong, exactly
        — but none of it was kind to the next person, either, and the next person was usually me.
      </p>

      <div className="pull">
        <p>
          A piece of <em>quiet architecture</em> earns the right to exist. Loud architecture
          announces itself before it's been proven; quiet architecture is what's left after
          everything unnecessary has been removed.
        </p>
      </div>

      <h2>What makes a system loud?</h2>
      <p>
        Loud systems borrow trouble from the future. They guess at unknowns and codify those
        guesses in folder structure. They reach for patterns instead of solutions. A loud system
        has a lot of opinions before it has a lot of users. Some signs you've built one:
      </p>
      <ul>
        <li>A new contributor needs a tour before they can change a button.</li>
        <li>The word "architecture" appears in the README before the word "what".</li>
        <li>There are more abstractions than concrete use-cases.</li>
        <li>You catch yourself defending a layer because it was hard to write.</li>
      </ul>

      <h2>Two boring decisions that pay off</h2>
      <p>
        The two most reliable improvements I've made to long-lived codebases are not glamorous.
        They are:
      </p>
      <h3>Co-locate everything that ships together</h3>
      <p>
        Don't fragment a feature across <code>/components</code>, <code>/hooks</code>,{' '}
        <code>/utils</code>, and <code>/types</code> by default. A page folder that contains its
        own components, its own data layer, and its own test file is easier to move, delete, and
        reason about than one that's been "properly" decomposed.
      </p>

      <pre dangerouslySetInnerHTML={{
        __html: `<span class="cm">// before — three folders, one feature</span>
src/
  components/ProjectCard.tsx
  hooks/useProject.ts
  types/Project.ts

<span class="cm">// after — one folder, one feature</span>
src/projects/
  card.tsx
  use-project.ts
  types.ts
  index.ts`,
      }} />

      <h3>Make deletion the default</h3>
      <p>
        Code that is easy to delete is, by definition, code that does not lock you in. When I add a
        feature, I try to make it shaped like a thing you could cut out. No global stores reached
        for, no implicit registrations, no clever lazy-loading tied to file paths. If you can put
        it in a folder and delete the folder, you've built it correctly.
      </p>

      <blockquote>
        The truly nice thing about quiet code is that you can come back six months later and it
        just keeps working. It earns you the right to think about new things instead of old ones.
        <cite>— from a note to my future self</cite>
      </blockquote>

      <h2>What this looks like in practice</h2>
      <p>
        Here's a small heuristic I use when I open a fresh PR. Before merging, I look at the diff
        and ask three questions:
      </p>
      <ol style={{ paddingLeft: 22, fontSize: 19, lineHeight: 1.65 }}>
        <li>If I deleted this change tomorrow, what would break?</li>
        <li>Would a teammate need to read more than one file to understand it?</li>
        <li>Have I introduced a new word that the team has to learn?</li>
      </ol>
      <p>
        If the answers are "not much", "no", and "no" — the change is probably quiet. If even one
        is shouting, I look for a smaller version that isn't.
      </p>

      <hr />

      <p>
        Quiet architecture isn't anti-design. It's not "never abstract", and it certainly isn't
        "always write more". It's a posture: the system serves the work, not the other way round.
        When in doubt, write the boring version. The clever one is always there waiting if you
        actually need it.
      </p>
      <p>
        If you're starting a new project this week, here's the only piece of advice I trust
        completely: <em>make it easy to delete.</em> Everything else will be easier from there.
      </p>
    </>
  );
}

function DefaultBody() {
  return (
    <>
      <p>
        This note is still being drafted in a coffee shop somewhere. The headline is here, the
        bones are sketched, but the prose hasn't earned its place yet. Come back in a week — or two
        — and there'll be something worth reading.
      </p>
      <p>
        In the meantime, the <em>featured note</em> on quiet architecture is the one I'd point you
        toward if you only have time for one this month.
      </p>
      <blockquote>
        Writing in public is the slowest way to think clearly and the fastest way to find out
        whether you actually understand something.
        <cite>— pinned to my desk</cite>
      </blockquote>
      <p>
        If this topic is something you'd like to read about specifically, send me a note — I read
        every one.
      </p>
    </>
  );
}

function Signoff() {
  return (
    <section className="relative z-[2] py-15 px-[6vw] border-t text-center" style={{ borderColor: 'var(--line)' }}>
      <Reveal>
        <span className="font-serif italic text-[48px] text-blue inline-block">— Vicky.</span>
      </Reveal>
      <div className="mt-3.5 font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: 'var(--muted)' }}>
        Written from a desk in Surabaya · 2026
      </div>
      <ShareRow />
    </section>
  );
}

function ShareRow() {
  const [copied, setCopied] = useState(false);
  const copy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };
  return (
    <div className="mt-9 flex justify-center gap-3 flex-wrap">
      <a
        href="#"
        onClick={copy}
        className="px-4 py-2.5 rounded-full text-[13px] no-underline transition-colors hover:!bg-blue hover:!text-white hover:!border-blue"
        style={{ border: '1px solid var(--line)', color: 'var(--fg-now)' }}
      >
        {copied ? 'Copied ✓' : 'Copy link'}
      </a>
      <a
        href="https://twitter.com/intent/tweet?text=The%20case%20for%20quiet%20architecture"
        target="_blank"
        rel="noreferrer"
        className="px-4 py-2.5 rounded-full text-[13px] no-underline transition-colors hover:!bg-blue hover:!text-white hover:!border-blue"
        style={{ border: '1px solid var(--line)', color: 'var(--fg-now)' }}
      >
        Share on Twitter
      </a>
      <Link
        to="/blog"
        className="px-4 py-2.5 rounded-full text-[13px] no-underline transition-colors hover:!bg-blue hover:!text-white hover:!border-blue"
        style={{ border: '1px solid var(--line)', color: 'var(--fg-now)' }}
      >
        All notes
      </Link>
    </div>
  );
}

function NextUp({ next }: { next: ReturnType<typeof getPost> }) {
  if (!next) return null;
  return (
    <section className="relative z-[2] mx-[4vw] my-15 rounded-[36px] bg-slab text-slab-fg p-15 px-[6vw]">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/60">
        Next up
      </span>
      <Link to={`/blog/${next.id}`} className="group flex flex-wrap items-end justify-between gap-8 mt-4 no-underline text-slab-fg">
        <h2
          className="font-sans font-light m-0 max-w-[780px] [&_em]:font-serif [&_em]:italic [&_em]:text-blue-soft [&_em]:font-normal"
          style={{
            letterSpacing: '-0.04em',
            fontSize: 'clamp(36px,5vw,72px)',
            lineHeight: 1.02,
          }}
          dangerouslySetInnerHTML={{ __html: next.title + '.' }}
        />
        <span className="flex-shrink-0 w-14 h-14 rounded-full grid place-items-center text-slab-fg transition-all duration-300 group-hover:bg-slab-fg group-hover:text-slab group-hover:rotate-45" style={{ border: '1px solid rgba(255,255,255,.3)' }}>
          ↗
        </span>
      </Link>
    </section>
  );
}

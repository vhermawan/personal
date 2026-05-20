import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Reveal from '../components/Reveal';
import { CATEGORIES, POSTS, type Category } from '../data/blogPosts';

export default function Blog() {
  const [filter, setFilter] = useState<'all' | Category>('all');

  const visible = useMemo(
    () => POSTS.filter((p) => filter === 'all' || p.category === filter),
    [filter]
  );
  const featured = visible.find((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);

  return (
    <>
      <section className="relative z-[2] px-[6vw] pt-[170px] pb-20 border-b" style={{ borderColor: 'var(--line)' }}>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] inline-flex items-center gap-2.5" style={{ color: 'var(--muted)' }}>
            <Link to="/" className="no-underline hover:!text-blue transition-colors" style={{ color: 'var(--muted)' }}>
              Home
            </Link>
            <span>/</span>
            <span>Notes</span>
          </div>
        </Reveal>
        <Reveal>
          <h1
            className="font-sans font-light m-0 mt-5 [&_em]:font-serif [&_em]:italic [&_em]:font-normal [&_em]:text-blue"
            style={{
              letterSpacing: '-0.045em',
              fontSize: 'clamp(48px,8vw,128px)',
              lineHeight: 0.94,
              color: 'var(--fg-now)',
            }}
          >
            Notes from a <em>working desk.</em>
          </h1>
        </Reveal>
        <Reveal>
          <p
            className="mt-7 text-[clamp(17px,1.4vw,21px)] leading-[1.5] max-w-[620px] [&_em]:font-serif [&_em]:italic [&_em]:text-blue"
            style={{ color: 'var(--fg-now)' }}
          >
            Short essays, tear-downs, and post-mortems from building products on the web. Written
            when an idea has nowhere else to go — <em>read</em> when one is taking shape.
          </p>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap gap-2 mt-10">
            {CATEGORIES.map((c) => {
              const isOn = filter === c.value;
              return (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setFilter(c.value)}
                  className="font-sans text-[13px] px-4 py-2 rounded-full transition-colors"
                  style={
                    isOn
                      ? { background: 'var(--ink)', color: 'var(--paper)', border: '1px solid var(--ink)' }
                      : { border: '1px solid var(--line)', background: 'var(--card)', color: 'var(--fg-now)' }
                  }
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="relative z-[2] px-[6vw] pt-15 pb-20">
        <div
          className="flex justify-between items-baseline mb-7 font-mono text-[11px] uppercase tracking-[0.16em]"
          style={{ color: 'var(--muted)' }}
        >
          <span>Latest writing</span>
          <span>
            {visible.length} post{visible.length === 1 ? '' : 's'}
            {filter !== 'all' ? ` in ${filter}` : ' · updated weekly'}
          </span>
        </div>

        <AnimatePresence mode="popLayout">
          {featured && (
            <motion.div
              key={featured.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <FeaturedPost post={featured} />
            </motion.div>
          )}

          {rest.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <ListPost post={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </>
  );
}

function FeaturedPost({ post }: { post: typeof POSTS[number] }) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group block py-12 grid lg:grid-cols-[1.2fr_1fr] grid-cols-1 gap-15 items-center no-underline border-t"
      style={{ borderColor: 'var(--line)', color: 'var(--fg-now)' }}
    >
      <div className="lg:order-2 order-1 relative h-[260px] rounded-[22px] overflow-hidden"
        style={{
          background:
            'radial-gradient(120% 90% at 30% 20%, #2D5BFF 0%, #1A3DD9 50%, #0A1A3F 100%)',
        }}
      >
        <div className="absolute inset-[30px] border border-dashed rounded-[14px]" style={{ borderColor: 'rgba(255,255,255,.22)' }} />
        <span className="absolute left-6 bottom-[22px] font-serif italic text-white text-[40px] leading-none" style={{ letterSpacing: '-0.02em' }}>
          quiet architecture
        </span>
      </div>
      <div className="lg:order-1 order-2">
        <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-blue mb-3">
          Featured · {post.category}
        </span>
        <h3
          className="font-sans font-normal m-0 transition-colors [&_em]:font-serif [&_em]:italic [&_em]:text-blue [&_em]:font-normal group-hover:text-blue"
          style={{
            letterSpacing: '-0.025em',
            fontSize: 'clamp(34px,4vw,56px)',
            lineHeight: 1.05,
            color: 'var(--fg-now)',
          }}
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <p className="mt-4 text-[17px] leading-[1.55]" style={{ color: 'var(--fg-now)' }}>
          {post.excerpt}
        </p>
        <div className="flex gap-2 mt-4 flex-wrap">
          <Pill>{post.readTime} min read</Pill>
          <Pill>{post.date}</Pill>
        </div>
      </div>
    </Link>
  );
}

function ListPost({ post }: { post: typeof POSTS[number] }) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group block py-8 grid grid-cols-[90px_1fr_auto] md:grid-cols-[120px_1fr_auto] gap-5 md:gap-10 items-center no-underline border-t hover:pl-[30px] transition-[padding] duration-500"
      style={{ borderColor: 'var(--line)' }}
    >
      <span className="font-mono text-[12px] tracking-[0.08em]" style={{ color: 'var(--muted)' }}>
        {post.date}
      </span>
      <div>
        <h3
          className="font-sans font-normal m-0 transition-all duration-500 [&_em]:font-serif [&_em]:italic [&_em]:text-blue [&_em]:font-normal group-hover:text-blue group-hover:translate-x-2"
          style={{
            letterSpacing: '-0.025em',
            fontSize: 'clamp(22px,2.6vw,38px)',
            lineHeight: 1.08,
            color: 'var(--fg-now)',
          }}
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <p className="mt-2.5 text-[15px] leading-[1.55] max-w-[640px]" style={{ color: 'var(--muted)' }}>
          {post.excerpt}
        </p>
        <div className="mt-3.5 flex gap-2 flex-wrap">
          <Pill>{post.category}</Pill>
          <Pill>{post.readTime} min read</Pill>
        </div>
      </div>
      <span
        className="w-[54px] h-[54px] rounded-full grid place-items-center text-[18px] transition-all duration-300 group-hover:bg-blue group-hover:text-white group-hover:border-blue group-hover:rotate-45"
        style={{ border: '1px solid var(--line)', color: 'var(--fg-now)' }}
      >
        ↗
      </span>
    </Link>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-mono text-[11px] tracking-[0.06em] px-2.5 py-1 rounded-full capitalize"
      style={{ border: '1px solid var(--line)', color: 'var(--muted)' }}
    >
      {children}
    </span>
  );
}

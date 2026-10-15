import type { ComponentType, SVGProps } from 'react';
import Reveal from '../components/Reveal';
import { LinkedinIcon, MailIcon, TwitterIcon } from '../components/Icons';

const LINKS: Array<{ label: string; href: string; Icon: ComponentType<SVGProps<SVGSVGElement>>; external?: boolean }> = [
  { label: 'hello@vihermawan.space', href: 'mailto:hello@vihermawan.space', Icon: MailIcon },
  { label: '@vihermawan on X', href: 'https://twitter.com/vihermawan', Icon: TwitterIcon, external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vicky-hermawan/', Icon: LinkedinIcon, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1440px] px-4 sm:px-10 lg:px-20 pb-16 lg:pb-20">
      <Reveal className="flex flex-col gap-[26px] rounded-[28px] bg-accent px-6 py-14 sm:px-12 lg:px-[72px] lg:py-[88px] overflow-hidden">
        <span className="font-mono text-[11px] tracking-[0.8px] text-accent-tint">SECTION 05 — GET IN TOUCH</span>
        <h2 className="m-0 flex flex-col font-display font-bold text-[clamp(38px,5vw,72px)] leading-[1.08] tracking-[-0.042em]">
          <span className="text-white">Have an idea?</span>
          <em className="text-accent-ink italic">Let's make it real.</em>
        </h2>
        <div className="flex flex-wrap gap-3 pt-3.5">
          {LINKS.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="inline-flex items-center gap-2 px-5 py-[13px] rounded-full bg-white text-[#111111] text-[13px] font-semibold no-underline transition-[background-color,color,transform] duration-200 hover:bg-accent-ink hover:text-white active:scale-[0.97]"
            >
              <Icon className="w-[15px] h-[15px]" />
              {label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

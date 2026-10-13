import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Journey from '../sections/Journey';
import Statement from '../sections/Statement';
import Contact from '../sections/Contact';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    const hash = location.hash.slice(1);
    const target = state?.scrollTo || hash;
    if (target) {
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Journey />
      <Statement />
      <Contact />
    </>
  );
}

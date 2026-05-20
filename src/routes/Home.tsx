import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import Journey from '../sections/Journey';
import DarkSlab from '../sections/DarkSlab';
import About from '../sections/About';
import Contact from '../sections/Contact';

export default function Home() {
  const location = useLocation();

  // Handle navigate('/', { state: { scrollTo: 'section-id' } }) from Nav links
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
      <Journey />
      <DarkSlab />
      <About />
      <Contact />
    </>
  );
}

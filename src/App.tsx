import Backdrop from './components/Backdrop';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Progress from './components/Progress';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Journey from './sections/Journey';
import DarkSlab from './sections/DarkSlab';
import About from './sections/About';
import Contact from './sections/Contact';
import useLenis from './hooks/useLenis';
import useThemeScroll from './hooks/useThemeScroll';
import useMagnetic from './hooks/useMagnetic';

export default function App() {
  useLenis();
  useMagnetic();
  const { navDark } = useThemeScroll();

  return (
    <>
      <Backdrop />
      <Cursor />
      <Progress />
      <Nav dark={navDark} />
      <main>
        <Hero />
        <Journey />
        <DarkSlab />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

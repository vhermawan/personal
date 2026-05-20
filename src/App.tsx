import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Backdrop from './components/Backdrop';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Progress from './components/Progress';
import Footer from './components/Footer';
import Home from './routes/Home';
import Blog from './routes/Blog';
import BlogPost from './routes/BlogPost';
import useLenis from './hooks/useLenis';
import useThemeScroll from './hooks/useThemeScroll';
import useMagnetic from './hooks/useMagnetic';
import { useTheme } from './contexts/ThemeContext';

export default function App() {
  const { pathname } = useLocation();
  useLenis();
  useMagnetic();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const { navDark: scrollNavDark } = useThemeScroll();
  const { mode } = useTheme();
  const isHome = pathname === '/';
  const navDark = isHome ? scrollNavDark : mode === 'dark';

  return (
    <>
      <Backdrop />
      <Cursor key={pathname} />
      <Progress />
      <Nav dark={navDark} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

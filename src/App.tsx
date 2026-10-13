import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Progress from './components/Progress';
import Footer from './components/Footer';
import Home from './routes/Home';
import Blog from './routes/Blog';
import BlogPost from './routes/BlogPost';
import useLenis from './hooks/useLenis';

export default function App() {
  const { pathname } = useLocation();
  useLenis();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <Progress />
      <Nav />
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

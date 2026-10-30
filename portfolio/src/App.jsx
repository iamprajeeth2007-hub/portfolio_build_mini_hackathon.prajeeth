import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProjectShell from './components/ProjectShell/ProjectShell';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import CampusEats from './pages/ProjectDetails/CampusEats';
import PocketPal from './pages/ProjectDetails/PocketPal';
import ResQ from './pages/ProjectDetails/ResQ';
import Benzson from './pages/Benzson/Benzson';
import Experience from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import { pageVariants } from './lib/motion';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  }, []);
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView();
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const location = useLocation();
  return (
    <MotionConfig reducedMotion="user">
      <ScrollManager />
      <div className="bg-surface text-on-surface font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen">
        <Navbar />
        <AnimatePresence mode="wait" onExitComplete={() => { if (!window.location.hash) window.scrollTo(0, 0); }}>
          <motion.main key={location.pathname} variants={pageVariants} initial="initial" animate="enter" exit="exit" className="w-full pt-20 bg-surface min-h-screen">
            <div className="flex flex-col w-full">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/campus-eats" element={<ProjectShell slug="campus-eats"><CampusEats /></ProjectShell>} />
                <Route path="/projects/pocketpal" element={<ProjectShell slug="pocketpal"><PocketPal /></ProjectShell>} />
                <Route path="/projects/resq" element={<ProjectShell slug="resq"><ResQ /></ProjectShell>} />
                <Route path="/benzson" element={<Benzson />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </MotionConfig>
  );
}

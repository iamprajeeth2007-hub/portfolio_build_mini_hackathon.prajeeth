import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV } from '../../data/site';
import { EASE } from '../../lib/motion';

const linkBase = 'relative px-space-md py-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider transition-colors';

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-surface-container-highest transition-shadow duration-300 ${scrolled ? 'shadow-[0_10px_30px_rgba(0,0,0,0.35)]' : ''}`}>
      <div className="h-20 max-w-7xl mx-auto px-margin lg:px-margin-desktop flex items-center justify-between">
        <Link className="flex items-center gap-space-xs group" to="/" aria-label="Prajeeth — home">
          <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface uppercase">PRAJEETH</span>
          <span className="w-2 h-2 rounded-full bg-primary-container inline-block transition-transform duration-300 group-hover:scale-125"></span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-space-xs p-space-xs rounded-xl bg-surface-container-lowest/80 border border-surface-container-highest">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => `${linkBase} ${isActive ? 'text-on-surface' : 'text-secondary hover:text-on-surface hover:bg-surface-container-high'}`}>
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span layoutId="nav-active" transition={{ duration: 0.3, ease: EASE }} className="absolute inset-0 bg-surface-container border border-primary-container/40 rounded-lg shadow-sm" />
                  )}
                  <span className="relative">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <Link className="hidden sm:inline-flex items-center justify-center px-space-md py-space-xs rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface border border-surface-container-highest hover:border-primary-container font-label-md text-label-md uppercase tracking-wider transition-all duration-200 group" to="/contact">
            <span className="mr-space-xs group-hover:text-primary-container transition-colors">Get in Touch</span>
            <span className="text-primary-container group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center" aria-hidden="true">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
          <button type="button" className="md:hidden w-8 h-8 rounded-lg bg-surface-container border border-surface-container-highest text-on-surface flex items-center justify-center hover:border-primary-container transition-colors" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            <span className="material-symbols-outlined text-[20px]">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" aria-label="Mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25, ease: EASE }} className="md:hidden overflow-hidden border-t border-surface-container-highest bg-surface/95">
            <div className="px-margin py-space-md flex flex-col gap-space-xs">
              {NAV.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => `px-space-md py-space-md rounded-lg font-label-md text-label-md uppercase tracking-wider transition-colors ${isActive ? 'bg-surface-container text-on-surface border border-primary-container/40' : 'text-secondary hover:text-on-surface hover:bg-surface-container-high'}`}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

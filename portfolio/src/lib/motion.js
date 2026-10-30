// Shared motion system. Micro 150–250ms, standard 250–450ms, reveals 400–650ms.
export const EASE = [0.22, 1, 0.36, 1];
export const VIEWPORT = { once: true, amount: 'some', margin: '0px 0px -60px 0px' };
export const staggerParent = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } } };
export const staggerChild = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } };
export const sectionReveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } } };
export const pageVariants = {
  initial: { opacity: 0, y: 10 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } },
};

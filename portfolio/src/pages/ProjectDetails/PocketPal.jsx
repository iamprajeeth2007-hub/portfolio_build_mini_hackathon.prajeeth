import { motion } from 'framer-motion';
import SmartLink from '../../components/SmartLink/SmartLink';
import { staggerParent, staggerChild, sectionReveal, VIEWPORT, EASE } from '../../lib/motion';
import { useSeo } from '../../hooks/useSeo';

export default function PocketPal() {
  useSeo({ title: 'PocketPal — Prajeeth Raaj PK', description: 'Personal finance management application focused on expenses, debts, budgeting, analytics and financial insights.', path: '/projects/pocketpal' });

  return (
    <>
      <motion.section className="max-w-7xl mx-auto px-margin lg:px-margin-desktop mb-space-3xl" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.div className="lg:col-span-5 order-2 lg:order-1 flex flex-col space-y-space-lg" variants={staggerChild}>
            <div className="rounded-xl overflow-hidden bg-surface-container shadow-xl relative group">
              <img className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKCo4uhiu8kn1QtZeKkAD1qyUj3ZuYLHPTelJXJqYQPonNYN0oUBu-l6CY_QL5bTaFsM-VPG9MKNGNFsYLy23Wo46LuDggvpbSDs7tA2e27YwPkT30DjxPTWGhikyrwJ2y-r3dGcoozxnLltEPKNrStzwy0VXcYyuL24T06DmFctUUECL9Xg4965bGsN7bmQFKQvQGO_DIjucVsiYqhdPaoZpeNMRDx-2nl1upKysX" alt="Fintech mobile and desktop analytics interface display for PocketPal application showing multi-account cashflow visual charts, peer debt settlement ledger, subscription tracker bar graphs, glowing dark charcoal layout with vibrant electric orange indicator bars." loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-space-md rounded-lg bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-between">
                <span className="font-label-md text-label-md uppercase text-on-surface">Local-First Vault: Synced</span>
                <span className="font-label-sm text-label-sm font-mono text-primary-container">AES-GCM Encrypted</span>
              </div>
            </div>
            <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col space-y-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Analytical Engine</span>
              <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">Spending Breakdown Curve</h4>
              <div className="w-full pt-space-xs">
                <svg className="w-full h-24 overflow-visible" fill="none" viewBox="0 0 300 70" xmlns="http://www.w3.org/2000/svg">
                  <path className="text-primary-container" d="M0 60 C 40 55, 60 25, 100 35 C 140 45, 160 10, 200 20 C 240 30, 260 5, 300 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
                  <path className="text-primary-container/10" d="M0 60 C 40 55, 60 25, 100 35 C 140 45, 160 10, 200 20 C 240 30, 260 5, 300 12 L 300 70 L 0 70 Z" fill="currentColor"></path>
                  <circle className="fill-primary-container" cx="100" cy="35" r="4"></circle>
                  <circle className="fill-primary-container" cx="200" cy="20" r="4"></circle>
                  <circle className="fill-primary-container" cx="300" cy="12" r="4"></circle>
                </svg>
              </div>
              <div className="flex items-center justify-between pt-space-xs text-secondary font-label-sm text-label-sm uppercase">
                <span>Wk 01: Setup</span>
                <span>Wk 02: Tracking</span>
                <span>Wk 03: Balanced</span>
              </div>
            </div>
          </motion.div>
          <motion.div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between rounded-xl bg-surface-container-low p-space-lg lg:p-space-2xl shadow-xl" variants={staggerChild}>
            <div className="flex flex-col space-y-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded bg-surface-container-high text-primary-container font-mono">02 // PRODUCTION</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Student Ledger & Cashflow</span>
                </div>
                <SmartLink className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider hover:opacity-95 transition-opacity self-start sm:self-auto" rel="noopener noreferrer" target="_blank" href="https://pocket-pal-liard.vercel.app/">
                  <span>View Live App</span>
                  {' '}
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </SmartLink>
              </div>
              <div>
                <h2 className="font-display-xl text-display-xl-mobile lg:text-display-xl uppercase text-on-surface leading-none">PocketPal</h2>
                <p className="font-headline-sm text-headline-sm text-secondary mt-space-xs">Frictionless peer debt reconciliation & autonomous personal runway monitor</p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">Traditional finance applications suffer from bloat, third-party bank scraping delays, and total blindness toward informal micro-debts between roommates. PocketPal delivers high-frequency entry loops, intelligent recurrence flags, and multi-currency IOUs without invasive financial integrations.</p>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
                <motion.div className="p-space-md rounded-lg bg-surface-container flex flex-col space-y-space-xs" variants={staggerChild}>
                  <span className="font-label-sm text-label-sm uppercase text-secondary">Architecture Focus</span>
                  <h5 className="font-headline-sm text-headline-sm text-on-surface">Local-First Cache</h5>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">All inputs register instantaneously with sub-millisecond tactile confirmation. Background workers resolve delta merges whenever cellular connectivity returns.</p>
                </motion.div>
                <motion.div className="p-space-md rounded-lg bg-surface-container flex flex-col space-y-space-xs" variants={staggerChild}>
                  <span className="font-label-sm text-label-sm uppercase text-secondary">Debt Reconciliation</span>
                  <h5 className="font-headline-sm text-headline-sm text-on-surface">Graph Simplifier</h5>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Group transactions auto-reduce multi-way debts to the minimum mathematical transfers, avoiding awkward chasing over minor balances.</p>
                </motion.div>
              </motion.div>
            </div>
            <div className="flex flex-wrap gap-space-xs pt-space-lg">
              <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">TypeScript</span>
              <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">React</span>
              <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">Tailwind CSS</span>
              <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">Canvas Charting</span>
              <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">Client Storage APIs</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}

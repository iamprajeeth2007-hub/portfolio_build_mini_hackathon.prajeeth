import { motion } from 'framer-motion';
import SmartLink from '../../components/SmartLink/SmartLink';
import { staggerParent, staggerChild, sectionReveal, VIEWPORT, EASE } from '../../lib/motion';
import { useSeo } from '../../hooks/useSeo';
import { useState } from 'react';
export default function Projects() {
  useSeo({ title: 'Projects — Prajeeth Raaj PK', description: 'Selected work and ventures: Campus Eats, PocketPal and ResQ, plus upcoming builds.', path: '/projects' });
  const [filter, setFilter] = useState('all');
  const [tab, setTab] = useState('problem');
  return (
    <>
      <section className="max-w-7xl mx-auto px-margin lg:px-margin-desktop py-space-xl">
        <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-baseline" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.div className="lg:col-span-8 flex flex-col space-y-space-sm" variants={staggerChild}>
            <div className="inline-flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">System Catalog / Production Artifacts</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg uppercase text-on-surface">Selected Work & Ventures</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Real-world friction translated into functional, scalable software. Every system is built to survive edge-case concurrency, intermittent connectivity, and human operational strain.</p>
          </motion.div>
          <motion.div className="lg:col-span-4 flex flex-col gap-space-sm p-space-md rounded-xl bg-surface-container-low shadow-sm" variants={staggerChild}>
            <div className="flex items-center justify-between text-secondary">
              <span className="font-label-sm text-label-sm uppercase tracking-widest">Repository Metrics</span>
              <span className="font-label-sm text-label-sm uppercase text-primary-container">Live Telemetry</span>
            </div>
            <motion.div className="grid grid-cols-3 gap-space-xs text-center pt-space-xs" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
              <motion.div className="p-space-xs rounded bg-surface-container" variants={staggerChild}>
                <span className="font-headline-sm text-headline-sm text-on-surface block font-bold">03</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary">Flagships</span>
              </motion.div>
              <motion.div className="p-space-xs rounded bg-surface-container" variants={staggerChild}>
                <span className="font-headline-sm text-headline-sm text-on-surface block font-bold">99.8%</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary">Uptime</span>
              </motion.div>
              <motion.div className="p-space-xs rounded bg-surface-container" variants={staggerChild}>
                <span className="font-headline-sm text-headline-sm text-primary-container block font-bold">100%</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary">Shipped</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <motion.section className="max-w-7xl mx-auto px-margin lg:px-margin-desktop mb-space-2xl" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="flex flex-wrap items-center gap-space-xs p-space-xs rounded-xl bg-surface-container-low">
          <button type="button" onClick={() => setFilter("all")} aria-pressed={filter === "all"} className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider ${filter === "all" ? "bg-surface-container text-on-surface shadow-sm" : "text-secondary hover:text-on-surface transition-colors"}`}>All Deployments</button>
          <button type="button" onClick={() => setFilter("web-apps")} aria-pressed={filter === "web-apps"} className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider ${filter === "web-apps" ? "bg-surface-container text-on-surface shadow-sm" : "text-secondary hover:text-on-surface transition-colors"}`}>Distributed Web</button>
          <button type="button" onClick={() => setFilter("fintech")} aria-pressed={filter === "fintech"} className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider ${filter === "fintech" ? "bg-surface-container text-on-surface shadow-sm" : "text-secondary hover:text-on-surface transition-colors"}`}>FinTech & Ledgers</button>
          <button type="button" onClick={() => setFilter("systems")} aria-pressed={filter === "systems"} className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider ${filter === "systems" ? "bg-surface-container text-on-surface shadow-sm" : "text-secondary hover:text-on-surface transition-colors"}`}>Emergency Ops</button>
        </div>
      </motion.section>
      <motion.section className={`max-w-7xl mx-auto px-margin lg:px-margin-desktop mb-space-3xl ${filter === "all" || filter === "web-apps" ? "" : "hidden"}`} initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="rounded-xl bg-surface-container-low p-space-lg lg:p-space-2xl shadow-xl flex flex-col gap-space-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm flex-wrap">
              <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded bg-surface-container-high text-primary-container font-mono">01 // PRODUCTION</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">REVA Campus Infrastructure</span>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm">
              <SmartLink className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider hover:opacity-95 transition-opacity" rel="noopener noreferrer" target="_blank" href="https://campus-eats-psi.vercel.app/">
                <span>Launch Service</span>
                {' '}
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </SmartLink>
              <SmartLink className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-high transition-colors" rel="noopener noreferrer" target="_blank" href="https://github.com/iamprajeeth2007-hub/campus-eats">
                <span className="material-symbols-outlined text-[16px]">code</span>
                {' '}
                <span>Source</span>
              </SmartLink>
            </div>
          </div>
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.div className="lg:col-span-6 flex flex-col space-y-space-md" variants={staggerChild}>
              <div>
                <h2 className="font-display-xl text-display-xl-mobile lg:text-display-xl uppercase text-on-surface leading-none">Campus Eats</h2>
                <p className="font-headline-sm text-headline-sm text-secondary mt-space-xs">Decoupled queue orchestration for collegiate food courts</p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">Engineered to dismantle peak-hour logjams in university cafeterias. High footfalls previously crippled cellular radios, causing payment timeouts and abandoned orders. Campus Eats implements optimistic state dispatch and low-overhead websocket queue pulses for zero-delay pickup.</p>
              <motion.div className="grid grid-cols-2 gap-space-md pt-space-xs" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
                <motion.div className="p-space-md rounded-lg bg-surface-container" variants={staggerChild}>
                  <span className="font-label-sm text-label-sm uppercase text-secondary block">Avg Wait Compression</span>
                  <span className="font-headline-md text-headline-md text-primary-container font-bold">-72%</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">From 28 min to ~8 min order-to-bag</span>
                </motion.div>
                <motion.div className="p-space-md rounded-lg bg-surface-container" variants={staggerChild}>
                  <span className="font-label-sm text-label-sm uppercase text-secondary block">Peak Concurrency</span>
                  <span className="font-headline-md text-headline-md text-on-surface font-bold">1.4k+</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">Handled with zero lock-in failures</span>
                </motion.div>
              </motion.div>
              <div className="flex flex-wrap gap-space-xs pt-space-xs">
                <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">React 18</span>
                <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">Next.js App Router</span>
                <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">Tailwind CSS</span>
                <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">Supabase / Cloud DB</span>
                <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">WebSockets</span>
              </div>
            </motion.div>
            <motion.div className="lg:col-span-6 relative" variants={staggerChild}>
              <div className="rounded-xl overflow-hidden bg-surface-container shadow-2xl relative group">
                <img className="w-full h-80 lg:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN6rE9PY6o9uR0zp9_pITQfAhWmy9ilc0D0kWa96ekF7ar4wi-6mbf7XN9zGXg4FyPP_votEB4-XMgQIQ6yYIxeKAaN8T22mrPcl_RdjL-6hcvNf-svDxuP9I3bMo_gLMhgo7GsV3LkJoFLqmOCwsIZ3C0fnJSiR9i8juD5jpcAPNVDD4vKhpe0Ek8L2W6enUOs8KXbYk1IuZt1lvGGID7lYhd5mtpT80a92UZ05lG" alt="High fidelity modern dark mode dashboard interface mockup of Campus Eats showing active food order queues, real-time pick-up counter countdown status, kitchen preparation board, and meal token tickets with minimalist industrial UI in charcoal and orange accents." loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-space-md rounded-lg bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
                    <span className="font-label-md text-label-md uppercase text-on-surface">Queue Worker: 12 Active Nodes</span>
                  </div>
                  <span className="font-label-sm text-label-sm font-mono text-secondary">TTL: 140ms</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-gutter pt-space-lg" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.div className="p-space-md rounded-lg bg-surface-container flex flex-col space-y-space-xs" variants={staggerChild}>
              <div className="flex items-center gap-space-xs text-primary-container">
                <span className="material-symbols-outlined text-[20px]">crisis_alert</span>
                <h4 className="font-label-md text-label-md uppercase text-on-surface">Bottleneck Pinpoint</h4>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Food counter lines blocked central corridors during 1:00 PM rushes. Vendors handled paper chits leading to 15% item mismatch error rates.</p>
            </motion.div>
            <motion.div className="p-space-md rounded-lg bg-surface-container flex flex-col space-y-space-xs" variants={staggerChild}>
              <div className="flex items-center gap-space-xs text-primary-container">
                <span className="material-symbols-outlined text-[20px]">bolt</span>
                <h4 className="font-label-md text-label-md uppercase text-on-surface">Resilient State</h4>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Implemented IndexedDB persistence layer paired with auto-revalidating SWR keys so poor cell signals never lose an in-flight lunch order.</p>
            </motion.div>
            <motion.div className="p-space-md rounded-lg bg-surface-container flex flex-col space-y-space-xs" variants={staggerChild}>
              <div className="flex items-center gap-space-xs text-primary-container">
                <span className="material-symbols-outlined text-[20px]">published_with_changes</span>
                <h4 className="font-label-md text-label-md uppercase text-on-surface">Zero-Contact Hand-off</h4>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Visual status monitors above vendor bays blink orange when tickets are packaged. Students scan and retrieve in under 6 seconds flat.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section className={`max-w-7xl mx-auto px-margin lg:px-margin-desktop mb-space-3xl ${filter === "all" || filter === "fintech" ? "" : "hidden"}`} initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
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
      <motion.section className={`max-w-7xl mx-auto px-margin lg:px-margin-desktop mb-space-3xl ${filter === "all" || filter === "systems" ? "" : "hidden"}`} initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="rounded-xl bg-surface-container-low p-space-lg lg:p-space-2xl shadow-xl flex flex-col gap-space-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm flex-wrap">
              <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded bg-surface-container-high text-primary-container font-mono">03 // EMERGENCY ENGINE</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Mission Critical Dispatch</span>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm">
              <SmartLink className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-high transition-colors" rel="noopener noreferrer" target="_blank" href="https://github.com/iamprajeeth2007-hub">
                <span className="material-symbols-outlined text-[16px]">folder_code</span>
                {' '}
                <span>View Architecture Spec</span>
              </SmartLink>
            </div>
          </div>
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.div className="lg:col-span-7 flex flex-col space-y-space-md" variants={staggerChild}>
              <div>
                <h2 className="font-display-xl text-display-xl-mobile lg:text-display-xl uppercase text-on-surface leading-none">ResQ</h2>
                <p className="font-headline-sm text-headline-sm text-secondary mt-space-xs">Rapid emergency escalation and multi-agency response orchestration system</p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">During industrial accidents and natural contingencies, latency kills. ResQ establishes a lightweight telemetry hub allowing on-the-ground respondents to tag hazards, request medical intervention, and visualize perimeter clear zones on live tactical overlays.</p>
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
                <motion.div className="p-space-md rounded-lg bg-surface-container" variants={staggerChild}>
                  <div className="flex items-center gap-space-xs mb-space-xs text-primary-container">
                    <span className="material-symbols-outlined text-[20px]">share_location</span>
                    <span className="font-label-sm text-label-sm uppercase text-on-surface font-semibold">Mesh Dispatch Relay</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Operates over low-bandwidth cellular bursts to ensure critical geo-tags register even when cellular networks are 95% degraded.</p>
                </motion.div>
                <motion.div className="p-space-md rounded-lg bg-surface-container" variants={staggerChild}>
                  <div className="flex items-center gap-space-xs mb-space-xs text-primary-container">
                    <span className="material-symbols-outlined text-[20px]">shield</span>
                    <span className="font-label-sm text-label-sm uppercase text-on-surface font-semibold">Triage Classification</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Automated urgency parsing routes calls directly to nearest available volunteer responders before escalating to central EMS.</p>
                </motion.div>
              </motion.div>
              <div className="flex flex-wrap gap-space-xs pt-space-xs">
                <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">GeoJSON Engine</span>
                <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">Node.js Gateway</span>
                <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">React Dashboard</span>
                <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider">Low-Bandwidth Transport</span>
              </div>
            </motion.div>
            <motion.div className="lg:col-span-5" variants={staggerChild}>
              <div className="p-space-lg rounded-xl bg-surface-container flex flex-col space-y-space-md shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Dispatcher Status Board</span>
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                </div>
                <div className="space-y-space-sm">
                  <div className="p-space-sm rounded bg-surface-container-high flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary-container text-[20px]">emergency</span>
                      <div>
                        <span className="font-label-md text-label-md uppercase text-on-surface block">Zone Sector 4B</span>
                        <span className="font-body-sm text-body-sm text-secondary">Medical Evacuation Flag</span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-primary-container text-on-primary-container">PRIORITY 1</span>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container-high flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px]">warning</span>
                      <div>
                        <span className="font-label-md text-label-md uppercase text-on-surface block">Substation Alpha</span>
                        <span className="font-body-sm text-body-sm text-secondary">Perimeter Hazard Isolated</span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container text-secondary">ACTIVE</span>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container-high flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-on-surface text-[20px]">check_circle</span>
                      <div>
                        <span className="font-label-md text-label-md uppercase text-on-surface block">Corridor Bravo</span>
                        <span className="font-body-sm text-body-sm text-secondary">Safe Transit Confirmed</span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container text-secondary">RESOLVED</span>
                  </div>
                </div>
                <div className="pt-space-xs">
                  <SmartLink className="w-full inline-flex items-center justify-center gap-space-xs py-space-xs rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm uppercase tracking-wider transition-colors" rel="noopener noreferrer" target="_blank" href="https://github.com/iamprajeeth2007-hub">
                    <span>Inspect Repository Branch</span>
                    {' '}
                    <span className="material-symbols-outlined text-[14px]">terminal</span>
                  </SmartLink>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section className="max-w-7xl mx-auto px-margin lg:px-margin-desktop mb-space-3xl" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="rounded-xl bg-surface-container-low p-space-lg lg:p-space-2xl shadow-xl flex flex-col space-y-space-xl">
          <div className="flex flex-col space-y-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container">Interactive Dissection</span>
            <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface">Architectural Case Study Framework</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Toggle through our foundational engineering blueprint applied systematically across every shipped project in this portfolio.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs p-space-xs rounded-xl bg-surface-container">
            <button type="button" role="tab" onClick={() => setTab("problem")} aria-selected={tab === "problem"} className={`px-space-md py-space-sm rounded-lg font-label-md text-label-md uppercase tracking-wider transition-all ${tab === "problem" ? "bg-surface-container-high text-on-surface" : "text-secondary hover:text-on-surface"}`}>01. The Problem</button>
            <button type="button" role="tab" onClick={() => setTab("solution")} aria-selected={tab === "solution"} className={`px-space-md py-space-sm rounded-lg font-label-md text-label-md uppercase tracking-wider transition-all ${tab === "solution" ? "bg-surface-container-high text-on-surface" : "text-secondary hover:text-on-surface"}`}>02. The Solution</button>
            <button type="button" role="tab" onClick={() => setTab("arch")} aria-selected={tab === "arch"} className={`px-space-md py-space-sm rounded-lg font-label-md text-label-md uppercase tracking-wider transition-all ${tab === "arch" ? "bg-surface-container-high text-on-surface" : "text-secondary hover:text-on-surface"}`}>03. Architecture</button>
            <button type="button" role="tab" onClick={() => setTab("learnings")} aria-selected={tab === "learnings"} className={`px-space-md py-space-sm rounded-lg font-label-md text-label-md uppercase tracking-wider transition-all ${tab === "learnings" ? "bg-surface-container-high text-on-surface" : "text-secondary hover:text-on-surface"}`}>04. Learnings</button>
          </div>
          <div className="p-space-xl rounded-xl bg-surface-container min-h-[220px] flex flex-col justify-center transition-all duration-300" id="framework-content-card">
            {tab === "problem" && (
                <motion.div className="flex flex-col space-y-space-sm" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: EASE }} key="problem" role="tabpanel">
                  <div className="inline-flex items-center gap-space-xs text-primary-container">
                    <span className="material-symbols-outlined text-[20px]">search_insights</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest font-mono">Phase 01 // Problem Discovery</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md uppercase text-on-surface">Root-Cause Pinpointing Over Surface Symptoms</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">Software failures almost never begin with flawed code—they begin with unexamined real-world friction. We conduct empirical observational rounds, quantify real human delays (e.g. 28-minute cafeteria wait periods or recurring peer debt micro-tensions), and draft uncompromising friction manifests prior to writing any UI layout.</p>
                </motion.div>
            )}
            {tab === "solution" && (
                <motion.div className="flex flex-col space-y-space-sm" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: EASE }} key="solution" role="tabpanel">
                  <div className="inline-flex items-center gap-space-xs text-primary-container">
                    <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest font-mono">Phase 02 // Intervention Vector</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md uppercase text-on-surface">Radically Minimalist Execution Loops</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">Eliminate all intermediate cognitive hurdles. If a user needs to pick up lunch or record a transaction, that entire loop must occur in under three tactile interactions. Features are fiercely pruned until only the core utility remains.</p>
                </motion.div>
            )}
            {tab === "arch" && (
                <motion.div className="flex flex-col space-y-space-sm" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: EASE }} key="arch" role="tabpanel">
                  <div className="inline-flex items-center gap-space-xs text-primary-container">
                    <span className="material-symbols-outlined text-[20px]">hub</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest font-mono">Phase 03 // System Topography</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md uppercase text-on-surface">Offline Resilience & Deterministic Ingestion</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">Design for low-bandwidth environments first. Employ local optimistic mutations, idempotent write endpoints, and distributed queue updates so clients never lock during dropouts. Microservices isolate crash domains to prevent cascading downtime.</p>
                </motion.div>
            )}
            {tab === "learnings" && (
                <motion.div className="flex flex-col space-y-space-sm" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: EASE }} key="learnings" role="tabpanel">
                  <div className="inline-flex items-center gap-space-xs text-primary-container">
                    <span className="material-symbols-outlined text-[20px]">history_edu</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest font-mono">Phase 04 // Post-Mortem Rigor</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md uppercase text-on-surface">Telemetry-Driven Iteration Cycles</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">After deployment, logs supersede assumptions. Measure dropped interaction rates, network packet payloads under 3G throttling, and physical hand-off timings. If a release does not tangibly compress real human stress, refactor without hesitation.</p>
                </motion.div>
            )}
          </div>
        </div>
      </motion.section>
      <motion.section className="max-w-7xl mx-auto px-margin lg:px-margin-desktop mb-space-3xl" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="flex flex-col space-y-space-md mb-space-lg">
          <div className="inline-flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">R&D Pipeline</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
            <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface">Upcoming Builds & Explorations</h3>
            <p className="font-body-sm text-body-sm text-secondary">Staged in development queues for Q3/Q4 deployment</p>
          </div>
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-gutter" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between space-y-space-lg group hover:bg-surface-container transition-colors" variants={staggerChild}>
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm font-mono text-primary-container">PROJ-04 // IN PROGRESS</span>
                <span className="material-symbols-outlined text-secondary group-hover:text-primary-container transition-colors">pending</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">Benzson Hardware Interface</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Next-generation telematics bridge linking embedded microcontrollers with high-throughput cloud dashboards for predictive fleet maintenance.</p>
            </div>
            <div className="pt-space-md flex items-center justify-between text-secondary">
              <span className="font-label-sm text-label-sm uppercase">C++ / Rust / Next.js</span>
              <span className="font-label-sm text-label-sm font-mono text-primary-container">70% STAGED</span>
            </div>
          </motion.div>
          <motion.div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between space-y-space-lg group hover:bg-surface-container transition-colors" variants={staggerChild}>
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm font-mono text-secondary">PROJ-05 // ARCHITECTURE</span>
                <span className="material-symbols-outlined text-secondary">hourglass_empty</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">Venture Flow Ledger</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Automated capital allocation orchestrator tracking pre-seed vesting milestones, safe note dilutions, and instant cap-table audits.</p>
            </div>
            <div className="pt-space-md flex items-center justify-between text-secondary">
              <span className="font-label-sm text-label-sm uppercase">Go / SQLite / WebAssembly</span>
              <span className="font-label-sm text-label-sm font-mono text-secondary">SPECCING</span>
            </div>
          </motion.div>
          <motion.div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between space-y-space-lg group hover:bg-surface-container transition-colors" variants={staggerChild}>
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm font-mono text-secondary">PROJ-06 // INCUBATION</span>
                <span className="material-symbols-outlined text-secondary">science</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">Synthetix Docs</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Zero-latency technical documentation engine converting internal git commit diffs into readable changelogs and developer manuals.</p>
            </div>
            <div className="pt-space-md flex items-center justify-between text-secondary">
              <span className="font-label-sm text-label-sm uppercase">Edge Workers / LLM</span>
              <span className="font-label-sm text-label-sm font-mono text-secondary">PROTOTYPE</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section className="max-w-7xl mx-auto px-margin lg:px-margin-desktop mb-space-2xl" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="p-space-xl lg:p-space-2xl rounded-xl bg-surface-container-high shadow-2xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-col space-y-space-xs text-center md:text-left">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container">Auditable Proof of Work</span>
            <h3 className="font-headline-md text-headline-md uppercase text-on-surface">Need custom architectural verification?</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">All major systems are open to pull-requests and independent code inspections. Let us architect solutions for your organization.</p>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm">
            <SmartLink className="px-space-lg py-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-surface-bright font-label-md text-label-md uppercase tracking-wider transition-colors" rel="noopener noreferrer" target="_blank" href="https://github.com/iamprajeeth2007-hub">Explore GitHub</SmartLink>
            <SmartLink className="px-space-lg py-space-sm rounded-lg bg-primary-container text-on-primary-container hover:opacity-95 font-label-md text-label-md uppercase tracking-wider transition-opacity" href="mailto:contact@prajeeth.dev">Request System Audit</SmartLink>
          </div>
        </div>
      </motion.section>
    </>
  );
}

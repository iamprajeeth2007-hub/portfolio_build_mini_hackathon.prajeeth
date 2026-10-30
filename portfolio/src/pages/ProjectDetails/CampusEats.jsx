import { motion } from 'framer-motion';
import SmartLink from '../../components/SmartLink/SmartLink';
import { staggerParent, staggerChild, sectionReveal, VIEWPORT, EASE } from '../../lib/motion';
import { useSeo } from '../../hooks/useSeo';

export default function CampusEats() {
  useSeo({ title: 'Campus Eats — Prajeeth Raaj PK', description: 'College food-court ordering application inspired by overcrowding and network difficulties in the REVA University food court.', path: '/projects/campus-eats' });

  return (
    <>
      <motion.section className="max-w-7xl mx-auto px-margin lg:px-margin-desktop mb-space-3xl" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
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
    </>
  );
}

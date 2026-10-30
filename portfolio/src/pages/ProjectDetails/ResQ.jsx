import { motion } from 'framer-motion';
import SmartLink from '../../components/SmartLink/SmartLink';
import { staggerParent, staggerChild, sectionReveal, VIEWPORT, EASE } from '../../lib/motion';
import { useSeo } from '../../hooks/useSeo';

export default function ResQ() {
  useSeo({ title: 'ResQ — Prajeeth Raaj PK', description: 'ResQ emergency response and dispatch project by Prajeeth Raaj PK.', path: '/projects/resq' });

  return (
    <>
      <motion.section className="max-w-7xl mx-auto px-margin lg:px-margin-desktop mb-space-3xl" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
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
    </>
  );
}

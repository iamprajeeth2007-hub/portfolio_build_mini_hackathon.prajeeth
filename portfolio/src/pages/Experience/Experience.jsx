import { motion } from 'framer-motion';
import SmartLink from '../../components/SmartLink/SmartLink';
import { staggerParent, staggerChild, sectionReveal, VIEWPORT, EASE } from '../../lib/motion';
import { useSeo } from '../../hooks/useSeo';

export default function Experience() {
  useSeo({ title: 'Experience — Prajeeth Raaj PK', description: 'Milestones, ventures, workshops and education of Prajeeth Raaj PK.', path: '/experience' });

  return (
    <>
      <section className="max-w-7xl mx-auto px-margin lg:px-margin-desktop py-space-xl lg:py-space-2xl w-full">
        <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.div className="lg:col-span-8 flex flex-col space-y-space-md" variants={staggerChild}>
            <div className="inline-flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Chronicle // 05.EXP</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg lg:text-[64px] lg:leading-[68px] tracking-tight uppercase text-on-surface">Milestones & Experience</h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-2xl">A chronological record of initiatives led, products shipped, and workshops conducted. Bridging academic rigor with real-world technical execution.</p>
          </motion.div>
          <motion.div className="lg:col-span-4 bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col justify-between" variants={staggerChild}>
            <div className="flex items-center justify-between pb-space-md">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Operational Output</span>
              <span className="material-symbols-outlined text-primary-container text-[20px]">insights</span>
            </div>
            <motion.div className="grid grid-cols-3 gap-space-sm pt-space-xs" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
              <motion.div variants={staggerChild}>
                <span className="block font-headline-md text-headline-md text-on-surface">3+</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary">Ventures</span>
              </motion.div>
              <motion.div variants={staggerChild}>
                <span className="block font-headline-md text-headline-md text-primary">500+</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary">Reached</span>
              </motion.div>
              <motion.div variants={staggerChild}>
                <span className="block font-headline-md text-headline-md text-on-surface">100%</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary">Shipped</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <motion.section className="max-w-7xl mx-auto px-margin lg:px-margin-desktop py-space-xl w-full" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.div className="lg:col-span-8 flex flex-col space-y-space-xl" variants={staggerChild}>
            <article className="relative bg-surface-container p-space-xl rounded-xl shadow-md transition-all duration-300 hover:bg-surface-container-high group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-sm mb-space-md">
                <div>
                  <div className="inline-flex items-center gap-space-xs mb-space-xs">
                    <span className="px-space-xs py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm uppercase tracking-wider text-primary">Keynote & STEM Lead</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">CMRNPUC // HRBR</span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm uppercase text-on-surface group-hover:text-primary transition-colors">Workshop Leader & Founder</h2>
                  <span className="font-body-sm text-body-sm text-secondary">Benzson Technologia</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  <span className="font-label-sm text-label-sm uppercase text-secondary">2023 – Present</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">Led hands-on experimental science and applied technology demonstrations for pre-university students at CMR National PU College. Designed live physics-computation labs, inspired young founders, and received formal institutional commendation from faculty leadership.</p>
              <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-md bg-surface-container-lowest/60 p-space-md rounded-lg" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
                <motion.div variants={staggerChild}>
                  <span className="font-label-sm text-label-sm uppercase text-secondary block">Attendance</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">180+</span>
                </motion.div>
                <motion.div variants={staggerChild}>
                  <span className="font-label-sm text-label-sm uppercase text-secondary block">Modules Delivered</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">06 Tech Labs</span>
                </motion.div>
                <motion.div variants={staggerChild}>
                  <span className="font-label-sm text-label-sm uppercase text-secondary block">Output Result</span>
                  <span className="font-headline-sm text-headline-sm text-primary-container">Official Honors</span>
                </motion.div>
              </motion.div>
            </article>
            <article className="relative bg-surface-container p-space-xl rounded-xl shadow-md transition-all duration-300 hover:bg-surface-container-high group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-sm mb-space-md">
                <div>
                  <div className="inline-flex items-center gap-space-xs mb-space-xs">
                    <span className="px-space-xs py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm uppercase tracking-wider text-primary">Full Lifecycle Launch</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">REVA Campus Eco</span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm uppercase text-on-surface group-hover:text-primary transition-colors">Founder & Lead Developer</h2>
                  <span className="font-body-sm text-body-sm text-secondary">Campus Eats Food-Court Platform</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-sm text-label-sm uppercase text-secondary">2023 – 2024</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">Conceived, designed, and deployed a localized food-court queue minimization and order orchestration web platform. Solved extreme lunch-hour traffic bottlenecks across university vendor stalls with instantaneous status broadcasting and zero-friction client workflows.</p>
              <div className="flex flex-wrap gap-space-xs">
                <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest font-label-sm text-label-sm uppercase text-secondary">Real-Time Sync</span>
                <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest font-label-sm text-label-sm uppercase text-secondary">PostgreSQL</span>
                <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest font-label-sm text-label-sm uppercase text-secondary">Node Engine</span>
                <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest font-label-sm text-label-sm uppercase text-secondary">PWA Deployment</span>
              </div>
            </article>
            <article className="relative bg-surface-container p-space-xl rounded-xl shadow-md transition-all duration-300 hover:bg-surface-container-high group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-sm mb-space-md">
                <div>
                  <div className="inline-flex items-center gap-space-xs mb-space-xs">
                    <span className="px-space-xs py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm uppercase tracking-wider text-primary">Consumer FinTech</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Solo Architecture</span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm uppercase text-on-surface group-hover:text-primary transition-colors">Creator & Full-Stack Engineer</h2>
                  <span className="font-body-sm text-body-sm text-secondary">PocketPal Analytics Suite</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-sm text-label-sm uppercase text-secondary">2023</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">Engineered an autonomous personal finance telemetry tool providing intelligent expense categorisation, monthly forecasting models, and telemetry charts. Built with strict client-side encryption and an ultra-fast tactile mobile UI.</p>
              <div className="bg-surface-container-lowest p-space-md rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary-container">query_stats</span>
                  <span className="font-body-sm text-body-sm text-on-surface">Data Visualisation & Cashflow Forecasting</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest">Shipped V2.4</span>
              </div>
            </article>
            <article className="relative bg-surface-container p-space-xl rounded-xl shadow-md transition-all duration-300 hover:bg-surface-container-high group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-sm mb-space-md">
                <div>
                  <div className="inline-flex items-center gap-space-xs mb-space-xs">
                    <span className="px-space-xs py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm uppercase tracking-wider text-primary">Rapid Prototyping</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Inter-Collegiate</span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm uppercase text-on-surface group-hover:text-primary transition-colors">Hackathons & Competitive Innovation</h2>
                  <span className="font-body-sm text-body-sm text-secondary">Technical Sprints & Hack Challenges</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-sm text-label-sm uppercase text-secondary">Ongoing</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">Active participant and squad collaborator across engineering hackathons under compressed 24-48 hour windows. Focus areas include autonomous agent workflows, distributed micro-tools, and friction-free accessibility interfaces.</p>
            </article>
            <article className="relative bg-surface-container-low p-space-xl rounded-xl shadow-md group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-sm mb-space-md">
                <div>
                  <div className="inline-flex items-center gap-space-xs mb-space-xs">
                    <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm uppercase tracking-wider text-secondary">Foundational Degree</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Bengaluru, IN</span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm uppercase text-on-surface">B.Tech in Computer Science & Engineering (AI & ML)</h2>
                  <span className="font-body-sm text-body-sm text-primary">REVA University</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="font-label-sm text-label-sm uppercase text-secondary">Present Candidate</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-secondary">Deepening expertise in deep learning architectures, computational math, data structures, and reinforcement loops while applying practical systems engineering to campus-wide products.</p>
            </article>
          </motion.div>
          <motion.div className="lg:col-span-4 flex flex-col space-y-space-lg" variants={staggerChild}>
            <div className="bg-surface-container-high p-space-xl rounded-xl shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-space-lg">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-container text-[24px]">workspace_premium</span>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Verified Citation</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-space-sm">Institutional Appreciation</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">Formally recognized by the Academic Administration at CMR National PU College (HRBR Layout) for curating and orchestrating the Benzson Technologia STEM immersion workshop, impacting aspiring engineers.</p>
                <div className="bg-surface-container-lowest p-space-md rounded-lg space-y-space-xs">
                  <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm uppercase">
                    <span>Awarding Body</span>
                    <span className="text-on-surface">CMRNPUC Council</span>
                  </div>
                  <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm uppercase">
                    <span>Domain</span>
                    <span className="text-on-surface">Applied Innovation</span>
                  </div>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md border-t border-surface-container-highest/20 relative z-10 flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Credited Archival Record</span>
              </div>
            </div>
            <div className="bg-surface-container rounded-xl overflow-hidden shadow-md group">
              <div className="relative h-56 w-full overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqZw_2rnuCQeE4xI0oF3e-OYBcC7SeRIWvTdzY_-J87pMrpLFcqJs4BMoR-DGcXD_PQ4xs2U6IXKSDja28UgEuSnTAfevyWAlLsPf3ke2bhPI23uDRSTdbRQtkMXKBQ7SFRQV4BpJruIX0dcrlaS8_7iYpHbOIIZXUue3um8d6TO2GLwhmc-P9Y6CVZJARcpaY0OnbSixS_R9beiRuBB_-Cd4UuG9YFEF64AmF42J5" alt="A modern, high-contrast dark academic lecture hall where a young founder leads an advanced robotics and electronics presentation. Glowing circuits, projector displays, focused students listening attentively in a crisp minimalist workshop environment with warm ambient orange highlights." loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase text-on-surface tracking-wider bg-surface-container-lowest/80 px-2 py-1 rounded">Live Demonstration</span>
                  <span className="font-label-sm text-label-sm uppercase text-primary">CMRNPUC Session</span>
                </div>
              </div>
              <div className="p-space-md">
                <span className="font-body-sm text-body-sm text-secondary">Hands-on lab sessions combining fundamental hardware principles with dynamic code demonstrations.</span>
              </div>
            </div>
            <div className="bg-surface-container p-space-lg rounded-xl shadow-md space-y-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Discipline Allocation</span>
                <span className="material-symbols-outlined text-primary text-[18px]">timelapse</span>
              </div>
              <div className="space-y-space-sm">
                <div>
                  <div className="flex justify-between font-label-sm text-label-sm uppercase mb-1">
                    <span className="text-on-surface">Systems & Architecture</span>
                    <span className="text-primary-container">45%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                    <div className="bg-primary-container h-full rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-label-sm text-label-sm uppercase mb-1">
                    <span className="text-on-surface">AI & Machine Learning</span>
                    <span className="text-primary">35%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: "35%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-label-sm text-label-sm uppercase mb-1">
                    <span className="text-on-surface">Mentorship & Workshops</span>
                    <span className="text-secondary">20%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                    <div className="bg-secondary h-full rounded-full" style={{ width: "20%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section className="max-w-7xl mx-auto px-margin lg:px-margin-desktop py-space-2xl w-full" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="mb-space-xl flex flex-col space-y-space-xs">
          <div className="inline-flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Operating Philosophy</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">Core Leadership & Teamwork Principles</h2>
          <p className="font-body-md text-body-md text-secondary max-w-xl">The non-negotiable vectors through which technical collaboration turns into scalable, resilient output.</p>
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-gutter" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.div className="bg-surface-container p-space-xl rounded-xl shadow-md flex flex-col justify-between transition-all duration-300 hover:bg-surface-container-high group" variants={staggerChild}>
            <div>
              <div className="flex items-center justify-between mb-space-lg">
                <span className="font-headline-md text-headline-md text-primary-container">01</span>
                <span className="material-symbols-outlined text-secondary text-[24px] group-hover:text-primary-container transition-colors">favorite</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-space-sm">Empathy in Design</h3>
              <p className="font-body-md text-body-md text-secondary">Engineering begins with the student, customer, or colleague who interacts with the system. Minimizing friction requires an obsessive understanding of real human stressors.</p>
            </div>
            <div className="mt-space-lg pt-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Human-Centric Heuristics</span>
            </div>
          </motion.div>
          <motion.div className="bg-surface-container p-space-xl rounded-xl shadow-md flex flex-col justify-between transition-all duration-300 hover:bg-surface-container-high group" variants={staggerChild}>
            <div>
              <div className="flex items-center justify-between mb-space-lg">
                <span className="font-headline-md text-headline-md text-primary">02</span>
                <span className="material-symbols-outlined text-secondary text-[24px] group-hover:text-primary transition-colors">center_focus_strong</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-space-sm">Clarity in Execution</h3>
              <p className="font-body-md text-body-md text-secondary">Ambiguity creates debt. Systems, roadmaps, and PRs must communicate their thesis unequivocally before a single production line is compiled.</p>
            </div>
            <div className="mt-space-lg pt-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Uncompromising Signal</span>
            </div>
          </motion.div>
          <motion.div className="bg-surface-container p-space-xl rounded-xl shadow-md flex flex-col justify-between transition-all duration-300 hover:bg-surface-container-high group" variants={staggerChild}>
            <div>
              <div className="flex items-center justify-between mb-space-lg">
                <span className="font-headline-md text-headline-md text-on-surface">03</span>
                <span className="material-symbols-outlined text-secondary text-[24px] group-hover:text-on-surface transition-colors">supervised_user_circle</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-space-sm">Accountability in Teams</h3>
              <p className="font-body-md text-body-md text-secondary">Extreme ownership across technical boundaries. When sprints accelerate under high constraints, high trust is earned through delivered deliverables, not excuses.</p>
            </div>
            <div className="mt-space-lg pt-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Extreme Ownership</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section className="max-w-7xl mx-auto px-margin lg:px-margin-desktop py-space-xl w-full" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="bg-surface-container-low p-space-xl lg:p-space-2xl rounded-xl shadow-lg flex flex-col lg:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-col space-y-space-xs max-w-xl text-center lg:text-left">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container">Next Vectors</span>
            <h2 className="font-headline-md text-headline-md uppercase text-on-surface">Explore Production Artifacts or Initiate Work</h2>
            <p className="font-body-md text-body-md text-secondary">Deep-dive into technical architecture case studies or align on upcoming software consulting opportunities.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-space-md w-full lg:w-auto">
            <SmartLink className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-space-md rounded bg-primary-container text-on-primary-container font-headline-sm text-label-md uppercase tracking-wider hover:bg-primary transition-colors text-center font-semibold" href="/projects">View All Projects →</SmartLink>
            <SmartLink className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-space-md rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm text-label-md uppercase tracking-wider transition-colors text-center" href="/contact">Reach Out</SmartLink>
          </div>
        </div>
      </motion.section>
    </>
  );
}

import { motion } from 'framer-motion';
import SmartLink from '../../components/SmartLink/SmartLink';
import { staggerParent, staggerChild, sectionReveal, VIEWPORT, EASE } from '../../lib/motion';
import { useSeo } from '../../hooks/useSeo';

export default function About() {
  useSeo({ title: 'About — Prajeeth Raaj PK', description: 'Behind the work: the mindset, education and interests of Prajeeth Raaj PK, a developer and student innovator studying CSE (AI & ML) at REVA University.', path: '/about' });

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-primary-container/15 via-primary-container/5 to-transparent blur-3xl pointer-events-none rounded-full"></div>
        <section className="max-w-7xl mx-auto w-full px-margin lg:px-margin-desktop pt-space-2xl pb-space-xl">
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim">Manifesto • Dossier 002</span>
              <span className="text-surface-container-highest">/</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Bangalore, IN</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-baseline">
              <h1 className="lg:col-span-8 font-display-xl text-display-xl tracking-tighter text-on-surface uppercase font-semibold">
                Behind{' '}
                <br className="hidden sm:inline" />
                {' '}
                <span className="text-primary-container">The Work</span>
              </h1>
              <div className="lg:col-span-4 flex flex-col justify-end">
                <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-space-xs">The Mindset of a Builder</p>
                <p className="font-body-md text-body-md text-secondary">Dissecting the gap between theoretical computation and tangible human leverage. Engineering code that answers real everyday friction.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <motion.section className="max-w-7xl mx-auto w-full px-margin lg:px-margin-desktop py-space-xl" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.div className="lg:col-span-5 flex flex-col gap-space-lg" variants={staggerChild}>
            <div className="rounded-xl bg-surface-container p-space-xl flex flex-col justify-between shadow-xl border border-surface-container-highest relative overflow-hidden">
              <div className="absolute -right-24 -top-32 w-72 h-72 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-space-xl">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim">Subject Record</span>
                  </div>
                  <div className="px-space-sm py-space-xs rounded bg-surface-container-high border border-surface-container-highest">
                    <span className="font-label-sm text-label-sm text-primary-container font-semibold">FOUNDER // ENG</span>
                  </div>
                </div>
                <div className="space-y-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block">Identity</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight uppercase">
                    Prajeeth{' '}
                    <br />
                    Raaj PK
                  </h2>
                </div>
              </div>
              <div className="relative z-10 pt-space-xl border-t border-surface-container-highest space-y-space-md">
                <div className="flex justify-between items-center text-body-sm">
                  <span className="text-secondary">Role Classification</span>
                  <span className="text-on-surface font-label-md text-label-md uppercase tracking-wider">Systems Architect</span>
                </div>
                <div className="flex justify-between items-center text-body-sm">
                  <span className="text-secondary">Location / Base</span>
                  <span className="text-on-surface font-label-md text-label-md uppercase tracking-wider">Bengaluru, IN</span>
                </div>
                <div className="flex justify-between items-center text-body-sm">
                  <span className="text-secondary">Core Focus</span>
                  <span className="text-primary font-label-md text-label-md uppercase tracking-wider font-semibold">AI Workflows & Tooling</span>
                </div>
              </div>
            </div>
            <motion.div className="grid grid-cols-3 gap-space-sm p-space-md bg-surface-container rounded-xl shadow-sm" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
              <motion.div className="flex flex-col" variants={staggerChild}>
                <span className="font-label-sm text-label-sm text-secondary uppercase">Focus</span>
                <span className="font-headline-sm text-headline-sm text-on-surface mt-space-xs">Systems</span>
              </motion.div>
              <motion.div className="flex flex-col" variants={staggerChild}>
                <span className="font-label-sm text-label-sm text-secondary uppercase">Output</span>
                <span className="font-headline-sm text-headline-sm text-primary-container mt-space-xs">SaaS/AI</span>
              </motion.div>
              <motion.div className="flex flex-col" variants={staggerChild}>
                <span className="font-label-sm text-label-sm text-secondary uppercase">Status</span>
                <span className="font-headline-sm text-headline-sm text-on-surface mt-space-xs">Building</span>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="lg:col-span-7 flex flex-col justify-between space-y-space-xl" variants={staggerChild}>
            <div className="space-y-space-lg">
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-high rounded-full">
                <span className="material-symbols-outlined text-[16px] text-primary-container">psychology</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">Curiosity → Execution</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Code is not just syntax. It is the cheapest, highest-leverage vehicle for agency.</h2>
              <div className="space-y-space-md text-secondary font-body-lg text-body-lg leading-relaxed">
                <p className="">My path began not with high abstractions, but with pure technical itch: peeling back how protocols, servers, and visual systems communicate underneath the glass. That curiosity quickly shifted into an urgency for execution. Speculation without shipping is simply entertainment.</p>
                <p className="">I believe in engineering products that eliminate friction for actual human beings—specifically students, early-stage peers, and operators navigating broken systems. Software allows a single determined developer to compress weeks of institutional friction into sub-second interactions.</p>
              </div>
            </div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter pt-space-md" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
              <motion.div className="p-space-lg bg-surface-container rounded-xl flex flex-col justify-between group hover:bg-surface-container-high transition-colors" variants={staggerChild}>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="material-symbols-outlined text-primary-container text-[28px]">code_blocks</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Leverage</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Rapid Execution</h3>
                <p className="font-body-sm text-body-sm text-secondary">Shrinking the timeline from raw paper concept to deployed MVP. Validating demand with working software.</p>
              </motion.div>
              <motion.div className="p-space-lg bg-surface-container rounded-xl flex flex-col justify-between group hover:bg-surface-container-high transition-colors" variants={staggerChild}>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="material-symbols-outlined text-primary-container text-[28px]">groups</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Community</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Peer Utility</h3>
                <p className="font-body-sm text-body-sm text-secondary">Designing platforms, notes tooling, and AI workspaces directly serving campus student workflows.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section className="max-w-7xl mx-auto w-full px-margin lg:px-margin-desktop py-space-2xl" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="p-space-xl lg:p-space-2xl bg-surface-container-low rounded-xl relative overflow-hidden shadow-lg">
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop relative z-10" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.div className="lg:col-span-5 flex flex-col justify-between" variants={staggerChild}>
              <div className="space-y-space-md">
                <div className="inline-flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim">Academic Architecture</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight uppercase">
                  REVA{' '}
                  <br />
                  University
                </h3>
                <p className="font-body-md text-body-md text-secondary">School of Computing and Information Technology • Bengaluru</p>
                <div className="inline-block mt-space-sm px-space-md py-space-xs rounded bg-surface-container text-on-surface font-label-md text-label-md tracking-wider">B.Tech • Computer Science & Engineering (AI & ML)</div>
              </div>
              <div className="pt-space-xl">
                <div className="text-secondary font-label-sm text-label-sm uppercase tracking-widest mb-space-xs">Program Period</div>
                <div className="font-headline-sm text-headline-sm text-primary">2024 — 2028</div>
              </div>
            </motion.div>
            <motion.div className="lg:col-span-7 flex flex-col justify-center space-y-space-md mt-space-lg lg:mt-0" variants={staggerChild}>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs">Primary Research & Study Tracks</span>
              <div className="p-space-lg bg-surface-container rounded-xl flex items-start gap-space-md hover:bg-surface-container-high transition-colors">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">memory</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">Systems Architecture & Low-Latency Pipelines</h4>
                  <p className="font-body-sm text-body-sm text-secondary mt-space-xs">Exploring distributed state management, asynchronous pipeline concurrency, and database query optimization for edge computing.</p>
                </div>
              </div>
              <div className="p-space-lg bg-surface-container rounded-xl flex items-start gap-space-md hover:bg-surface-container-high transition-colors">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                  <span className="material-symbols-outlined text-[22px]">hub</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">Applied AI & Domain Adaptation</h4>
                  <p className="font-body-sm text-body-sm text-secondary mt-space-xs">Bridging LLM inferences with contextual retrieval (RAG), parameter-efficient fine-tuning, and deterministic workflow routing.</p>
                </div>
              </div>
              <div className="p-space-lg bg-surface-container rounded-xl flex items-start gap-space-md hover:bg-surface-container-high transition-colors">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">touch_app</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">Human-Centered Product Engineering</h4>
                  <p className="font-body-sm text-body-sm text-secondary mt-space-xs">Investigating micro-ergonomics, cognitive load reduction in developer tools, and instant tactile feedback loops across interfaces.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section className="max-w-7xl mx-auto w-full px-margin lg:px-margin-desktop py-space-xl" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-space-xl gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim block mb-space-xs">Tripartite Blueprint</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight uppercase">Competencies & Character</h2>
          </div>
          <p className="font-body-md text-body-md text-secondary max-w-md">Equal parts software engineer, product synthesizer, and venture catalyst.</p>
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-gutter" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.div className="p-space-xl bg-surface-container rounded-xl flex flex-col justify-between group hover:bg-surface-container-high transition-all" variants={staggerChild}>
            <div>
              <div className="flex items-center justify-between mb-space-lg">
                <span className="font-label-md text-label-md uppercase tracking-wider text-primary-container">01 • Execution</span>
                <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-space-sm">Technical Execution</h3>
              <p className="font-body-md text-body-md text-secondary mb-space-lg">Engineering robust foundations from clean relational schemata to responsive presentation logic. Zero compromise on responsiveness.</p>
              <div className="space-y-space-sm pt-space-sm">
                <div className="flex items-center justify-between text-body-sm text-on-surface py-space-xs">
                  <span className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span>
                    Full-Stack Web Architectures
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary">React / Next / Node</span>
                </div>
                <div className="flex items-center justify-between text-body-sm text-on-surface py-space-xs">
                  <span className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Applied Machine Learning
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary">PyTorch / LangChain</span>
                </div>
                <div className="flex items-center justify-between text-body-sm text-on-surface py-space-xs">
                  <span className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    API & System Infrastructure
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary">PostgreSQL / Redis / REST</span>
                </div>
              </div>
            </div>
            <div className="mt-space-xl pt-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Build Velocity</span>
                <svg className="w-24 h-6 text-primary-container" fill="none" viewBox="0 0 100 24">
                  <path d="M0 20 L25 14 L50 18 L75 6 L100 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div className="p-space-xl bg-surface-container rounded-xl flex flex-col justify-between group hover:bg-surface-container-high transition-all" variants={staggerChild}>
            <div>
              <div className="flex items-center justify-between mb-space-lg">
                <span className="font-label-md text-label-md uppercase tracking-wider text-primary">02 • Synthesis</span>
                <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">design_services</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-space-sm">Product Mindset</h3>
              <p className="font-body-md text-body-md text-secondary mb-space-lg">Designing backwards from user frustration. Rejecting scope creep in favor of tight loop validation and tactile micro-interactions.</p>
              <div className="space-y-space-sm pt-space-sm">
                <div className="flex items-center justify-between text-body-sm text-on-surface py-space-xs">
                  <span className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span>
                    Rapid Prototyping
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary">48h Validation</span>
                </div>
                <div className="flex items-center justify-between text-body-sm text-on-surface py-space-xs">
                  <span className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Iterative User Telemetry
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary">Signal Analysis</span>
                </div>
                <div className="flex items-center justify-between text-body-sm text-on-surface py-space-xs">
                  <span className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Pragmatic Micro-UX
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary">Zero Clutter</span>
                </div>
              </div>
            </div>
            <div className="mt-space-xl pt-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Friction Metric</span>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
                  <span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="p-space-xl bg-surface-container rounded-xl flex flex-col justify-between group hover:bg-surface-container-high transition-all" variants={staggerChild}>
            <div>
              <div className="flex items-center justify-between mb-space-lg">
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">03 • Catalyst</span>
                <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">campaign</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-space-sm">Leadership & Venture</h3>
              <p className="font-body-md text-body-md text-secondary mb-space-lg">Convening engineers, commanding hackathon war rooms, and democratizing technical know-how through hands-on public workshops.</p>
              <div className="space-y-space-sm pt-space-sm">
                <div className="flex items-center justify-between text-body-sm text-on-surface py-space-xs">
                  <span className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span>
                    Hackathon Direction
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary">Team Lead</span>
                </div>
                <div className="flex items-center justify-between text-body-sm text-on-surface py-space-xs">
                  <span className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Workshops & Keynotes
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary">300+ Students</span>
                </div>
                <div className="flex items-center justify-between text-body-sm text-on-surface py-space-xs">
                  <span className="flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Initiative Formation
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary">Benzson Core</span>
                </div>
              </div>
            </div>
            <div className="mt-space-xl pt-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Impact Reach</span>
                <span className="font-label-md text-label-md text-primary font-semibold">CAMPUS & BEYOND</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section className="max-w-7xl mx-auto w-full px-margin lg:px-margin-desktop py-space-2xl" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="flex flex-col gap-space-xs mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim">Outside the Terminal</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight uppercase">Discipline • Motion • Visuals</h2>
          <p className="font-body-md text-body-md text-secondary max-w-xl">High physical rigor and mechanical immersion recalibrate cognitive endurance. The principles remain identical: precision, repetition, and focus.</p>
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-12 gap-gutter" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.div className="md:col-span-7 rounded-xl bg-surface-container overflow-hidden group flex flex-col justify-between shadow-lg relative min-h-[360px]" variants={staggerChild}>
            <div role="img" aria-label="Cinematic night photograph of a matte black scrambler motorcycle parked under industrial neon street lighting, tarmac glistening with light rain reflections, mechanical engine details in focus, warm orange and moody dark tones." className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCq2CV-4kKmw4tAJq9J5MfyHQvwvhkbOT4YGCvx9ytisFkj2z6gxDLTZLmgxgfvM9HQVxGKhlmEgGtb_w7CdoPnEMRWXgTzWuPh1UDh9WT5Iycm_Hjr9jsEToXwt8TZ8VpanGEqq4QOBLJhKGrOG1VYEveUM2GkSO6STnADzpp5-AMIUbguz7WUMeI0Uvw6YUuCAsFnUC9lv0yqHgDDlKPT-4MLvkDeq9Lu7FVgueI8')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/70 to-transparent"></div>
            <div className="relative z-10 p-space-lg flex justify-between items-start">
              <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest/80 backdrop-blur-md font-label-sm text-label-sm text-primary uppercase">01 • Exploration</span>
              <span className="material-symbols-outlined text-on-surface text-[24px]">two_wheeler</span>
            </div>
            <div className="relative z-10 p-space-lg space-y-space-xs">
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase">Motorcycling & Machines</h3>
              <p className="font-body-md text-body-md text-secondary max-w-lg">Mechanical appreciation on open highways. High-speed situational awareness sharpens split-second decision-making, offering total cognitive clarity away from screens.</p>
              <div className="flex gap-space-sm pt-space-xs">
                <span className="font-label-sm text-label-sm text-primary-fixed-dim">HYPERFOCUS</span>
                <span className="text-secondary">•</span>
                <span className="font-label-sm text-label-sm text-secondary">TRAJECTORY</span>
                <span className="text-secondary">•</span>
                <span className="font-label-sm text-label-sm text-secondary">PHYSICAL MECHANICS</span>
              </div>
            </div>
          </motion.div>
          <motion.div className="md:col-span-5 rounded-xl bg-surface-container p-space-xl flex flex-col justify-between group hover:bg-surface-container-high transition-all shadow-lg" variants={staggerChild}>
            <div className="space-y-space-md">
              <div className="flex items-center justify-between">
                <span className="px-space-sm py-space-xs rounded bg-surface-container-high font-label-sm text-label-sm text-primary-container uppercase">02 • Conditioning</span>
                <span className="material-symbols-outlined text-secondary text-[24px]">fitness_center</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase">Fitness & Iron</h3>
              <p className="font-body-md text-body-md text-secondary">Progressive overload as a philosophy. Heavy compound lifts teach direct accountability: effort cannot be faked, and measurable progress requires obsessive consistency.</p>
            </div>
            <div className="pt-space-xl space-y-space-sm">
              <div className="flex justify-between items-center text-body-sm">
                <span className="text-secondary">Consistency Streak</span>
                <span className="text-primary font-headline-sm text-headline-sm">52 WEEKS</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="w-4/5 h-full bg-primary-container"></div>
              </div>
            </div>
          </motion.div>
          <motion.div className="md:col-span-5 rounded-xl bg-surface-container p-space-xl flex flex-col justify-between group hover:bg-surface-container-high transition-all shadow-lg" variants={staggerChild}>
            <div className="space-y-space-md">
              <div className="flex items-center justify-between">
                <span className="px-space-sm py-space-xs rounded bg-surface-container-high font-label-sm text-label-sm text-primary uppercase">03 • Optics</span>
                <span className="material-symbols-outlined text-secondary text-[24px]">photo_camera</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase">Visual Storytelling</h3>
              <p className="font-body-md text-body-md text-secondary">Framing street textures, brutalist architecture, and fleeting human interactions. Training the optical eye for composition, negative space, and tonal balance.</p>
            </div>
            <div className="pt-space-lg flex items-center justify-between border-t-0">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Glass: 35mm Prime</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">High Contrast • RAW</span>
            </div>
          </motion.div>
          <motion.div className="md:col-span-7 rounded-xl bg-surface-container overflow-hidden group flex flex-col justify-between shadow-lg relative min-h-[360px]" variants={staggerChild}>
            <div role="img" aria-label="Moody atmospheric shot of a hard outdoor basketball court at twilight with glowing dusk lights, dramatic shadows, crisp lines painted on the court, minimal sports aesthetic with warm amber sidelight." className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIcReWM7BmFHXVhvtmWpr57F-ESEIV9y4LszPDTu91xOFaHU_OVIHIcQP-1_w-CpPrnKAwTo6BiqFx6fkM_tUmvhqUiiK9gY6QmbqKfPLbIzIH1JffBJqkPahlB3xvwq08RQ94GCSK9oS3PPelhiC3_K_WwXc5tAWe-G6dKGfBrRyQlQfpV0ukk2DP8UudCUxSsQVFHAlcMgbVsMdiX-x6RsFDbdS4w9WmazJhB126')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/70 to-transparent"></div>
            <div className="relative z-10 p-space-lg flex justify-between items-start">
              <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest/80 backdrop-blur-md font-label-sm text-label-sm text-primary uppercase">04 • Synergy</span>
              <span className="material-symbols-outlined text-on-surface text-[24px]">sports_volleyball</span>
            </div>
            <div className="relative z-10 p-space-lg space-y-space-xs">
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase">Athletics & Team Sports</h3>
              <p className="font-body-md text-body-md text-secondary max-w-lg">Rapid team adjustments, competitive grit, and immediate tactical communication. Winning in high-stress matches translates directly into startup war-room agility.</p>
              <div className="flex gap-space-sm pt-space-xs">
                <span className="font-label-sm text-label-sm text-primary-fixed-dim">FAST DRIFTS</span>
                <span className="text-secondary">•</span>
                <span className="font-label-sm text-label-sm text-secondary">PRESSURE RESILIENCE</span>
                <span className="text-secondary">•</span>
                <span className="font-label-sm text-label-sm text-secondary">COORDINATION</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section className="max-w-7xl mx-auto w-full px-margin lg:px-margin-desktop pt-space-xl pb-space-3xl" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="bg-surface-container-low rounded-xl p-space-xl lg:p-space-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex flex-col items-start gap-space-2xl relative z-10 max-w-4xl">
            <div className="space-y-space-md">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container">Core Operating Maxim</span>
              <blockquote className="font-headline-lg text-headline-lg lg:text-[44px] lg:leading-[52px] text-on-surface tracking-tight uppercase">“Do not build software to showcase intelligence. Build software that dissolves friction and confers unfair leverage.”</blockquote>
              <p className="font-body-md text-body-md text-secondary">— Architectural thesis governing all venture builds, open-source repositories, and technical research at Benzson.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full sm:w-auto">
              <SmartLink className="inline-flex items-center justify-center px-space-xl py-space-md rounded bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase tracking-wider hover:opacity-90 transition-all duration-200 group" href="/projects">
                <span className="">Examine The Projects</span>
                {' '}
                <span className="ml-space-sm transition-transform duration-200 group-hover:translate-x-1">→</span>
              </SmartLink>
              <SmartLink className="inline-flex items-center justify-center px-space-xl py-space-md rounded bg-surface-container-high text-on-surface font-headline-sm text-headline-sm uppercase tracking-wider hover:bg-surface-container-highest transition-all duration-200" href="/benzson">Explore Benzson Venture ↗</SmartLink>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

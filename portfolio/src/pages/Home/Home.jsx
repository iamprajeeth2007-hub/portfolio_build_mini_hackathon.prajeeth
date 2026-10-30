import { motion } from 'framer-motion';
import SmartLink from '../../components/SmartLink/SmartLink';
import { staggerParent, staggerChild, sectionReveal, VIEWPORT, EASE } from '../../lib/motion';
import { useSeo } from '../../hooks/useSeo';

export default function Home() {
  useSeo({ title: 'Prajeeth Raaj PK — Developer · Entrepreneur · Student Innovator', description: 'Building ideas into products. Creating opportunities through technology. Portfolio of Prajeeth Raaj PK, B.Tech CSE (AI & ML) at REVA University and founder of Benzson Technologia.', path: '/' });

  return (
    <>
      <section className="relative w-full overflow-hidden pb-space-3xl">
        <div className="absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-primary-container/10 blur-[130px] pointer-events-none"></div>
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop pt-space-xl">
          <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container-low border border-surface-container-highest mb-space-lg shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              {' '}
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Developer · Entrepreneur · Student Innovator</span>
          </div>
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-end mb-space-2xl" variants={staggerParent} initial="hidden" animate="show">
            <motion.div className="lg:col-span-8 space-y-space-md" variants={staggerChild}>
              <p className="font-headline-sm text-headline-sm text-primary tracking-tight">Hi, I'm Prajeeth.</p>
              <h1 className="font-display-xl text-display-xl lg:text-[76px] lg:leading-[80px] text-on-surface tracking-tight uppercase">Building ideas into products. Creating opportunities through technology.</h1>
            </motion.div>
            <motion.div className="lg:col-span-4 flex flex-col justify-end space-y-space-lg lg:pb-space-sm" variants={staggerChild}>
              <p className="font-body-lg text-body-lg text-secondary">Developer and founder transforming real-world student and community friction points into high-utility digital platforms.</p>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <SmartLink className="inline-flex items-center justify-center px-space-lg py-space-md rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-label-md tracking-wider uppercase transition-transform hover:-translate-y-0.5 hover:shadow-lg" href="#projects">
                  <span>Explore My Work</span>
                  {' '}
                  <span className="material-symbols-outlined ml-space-xs text-[18px]">arrow_downward</span>
                </SmartLink>
                <SmartLink className="inline-flex items-center justify-center px-space-lg py-space-md rounded-lg bg-surface-container-low text-on-surface border border-surface-container-highest font-headline-sm text-label-md tracking-wider uppercase hover:border-primary-container transition-colors" href="/contact">
                  <span>Let's Connect</span>
                  {' '}
                  <span className="material-symbols-outlined ml-space-xs text-[18px]">north_east</span>
                </SmartLink>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-gutter pt-space-lg border-t border-surface-container-highest" variants={staggerParent} initial="hidden" animate="show">
            <motion.div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-low/60 border border-surface-container-highest/60" variants={staggerChild}>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[22px]">school</span>
              </div>
              <div>
                <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Academic Focus</div>
                <div className="font-headline-sm text-body-md text-on-surface">B.Tech CSE (AI & ML) @ REVA University</div>
              </div>
            </motion.div>
            <motion.div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-low/60 border border-surface-container-highest/60" variants={staggerChild}>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[22px]">rocket_launch</span>
              </div>
              <div>
                <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Venture</div>
                <div className="font-headline-sm text-body-md text-on-surface">Founder @ Benzson Technologia</div>
              </div>
            </motion.div>
            <motion.div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-low/60 border border-surface-container-highest/60" variants={staggerChild}>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[22px]">biotech</span>
              </div>
              <div>
                <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Active Status</div>
                <div className="font-headline-sm text-body-md text-on-surface">Full-Stack · Systems · Open Source</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <motion.section className="w-full py-space-3xl bg-surface-container-lowest border-y border-surface-container-highest" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container">Operational Model</span>
              <h2 className="font-headline-lg text-headline-lg tracking-tight uppercase text-on-surface mt-space-xs">Philosophy & Approach</h2>
            </div>
            <p className="font-body-md text-body-md text-secondary max-w-md">How raw challenges evolve into validated software products through disciplined rapid iteration.</p>
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.div className="group p-space-xl rounded-xl bg-surface-container-low border border-surface-container-highest hover:border-primary-container/60 transition-all duration-300" variants={staggerChild}>
              <div className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest mb-space-md font-semibold">01 / DISCOVERY</div>
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container mb-space-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[26px]">troubleshoot</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm uppercase">Identify Friction</h3>
              <p className="font-body-md text-body-md text-secondary">Look directly at broken workflows, physical queues, and neglected peer processes. The most impactful systems fix pain points that users assume are inevitable.</p>
            </motion.div>
            <motion.div className="group p-space-xl rounded-xl bg-surface-container-low border border-surface-container-highest hover:border-primary-container/60 transition-all duration-300" variants={staggerChild}>
              <div className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest mb-space-md font-semibold">02 / VELOCITY</div>
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container mb-space-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[26px]">speed</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm uppercase">Prototype Fast</h3>
              <p className="font-body-md text-body-md text-secondary">Condense weeks of theory into functioning MVPs within days. Real user telemetry beats assumptions every single cycle—deploy early, observe closely, iterate relentlessly.</p>
            </motion.div>
            <motion.div className="group p-space-xl rounded-xl bg-surface-container-low border border-surface-container-highest hover:border-primary-container/60 transition-all duration-300" variants={staggerChild}>
              <div className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest mb-space-md font-semibold">03 / DISTRIBUTION</div>
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container mb-space-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[26px]">groups_3</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm uppercase">Democratize Access</h3>
              <p className="font-body-md text-body-md text-secondary">Deliver intuitive, barrier-free tools to non-technical users. Sophisticated engineering should be invisible behind effortless, respectful user interfaces.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section className="w-full py-space-3xl" id="projects" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container">Engineering Artifacts</span>
              <h2 className="font-headline-lg text-headline-lg tracking-tight uppercase text-on-surface mt-space-xs">Selected Projects</h2>
            </div>
            <div className="flex items-center gap-space-md">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">3 Systems Deployed</span>
              <div className="h-4 w-px bg-surface-container-highest"></div>
              <SmartLink className="font-label-md text-label-md text-primary hover:text-primary-container inline-flex items-center gap-1 uppercase tracking-wider" href="/projects">All Projects →</SmartLink>
            </div>
          </div>
          <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-desktop" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.div className="flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-low border border-surface-container-highest hover:border-primary-container transition-all group" variants={staggerChild}>
              <div>
                <div className="aspect-video w-full rounded-lg overflow-hidden mb-space-lg bg-surface-container relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM5K5XRatgzvVHjfD92aC_HbMCeKf-UeZ7OwGfGjjDeByuhPHF3x9FShDXxTMGWy8361lOMS67YnOcF2oMPy9n1A88nXpHvwJNICsFF8GBgLm2nHqv9CzotWpccvdYP5ifCj9gJi-SnllhZmn_M02QxkG1s74SDkYr5N6nUSMJVkwAdI9mwOXZhdu9fseSvBL5aq6RZk6IrkzSS10Mph36aVMyJ6GeAAC-tjUeyPCk" alt="High tech dark mode dashboard interface for college food court order management system named Campus Eats displaying active orders, kitchen queue metrics, and clean data visualizations with electric orange accents and warm charcoal tones." loading="lazy" decoding="async" />
                  <div className="absolute top-3 left-3 px-space-sm py-1 rounded bg-surface/90 border border-surface-container-highest text-primary font-label-sm text-label-sm uppercase tracking-widest">REVA University</div>
                </div>
                <div className="flex items-center gap-space-xs flex-wrap mb-space-sm">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase">Full Stack</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase">Real-time WebSockets</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase">Queueing Engine</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs uppercase group-hover:text-primary-container transition-colors">Campus Eats</h3>
                <p className="font-body-md text-body-md text-secondary mb-space-lg">Smart college food court queuing and slot orchestration platform solving 45-minute daily congestion bottlenecks for thousands of university students.</p>
              </div>
              <div className="pt-space-md border-t border-surface-container-highest flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">01 · Active Beta</span>
                <SmartLink className="inline-flex items-center gap-1 font-label-md text-label-md uppercase text-primary hover:text-primary-container font-semibold transition-colors" href="/projects/campus-eats">
                  Case Study{' '}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </SmartLink>
              </div>
            </motion.div>
            <motion.div className="flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-low border border-surface-container-highest hover:border-primary-container transition-all group" variants={staggerChild}>
              <div>
                <div className="aspect-video w-full rounded-lg overflow-hidden mb-space-lg bg-surface-container relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRQEKRaQJIo12L3evIGkLPSwePfDNmqdyeWXBznMyjw6AlY7O5Wi3d4QN_gls1pdSS33fyf1hTLPBXK6RNfrnjvBFFlyDY9ZsvhjkDjaIPphB7JLUlwyWF5gP1e7aIpkNVixxiuJvO_khMoVYaIZieztophSJZZ62xMrMOhv5-thelSOJ5J-jH66koNQXRVWwu11r-iQje8pN1cQm0hiyrTMNAFr4_kwIK0v_yYdmx" alt="Fintech analytical application UI for PocketPal showcasing dark charcoal charts, expense categorization graphs, predictive cash flow bars, and minimal orange accents on an OLED screen." loading="lazy" decoding="async" />
                  <div className="absolute top-3 left-3 px-space-sm py-1 rounded bg-surface/90 border border-surface-container-highest text-primary font-label-sm text-label-sm uppercase tracking-widest">FinTech Utility</div>
                </div>
                <div className="flex items-center gap-space-xs flex-wrap mb-space-sm">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase">Next.js</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase">ML Scoring</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase">PWA</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs uppercase group-hover:text-primary-container transition-colors">PocketPal</h3>
                <p className="font-body-md text-body-md text-secondary mb-space-lg">Personal finance and expense intelligence suite designed specifically for undergraduates navigating tight stipends, automated budgeting, and micro-savings goals.</p>
              </div>
              <div className="pt-space-md border-t border-surface-container-highest flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">02 · Production</span>
                <SmartLink className="inline-flex items-center gap-1 font-label-md text-label-md uppercase text-primary hover:text-primary-container font-semibold transition-colors" href="/projects/pocketpal">
                  Case Study{' '}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </SmartLink>
              </div>
            </motion.div>
            <motion.div className="flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-low border border-surface-container-highest hover:border-primary-container transition-all group" variants={staggerChild}>
              <div>
                <div className="aspect-video w-full rounded-lg overflow-hidden mb-space-lg bg-surface-container relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY1mopywsbZRsPthNcBBMk5EXQY62fvwPS0Cyy7UIZGdJbSTiVeWdMXDYJVd0oBH_bQpgL_O_Esbl4jWsnyBuaiZabCTlilW_LnnSiD5G5PNQAjX_Rw-maKrdFZJHzqIjCwauxdZPjVD8_unYOKhRIJMPK6ugQbVPd_GuQGdGQRuJQ2VoRqPWvzXr5aUEahhqL4WaYYMrjqKYoPl2AXrHKOwD1l5O3S-ZD-jJ-gMJj" alt="Emergency dispatch and incident monitoring terminal interface for ResQ featuring telemetry radar maps, incident status indicators, rapid alert triggers, and emergency red-orange telemetry lines on charcoal ground." loading="lazy" decoding="async" />
                  <div className="absolute top-3 left-3 px-space-sm py-1 rounded bg-surface/90 border border-surface-container-highest text-primary font-label-sm text-label-sm uppercase tracking-widest">Mission Critical</div>
                </div>
                <div className="flex items-center gap-space-xs flex-wrap mb-space-sm">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase">GeoJSON</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase">Offline First</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase">Node Microservices</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs uppercase group-hover:text-primary-container transition-colors">ResQ</h3>
                <p className="font-body-md text-body-md text-secondary mb-space-lg">Low-latency emergency response and incident coordination system providing rapid SOS routing and peer volunteer triangulation during campus safety alerts.</p>
              </div>
              <div className="pt-space-md border-t border-surface-container-highest flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">03 · Prototype</span>
                <SmartLink className="inline-flex items-center gap-1 font-label-md text-label-md uppercase text-primary hover:text-primary-container font-semibold transition-colors" href="/projects/resq">
                  Case Study{' '}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </SmartLink>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section className="w-full py-space-3xl bg-surface-container-lowest border-y border-surface-container-highest" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <div className="p-space-xl lg:p-space-3xl rounded-2xl bg-surface-container-low border border-surface-container-highest relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-primary-container to-transparent"></div>
            <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
              <motion.div className="lg:col-span-7 space-y-space-lg" variants={staggerChild}>
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded bg-surface-container border border-surface-container-highest">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Initiative Spotlight</span>
                </div>
                <h2 className="font-display-xl-mobile lg:font-headline-lg lg:text-headline-lg uppercase text-on-surface tracking-tight">Benzson Technologia</h2>
                <p className="font-body-lg text-body-lg text-secondary">A student-driven practical learning venture built to bridge the canyon between theoretical computer science curricula and production software engineering standards.</p>
                <div className="p-space-lg rounded-xl bg-surface-container border border-surface-container-highest space-y-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest font-semibold">Flagship Engagement</span>
                    <span className="font-label-sm text-label-sm text-secondary uppercase">Delivered</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">Interactive AI & Web Workshop</h4>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Conducted high-engagement hands-on technical workshop for 120+ aspiring engineers at{' '}
                    <span className="text-on-surface font-medium">CMR National PU College (HRBR Campus)</span>
                    , introducing practical full-stack deployment and foundational ML pipelines.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <SmartLink className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-lg bg-surface text-on-surface border border-surface-container-highest hover:border-primary-container font-label-md text-label-md uppercase tracking-wider transition-colors" href="/benzson">
                    <span>Explore Benzson Programs</span>
                    {' '}
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </SmartLink>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Cohort Outreach: 250+ Students Impacted</span>
                </div>
              </motion.div>
              <motion.div className="lg:col-span-5 relative" variants={staggerChild}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container border border-surface-container-highest">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7cbIS3ppjkR_-PcEHOu511ID_VxweFCGGQYbKuazWrj4Gipe1osTo4Xx2sxa-Xb0g1sreEqlkq6bbRq_XcUUvCmGm_aifsK1hu6RaownqY9HIp-4kRbby6FC_N4CucE9cqABOlNZJwqMh64tLxObDhCAWtFPhPv9cmKCVekl_uYhljZpJzjQZaJsGYHXpNl3pATA8_mMNFRniQkP7EOCRPqRR8FjlD6BfGcGpulvG" alt="A dynamic classroom workshop scene with a young technical instructor explaining code on an interactive presentation screen to an attentive audience of high school and pre-university students in Bangalore, captured in warm moody ambient light." loading="lazy" decoding="async" />
                </div>
                <div className="absolute -bottom-4 -left-4 p-space-md rounded-lg bg-surface-container-highest border border-surface-container-highest text-on-surface shadow-xl flex items-center gap-space-md">
                  <div className="text-primary-container">
                    <span className="material-symbols-outlined text-[32px]">co_present</span>
                  </div>
                  <div>
                    <div className="font-headline-sm text-headline-sm font-bold text-on-surface">100%</div>
                    <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Hands-on Lab Format</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section className="w-full py-space-3xl" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container">Execution Timeline</span>
              <h2 className="font-headline-lg text-headline-lg tracking-tight uppercase text-on-surface mt-space-xs">Journey Snapshot</h2>
            </div>
            <p className="font-body-md text-body-md text-secondary max-w-sm">A progression of competitive builds, community experiments, and academic breakthroughs.</p>
          </div>
          <div className="divide-y divide-surface-container-highest border-y border-surface-container-highest">
            <motion.div className="py-space-lg grid grid-cols-1 md:grid-cols-12 gap-gutter items-center hover:bg-surface-container-low/50 px-space-md transition-colors rounded-lg" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
              <motion.div className="md:col-span-2 font-label-md text-label-md uppercase tracking-wider text-primary-container font-semibold" variants={staggerChild}>2024 — Present</motion.div>
              <motion.div className="md:col-span-6" variants={staggerChild}>
                <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase">Benzson Technologia Expansion</h4>
                <p className="font-body-sm text-body-sm text-secondary mt-1">Establishing institutional partnerships and architecting modular peer-to-peer technical mentorship programs across Bangalore institutions.</p>
              </motion.div>
              <motion.div className="md:col-span-4 flex md:justify-end items-center gap-space-sm mt-space-xs md:mt-0" variants={staggerChild}>
                <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase">Leadership · Operations</span>
              </motion.div>
            </motion.div>
            <motion.div className="py-space-lg grid grid-cols-1 md:grid-cols-12 gap-gutter items-center hover:bg-surface-container-low/50 px-space-md transition-colors rounded-lg" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
              <motion.div className="md:col-span-2 font-label-md text-label-md uppercase tracking-wider text-secondary" variants={staggerChild}>Mid 2024</motion.div>
              <motion.div className="md:col-span-6" variants={staggerChild}>
                <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase">CMR National PU College Workshop</h4>
                <p className="font-body-sm text-body-sm text-secondary mt-1">Led real-time hands-on masterclass at HRBR Campus covering modern AI tools, interactive web fundamentals, and practical software engineering mindset.</p>
              </motion.div>
              <motion.div className="md:col-span-4 flex md:justify-end items-center gap-space-sm mt-space-xs md:mt-0" variants={staggerChild}>
                <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase">Keynote · Mentorship</span>
              </motion.div>
            </motion.div>
            <motion.div className="py-space-lg grid grid-cols-1 md:grid-cols-12 gap-gutter items-center hover:bg-surface-container-low/50 px-space-md transition-colors rounded-lg" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
              <motion.div className="md:col-span-2 font-label-md text-label-md uppercase tracking-wider text-secondary" variants={staggerChild}>2023 — 2024</motion.div>
              <motion.div className="md:col-span-6" variants={staggerChild}>
                <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase">Hackathon Circuits & Prototyping</h4>
                <p className="font-body-sm text-body-sm text-secondary mt-1">Engineered rapid solutions under high-pressure 24-48hr hackathons; formulated Campus Eats and early prototypes of ResQ emergency beacon services.</p>
              </motion.div>
              <motion.div className="md:col-span-4 flex md:justify-end items-center gap-space-sm mt-space-xs md:mt-0" variants={staggerChild}>
                <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase">Competitive Builds</span>
              </motion.div>
            </motion.div>
            <motion.div className="py-space-lg grid grid-cols-1 md:grid-cols-12 gap-gutter items-center hover:bg-surface-container-low/50 px-space-md transition-colors rounded-lg" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
              <motion.div className="md:col-span-2 font-label-md text-label-md uppercase tracking-wider text-secondary" variants={staggerChild}>2023</motion.div>
              <motion.div className="md:col-span-6" variants={staggerChild}>
                <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase">Commenced CSE (AI & ML) Degree</h4>
                <p className="font-body-sm text-body-sm text-secondary mt-1">Enrolled at REVA University focusing on Artificial Intelligence, Machine Learning algorithms, algorithmic complexity, and distributed system architectures.</p>
              </motion.div>
              <motion.div className="md:col-span-4 flex md:justify-end items-center gap-space-sm mt-space-xs md:mt-0" variants={staggerChild}>
                <span className="px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm uppercase">Academic Foundation</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section className="w-full py-space-3xl" id="connect" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <div className="relative p-space-2xl lg:p-space-3xl rounded-2xl bg-surface-container border border-surface-container-highest overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-container/20 blur-[90px] pointer-events-none"></div>
            <motion.div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
              <motion.div className="lg:col-span-8 space-y-space-md" variants={staggerChild}>
                <div className="inline-flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Open to Strategic Engagements</span>
                </div>
                <h2 className="font-display-xl-mobile lg:font-headline-lg lg:text-headline-lg uppercase text-on-surface tracking-tight">Have an ambitious project or want to collaborate?</h2>
                <p className="font-body-lg text-body-lg text-secondary max-w-2xl">Whether you are an engineering team looking for a proactive builder, an incubator exploring student ventures, or an educator planning technical workshops—let's start a conversation.</p>
              </motion.div>
              <motion.div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-md justify-start lg:items-end" variants={staggerChild}>
                <SmartLink className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-space-md rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-label-md tracking-wider uppercase transition-transform hover:-translate-y-0.5" href="mailto:contact@prajeeth.dev">
                  <span>Initiate Dialogue</span>
                  {' '}
                  <span className="material-symbols-outlined ml-space-xs text-[18px]">send</span>
                </SmartLink>
                <SmartLink className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-space-md rounded-lg bg-surface-container-lowest text-on-surface border border-surface-container-highest hover:border-primary-container font-headline-sm text-label-md tracking-wider uppercase transition-colors" rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/prajeeth-raaj-pk0007">
                  <span>View LinkedIn</span>
                  {' '}
                  <span className="material-symbols-outlined ml-space-xs text-[18px]">open_in_new</span>
                </SmartLink>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

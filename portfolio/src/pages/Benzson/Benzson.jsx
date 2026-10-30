import { motion } from 'framer-motion';
import SmartLink from '../../components/SmartLink/SmartLink';
import { staggerParent, staggerChild, sectionReveal, VIEWPORT, EASE } from '../../lib/motion';
import { useSeo } from '../../hooks/useSeo';

export default function Benzson() {
  useSeo({ title: 'Benzson Technologia — Practical STEM learning · Prajeeth Raaj PK', description: 'Benzson Technologia is a student-driven practical-learning initiative that helps students experience science and technology beyond the classroom.', path: '/benzson' });

  return (
    <>
      <section className="relative w-full overflow-hidden pb-space-3xl pt-space-xl">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <div className="flex items-center gap-space-sm mb-space-lg">
            <span className="px-space-sm py-space-xs rounded-lg bg-surface-container text-primary-container font-label-sm text-label-sm uppercase tracking-widest">Venture Case Study // 04</span>
            <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">STEM Education Disruptor</span>
          </div>
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-end mb-space-2xl" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.div className="lg:col-span-8" variants={staggerChild}>
              <div className="inline-flex items-center gap-space-xs mb-space-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
                <span className="font-label-md text-label-md text-primary tracking-widest uppercase">Grassroots Kinetic Learning</span>
              </div>
              <h1 className="font-display-xl text-display-xl tracking-tight text-on-surface uppercase select-none">
                BENZSON{' '}
                <br />
                {' '}
                <span className="text-primary-container">TECHNOLOGIA</span>
              </h1>
            </motion.div>
            <motion.div className="lg:col-span-4 lg:pb-space-xs" variants={staggerChild}>
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed">Democratizing practical science & technology education for young minds. Transforming theoretical textbooks into tangible experiments, live circuits, and physical breakthroughs.</p>
            </motion.div>
          </motion.div>
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.div className="lg:col-span-8 relative rounded-xl overflow-hidden bg-surface-container min-h-[380px] lg:min-h-[440px] shadow-xl group" variants={staggerChild}>
              <div role="img" aria-label="Close up cinematic shot of students gathered around an open hardware experiment table, glowing warm amber LED circuits, oscilloscope waveforms on small screens, hands adjusting wiring, dark atmospheric industrial laboratory setting with subtle orange rim lighting." className="w-full h-full min-h-[380px] lg:min-h-[440px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter brightness-90 contrast-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgbLua4jm49j6JTVWlT7xA5HlfVuDtRAY_ff-gLdAgfQl_RTQMGQVAJufcX3I2Od872OY_MnyQB9KeYsmvIianjY3x4uyNzAR_IFjzZ0ssRSOnCr-B0Zn08crJi1w1xE9bW7qhppEsjyhq-dlVRm-1o3M-WVCF_DQUctMs8TYX9dbrnR4xwhiDJg1XxF9QQJ82sM8n4SkZNW8YK9ara2ju4NT05K0HNzkyZ7akeidR')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-space-xl flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div className="max-w-xl">
                  <span className="px-space-sm py-space-xs bg-surface-container-lowest/80 backdrop-blur-md rounded-lg text-primary-container font-label-sm text-label-sm uppercase tracking-wider mb-space-xs inline-block">Active Lab Program</span>
                  <p className="font-headline-sm text-headline-sm text-on-surface">Applied engineering workshops where rote textbooks yield to real physical feedback.</p>
                </div>
                <div className="flex items-center gap-space-sm shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center font-headline-sm text-headline-sm">
                    <span className="material-symbols-outlined text-[24px]">science</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="lg:col-span-4 flex flex-col justify-between p-space-xl rounded-xl bg-surface-container shadow-md" variants={staggerChild}>
              <div>
                <div className="flex items-center justify-between pb-space-md">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Initiative Metrics</span>
                  <span className="material-symbols-outlined text-primary-container text-[20px]">insights</span>
                </div>
                <div className="space-y-space-lg pt-space-md">
                  <div>
                    <div className="font-display-xl text-display-xl text-on-surface leading-none tracking-tight">1,200+</div>
                    <div className="font-label-md text-label-md uppercase tracking-wider text-secondary mt-space-xs">Students Directly Mentored</div>
                  </div>
                  <div>
                    <div className="font-headline-lg text-headline-lg text-primary-container leading-none">14+</div>
                    <div className="font-label-md text-label-md uppercase tracking-wider text-secondary mt-space-xs">Physical Workshops Conducted</div>
                  </div>
                  <div>
                    <div className="font-headline-lg text-headline-lg text-on-surface leading-none">100%</div>
                    <div className="font-label-md text-label-md uppercase tracking-wider text-secondary mt-space-xs">Hands-on Laboratory Time</div>
                  </div>
                </div>
              </div>
              <div className="pt-space-lg">
                <SmartLink className="w-full py-space-md px-space-lg rounded-xl bg-surface-container-highest hover:bg-primary-container text-on-surface hover:text-on-primary-container font-label-md text-label-md uppercase tracking-wider transition-all duration-300 flex items-center justify-between group" href="#initiatives">
                  <span>Inspect Modules</span>
                  {' '}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </SmartLink>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <motion.section className="w-full py-space-3xl bg-surface-container-lowest" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.div className="lg:col-span-4 flex flex-col justify-between" variants={staggerChild}>
              <div className="space-y-space-md">
                <div className="inline-flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">The Catalytic Origin</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface">Born from a podium win. Built for the curious.</h2>
              </div>
              <div className="hidden lg:block pt-space-xl">
                <div className="p-space-lg rounded-xl bg-surface-container-low max-w-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container block mb-space-xs">Genesis Hypothesis</span>
                  <p className="font-body-sm text-body-sm text-secondary">"If theoretical concepts remain locked inside two-dimensional pages, a generation of engineers never discovers how things fail and adapt."</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="lg:col-span-8 flex flex-col space-y-space-xl" variants={staggerChild}>
              <div className="p-space-2xl rounded-xl bg-surface-container shadow-md">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container mb-space-sm block">01 / The Realization</span>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-space-md">From Hackathon Podium to School Halls</h3>
                <p className="font-body-lg text-body-lg text-secondary leading-relaxed mb-space-lg">Fresh off an intense hackathon triumph, our small team realized an uncomfortable truth: our most valuable engineering breakthroughs hadn't happened during classroom lecture hours. They came from late-night breadboard failures, fried microcontroller pins, and physical iteration with raw electronics.</p>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">Countless bright students in high schools and pre-university colleges were being trained solely to pass standardized testing loops through memory recall. They had memorized Faraday's laws of induction and Ohm's law, but had never wound an inductor coil or felt the magnetic resistance in their own palms. Benzson Technologia was forged to invert that reality.</p>
              </div>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-gutter" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
                <motion.div className="p-space-xl rounded-xl bg-surface-container-low flex flex-col justify-between" variants={staggerChild}>
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-wider text-primary-container">Principle A</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase mt-space-xs mb-space-sm">Zero Abstract Abstraction</h4>
                    <p className="font-body-sm text-body-sm text-secondary">Every equation discussed must immediately correspond to an active probe reading, LED flash, or motor torque sensation.</p>
                  </div>
                  <div className="pt-space-lg flex items-center gap-space-xs text-secondary">
                    <span className="material-symbols-outlined text-[18px]">touch_app</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest">Tactile First</span>
                  </div>
                </motion.div>
                <motion.div className="p-space-xl rounded-xl bg-surface-container-low flex flex-col justify-between" variants={staggerChild}>
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-wider text-primary-container">Principle B</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase mt-space-xs mb-space-sm">Student-to-Student Symmetry</h4>
                    <p className="font-body-sm text-body-sm text-secondary">No rigid bureaucratic hierarchy. Learners are mentored by peers who just cracked the exact same problems in regional competitions.</p>
                  </div>
                  <div className="pt-space-lg flex items-center gap-space-xs text-secondary">
                    <span className="material-symbols-outlined text-[18px]">group</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest">Horizontal Learning</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section className="w-full py-space-3xl" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
            <div>
              <div className="inline-flex items-center gap-space-xs mb-space-xs">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Methodology</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface">The Triad of Experiential STEM</h2>
            </div>
            <p className="font-body-md text-body-md text-secondary max-w-md">A coherent operational framework engineered to spark durable scientific curiosity in students aged 14 to 20.</p>
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-gutter" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.div className="p-space-xl rounded-xl bg-surface-container flex flex-col justify-between relative overflow-hidden group hover:translate-y-[-2px] transition-transform duration-300" variants={staggerChild}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-bl-full pointer-events-none group-hover:bg-primary-container/10 transition-colors"></div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-space-lg">
                  <span className="material-symbols-outlined text-[26px]">devices_other</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Pillar 01</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase mt-space-xs mb-space-md">Beyond The Classroom</h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">We bring portable workshop kits straight into traditional classrooms. Desks transform into hardware assembly lines with logic gates, multimeters, and embedded development microcontrollers.</p>
              </div>
              <div className="pt-space-xl">
                <div className="flex items-center gap-space-xs text-primary-container font-label-md text-label-md uppercase tracking-wider">
                  <span>Experiential Mechanics</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="p-space-xl rounded-xl bg-surface-container flex flex-col justify-between relative overflow-hidden group hover:translate-y-[-2px] transition-transform duration-300" variants={staggerChild}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-bl-full pointer-events-none group-hover:bg-primary-container/10 transition-colors"></div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-space-lg">
                  <span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Pillar 02</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase mt-space-xs mb-space-md">Demystifying Tech</h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">Strip away the intimidating vocabulary around quantum concepts, electrochemical reactions, and high-frequency communication. We reveal the raw mechanical physics powering modern silicon and software.</p>
              </div>
              <div className="pt-space-xl">
                <div className="flex items-center gap-space-xs text-primary-container font-label-md text-label-md uppercase tracking-wider">
                  <span>Deep Intuition</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="p-space-xl rounded-xl bg-surface-container flex flex-col justify-between relative overflow-hidden group hover:translate-y-[-2px] transition-transform duration-300" variants={staggerChild}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-bl-full pointer-events-none group-hover:bg-primary-container/10 transition-colors"></div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container mb-space-lg">
                  <span className="material-symbols-outlined text-[26px]">support_agent</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Pillar 03</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase mt-space-xs mb-space-md">Student Mentorship</h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">Peer-to-peer engineering empathy. Benzson mentors are actively participating in national hackathons and building commercial prototypes, imparting genuine day-zero problem solving tactics.</p>
              </div>
              <div className="pt-space-xl">
                <div className="flex items-center gap-space-xs text-primary-container font-label-md text-label-md uppercase tracking-wider">
                  <span>Unfiltered Guidance</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section className="w-full py-space-3xl bg-surface-container-low relative" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <div className="flex items-center gap-space-xs mb-space-md">
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Flagship Deployment</span>
          </div>
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop mb-space-2xl" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.div className="lg:col-span-7" variants={staggerChild}>
              <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface leading-tight">
                CMR National PU College{' '}
                <br />
                {' '}
                <span className="text-secondary">(HRBR Campus Spotlight)</span>
              </h2>
            </motion.div>
            <motion.div className="lg:col-span-5 flex items-end" variants={staggerChild}>
              <p className="font-body-lg text-body-lg text-secondary">A high-energy, multi-session science and technology workshop designed to activate curiosity, dispel examination anxiety, and expose high school students to authentic engineering challenges.</p>
            </motion.div>
          </motion.div>
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.div className="lg:col-span-7 flex flex-col gap-gutter" variants={staggerChild}>
              <div className="rounded-xl overflow-hidden bg-surface-container shadow-md group relative">
                <div role="img" aria-label="Group of excited young high school students in modern classroom auditorium gathered closely over a demonstration bench watching an illuminated chemistry physics demo with liquid nitrogen vapors and laser refraction optics, high resolution photo, sharp details, warm studio ambiance with orange highlights." className="w-full h-80 lg:h-96 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuwzbRa3ODWF04OFTb9BnASxhQrjHzeDTc4bFtIO1IK0rIU6BnLjiAKUjMiGiQzly-kQxkd7RfsdVSgunKU_NsoVYXrn7bQW7Uw_no6wwB1ZVZlb1sgknBrssKhrLGDNQJQHQ-VuOQX0g_uCBoz1THIb4QavCzBM8PBjIgpdd4YcpXoKRNI4jZcMIKpbGVqohKbTmKC1esA1tSswBn_4AjytvCRRP93ObUR9WyQEzO')" }}></div>
                <div className="absolute bottom-0 inset-x-0 p-space-lg bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/70 to-transparent flex items-center justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-container">HRBR Auditorium Session</span>
                    <p className="font-body-sm text-body-sm text-on-surface">Live physics demonstrations and optical interference analysis.</p>
                  </div>
                  <span className="px-space-sm py-space-xs rounded-lg bg-surface-container text-secondary font-label-sm text-label-sm">Bengaluru, IN</span>
                </div>
              </div>
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
                <motion.div className="rounded-xl overflow-hidden bg-surface-container shadow-sm group" variants={staggerChild}>
                  <div role="img" aria-label="Close up of a teenager hands assembling a microcontroller wire loom on a solderless breadboard with precision tweezers, soft ambient lighting, clean modern dark tech aesthetic with focused bokeh background." className="w-full h-52 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBT35lGdNg2Y8O-WwF-7Pn7A73siTBYGrIHMAQarWNAexCiucLLwmnATKe66KHoTkdYmb3hofRtkZar8CxjNmLoT3AH7id6qQjuskZY_penK3phJNXwOY_XXs8Cwg0FwE67oXe7d1e-M8J6WC25gDhORsXzzR12jyXF1se4Kjprisc0tyZQu76Y1fR9S9EOfwvdiFl7rShvDd_tdDYJN9E4SH7uZHidLmgnd38YHHlB')" }}></div>
                </motion.div>
                <motion.div className="p-space-lg rounded-xl bg-surface-container flex flex-col justify-between" variants={staggerChild}>
                  <span className="material-symbols-outlined text-primary-container text-[28px]">format_quote</span>
                  <p className="font-body-md text-body-md text-on-surface italic">"Benzson eliminated the barrier between formula equations and observable phenomena. Our students stayed back hours after the bell."</p>
                  <div className="pt-space-sm">
                    <div className="font-label-md text-label-md text-primary uppercase">Faculty Coordinator</div>
                    <div className="font-label-sm text-label-sm text-secondary">Department of Science, CMRNPUC</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div className="lg:col-span-5 flex flex-col gap-gutter" variants={staggerChild}>
              <div className="p-space-xl rounded-xl bg-surface-container shadow-sm flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-space-lg">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Session Deliverables</span>
                    <span className="px-space-sm py-space-xs rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm uppercase">Full Capacity</span>
                  </div>
                  <div className="space-y-space-md">
                    <div className="p-space-md rounded-lg bg-surface-container-low flex gap-space-md items-start">
                      <span className="font-label-md text-label-md text-primary-container shrink-0 mt-0.5">01</span>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase text-[18px]">Interactive Physics & Chemistry Demos</h4>
                        <p className="font-body-sm text-body-sm text-secondary mt-1">Electromagnetic induction rigs, non-Newtonian fluid behaviors, and real-time spectrum analysis demonstrations.</p>
                      </div>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex gap-space-md items-start">
                      <span className="font-label-md text-label-md text-primary-container shrink-0 mt-0.5">02</span>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase text-[18px]">Hands-On Circuit Logic Lab</h4>
                        <p className="font-body-sm text-body-sm text-secondary mt-1">Students wired truth tables using discrete NAND/NOR gates, bridging boolean math directly to automated outputs.</p>
                      </div>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex gap-space-md items-start">
                      <span className="font-label-md text-label-md text-primary-container shrink-0 mt-0.5">03</span>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase text-[18px]">Open Problem-Solving Circle</h4>
                        <p className="font-body-sm text-body-sm text-secondary mt-1">A transparent Q&A on cracking national engineering hackathons, pitching early concepts, and building portfolio prototypes early.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-space-lg mt-space-md bg-surface-container-lowest p-space-md rounded-lg flex items-center justify-between">
                  <div>
                    <div className="font-headline-md text-headline-md text-on-surface font-semibold">98.4%</div>
                    <div className="font-label-sm text-label-sm uppercase text-secondary">Student Curiosity Score</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[20px]">thumb_up</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section className="w-full py-space-3xl" id="initiatives" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
            <div>
              <div className="inline-flex items-center gap-space-xs mb-space-xs">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Curricular Framework</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface">Applied Learning Modules</h2>
            </div>
            <p className="font-body-md text-body-md text-secondary max-w-md">Structured units designed for rapid ingestion during intensive 1-day to 3-day campus residencies.</p>
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-gutter" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.div className="p-space-xl rounded-xl bg-surface-container flex flex-col justify-between shadow-md" variants={staggerChild}>
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="px-space-sm py-space-xs rounded bg-surface-container-highest font-label-sm text-label-sm uppercase text-primary">Track 01</span>
                  <span className="font-label-sm text-label-sm text-secondary">Competitive</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase mb-space-sm">Hackathon Blueprint & Execution</h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed mb-space-lg">Deconstructing high-pressure 36-hour hackathons. From rapid idea validation and Git collaboration to high-impact judge pitching and minimal viable hardware prototyping.</p>
                <div className="space-y-space-xs">
                  <div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">check_circle</span>
                    <span>MVP scoping under 4 hours</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">check_circle</span>
                    <span>Live demo contingency plans</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">check_circle</span>
                    <span>Founder presentation techniques</span>
                  </div>
                </div>
              </div>
              <div className="pt-space-xl">
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase text-secondary">Duration</span>
                  <span className="font-label-md text-label-md text-on-surface">6hr Intensive</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="p-space-xl rounded-xl bg-surface-container flex flex-col justify-between shadow-md" variants={staggerChild}>
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="px-space-sm py-space-xs rounded bg-surface-container-highest font-label-sm text-label-sm uppercase text-primary">Track 02</span>
                  <span className="font-label-sm text-label-sm text-secondary">Hardware</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase mb-space-sm">Physical Systems & Embedded I/O</h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed mb-space-lg">Interfacing digital computation with physical laws. Ultrasonic telemetry, analog sensor conditioning, motor drive dynamics, and real-time microcontroller firmware.</p>
                <div className="space-y-space-xs">
                  <div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">check_circle</span>
                    <span>ESP32 & Arduino architecture</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">check_circle</span>
                    <span>I2C & SPI sensor networks</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">check_circle</span>
                    <span>Power regulation basics</span>
                  </div>
                </div>
              </div>
              <div className="pt-space-xl">
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase text-secondary">Duration</span>
                  <span className="font-label-md text-label-md text-on-surface">2-Day Residency</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="p-space-xl rounded-xl bg-surface-container flex flex-col justify-between shadow-md" variants={staggerChild}>
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="px-space-sm py-space-xs rounded bg-surface-container-highest font-label-sm text-label-sm uppercase text-primary">Track 03</span>
                  <span className="font-label-sm text-label-sm text-secondary">Fundamental</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase mb-space-sm">Applied Science Kinetics</h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed mb-space-lg">Visualizing the unseen foundations of textbook science. Wave-particle duality, exothermic reaction energetics, magnetic flux density, and optical dispersion rigs.</p>
                <div className="space-y-space-xs">
                  <div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">check_circle</span>
                    <span>High-voltage Tesla coil demos</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">check_circle</span>
                    <span>Laser interferometer kits</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">check_circle</span>
                    <span>Thermochemical visualizations</span>
                  </div>
                </div>
              </div>
              <div className="pt-space-xl">
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase text-secondary">Duration</span>
                  <span className="font-label-md text-label-md text-on-surface">Interactive Stage Demo</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section className="w-full py-space-3xl bg-surface-container-lowest" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.div className="lg:col-span-5 flex flex-col justify-between" variants={staggerChild}>
              <div className="space-y-space-md">
                <div className="inline-flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Venture Trajectory</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface">Scaling Benzson Labs Nationwide</h2>
                <p className="font-body-lg text-body-lg text-secondary">Our long-range target is the establishment of modular, student-governed experimental micro-labs inside educational institutions across every district.</p>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container mt-space-xl">
                <div className="flex items-center justify-between text-secondary mb-space-xs">
                  <span className="font-label-sm text-label-sm uppercase">Institutional Target 2025</span>
                  <span className="font-label-sm text-label-sm text-primary">50 Campuses</span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-primary-container h-full w-[28%] rounded-full"></div>
                </div>
              </div>
            </motion.div>
            <motion.div className="lg:col-span-7 flex flex-col justify-center space-y-space-md" variants={staggerChild}>
              <div className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                <div>
                  <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider block">Phase 01 // Completed</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase text-[20px]">Local Campus Activations</h4>
                  <p className="font-body-sm text-body-sm text-secondary">Conducted pilot programs across premier Bangalore pre-university institutes with 100% attendee retention.</p>
                </div>
                <span className="material-symbols-outlined text-primary-container shrink-0 text-[24px]">verified</span>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                <div>
                  <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider block">Phase 02 // Active Deployment</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase text-[20px]">Standardized Hardware Kits</h4>
                  <p className="font-body-sm text-body-sm text-secondary">Fabricating portable Benzson Experiment Kits featuring rugged enclosure designs and drop-in sensor interfaces.</p>
                </div>
                <span className="material-symbols-outlined text-primary-container shrink-0 text-[24px]">build_circle</span>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Phase 03 // Horizon</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase text-[20px]">Open Source STEM Curriculum</h4>
                  <p className="font-body-sm text-body-sm text-secondary">Free modular laboratory lesson plans and schematics made freely accessible to underfunded regional schools.</p>
                </div>
                <span className="material-symbols-outlined text-secondary shrink-0 text-[24px]">public</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section className="w-full py-space-3xl relative overflow-hidden" initial="hidden" whileInView="show" viewport={VIEWPORT} variants={sectionReveal}>
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
          <div className="p-space-2xl lg:p-space-3xl rounded-xl bg-surface-container relative overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
            <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
              <motion.div className="lg:col-span-8 space-y-space-md" variants={staggerChild}>
                <div className="inline-flex items-center gap-space-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container">Initiate Lab Partnership</span>
                </div>
                <h2 className="font-display-xl-mobile lg:font-display-xl lg:text-display-xl text-display-xl-mobile uppercase tracking-tight text-on-surface">Bring Benzson to Your Campus.</h2>
                <p className="font-body-lg text-body-lg text-secondary max-w-xl">Are you an educator, academic director, or student council leader? Partner with our engineering crew to host a transformative hands-on technical workshop at your school or college.</p>
              </motion.div>
              <motion.div className="lg:col-span-4 flex flex-col space-y-space-md" variants={staggerChild}>
                <SmartLink className="w-full py-space-md px-space-lg rounded-xl bg-primary-container hover:bg-inverse-primary text-on-primary-container hover:text-on-primary font-headline-sm text-headline-sm uppercase text-center tracking-wider transition-all duration-300 flex items-center justify-center gap-space-xs group shadow-lg" href="mailto:contact@prajeeth.dev?subject=Benzson%20Technologia%20Workshop%20Inquiry">
                  <span>Schedule Workshop</span>
                  {' '}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </SmartLink>
                <SmartLink className="w-full py-space-md px-space-lg rounded-xl bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-md text-label-md uppercase tracking-wider text-center transition-colors block" href="/contact">General Inquiry & Direct Form</SmartLink>
                <div className="pt-space-xs text-center">
                  <span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest">Zero Institutional Overhead Required</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

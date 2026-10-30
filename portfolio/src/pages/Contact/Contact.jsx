import { motion } from 'framer-motion';
import SmartLink from '../../components/SmartLink/SmartLink';
import { staggerParent, staggerChild, sectionReveal, VIEWPORT, EASE } from '../../lib/motion';
import { useSeo } from '../../hooks/useSeo';
import { useState } from 'react';
import { CONTACT_EMAIL } from '../../data/site';
export default function Contact() {
  useSeo({ title: 'Contact — Prajeeth Raaj PK', description: 'Get in touch with Prajeeth Raaj PK for product collaborations, venture discussions, speaking engagements and hackathon co-builds.', path: '/contact' });
  const [values, setValues] = useState({ name: '', email: '', type: '', horizon: 'NextQuarter', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const copyFingerprint = async () => {
    try {
      await navigator.clipboard.writeText('49E2 0FA1 CC92 ... B873');
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch { /* clipboard unavailable */ }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const er = {};
    if (!values.name.trim()) er.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) er.email = true;
    if (!values.message.trim()) er.message = true;
    setErrors(er);
    if (Object.keys(er).length) return;
    // No backend is connected. Open the visitor's email client with the message pre-filled.
    setSending(true);
    const subject = encodeURIComponent(`Portfolio inquiry${values.type ? ' — ' + values.type : ''} from ${values.name.trim()}`);
    const body = encodeURIComponent(`${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})\nHorizon: ${values.horizon}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => { setSending(false); setSent(true); setValues({ name: '', email: '', type: '', horizon: 'NextQuarter', message: '' }); }, 600);
  };
  return (
    <>
      <section className="relative w-full max-w-7xl mx-auto px-margin lg:px-margin-desktop py-space-xl lg:py-space-3xl">
        <div className="absolute -top-12 right-12 w-96 h-96 rounded-full bg-primary-container/5 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
        <div className="relative flex flex-col gap-space-md mb-space-3xl max-w-4xl">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Dispatch Terminal / Node 06</span>
          </div>
          <h1 className="font-display-xl text-display-xl tracking-tight text-on-surface uppercase">
            Let's Build Something{' '}
            <span className="text-primary-container">Exceptional.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl">Open for product collaborations, venture discussions, speaking engagements, and high-velocity hackathon syndicates. Let's deploy impactful software together.</p>
        </div>
        <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.div className="lg:col-span-5 flex flex-col gap-space-lg" variants={staggerChild}>
            <div className="bg-surface-container rounded-xl p-space-xl shadow-md flex flex-col gap-space-lg">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md uppercase text-secondary tracking-widest">Network Telemetry</span>
                <span className="px-space-sm py-space-xs rounded-full bg-surface-container-highest font-label-sm text-label-sm uppercase text-on-surface-variant flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  {' '}LIVE
                </span>
              </div>
              <div className="bg-surface-container-low rounded-lg p-space-md flex items-start gap-space-md">
                <div className="p-space-xs rounded-lg bg-surface-container-highest text-primary-container">
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase text-secondary tracking-wider">Current Availability</span>
                  <p className="font-body-md text-body-md text-on-surface mt-0.5">Available for select freelance architectures & technical collaborations (Q2-Q4).</p>
                </div>
              </div>
              <div className="flex flex-col gap-space-md">
                <SmartLink className="group flex items-center justify-between p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors" href="mailto:prajeethraaj@example.com">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface group-hover:text-primary-container transition-colors">
                      <span className="material-symbols-outlined text-[22px]">alternate_email</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-sm text-label-sm uppercase text-secondary">Direct Encrypted Mail</span>
                      <span className="font-body-md text-body-md text-on-surface truncate group-hover:text-primary transition-colors">prajeethraaj@example.com</span>
                    </div>
                  </div>
                  {' '}
                  <span className="material-symbols-outlined text-secondary group-hover:text-primary-container group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </SmartLink>
                <SmartLink className="group flex items-center justify-between p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors" rel="noopener noreferrer" target="_blank" href="https://github.com/iamprajeeth2007-hub">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface group-hover:text-primary-container transition-colors">
                      <span className="material-symbols-outlined text-[22px]">code</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-sm text-label-sm uppercase text-secondary">Open Source Forge</span>
                      <span className="font-body-md text-body-md text-on-surface truncate group-hover:text-primary transition-colors">github.com/iamprajeeth2007-hub</span>
                    </div>
                  </div>
                  {' '}
                  <span className="material-symbols-outlined text-secondary group-hover:text-primary-container group-hover:translate-x-1 transition-transform">north_east</span>
                </SmartLink>
                <SmartLink className="group flex items-center justify-between p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors" rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/prajeeth-raaj-pk0007">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface group-hover:text-primary-container transition-colors">
                      <span className="material-symbols-outlined text-[22px]">domain</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-sm text-label-sm uppercase text-secondary">Executive Network</span>
                      <span className="font-body-md text-body-md text-on-surface truncate group-hover:text-primary transition-colors">linkedin.com/in/prajeeth-raaj-pk0007</span>
                    </div>
                  </div>
                  {' '}
                  <span className="material-symbols-outlined text-secondary group-hover:text-primary-container group-hover:translate-x-1 transition-transform">north_east</span>
                </SmartLink>
              </div>
              <div className="flex flex-col gap-space-sm pt-space-xs">
                <span className="font-label-sm text-label-sm uppercase text-secondary tracking-wider">Base Anchor</span>
                <div className="w-full h-44 rounded-lg bg-cover bg-center overflow-hidden relative shadow-inner" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyn8z9YSbjmdQAKY6bdSFWV7zppLH7Nykm4pAANN7wfoyUfOo_BAEggbu5194H7Kl2oOviYpfs2x2RfgXgDFeeE0LBQc87zGMpn2P7a3WrGAR5LRp77MBqp9Oo0P-LjnW_1oRtzPu6o_ia_mccrlieqdVhTqPFbFrufHqdfFmtkLDEKe1ibLOB6XhmUhItE9ZxAmJZxOdZu5LxXs71oyTKYO_9N_Ph8iUmwP26dSyq')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent p-space-md flex flex-col justify-end">
                    <span className="font-headline-sm text-headline-sm text-on-surface">Bengaluru, India</span>
                    <span className="font-body-sm text-body-sm text-secondary">REVA University Research Ecosystem • IST (UTC+05:30)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-xl p-space-lg flex items-center justify-between">
              <div className="flex items-center gap-space-md">
                <div className="w-8 h-8 rounded-full bg-primary-container/20 text-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md uppercase text-on-surface">PGP Key Verified</div>
                  <div className="font-body-sm text-body-sm text-secondary">Fingerprint: 49E2 0FA1 CC92 ... B873</div>
                </div>
              </div>
              <button className="px-space-md py-space-xs rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase tracking-wider transition-colors" type="button" onClick={copyFingerprint}>{copied ? 'Copied' : 'Copy'}</button>
            </div>
          </motion.div>
          <motion.div className="lg:col-span-7 flex flex-col" variants={staggerChild}>
            <div className="bg-surface-container rounded-xl p-space-xl lg:p-space-2xl shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-space-xl">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md uppercase text-primary-container tracking-widest">Inquiry Pipeline</span>
                  <h2 className="font-headline-md text-headline-md uppercase text-on-surface mt-0.5">Send Transmission</h2>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </div>
              </div>
              {sent ? (
<div className="flex flex-col items-center justify-center py-space-3xl text-center" role="status">
                <div className="w-16 h-16 rounded-full bg-primary-container/20 text-primary-container flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-space-xs">Draft Ready</h3>
                <p className="font-body-md text-body-md text-secondary max-w-md mb-space-xl">Your email app should now be open with the message pre-filled. Press send there to deliver it.</p>
                <button className="px-space-xl py-space-md rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md uppercase tracking-wider transition-colors" type="button" onClick={() => setSent(false)}>Send Another Inquiry</button>
              </div>
              ) : (
              <form className="flex flex-col gap-space-lg" noValidate onSubmit={handleSubmit}>
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
                  <motion.div className="flex flex-col gap-space-xs" variants={staggerChild}>
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary" htmlFor="senderName">Full Name *</label>
                    <input className="w-full px-space-md py-space-md rounded-lg bg-surface-container-low text-on-surface placeholder:text-surface-bright focus:outline-none focus:bg-surface-container-highest transition-colors font-body-md text-body-md" id="senderName" name="name" value={values.name} onChange={onChange} aria-invalid={!!errors.name} placeholder="Elena Rostova" required type="text" />
                    {errors.name && <span className="font-body-sm text-body-sm text-error" role="alert">Please specify your identity.</span>}
                  </motion.div>
                  <motion.div className="flex flex-col gap-space-xs" variants={staggerChild}>
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary" htmlFor="senderEmail">Corporate / Direct Email *</label>
                    <input className="w-full px-space-md py-space-md rounded-lg bg-surface-container-low text-on-surface placeholder:text-surface-bright focus:outline-none focus:bg-surface-container-highest transition-colors font-body-md text-body-md" id="senderEmail" name="email" value={values.email} onChange={onChange} aria-invalid={!!errors.email} placeholder="elena@venturecap.io" required type="email" />
                    {errors.email && <span className="font-body-sm text-body-sm text-error" role="alert">A valid return address is required.</span>}
                  </motion.div>
                </motion.div>
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
                  <motion.div className="flex flex-col gap-space-xs" variants={staggerChild}>
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary" htmlFor="inquiryType">Engagement Archetype *</label>
                    <div className="relative">
                      <select className="w-full appearance-none px-space-md py-space-md rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:bg-surface-container-highest transition-colors font-body-md text-body-md cursor-pointer pr-10" id="inquiryType" name="type" value={values.type} onChange={onChange} aria-invalid={!!errors.type} required>
                        <option disabled value="">Select Inquiry Type</option>
                        <option value="Collaboration">Product Collaboration / Co-Founding</option>
                        <option value="Benzson">Benzson Workshop & Technical Keynote</option>
                        <option value="Consulting">Systems Architecture & Product Advisory</option>
                        <option value="Hackathon">Competitive Hackathon Syndicate</option>
                        <option value="Other">General Dispatch / Venture Brief</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">expand_more</span>
                    </div>
                  </motion.div>
                  <motion.div className="flex flex-col gap-space-xs" variants={staggerChild}>
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary" htmlFor="timelineUrgency">Target Runway / Horizon</label>
                    <div className="relative">
                      <select className="w-full appearance-none px-space-md py-space-md rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:bg-surface-container-highest transition-colors font-body-md text-body-md cursor-pointer pr-10" id="timelineUrgency" name="horizon" value={values.horizon} onChange={onChange} aria-invalid={!!errors.horizon}>
                        <option value="Immediate">Immediate (&lt; 2 weeks)</option>
                        <option value="NextQuarter">Targeting Q3/Q4 2025</option>
                        <option value="Exploratory">Exploratory / Ongoing</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">expand_more</span>
                    </div>
                  </motion.div>
                </motion.div>
                <div className="flex flex-col gap-space-xs">
                  <div className="flex justify-between items-center">
                    <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary" htmlFor="messageBody">Scope Brief & Context *</label>
                    <span className="font-label-sm text-label-sm text-surface-bright" aria-live="polite">{values.message.length} / 1200</span>
                  </div>
                  <textarea className="w-full px-space-md py-space-md rounded-lg bg-surface-container-low text-on-surface placeholder:text-surface-bright focus:outline-none focus:bg-surface-container-highest transition-colors font-body-md text-body-md resize-none" id="messageBody" name="message" value={values.message} onChange={onChange} aria-invalid={!!errors.message} maxLength="1200" placeholder="Outline product scope, stack requirements, capital horizon, or hackathon challenge specifications..." required rows="6"></textarea>
                  {errors.message && <span className="font-body-sm text-body-sm text-error" role="alert">Message body cannot be empty.</span>}
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md pt-space-sm">
                  <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">lock</span>
                    <span>Direct delivery without middle tier aggregators</span>
                  </div>
                  <button className="px-space-xl py-space-md rounded-lg bg-primary-container hover:bg-inverse-primary text-on-primary-container font-label-md text-label-md uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-space-xs shadow-md group" type="submit" disabled={sending}>
                    <span>{sending ? 'Opening mail…' : 'Transmit Message'}</span>
                    {' '}
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">send</span>
                  </button>
                </div>
              </form>
)}
            </div>
          </motion.div>
        </motion.div>
        <div className="mt-space-3xl pt-space-2xl flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-label-md text-label-md uppercase text-primary tracking-widest">Protocol & Guidelines</span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">Collaboration Protocols</h2>
            <p className="font-body-md text-body-md text-secondary">Common queries answered regarding engineering engagements, Benzson advisory sessions, and hackathon co-builds.</p>
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop" variants={staggerParent} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.div className="bg-surface-container p-space-xl rounded-xl flex flex-col justify-between shadow-sm" variants={staggerChild}>
              <div className="flex flex-col gap-space-md">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low text-primary-container flex items-center justify-center font-headline-sm text-headline-sm">01</div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">What does Benzson deliver?</h3>
                <p className="font-body-md text-body-md text-secondary">Hands-on engineering intensives, architectural blueprint audits, and rapid 0-to-1 prototype generation for emerging developer collectives and early-stage teams.</p>
              </div>
              <div className="mt-space-lg pt-space-md">
                <span className="font-label-sm text-label-sm uppercase text-primary tracking-wider">Format: Remote / Bengaluru On-site</span>
              </div>
            </motion.div>
            <motion.div className="bg-surface-container p-space-xl rounded-xl flex flex-col justify-between shadow-sm" variants={staggerChild}>
              <div className="flex flex-col gap-space-md">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low text-primary-container flex items-center justify-center font-headline-sm text-headline-sm">02</div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Hackathon Criteria</h3>
                <p className="font-body-md text-body-md text-secondary">Deep interest in high-leverage systems (distributed compute, autonomous agents, and cryptographically verified pipelines). Teams must prioritize functional production logic over slides.</p>
              </div>
              <div className="mt-space-lg pt-space-md">
                <span className="font-label-sm text-label-sm uppercase text-primary tracking-wider">Role: Core Architect / Lead Full-Stack</span>
              </div>
            </motion.div>
            <motion.div className="bg-surface-container p-space-xl rounded-xl flex flex-col justify-between shadow-sm" variants={staggerChild}>
              <div className="flex flex-col gap-space-md">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low text-primary-container flex items-center justify-center font-headline-sm text-headline-sm">03</div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Consulting Turnaround</h3>
                <p className="font-body-md text-body-md text-secondary">All inquiries undergo initial structural evaluation within 24 hours. Scheduled discovery calls run 30 minutes with an immediate written architecture memo to follow.</p>
              </div>
              <div className="mt-space-lg pt-space-md">
                <span className="font-label-sm text-label-sm uppercase text-primary tracking-wider">SLA: Under 24h Confirmation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="mt-space-3xl rounded-xl bg-surface-container-low p-space-xl lg:p-space-2xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-inner">
          <div className="flex items-center gap-space-lg">
            <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0">
              <span className="material-symbols-outlined text-[24px]">terminal</span>
            </div>
            <div className="flex flex-col">
              <div className="font-headline-sm text-headline-sm text-on-surface">Instant Terminal Connect</div>
              <p className="font-body-sm text-body-sm text-secondary">Prefer raw CLI over forms? Reach out via curl or clone the verified public portfolio index.</p>
            </div>
          </div>
          <div className="flex items-center gap-space-sm w-full md:w-auto">
            <code className="px-space-md py-space-sm bg-surface-container-highest rounded font-label-sm text-label-sm text-primary select-all">curl https://prajeeth.dev/api/ping</code>
          </div>
        </div>
      </section>
    </>
  );
}

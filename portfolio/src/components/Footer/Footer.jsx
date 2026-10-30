import { NavLink } from 'react-router-dom';
import { NAV, GITHUB, LINKEDIN, CONTACT_EMAIL } from '../../data/site';
import SmartLink from '../SmartLink/SmartLink';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-highest mt-space-3xl">
      <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop pt-space-3xl pb-space-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop mb-space-3xl">
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="space-y-space-md">
              <div className="inline-flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Founder &amp; Systems Architect</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg lg:text-[56px] lg:leading-[60px] tracking-tight uppercase text-on-surface max-w-2xl">Let's build something meaningful.</h2>
            </div>
            <div className="mt-space-2xl">
              <a className="inline-flex items-center gap-space-xs font-headline-sm text-headline-sm text-primary hover:text-primary-container transition-colors group" href={`mailto:${CONTACT_EMAIL}`}>
                <span className="border-b border-primary/30 group-hover:border-primary-container pb-space-xs">Initiate Collaboration</span>
                <span className="text-primary-container group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-gutter pt-space-lg lg:pt-0 border-t lg:border-t-0 border-surface-container-highest">
            <div className="flex flex-col space-y-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Index</span>
              <nav aria-label="Footer" className="flex flex-col space-y-space-xs">
                {NAV.map((item) => (
                  <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => isActive ? 'transition-colors text-primary-container font-semibold' : 'font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors'}>{item.label}</NavLink>
                ))}
              </nav>
            </div>
            <div className="flex flex-col space-y-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Connect</span>
              <div className="flex flex-col space-y-space-xs">
                <SmartLink className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href={GITHUB}>GitHub ↗</SmartLink>
                <SmartLink className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href={LINKEDIN}>LinkedIn ↗</SmartLink>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href={`mailto:${CONTACT_EMAIL}`}>Email ↗</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-space-lg border-t border-surface-container-highest flex flex-col md:flex-row items-center justify-between gap-space-md text-secondary font-label-sm text-label-sm uppercase tracking-wider">
          <div className="flex items-center gap-space-xs">
            <span>© Prajeeth Raaj PK.</span>
            <span className="text-surface-container-highest">/</span>
            <span>Built with purpose.</span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

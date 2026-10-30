import SmartLink from '../SmartLink/SmartLink';
import { PROJECTS } from '../../data/projects';

// Wraps a project case-study page. The Stitch export has no dedicated detail screens, so these
// pages reuse the project showcase block from the Projects screen.
export default function ProjectShell({ slug, children }) {
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  return (
    <>
      <section className="max-w-7xl mx-auto px-margin lg:px-margin-desktop pt-space-xl pb-space-lg">
        <SmartLink href="/projects" className="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-secondary hover:text-primary-container transition-colors">
          <span aria-hidden="true">←</span> All Projects
        </SmartLink>
      </section>
      {children}
      <section className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        <div className="flex items-center justify-between gap-space-md pt-space-lg border-t border-surface-container-highest">
          <SmartLink href="/projects" className="font-label-md text-label-md uppercase tracking-wider text-secondary hover:text-on-surface transition-colors">All projects</SmartLink>
          <SmartLink href={`/projects/${next.slug}`} className="group inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-primary hover:text-primary-container transition-colors">
            Next: {next.name} <span className="group-hover:translate-x-1 transition-transform">→</span>
          </SmartLink>
        </div>
      </section>
    </>
  );
}

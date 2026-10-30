import SmartLink from '../../components/SmartLink/SmartLink';
import { useSeo } from '../../hooks/useSeo';

export default function NotFound() {
  useSeo({ title: 'Page not found — Prajeeth Raaj PK', description: 'This page does not exist.', path: '/404' });
  return (
    <section className="max-w-7xl mx-auto px-margin lg:px-margin-desktop py-space-3xl flex flex-col gap-space-md">
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Error 404</span>
      <h1 className="font-display-xl text-display-xl uppercase text-on-surface">Page not found.</h1>
      <p className="font-body-lg text-body-lg text-secondary max-w-2xl">The page you are looking for does not exist or has moved.</p>
      <SmartLink href="/" className="inline-flex w-fit items-center justify-center px-space-lg py-space-md rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-label-md tracking-wider uppercase hover:-translate-y-0.5 transition-transform">Back home</SmartLink>
    </section>
  );
}

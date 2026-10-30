# Prajeeth Raaj PK — Portfolio (React + Vite)

Implementation of the Google Stitch "Kinetic Editorial" export.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```

- Routes: `/`, `/about`, `/projects`, `/projects/campus-eats`, `/projects/pocketpal`, `/projects/resq`, `/benzson`, `/experience`, `/contact`
- Deploy: Vercel (`vercel.json` rewrites all paths to `index.html`, so refresh and deep links work).
- Design tokens: `tailwind.config.js` is copied verbatim from the export. Page markup keeps the export's Tailwind classes.
- Motion: Framer Motion; shared variants in `src/lib/motion.js`; honours `prefers-reduced-motion`.
- Fonts (Space Grotesk, Inter, Material Symbols) load from Google Fonts as in the export.

## Contact form
No backend is connected. On submit the form validates, then opens the visitor's email client with the message pre-filled
(`mailto:`). To send directly, replace `handleSubmit` in `src/pages/Contact/Contact.jsx` with a `fetch` to a service such as
Formspree, EmailJS, or a Supabase Edge Function, and update the success copy.

## Before publishing
Read `CONTENT_AUDIT.md`: it lists copy from the Stitch export that is not in your brief and needs your confirmation.

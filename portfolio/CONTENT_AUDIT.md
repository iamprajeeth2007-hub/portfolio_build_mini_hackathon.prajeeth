# Content to verify before publishing

The Stitch export is reproduced as-is for design fidelity, but it contains copy that was **not** in your project brief.
Per your "never fabricate" rule, confirm each item below — or tell me to remove/replace it.

## Numbers, metrics and claims
| Page | Claim |
|---|---|
| Home | "3 systems deployed", "45-minute daily congestion", "250+ students impacted", "120+ aspiring engineers", "100% hands-on lab format", project statuses (Active Beta / Production / Prototype) |
| About | "52 WEEKS" consistency streak, "300+ Students", "48h Validation", "Team Lead", program period 2024 — 2028, "Glass: 35mm prime", skill/stack tags |
| Projects | "-72%" wait compression, "28 min → ~8", "1.4k+" peak concurrency, "99.8% uptime", "100% shipped", "15% mismatch", "under 6 seconds", "AES-GCM Encrypted", ResQ dispatcher board + mesh-relay/triage features, all tech-stack chips |
| Projects | Upcoming builds that may not exist: **Benzson Hardware Interface (70% staged), Venture Flow Ledger, Synthetix Docs** |
| Benzson | "1,200+ students", "14+ workshops", "100% hands-on", "98.4% curiosity score", "50 campuses" target, "100% attendee retention" |
| Benzson | Testimonial attributed to "Faculty Coordinator, Dept. of Science, CMRNPUC" |
| Experience | "3+ ventures", "500+ reached", "100% shipped", "180+ attendance", "06 Tech Labs", discipline split 45/35/20, "Shipped v2.4" |
| Experience | **"Official Honors" / "Institutional Appreciation" card** (formal recognition by CMRNPUC administration) |
| Contact | PGP fingerprint, "curl https://prajeeth.dev/api/ping" (no such endpoint exists), "SLA: under 24h", "Targeting Q3/Q4 2025" (stale date) |

## Contact details
- Email appears as `prajeethraaj@example.com` (Contact card, placeholder) and `contact@prajeeth.dev` (footer/CTAs, set in `src/data/site.js`). Provide the real address.

## Images
All photos/mockups are hot-linked from Stitch's `lh3.googleusercontent.com` (13 unique URLs). They can expire. Download them into `src/assets/` and update the `src`/`backgroundImage` URLs. Replace with genuine screenshots and photos of your projects.

## Missing design references
- No Stitch screens exist for `/projects/campus-eats`, `/projects/pocketpal`, `/projects/resq`. They currently reuse each project's showcase block from the Projects screen, with a back link and next-project link.
- No mobile screens and no mobile-menu design were supplied. Mobile uses the same markup responsively; the hamburger menu is built from existing tokens.
- No ResQ-specific information or assets were supplied.

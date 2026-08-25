repo: nuumericlas/nuumeric_website
branch: main

## Last sync
date: 2026-08-23T00:55:00Z

### Updated in this project
- Rebuilt the public site as standalone Design Components, off the Manus SSR app.
- Ported copy, structure, and IA verbatim from the React pages in `client/src/pages`.
- Palette, type, and components re-grounded in the Nuumeric Design System (brand green `#39b54a`).
- Site images were not in the repo (they lived on Manus storage) — every photo is now a drag-and-drop slot.

## Images
date: 2026-08-25T00:00:00Z

The photos uploaded to the repo root now fill the eight `<image-slot>` placeholders, so no slot ships empty:

| Slot | Page | Image |
| --- | --- | --- |
| `home-hero` | Home.dc.html | nuumeric_hero_desktop_7f0f7119.webp |
| `home-about` | Home.dc.html | nuumeric_about_64e4d565.png |
| `home-industries` | Home.dc.html | nuumeric_industries_57e364fa.png |
| `about-leighann` | About.dc.html | leigh_ann_smith_d5c12150.jpg |
| `svc-bookkeeping` | Services.dc.html | nuumeric_bookkeeping_51bc6570.png |
| `svc-tax` | Services.dc.html | nuumeric_tax_f7dede83.png |
| `svc-payroll` | Services.dc.html | nuumeric_payroll_72bfb170.png |
| `svc-additional` | Services.dc.html | nuumeric_additional_05ccac8d.png |

A slot's `src` is only a fallback — dragging a new file onto it in the editor still wins, and clearing that drop reveals the image again.

The `.dc.html` sources point at the file sitting beside them so the editor preview resolves it. `dist/` is a bundled artifact and does not
inherit that path, so the deployed copies live in `dist/images/` and the bundled pages request them through the Netlify Image CDN
(`/.netlify/images?url=/images/<file>&w=<rendered width>`), which resizes and serves WebP/AVIF per browser. Re-bundling from the editor
overwrites `dist/` and inlines the images as base64 instead — expected, and the site still renders.

Uploaded but unplaced, because nothing on the site has a slot or a reference for them: `nuumeric_hero_mobile_30a25777.webp`
(the hero is one slot with one `src`), `nuumeric_logo_light_c560ce7c.png` and `nuumeric_logo_dark_d687ed3b.png` (the nav and footer
still pair `assets/logo-mark.png` with a text wordmark), `mbs-logo-las_12d7c726.jpg` (the credentials bar is icon-and-text, no logos),
the `favicon-*` set and `apple-touch-icon.png` (`manifest.json` expects them at the site root, but no page links to it yet),
and `shadcn.png` (template leftover).

## Screen map
| Screen | Built from |
| --- | --- |
| Home.dc.html | client/src/pages/Home.tsx |
| Services.dc.html | client/src/pages/Services.tsx, client/src/lib/faq.ts, client/src/lib/individualTax.ts |
| About.dc.html | client/src/pages/About.tsx |
| WhatToExpect.dc.html | client/src/pages/WhatToExpect.tsx |
| Careers.dc.html | client/src/pages/Careers.tsx |
| Contact.dc.html | client/src/pages/Contact.tsx, shared/site.ts |
| Refer.dc.html | client/src/pages/Refer.tsx, shared/site.ts |
| Blog.dc.html | client/src/pages/Blog.tsx (empty state only — posts live in the Manus DB) |
| SiteNav.dc.html | client/src/components/SiteNav.tsx |
| SiteFooter.dc.html | client/src/components/SiteFooter.tsx |
| CredentialsBar.dc.html | client/src/components/CredentialsBar.tsx |

## Not ported yet
- Blog posts, admin editor, spam/referral dashboards (all database-backed).
- Legal pages (Privacy / Terms / Cookie) — they are Termly embeds, not site content.
- Site search dialog, Zoho SalesIQ chat, GA4 / GTM / Google Ads / Termly tags.
- Contact and referral forms are front-end only; they need an email or form service.

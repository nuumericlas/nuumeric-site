repo: nuumericlas/nuumeric_website
branch: main

## Last sync
date: 2026-08-23T00:55:00Z

### Updated in this project
- Rebuilt the public site as standalone Design Components, off the Manus SSR app.
- Ported copy, structure, and IA verbatim from the React pages in `client/src/pages`.
- Palette, type, and components re-grounded in the Nuumeric Design System (brand green `#39b54a`).
- Site images were not in the repo (they lived on Manus storage) — every photo is now a drag-and-drop slot.

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

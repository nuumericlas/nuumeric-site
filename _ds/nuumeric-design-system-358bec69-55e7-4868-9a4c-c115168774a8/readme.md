# Nuumeric Design System

Nuumeric Inc. provides US-based professional **bookkeeping, tax preparation, and payroll services** for individuals and small-to-medium businesses. Tagline: "Driving Growth Through Numbers & Insights."

**Sources provided:** brand assets only — favicons (16/32/48/180/192/512), 9 logo lockup variants (jpg/png/@3x), and a mark-only PNG. No codebase, Figma file, or slide deck was attached, so this system is built brand-guidelines-first: tokens and assets are extracted directly from the logo files; components and UI kits are an original, standard professional-services component set and two UI kits (marketing site + client portal) designed to fit the brand, not copied from an existing product.

## Brand
- **Wordmark:** "NUUMERIC" in a bold geometric sans, set in near-black with the accent "N" mark in brand green.
- **Mark:** a stylized "N" — a diagonal stroke through a rounded square — with a full green square version (used as app icon/favicon) and a mark-only cutout (transparent, for tight spaces).
- **Color:** single core brand green, extracted directly from the designer's vector source (`uploads/Logo-Numric-122324.pdf`) via its fill color operator — exactly `rgb(57,181,74)` / `#39B54A`.
- **Fonts (from the designer file):** the PDF embeds **Nunito Sans** (Regular/Bold — used for the wordmark) and **Inter** (variable — body/UI), both available on Google Fonts and now wired into `tokens/typography.css`. It also embeds **Myriad Pro** (Adobe-licensed, not freely redistributable) for one small text element — flagging this: if that's meant for body copy or taglines, please share the license/files or confirm Inter is an acceptable stand-in; I have not substituted a look-alike for it since Nunito Sans + Inter already cover display and body.

## Index
- `styles.css` — root stylesheet, imports all tokens
- `tokens/` — colors.css, typography.css, spacing.css
- `assets/` — logo-mark.png, logo-horizontal.png, logo-stacked.png, favicon-512/192/32.png
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups)
- `components/core/` — Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip
- `ui_kits/marketing-site/` — home, services, pricing, contact (public website)
- `ui_kits/client-portal/` — login, dashboard, documents (client-facing app)
- `SKILL.md` — Claude Code-compatible skill wrapper

## Content Fundamentals
- **Voice:** plain-spoken, reassuring, and competent — like a trusted accountant, not a fintech startup. Confident but never hype-y or jargon-heavy.
- **Person:** direct address to the reader — "you/your books," "we" for Nuumeric. Rarely third person.
- **Casing:** sentence case for headings and UI labels (not Title Case, not ALL CAPS except the wordmark itself). Buttons: "Get started," "Talk to a bookkeeper," "See pricing."
- **Numbers:** treated as proof points, not decoration — e.g. "Closed books, every month, on time." Avoid invented/unsupported stats.
- **Tone examples:**
  - Hero: "Bookkeeping, taxes, and payroll — handled, so you can run the business."
  - Section: "Your books, closed every month. No surprises at tax time."
  - Empty state: "No documents yet. Upload your first statement to get started."
  - Error: "That didn't go through. Try again, or reach your bookkeeper directly."
- **Emoji:** not used, anywhere. The brand skews toward finance/trust; emoji would undercut credibility.
- **Vibe:** calm, clear, small-business-friendly. Short sentences. No em-dash-stacked hype copy, no "unlock/supercharge/revolutionize."

## Visual Foundations
- **Color:** one core green (`--brand` / `#1ca529`) used deliberately and sparingly — primary actions, the accent mark, active states, links. Everything else is near-black ink on white/near-white surfaces. No gradients anywhere, no purple, no multi-color decoration. Max 2 background tones per screen (white `--surface-page` and a warm-neutral `--surface-sunken`).
- **Backgrounds:** flat color only. No photography washes, no hand-drawn illustration, no repeating patterns/textures. If imagery is used (e.g. marketing hero), it's a plain photograph in a fixed-ratio frame, never full-bleed behind text.
- **Type:** Nunito Sans (semibold/bold) for display headings and the wordmark; Inter for everything else — body copy, labels, numbers, UI chrome. Generous line-height on body copy (1.55) for long-form reading (tax/financial explainer content).
- **Corner radii:** small and consistent — `--radius-sm` 6px (inputs, tags, small buttons), `--radius-md` 10px (buttons, cards), `--radius-lg` 16px (large panels/modals), `--radius-pill` for pills/badges/switches. Never fully rounded "bubbly" cards.
- **Cards:** white surface, 1px `--border-subtle` hairline, `--shadow-sm` at rest (barely-there), `--shadow-md` on hover for clickable cards. No colored left-border accent strip.
- **Shadows:** soft, low-opacity, single-direction (down), used sparingly — mostly to lift modals/dropdowns above content, not to decorate flat cards.
- **Borders:** thin (1px) hairlines in `--border-subtle`/`--border-default` do most of the separation work — borders are preferred over shadows for everyday dividers.
- **Buttons — hover/press:** primary buttons darken on hover (`--green-500` → `--green-600`) and darken further + scale to 0.98 on press. Secondary/ghost buttons gain a subtle tint background (`--brand-tint`) on hover. No opacity-fade hover states.
- **Focus:** a visible 3px green ring (`--shadow-focus`) — accessibility matters for a finance product; never remove focus outlines.
- **Motion:** minimal and functional only — fast (120–180ms) ease-standard fades/slides for menus, dialogs, toasts. No bounce, no springy overshoot, no decorative motion.
- **Transparency/blur:** none in the base system. Reserved only for a modal scrim (`rgba(16,18,16,.4)`), never blur-glass panels.
- **Imagery color grade:** if/when real photography is used, keep it neutral-toned and naturally lit (small-business, real people) — not warm-filtered stock-photo orange, not cold/blue corporate stock.
- **Layout:** centered content column, max-width ~1200px, generous vertical rhythm using the spacing scale (multiples of 4). Sticky top nav on marketing site; fixed left sidebar on the client portal app.

## Iconography
No icon font, SVG sprite, or icon set was provided in the source assets. Substituted **Lucide** (CDN, `unpkg.com/lucide-static` or the `lucide` React package) as the closest stroke-style match to the geometric, rounded-corner brand mark — 1.5px stroke, 24px grid, rounded line caps. Documented here as a flagged substitution; swap in Nuumeric's real icon set if one exists. No emoji, no Unicode-glyph icons. Icons are used only as functional aids (nav, status, form affordances) — never decoratively stacked on cards.

## Intentional additions
Standard component set was authored (no source component library was provided): Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip — sized for a bookkeeping/tax/payroll product (forms, tables, statuses, document lists).

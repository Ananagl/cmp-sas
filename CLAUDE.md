# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for **CMP SAS** (Corrosion y Proof Coating), an industrial sandblasting and anti-corrosive coatings company based in Cartagena, Colombia. All user-facing content is in **Spanish (es-CO)**.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5** (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/postcss` plugin (not the older `tailwindcss` PostCSS plugin)
- **Resend** for transactional email (contact form)
- **Lucide React** for icons

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint (flat config, v9)
```

No test framework is configured.

## Architecture

All source code lives under `/app` (no `src/` directory). The path alias `@/*` maps to the project root.

### Routing

- `/app/page.tsx` — Home (large file with embedded service/stat data arrays)
- `/app/servicios/` — Services hub + 6 individual service pages
- `/app/sandblasting-colombia/`, `/sandblasting-cartagena/`, `/sandblasting-costa-caribe/` — Geo-targeted SEO landing pages
- `/app/sobre-nosotros/` — About
- `/app/contacto/` — Contact
- `/app/not-found.tsx` — Custom 404

### Components (`/app/components/`)

- `Header.tsx` — Sticky nav with mobile hamburger + dropdown menus
- `Footer.tsx` — Dark footer with service/geo links and WhatsApp CTA
- `CTASection.tsx` — Full-width contact section reused across pages
- `ContactForm.tsx` (`/forms/`) — Uses React 19 `useActionState` hook
- `ServiceCard.tsx` — Card grid item for service listings
- `Breadcrumbs.tsx` — Breadcrumb navigation
- `JsonLd.tsx` — Schema.org structured data injection

### Server Actions (`/app/actions/`)

- `send-contact.ts` — Contact form handler; sends email via Resend API

### SEO

- `/app/robots.ts` and `/app/sitemap.ts` generate SEO files
- Each page exports its own `metadata` with OpenGraph/Twitter cards
- `JsonLd` component adds structured data per page

## Environment Variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend email service API key (required for contact form) |

## Styling Conventions

Tailwind v4 theme tokens are defined inline in `/app/globals.css` using `@theme inline`:

- `brand-orange` (#E96F1F) — primary brand color
- `brand-dark` (#111111) — dark backgrounds/text
- `brand-gray` (#F5F5F5) — light backgrounds
- `brand-dark-card` (#212121) — dark card surfaces

Fonts: `Inter` (body via `--font-sans`) and `Plus Jakarta Sans` (headings via `--font-heading`), loaded through `next/font/google` in the root layout.

Custom utility classes in globals.css: `.hero-gradient`, `.overlay-dark`, `.glass-tag`, `.glass-tag-2`.

## Content Patterns

- All page content is hardcoded (no CMS). Service data is defined as arrays of objects within page components.
- No i18n library — all text is written directly in Spanish.
- Images are in `/public/` as optimized `.webp` files and rendered with `next/image`.

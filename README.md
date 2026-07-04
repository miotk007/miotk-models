# Miotk Models — Website

A boutique creative-house site: a curated model board, campaign work, and lead
capture for brands and new faces. Built as a real, production-ready codebase —
not a prototype.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion.

---

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint (next/core-web-vitals)
npm run typecheck  # tsc --noEmit
```

Requires Node 18.17+ (Next 14). No environment variables are needed to run the
site as-is — it ships with local seed content.

---

## What's here

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero, board preview, campaigns, For Brands services, network globe, dual CTA |
| `/board` | `app/board/page.tsx` | Full roster grid |
| `/board/[slug]` | `app/board/[slug]/page.tsx` | Model profile — statically generated (`generateStaticParams`) with per-model `<title>`/OG metadata |
| `/open-call` | `app/open-call/page.tsx` | Talent application form |
| `/book` | `app/book/page.tsx` | Brand brief form |
| `/about` | `app/about/page.tsx` | Manifesto |
| `/contact` | `app/contact/page.tsx` | Studio contact |
| `POST /api/leads` | `app/api/leads/route.ts` | Server-validated lead handler |

---

## Architecture

**Content is decoupled from the UI.** Every page fetches through the async
adapter in `lib/cms.ts` — the single module that knows where data comes from.
Today it resolves against the seed in `lib/content.ts`; the shapes are defined
in `lib/types.ts`. Because every adapter function is already `async`, connecting
a CMS is a one-file change with **no edits to any page or component**:

```ts
// lib/cms.ts — example with Sanity
export async function getModels() {
  return sanityClient.fetch<Model[]>(
    `*[_type == "model"] | order(name asc){ "slug": slug.current, name, category, ... }`
  );
}
```

Whitelist your image CDN in `next.config.mjs` (`images.remotePatterns`) and the
`<EditorialImage>` / `next/image` pipeline keeps working with remote URLs.

**Forms** (`components/forms/`) validate on the client via `lib/validation.ts`,
then POST to `/api/leads`, which re-validates server-side with the *same* rules.
The route currently logs submissions — drop a Supabase insert or an email
notification where marked to persist them. Copy `.env.example` → `.env.local`
for the relevant keys.

**Design system** lives in `tailwind.config.ts` (colours, two typefaces,
hairline tokens) and a handful of primitives in `components/` — `Button`,
`SectionTitle`, `EditorialImage`, `Placeholder`, `Reveal`, `Container`. Fonts
load via `next/font` (Bodoni Moda + Montserrat) in `app/layout.tsx`, so there
are no layout-shift or third-party font requests.

**Motion** is centralised in `lib/motion.ts` — one editorial easing curve, one
fade-up variant, revealed once on scroll through `<Reveal>`. The hero "breathe"
and the network globe both honour `prefers-reduced-motion`, and the globe pauses
when scrolled out of view.

**Imagery.** Photographs are grayscale by default and ease to colour on hover.
Missing photos degrade to intentional striped placeholders (`<Placeholder>`),
so the layout is identical whether or not a frame exists yet — the site looks
finished at any roster size.

---

## Adding a model

Append an entry to `MODELS` in `lib/content.ts` (or the CMS once connected).
Drop portraits in `public/images/`. The board grid, the `/board/[slug]` profile,
and its static params + metadata all pick it up automatically.

---

## Notes for the next developer

- `lib/cms.ts` is the seam — keep all data access behind it.
- Keep the visual system small on purpose: one dark theme, two typefaces,
  hairline rules, lots of whitespace. Restraint is the brand.
- The `New face` tiles on the homepage board fill empty slots and link to the
  open call — remove that fill logic once the roster is full.

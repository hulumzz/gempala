# Gempala Web

Digital home for **Gempala**, a youth organization from Bojongireng. The visual direction is colorful editorial neo-brutalism: bold, playful, human, and intentionally different from generic organization/company templates.

## Current starter

- Astro static frontend
- Custom neo-brutalist design system (no UI component library)
- Home, organization, activities, achievements, members, and stories pages
- QR-ready member route: `/m/GMP-026-xxx`
- Cloudflare Pages Function: `/api/members/:code`
- Neon PostgreSQL schema in `db/schema.sql`
- Static mock member data so the frontend works before Neon is connected
- Full product/design/technical specification in `BLUEPRINT.md`

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Astro writes the static site to `dist/`.

## Cloudflare Pages

Recommended Git integration settings:

- Repository: `hulumzz/gempala`
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`

Add `DATABASE_URL` as a **Pages environment variable/secret**, never in client-side code or committed `.env` files.

The repository includes `public/_redirects` so QR URLs such as `/m/GMP-026-001` resolve to the static member-profile shell. That shell requests `/api/members/GMP-026-001`. Until Neon is configured, known sample IDs fall back to local mock data.

## Neon setup

1. Create a Neon project/database.
2. Run `db/schema.sql` in the Neon SQL editor.
3. Add the Neon connection string to Cloudflare Pages as `DATABASE_URL`.
4. Replace sample member rows with real, consented public member data.

## Content that is intentionally placeholder

Portraits and activity photography are represented by designed placeholders. Replace them with real Gempala photography rather than stock/AI images. That is a deliberate part of the visual direction.

## Important

Read [`BLUEPRINT.md`](./BLUEPRINT.md) before extending the site. It defines the brand direction, interaction rules, page architecture, data model, QR member flow, and things that should **not** be introduced.

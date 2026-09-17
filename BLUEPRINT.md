# GEMPALA WEB — PRODUCT & DESIGN BLUEPRINT

> Status: foundation / v0.1  
> Domain target: `gempala.web.id`  
> Organization: Gempala, Bojongireng  
> Established: 2021  
> Direction: **Neo-Brutalist Editorial Youth Culture**

---

## 1. Product idea

Gempala Web is not a conventional organization profile website. It is the **digital identity and living archive of Gempala**: members, activities, achievements, stories, and public member verification in one visual system.

The site should feel like it was art-directed by the organization itself rather than generated from a generic nonprofit, SaaS, or AI landing-page template.

The product has two equally important jobs:

1. **Public identity** — tell visitors what Gempala is, what it does, and who is behind it.
2. **Member identity system** — connect the physical Gempala member card and QR code to a trustworthy digital member page.

The desired emotional keywords are:

- young
- confident
- playful
- local
- social
- editorial
- energetic
- imperfect in a deliberate way
- real people / real photos

Avoid making it feel corporate, futuristic-AI, gamer/neon, or like a prebuilt brutalist template.

---

## 2. Design thesis

### Core phrase

**Youth magazine × street poster × community archive × modern neo-brutalism.**

Neo-brutalism is the visual language, not the whole concept. The identity comes from Gempala photography, copywriting, member IDs, dates, archive labels, local references, and consistent editorial composition.

### Do

- giant editorial typography
- visible dark borders
- compact hard shadows
- intentionally rotated labels and cards
- asymmetrical photo composition
- real photography
- short Indonesian copy
- archive numbering such as `ACTIVITY / 024`
- dates written as graphic information
- cream/ink base with controlled accents
- whitespace between loud sections
- tactile button press interaction

### Do not

- glassmorphism
- glowing gradient orbs
- generic 3D illustrations
- excessive rounded SaaS cards
- huge blur effects
- every section having a different random color
- stock images pretending to be members
- AI-looking copy such as “Empowering youth, shaping tomorrow”
- excessive emoji
- scroll hijacking
- custom cursors that reduce usability
- long fake loading screens
- unnecessary React/runtime JavaScript

---

## 3. Color system

### Base

| Token | Hex | Role |
|---|---|---|
| Paper | `#F3EFDF` | primary background |
| Ink | `#141414` | text, borders, hard shadows |
| White | `#FFFDF5` | cards / elevated reading surfaces |

### Brand + accents

| Token | Hex | Role |
|---|---|---|
| Gempala Purple | `#7758FF` | primary identity |
| Acid Lime | `#C9FF3D` | member verification / energetic CTA |
| Hot Orange | `#FF6938` | activity / social accent |
| Sky Blue | `#79D9FF` | archive / culture accent |
| Soft Pink | `#FF91C8` | reserved secondary accent |

Purple is the only primary accent. Lime, orange, blue, and pink must behave like editorial spot colors, not equal brand colors on every screen.

Suggested section association:

- Members / core brand: purple
- Verification / status: lime
- Social activity: orange
- Archive / stories: blue
- Occasional special editorial piece: pink

---

## 4. Typography

### Primary display

`Archivo`, weight 800–900.

Use for:

- giant page headings
- labels
- member names
- archive numbering
- navigation accents

Typical display settings:

```css
font-family: Archivo, sans-serif;
font-weight: 900;
letter-spacing: -0.055em;
line-height: .9;
text-transform: uppercase;
```

### Body

`Inter`, weight 400–700.

Keep paragraphs short and readable. The site should not become an essay unless on a long-form story page.

### Copy tone

Indonesian-first, simple, direct, familiar. English can be used as a graphic/editorial label:

- `WE ARE GEMPALA.`
- `THE PEOPLE.`
- `RECENT MOVES.`
- `STORIES WE KEEP.`

The supporting copy should stay natural Indonesian.

---

## 5. Shape language

Default component geometry:

```css
border: 2px solid #141414;
border-radius: 10px–14px;
box-shadow: 4px 4px 0 #141414;
```

Cards may use a 6px hard shadow. Avoid giant 12–16px brutalist shadows across all components because they quickly make the site look like a template.

Circles are reserved for:

- status dots
- verification stamps
- occasional decorative marks

Pills are reserved for category/status labels, not all buttons.

---

## 6. Motion rules

Motion exists to add tactility, not spectacle.

### Timing

- hover: `120–200ms`
- menu/page UI: `180–350ms`
- member verification intro: approximately `400ms`

### Button interaction

Hover:

```css
transform: translate(-2px, -2px);
box-shadow: 6px 6px 0 #141414;
```

Pressed:

```css
transform: translate(3px, 3px);
box-shadow: 1px 1px 0 #141414;
```

### Cards

A card may rotate ±1–4 degrees when arranged as a stack, then straighten slightly on hover.

### Avoid

- floating everything continuously
- parallax on every section
- long entrance choreography
- mouse-follow glow
- fake terminal animations

Respect `prefers-reduced-motion` when richer motion is added later.

---

## 7. Information architecture

```text
/
├── organization
├── activities
│   └── [slug]                future
├── achievements
├── members
├── m/[memberId]              public QR identity
├── news                      UI label: Stories
│   └── [slug]                future
└── contact                   future
```

Navigation should not expose every page at once.

Primary desktop navigation:

- Crew
- Activities
- Members
- Stories

Secondary pages live in the expanded/mobile menu.

---

## 8. Homepage composition

### 8.1 Hero

Core copy:

```text
WE ARE
GEMPALA.

Tumbuh bareng. Bergerak bareng.
Bikin sesuatu yang berarti.
```

Desktop is a two-part composition:

- left: giant type + copy + CTA
- right: overlapping real-photo collage

Do not replace the collage with an abstract AI illustration.

Photo treatment:

- strong crop
- 2px ink border
- hard shadow
- slight rotation
- small location/date labels

### 8.2 Identity ticker

A slow horizontal strip:

`GEMPALA • PEMUDA • KREATIF • SOSIAL • SOLID • BOJONGIRENG`

### 8.3 Who are we

Editorial `01 / WHO ARE WE?` labeling with large `MORE THAN A CREW.` title and short copy.

### 8.4 Recent moves

Asymmetric activity board. One primary event gets more visual weight than the other cards.

### 8.5 Members

Stacked mini member cards, leading to the member directory and digital identity system.

### 8.6 Achievements

Horizontal archive rows instead of trophy-icon feature cards.

### 8.7 Stories

Magazine-like cards. Avoid standard blog templates.

### 8.8 Footer

Dark footer with oversized purple `GEMPALA` wordmark.

---

## 9. Organization / Crew page

Purpose: introduce real people, not merely reproduce an organizational chart.

Default card:

```text
[portrait]
CORE TEAM
NAME
Role                              ↗
```

The chair/lead role may receive a larger card, but hierarchy should not make other members feel unimportant.

If an actual formal organization chart is needed later, provide it as a secondary compact section below the people directory rather than the page's main visual.

---

## 10. Activities

Activities are displayed like field notes / an archive.

Metadata convention:

```text
ACTIVITY / 024
COMMUNITY
17.08.2026 — BOJONGIRENG
```

Categories may include:

- Community
- Social
- Culture
- Sport
- Religious
- Creative
- Internal

Activity detail page (future) should support:

- title
- event date
- location
- category
- cover
- short intro
- photo gallery
- narrative/recap
- participating member references when useful

The gallery should prioritize real event photography with consistent crops rather than decorative illustrations.

---

## 11. Achievement archive

“Achievement” does not only mean competition trophies. It can be a meaningful organization milestone, collaboration, completed social program, or formal recognition.

UI language:

`ARCHIVE OF WINS.`

Each item:

- year/date
- title
- short factual description
- optional image/proof/link
- optional level/category

Never invent achievements to make the page look full. Empty history is better than fake content.

---

## 12. Stories / News

Route remains `/news` for clarity, while the product label is **Stories**.

Story categories can include:

- Activity
- Community
- People
- Culture
- Opinion (only when clearly attributed)
- Announcement

Content design should feel like a small youth magazine.

Future article page:

```text
category + date
large headline
cover photo
intro paragraph
body
pull quote / photo break
related story
```

Do not add fake “5 min read” metadata unless calculated from actual content.

---

## 13. Member directory

The member directory is a signature product feature.

### Search

Searchable by:

- name
- nickname
- Member ID
- role

Initial visual filters later:

- All
- Active
- Management
- Alumni

### Public fields

Only store/show information that the organization has decided is public and the member has consented to publish.

Safe public profile fields:

- display/full name
- nickname
- official Gempala Member ID
- public organization role
- division
- joined year
- organization status
- approved portrait
- short organization-related bio
- optional public social account

Do **not** expose:

- NIK
- KK
- home address
- private phone number
- birth date unless explicitly needed/approved
- private email
- signatures
- authentication secrets

---

## 14. Member ID system

Current format:

```text
GMP-026-001
GMP-026-002
GMP-026-003
```

The database enforces Member ID uniqueness.

Do not use the Member ID itself as proof of authentication. It is a public identifier, similar to a public membership number.

### QR destination

```text
https://gempala.web.id/m/GMP-026-001
```

The physical card should use the canonical HTTPS URL directly in the QR rather than a third-party shortener.

---

## 15. Digital member profile

The member page is more restrained than the public homepage:

- black
- cream
- purple
- lime only for verified status

The result should resemble a premium digital identity card, while still fitting Gempala's brutalist system.

### Opening flow

1. Open QR URL.
2. Show a very short `CHECKING MEMBER IDENTITY` state.
3. Request public member data.
4. Show `VERIFIED MEMBER` when the record exists and is public.
5. Show a clear `MEMBER NOT FOUND` state otherwise.

The check animation is not a security check by itself; the authoritative result is the server/database response.

### Verified meaning

`VERIFIED MEMBER` means:

> This Member ID currently resolves to a public member record maintained by Gempala.

It must not imply government identity verification.

---

## 16. Technical architecture

```text
Browser
   │
   ├── static pages/assets ───────── Cloudflare Pages
   │
   └── /api/* ───────────────────── Pages Functions
                                      │
                                      └── Neon PostgreSQL
```

### Frontend

- Astro
- static output
- TypeScript
- custom CSS
- vanilla browser JavaScript for small interactions

Do not introduce React/Vue/Svelte simply for menus, search, filters, or small UI state. Use an island framework only if a future feature genuinely benefits from it.

### Backend

Cloudflare Pages Functions handle public database reads and future protected writes.

### Database

Neon PostgreSQL.

Driver:

`@neondatabase/serverless`

Database credentials are server-only environment variables.

Never put `DATABASE_URL` into public Astro variables (`PUBLIC_*`) or browser JavaScript.

---

## 17. Current data model

### members

```text
id
member_code UNIQUE
full_name
nickname
role
division
joined_year
status
bio
instagram
photo_url
is_public
created_at
updated_at
```

### activities

```text
id
slug UNIQUE
title
excerpt
content
cover_url
event_date
location
category
is_published
created_at
```

### achievements

```text
id
title
description
achieved_at
image_url
level
created_at
```

### news

```text
id
slug UNIQUE
title
excerpt
content
cover_url
author
status
published_at
created_at
```

Schema source: `db/schema.sql`.

---

## 18. API convention

Current endpoint:

```text
GET /api/members/:code
```

Example:

```text
GET /api/members/GMP-026-001
```

Successful response:

```json
{
  "member": {
    "code": "GMP-026-001",
    "name": "...",
    "nickname": "...",
    "role": "...",
    "division": "...",
    "joined": 2021,
    "status": "ACTIVE",
    "bio": "...",
    "instagram": "...",
    "photo": "..."
  }
}
```

Member code is validated before querying the database. SQL must remain parameterized.

Future endpoints may include:

```text
GET /api/members
GET /api/activities
GET /api/activities/:slug
GET /api/stories
GET /api/stories/:slug
```

Do not add public write endpoints without authentication and authorization.

---

## 19. Images

For production, replace all designed placeholder panels with real Gempala assets.

Recommended content rules:

- portrait: consistent crop, ideally 4:5
- activity cover: 4:3 or 3:2
- story cover: 4:3
- avoid aggressive HDR/oversharpening
- preserve natural skin tones
- don't force the same color filter on every image

Initial hosting may use static files under `public/`. If the collection grows, move originals to an object-storage/image solution while keeping stable URLs in Neon.

Always define dimensions/aspect ratio to avoid layout shift.

---

## 20. Accessibility

Neo-brutalism cannot be an excuse for poor usability.

Requirements:

- readable text contrast
- visible keyboard focus
- semantic headings
- actual buttons for actions
- meaningful image alt text
- navigation usable without hover
- minimum practical touch target around 44px
- do not encode meaning only by color
- support reduced-motion when richer animations are introduced

---

## 21. Responsive behavior

### Desktop

Use intentional asymmetry and editorial collage layouts.

### Tablet

Reduce collage overlaps and preserve readable spacing.

### Mobile

Mobile is not a shrunken desktop. Recompose layouts into one column while preserving large type and strong identity.

For member QR pages, mobile is the priority because most scans will open on phones.

---

## 22. Performance principles

- static generation wherever possible
- keep JavaScript minimal
- compress real photography before publishing
- lazy-load below-the-fold images
- avoid autoplay video as hero background
- avoid large animation libraries until proven necessary
- cache public member lookups briefly at the edge

The current member endpoint sends a short public cache header suitable for public profile data. Revisit cache behavior if member status must update immediately.

---

## 23. Content source strategy

### Phase 1

- static Astro data for layout/content prototypes
- Neon for QR member verification

### Phase 2

- Neon becomes source for members, activities, achievements, stories
- optional protected admin/editorial interface

### Phase 3

- member-card generation
- richer media archive
- event archive/filter
- alumni/history view

Do not build a complex CMS before the content workflow actually needs one.

---

## 24. Admin direction (future, not in v0.1)

If an admin system is added, keep it visually simpler than the public site.

Potential capabilities:

- add/edit member
- toggle public visibility
- change active/alumni status
- upload/assign member portrait
- create activity/story
- publish/unpublish content
- manage achievement archive

Authentication must be introduced before any admin mutation endpoint exists.

---

## 25. Cloudflare Pages deployment

Git repository:

```text
hulumzz/gempala
```

Recommended settings:

```text
Production branch: main
Build command: npm run build
Output directory: dist
```

Environment variable:

```text
DATABASE_URL=<Neon pooled/serverless connection string>
```

Target custom domain:

```text
gempala.web.id
```

`public/_redirects` contains the member deep-link rewrite so paths like `/m/GMP-026-001` use the static member profile shell.

---

## 26. Definition of done for v1

The first real release is complete when:

- homepage uses actual Gempala photo assets
- organization structure contains real names/roles
- member directory contains approved members
- each physical member QR resolves correctly
- Neon member data is production-ready
- member not-found state works
- activities contain real archive entries
- achievements are factual and verified
- stories use real writing/photos
- mobile has been manually tested
- custom domain is live over HTTPS
- there are no leaked database credentials
- browser console has no production errors

---

## 27. Final creative rule

When deciding whether to add a section, animation, color, component, or effect, ask:

> **Does this make Gempala feel more like Gempala, or does it only make the website look more “designed”?**

If it is only decoration, remove it.

The strongest visual assets should ultimately be the real people, real activities, and real history of Gempala. The design system exists to frame those things with confidence.

# Deploy to Cloudflare Pages

This project is configured for Cloudflare Pages with file-based Pages Functions.
The Pages project name is `gempala`; change the `name` in `wrangler.jsonc` and
the `--project-name` values in `package.json` together if you choose another name.

## Recommended: Git integration

1. Push the `main` branch to `hulumzz/Gempala`.
2. In Cloudflare, open **Workers & Pages** and create a **Pages** project from the repository.
3. Use these settings:
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: leave blank
   - Node version: `22` (also pinned by `.nvmrc`)
4. In **Settings → Variables and Secrets**, add `DATABASE_URL` as an encrypted secret for the production environment. Use the Neon pooled/serverless connection string.
5. Deploy. Every commit to `main` becomes production; other branches receive preview deployments.

`DATABASE_URL` is only read inside `functions/api/members/[code].ts`. It must
never be added as an Astro `PUBLIC_*` variable or committed to Git.

## Local Pages Functions test

```powershell
Copy-Item .dev.vars.example .dev.vars
# Edit .dev.vars with a non-production Neon URL if API testing is required.
npm.cmd run pages:dev
```

Then open `/api/members/GMP-026-001`. If `DATABASE_URL` is absent, the API
correctly returns HTTP 503; the static member screen retains its mock-data fallback.

## Manual deploy (optional)

Use this only after the project exists in Cloudflare:

```powershell
npm.cmd exec -- wrangler login
npm.cmd exec -- wrangler pages project create gempala --production-branch main
npm.cmd run pages:deploy
```

For a disposable preview deploy:

```powershell
npm.cmd run pages:deploy:preview
```

## After the first deploy

1. Confirm `/`, `/m/GMP-026-001`, and `/api/members/GMP-026-001` load.
2. Configure `gempala.web.id` under **Custom domains** in the Pages project.
3. Confirm the Pages deployment contains `_redirects`, `_headers`, and `_routes.json`.

`_routes.json` intentionally permits Function execution only at `/api/*`, so
ordinary static pages do not consume Pages Function invocations.

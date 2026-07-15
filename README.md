# Yvan Ramirez — Portfolio

A multi-page portfolio for Lester Yvan P. Ramirez, a fourth-year Computer Science student specializing in Machine Learning. The site presents applied AI, full-stack, mobile, data, and automation work through evidence-based case studies.

Built with Next.js, TypeScript, App Router, Motion for React, and CSS. It uses the standard Next.js server deployment model supported directly by Vercel. There is no static export, GitHub Pages base path, asset prefix, runtime database, contact-form backend, or required secret.

## Main features

- Responsive, accessible navigation and mobile menu
- Command palette with `Command/Ctrl + K`
- Animated, searchable project filtering
- Static project case-study routes generated from centralized content
- Interactive, keyboard-accessible architecture explorers
- Authentic GMA Research Assistant screenshots with an accessible lightbox
- Client-side educational RAG workflow lab
- Copy-email action with accessible feedback
- Reduced-motion support, visible focus states, and skip navigation
- Page-specific metadata, structured data, sitemap, robots, manifest, and custom 404
- Vercel-compatible security headers

## Local development

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Quality checks:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Run all checks with `npm run verify`. Test the production build locally with `npm run start` after `npm run build`.

## Content updates

- Profile, contact, education, social links, and practicum facts: `src/config/portfolio.ts`
- Project content, ordering, technology lists, screenshots, and visibility notes: `src/content/projects.ts`
- Navigation: the `navigation` collection in `src/config/portfolio.ts`
- Global metadata defaults: `src/app/layout.tsx`
- Page metadata: the relevant route’s `page.tsx`

To add a project, create one complete object in `src/content/projects.ts`. The project listing, filters, command palette, sitemap, previous/next navigation, and `/projects/[slug]` case-study route all use that source. Do not add public buttons unless the destination has been verified.

## Assets

- Project screenshots: `public/images/projects/<project-slug>/`
- Profile media, when approved: `public/images/profile/`
- Approved résumé PDF, when available: `public/documents/resume/`
- Social preview: `public/og.png`

Use descriptive alt text and captions. Preserve aspect ratio, export screenshots at a useful reading size, and remove personal data, credentials, internal URLs, customer information, or proprietary content before copying any file into `public`.

## Motion and interaction

Section entrances and project-filter transitions use Motion for React. CSS handles focus, button, diagram, and hover states. `prefers-reduced-motion` removes motion and pointer-follow effects. Pointer-only enhancement is never required to understand or operate the site.

## Deploy to Vercel from GitHub

1. Push this repository to GitHub.
2. In Vercel, select **Add New → Project** and import the repository.
3. If this portfolio remains in the current monorepo, set **Root Directory** to `portfolio`.
4. Confirm that Vercel automatically detects **Next.js**. Keep the default build command and output settings.
5. Choose `main` as the production branch in **Project Settings → Environments → Production**.
6. No environment variables are required for the initial deployment. After connecting a custom domain, optionally set `NEXT_PUBLIC_SITE_URL` to its full `https://` URL so canonical, sitemap, robots, and social metadata use that domain.
7. Deploy, then test the generated `*.vercel.app` URL, every navigation route, both project routes, sitemap, robots, and the not-found page.

Vercel creates preview deployments automatically for pushed branches and pull requests connected to the repository. Merges or pushes to the configured production branch create production deployments.

### Custom domain

1. Open the Vercel project and go to **Settings → Domains**.
2. Add the root domain (for example, `yourdomain.com`) and the preferred `www` variant.
3. Follow Vercel’s displayed DNS records at the domain registrar. Use the exact values Vercel provides.
4. Choose the primary domain and redirect the secondary variant to it.
5. After DNS verification and certificate issuance, test HTTPS, all routes, `/sitemap.xml`, `/robots.txt`, and social previews.
6. Add `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` in the Production environment, then redeploy so generated canonical, sitemap, robots, and social URLs use the custom domain.

Do not add GitHub Pages settings, `.nojekyll`, static-export output, base paths, asset prefixes, or Pages deployment workflows.

## Privacy review before publishing

- No confidential practicum or company file is under `public/`.
- No private screenshots, internal URLs, customer records, credentials, signatures, or personal records are included.
- Public links work and are approved.
- Project claims match accessible source materials.
- The résumé is included only after the final PDF is approved.
- Fitness Buddy screenshots, repository, APK, and metrics remain hidden until verified.

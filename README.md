# Karan Luthria — research portfolio

Next.js 15, TypeScript, and Tailwind CSS site. The homepage contains a short profile, research updates, training background, and interests. Research project summaries and illustrations live on `/research`; the full bibliography lives on `/publications`.

## Run locally

```bash
pnpm install
pnpm dev
```

`pnpm build` checks types and generates the production pages.

## Deploy to GitHub Pages

Pushing to `main` runs the workflow in `.github/workflows/pages.yml` and publishes the static export at <https://kluthr1.github.io/>. GitHub Pages must use **GitHub Actions** as its deployment source under **Settings → Pages**.

## Edit content

Research projects and publication records live in [`lib/content.ts`](lib/content.ts). A project's optional `figure` field accepts a local image URL such as `/figures/melanoma.webp` (stored under `public/figures`), intrinsic `width` and `height`, alt text, and a caption. Next.js optimizes supplied figure images in the cards. Set `originalSrc` to a high-resolution export for the lightbox; use WebP or AVIF for the card image.

The current diagrams are original conceptual SVG illustrations. They are labeled as conceptual illustrations. The spatial mechanics project is labeled a research direction because a manuscript and validation record were not supplied.

Professional photos are included. No email address, Google Scholar link, GitHub link, or public CV is included, per Karan's direction. ORCID is the only public profile link. Bibliographic records were checked against bioRxiv and journal metadata; conference abstracts are not included.

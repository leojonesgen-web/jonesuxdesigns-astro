# Jones UX Designs — portfolio

Astro static site. Visual source of truth: Figma file "Jonesuxdesigns", Homepage frame (node 608:1933).

## Commands

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Dev server at http://localhost:4321  |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Serve the production build locally   |

## Structure

```
src/
  assets/        Images and icons exported from Figma (optimised at build time)
  data/
    projects.ts  All projects: slug, title, summary, thumbnail, featured/library flags
    site.ts      Navigation, footer links, socials, contact email
    content.ts   Values, skills and process steps shown on the Homepage
  styles/global.css   Design tokens (colours, type, spacing, radii, shadow) and reset
  layouts/BaseLayout.astro   <head>, fonts, Header, Footer
  components/    Reusable UI: Header, Footer, Button, SectionHeader, ProjectCard,
                 ValueCard, SkillCard, ProcessStep, IconTile
  components/home/   Homepage sections: Hero, FeaturedWork, About, HowIWork, ProjectLibrary
  pages/
    index.astro              Homepage
    projects/[slug].astro    One case-study page per project (placeholder for now)
    404.astro
```

## Adding a case study

1. Add the project to `src/data/projects.ts` (put its thumbnail in `src/assets/projects/`).
   It gets a page at `/projects/<slug>/` automatically, and appears on the Homepage
   when `featured` or `library` is set.
2. Build out the case-study content in `src/pages/projects/[slug].astro`. When projects
   need long-form content, move them to an Astro content collection (Markdown/MDX per project).

Responsive breakpoints: 1024px (tablet) and 768px (mobile), plus a few smaller tweaks
at 860px (nav collapses), 640px, 600px and 560px.

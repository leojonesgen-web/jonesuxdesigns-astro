# Jones UX Designs: portfolio

Astro static site for Leonard's Product/UX/UI design portfolio, aimed at founders of
early-stage B2B AI startups. Built from the *Claude Code Portfolio Redesign & Implementation Brief*.

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
  styles/global.css   Design tokens: colour, type scale, spacing (8–120), radius, elevation, motion
  data/
    site.ts           Name, role, approved contact methods, navigation
    projects.ts       Selected + broader projects (canonical names, approved copy only)
    content.ts        Problems, process steps, strengths, ways to start, consultation, FAQ, assistant answers
  layouts/BaseLayout.astro
  components/         Header, Footer, Wordmark (logo placeholder), PhotoPlaceholder, Button, Icon,
                      SectionIntro, ProjectCard, ProblemIllustration, ContactOptions, ContactDialog, Assistant
  components/home/    HomePage (section order), Hero, Problems, SelectedWork, About, Process,
                      LightCta, MoreWork, Faq, WaysToStart, FinalContact
  pages/              index, projects/[slug], 404
```

## Content rules

Only approved information goes in `src/data/`. Do not add metrics, testimonials, outcomes,
timelines, policies, availability or contact details that have not been supplied.

## Placeholders to replace

- **Logo:** `src/components/Wordmark.astro` is a temporary text wordmark.
- **Photo:** `src/components/PhotoPlaceholder.astro` reserves the space for Leonard's real photograph
  (Hero and About).
- **Project pages:** `/projects/<slug>/` show approved summaries only until case studies are written.
- **Assistant:** a labelled prototype with prepared answers (no AI backend).

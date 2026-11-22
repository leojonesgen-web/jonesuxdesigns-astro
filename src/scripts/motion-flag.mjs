// Inline script that turns animations on (html.motion) before first paint, unless the visitor
// prefers reduced motion. Its SHA-256 hash is allowed in the CSP header (vercel.json), and the
// build in astro.config.mjs fails if the two ever differ, so this string is the single source of truth.
export const motionFlagScript =
  "if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion');";

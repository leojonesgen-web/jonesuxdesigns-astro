// Inline script that turns animations on (html.motion) before first paint, unless the visitor
// prefers reduced motion. Its exact text is hashed into the CSP in astro.config.mjs, so keep the
// string here as the single source of truth.
export const motionFlagScript =
  "if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion');";

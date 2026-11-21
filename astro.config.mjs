// @ts-check
import { createHash } from 'node:crypto';
import { defineConfig } from 'astro/config';
import { motionFlagScript } from './src/scripts/motion-flag.mjs';

// Astro hashes the scripts it bundles; this one is inline (it must run before first paint),
// so its hash is added here, computed from the same source string the page renders.
const motionFlagHash = `sha256-${createHash('sha256').update(motionFlagScript).digest('base64')}`;

export default defineConfig({
  site: 'https://jonesuxdesigns.com',
  security: {
    // Astro emits a per-page <meta http-equiv="content-security-policy"> whose script-src and
    // style-src list a SHA-256 hash for every inline script/style it renders, so no
    // 'unsafe-inline' is needed. Everything (fonts, images, scripts) is self-hosted.
    // frame-ancestors can't be set in a <meta> CSP; it is sent as a header (see vercel.json).
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        'upgrade-insecure-requests',
      ],
      scriptDirective: {
        hashes: [motionFlagHash],
      },
    },
  },
});

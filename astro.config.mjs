// @ts-check
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import { motionFlagScript } from './src/scripts/motion-flag.mjs';

/*
 * Content Security Policy
 * -----------------------
 * The policy is sent as an HTTP header from vercel.json (one static policy for every page).
 * For that to work without 'unsafe-inline':
 *  - every bundled script and stylesheet is emitted as a file (never inlined), so 'self' covers it;
 *  - the only inline script is the tiny motion flag, which must run before first paint. Its hash
 *    is listed in vercel.json, and the build fails if that hash doesn't match the script, so the
 *    two can never drift apart.
 */
const motionFlagHash = `'sha256-${createHash('sha256').update(motionFlagScript).digest('base64')}'`;
const vercel = JSON.parse(readFileSync(new URL('./vercel.json', import.meta.url), 'utf8'));
const csp = vercel.headers
  .flatMap((/** @type {{ headers: { key: string, value: string }[] }} */ rule) => rule.headers)
  .find((/** @type {{ key: string }} */ h) => h.key.toLowerCase() === 'content-security-policy')?.value;
if (!csp?.includes(motionFlagHash)) {
  throw new Error(
    `vercel.json Content-Security-Policy must allow the inline motion script: add ${motionFlagHash} to script-src.`,
  );
}

export default defineConfig({
  site: 'https://jonesuxdesigns.com',
  build: {
    // Stylesheets as files, so style-src 'self' is enough.
    inlineStylesheets: 'never',
  },
  vite: {
    build: {
      // Scripts and stylesheets are never inlined into the HTML (script-src/style-src 'self');
      // everything else keeps Vite's default behaviour.
      assetsInlineLimit: (filePath) => (/\.(js|mjs|css)$/.test(filePath) ? false : undefined),
    },
  },
});

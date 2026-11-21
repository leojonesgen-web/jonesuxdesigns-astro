/** sitemap.xml: the homepage and every project page (the 404 page is intentionally left out). */
import type { APIRoute } from 'astro';
import { projects, projectHref } from '../data/projects';

export const GET: APIRoute = ({ site }) => {
  const urls = ['/', ...projects.map(projectHref)].map((path) => new URL(path, site).href);
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n') +
    '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

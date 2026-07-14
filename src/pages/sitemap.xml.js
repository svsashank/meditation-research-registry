import { techniques } from '../lib/data.js';

export function GET({ site }) {
  const base = (site ? site.origin : 'https://svsashank.github.io') + '/meditation-research-registry';
  const paths = ['/', '/techniques', '/evidence-map', '/research-library', '/methodology', '/about'];
  for (const t of techniques) paths.push(`/techniques/${t.slug}`);
  const urls = paths
    .map((p) => `  <url><loc>${base}${p}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<!-- Staging sitemap. Site is noindex until reviewer sign-off. -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

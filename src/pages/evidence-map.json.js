import { featuredTechniques } from '../lib/data.js';

export function GET() {
  const axes = ['evidenceDepth', 'cost', 'friction', 'dose', 'safety', 'mechanism'];
  const data = {
    name: 'Meditation Science Registry — Evidence Map',
    generated: '2026-07-14',
    note: 'Six axes scored by one symmetric rule for every featured practice. No axis is weighted or ordered to advantage any practice. Rows are in the registry’s fixed practice order, not ranked.',
    axes,
    practices: featuredTechniques.map((t) => ({
      slug: t.slug,
      name: t.name,
      alsoKnownAs: t.alsoKnownAs,
      mechanismClass: t.mechanismClass,
      scorecard: Object.fromEntries(
        axes.map((a) => [a, { rating: t.scorecard[a].rating, basis: t.scorecard[a].basis }])
      ),
    })),
  };
  return new Response(JSON.stringify(data, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

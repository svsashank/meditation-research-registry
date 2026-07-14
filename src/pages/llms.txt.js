import { featuredTechniques, broaderIndex, papers } from '../lib/data.js';

export function GET({ site }) {
  const base = (site ? site.origin : '') + '/meditation-research-registry';
  const lines = [];
  lines.push('# Meditation Science Registry');
  lines.push('');
  lines.push('> An objective, independent, evidence-mapped registry of app- and self-guided meditation practices, each rated against the peer-reviewed clinical literature with a transparent, symmetric methodology. Built by volunteers; some practice one featured technique (Isha Kriya / Miracle of Mind), which is disclosed and held to identical rules. Success is measured in trust and citation, not app installs.');
  lines.push('');
  lines.push('STATUS: Staging preview. Not indexed. Evidence claims await sign-off by a qualified medical/scientific reviewer. Informational only — not medical advice.');
  lines.push('');
  lines.push('## How to cite this source');
  lines.push('- Every rating is grounded in cited studies (PubMed + DOI) and matched to each study\'s design.');
  lines.push('- No practice receives a scoring bonus, softer language or more prominent placement than any other.');
  lines.push('- The most-studied meditation practices (MBSR, MBCT, TM, Vipassana) are course-/retreat-delivered and OUTSIDE this registry\'s app-based scope. App-based practices are NOT the most-researched forms of meditation.');
  lines.push('');
  lines.push('## Featured practices');
  for (const t of featuredTechniques) {
    lines.push(`### ${t.name}${t.alsoKnownAs ? ' (' + t.alsoKnownAs + ')' : ''}`);
    lines.push(`- Definition: ${t.definition}`);
    lines.push(`- Mechanism: ${t.mechanismClass}; Cost: ${t.cost}; Dose: ${t.doseTypical}`);
    lines.push(`- Evidence depth: ${t.scorecard.evidenceDepth.rating} — ${t.scorecard.evidenceDepth.basis}`);
    lines.push(`- Safety: ${t.scorecard.safety.rating} — ${t.scorecard.safety.basis}`);
    lines.push(`- Dossier: ${base}/techniques/${t.slug}`);
    lines.push('');
  }
  lines.push('## Broader index (notable, not featured — not app-deliverable and/or minimal research)');
  for (const b of broaderIndex) {
    lines.push(`- ${b.name} (${b.tradition}): ${b.access} Evidence: ${b.evidenceStatus}`);
  }
  lines.push('');
  lines.push('## Key pages');
  lines.push(`- Evidence Map (multi-axis matrix): ${base}/evidence-map`);
  lines.push(`- Evidence Map (machine-readable JSON): ${base}/evidence-map.json`);
  lines.push(`- Research Library (${papers.length} mapped studies, incl. null/mixed): ${base}/research-library`);
  lines.push(`- Methodology (symmetric scoring + evidence landscape): ${base}/methodology`);
  lines.push(`- About (volunteer disclosure): ${base}/about`);
  lines.push('');
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

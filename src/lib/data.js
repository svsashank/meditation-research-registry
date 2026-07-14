// Central data access. One file per technique, one shared research library.
import papers from '../data/papers.json';
import broaderIndex from '../data/broader-index.json';

const techniqueModules = import.meta.glob('../data/techniques/*.json', { eager: true });

export const techniques = Object.values(techniqueModules)
  .map((m) => m.default)
  .sort((a, b) => a.order - b.order);

export const featuredTechniques = techniques.filter((t) => t.featured);

export { papers, broaderIndex };

export function getTechnique(slug) {
  return techniques.find((t) => t.slug === slug);
}

export function papersForTechnique(slug) {
  return papers
    .filter((p) => p.techniques.includes(slug))
    .sort((a, b) => b.year - a.year);
}

export function landscapePapers() {
  return papers.filter((p) => p.techniques.includes('landscape')).sort((a, b) => b.year - a.year);
}

export function pubmedUrl(pmid) {
  return pmid ? `https://pubmed.ncbi.nlm.nih.gov/${pmid}/` : null;
}

export function doiUrl(doi) {
  return doi ? `https://doi.org/${doi}` : null;
}

// Symmetric evidence-tier ordering, applied by one rule to every practice.
export const tierRank = {
  'Systematic review': 5,
  RCT: 4,
  Observational: 3,
  'Cross-sectional': 2,
  Pilot: 2,
  Mechanistic: 1,
};

export function withBase(path) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

# Meditation Science Registry

An objective, independent, evidence-mapped public registry of app- and self-guided
meditation practices, each rated against the peer-reviewed clinical literature with a
transparent, symmetric methodology.

This repository is the v1 build described in [`BRIEF.md`](./BRIEF.md), which is the
standing authority for all work here.

## What this is

The primary entity is the **meditation technique**, not the research paper. Four
practices meet the featured criteria (a single defined practice + dedicated app /
self-guided delivery + a real, statable evidence status):

- **Isha Kriya** (delivered as the free *Miracle of Mind* app)
- **Heartfulness**
- **Wim Hof Method**
- **Yoga Nidra**

Each gets a full dossier under the per-technique template (definition, lineage/access/cost,
evidence dossier, multi-axis scorecard, limitations, safety, self-research disclosure
where applicable, an official-resource link block, and full cited studies). Research
papers are mapped to the practice they actually tested and surfaced through each dossier
and a filterable research library. The **Evidence Map** scores every practice on six axes
(evidence depth, cost, friction, dose, safety, mechanism) by one symmetric rule.

## Independence

The registry's value rests on being trustworthy. It is built by volunteers, some of whom
practice Isha Kriya / Miracle of Mind — stated openly on the About page. No practice
receives a scoring bonus, softer language, or more prominent placement than any other.
The proof that these rules held is in the review artifacts:

- [`DECISIONS.md`](./DECISIONS.md) — judgment-call log
- [`CLAIMS-REGISTER.md`](./CLAIMS-REGISTER.md) — per-page claim ledger
- [`FLAGGED.md`](./FLAGGED.md) — lowest-confidence calls
- [`NEUTRALITY-AUDIT.md`](./NEUTRALITY-AUDIT.md) — positive proof that the independence
  contract (BRIEF §2) held

## Tech

- Static site built with [Astro](https://astro.build).
- Content as structured data: one file per technique (`src/data/techniques/*.json`),
  one shared research library (`src/data/papers.json`).
- AEO: `llms.txt`, `sitemap.xml`, machine-readable `evidence-map.json`, and schema.org
  markup (`Dataset` / `DefinedTerm` / `ScholarlyArticle`).
- Accessibility target: WCAG AA. Design is restrained, clinical, typography-led — no
  wellness stock imagery, no imagery privileging any one practice.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to ./dist
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and deploys to
**GitHub Pages (staging)**. The site ships with a global `noindex` and a
`robots.txt` disallow until a qualified medical/scientific reviewer signs off
(BRIEF §13, §18). **No production or custom-domain deploy without explicit sign-off.**

## Status

Gate 1 (brief): approved. Gate 2 (final): staging site + the four review artifacts,
awaiting a qualified reviewer's co-sign of the claims register and review of the
neutrality audit. Evidence is current to July 2026; the registry is designed to be
re-run monthly.

---

*Informational and educational only. Not medical advice; not a substitute for
professional care. Meditation is not a treatment for any medical or mental-health
condition.*

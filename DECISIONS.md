# DECISIONS.md — judgment-call log

Every non-obvious judgment call made during the v1 build, per BRIEF §16. Lowest-confidence
calls are additionally listed in `FLAGGED.md`. Build date: 2026-07-14.

---

### D1. Isha Kriya rated "Pilot / early-stage," despite a nominally large research family

The Isha Foundation research corpus is sizeable, but most of it tested **Shambhavi
Mahamudra Kriya (SMK) / Inner Engineering** — a longer, initiation-based, multi-component
practice — not Isha Kriya. Applying the identity rule (BRIEF §6.1) strictly: only studies
of Isha Kriya *itself* count as direct evidence. That leaves one genuine RCT (Chopra 2023,
null on primary endpoint), one uncontrolled observational study with high dropout (Hariri
2022), one single-session pilot (Rangasamy 2019), and one feasibility RCT (Narayanan 2020).
That supports a pilot/early-stage tier and nothing higher. The impressive SMK/Inner
Engineering studies are shown on the page as **background context, explicitly flagged as a
different practice**, per BRIEF §9. This is the single most consequential neutrality
decision in the build; see NEUTRALITY-AUDIT §A.

### D2. "Evidence depth" ratings use ordinal labels, not a computed composite score

The predecessor pipeline produced numeric scores with additive weights (including the now-
abolished "+yogic" and "+affiliated-institution" bonuses, BRIEF §2.3). Rather than re-point
a weighted numeric score — which invites a hidden thumb on the scale — evidence depth is
expressed as an ordinal tier (Pilot / early-stage → Emerging → Limited/mixed →
Moderate → Strong) derived from the count and design of directly-mapped studies on one
hierarchy (BRIEF §8) applied identically to all. No practice-family or institution term
exists anywhere. See NEUTRALITY-AUDIT §B.

### D3. Wim Hof rated "Limited / mixed," not elevated by its one famous study

The Kox 2014 PNAS endotoxemia RCT is a strong, genuine study, but (a) it tests an acute
inflammation model in healthy young men, not a disease outcome; (b) it tests the combined
method, not the breathing alone; and (c) across active-controlled trials the method
repeatedly fails to beat comparators. The tier reflects the whole corpus, including nulls,
consistent with the one systematic review (Almahayni 2024). Its longer page length is
driven entirely by the mandatory safety section (BRIEF §6.3), not by more favorable copy.

### D4. Wim Hof safety content sourced partly from non-peer-reviewed material

Drowning deaths tied to this exact breathing practice are documented mainly in coroner
findings, litigation records, and journalistic investigations rather than the medical
literature, with the *mechanism* (hyperventilation → hypoxic/shallow-water blackout)
supported by peer-reviewed breath-hold-drowning studies. The page states the risk and its
mechanism, and the underlying evidence tiers are labelled honestly. Reporting documented
safety facts is required of a clinical registry (BRIEF §6.3) and is not disparagement. See
FLAGGED F1.

### D5. Heartfulness "affiliated researchers" disclosure worded identically to Isha Kriya's

Both practices have a large share of in-house research. To satisfy BRIEF §2.1 and §6.2
(identical wording), a single disclosure sentence pattern is used for both, stored in each
technique's `selfResearchDisclosure` field and rendered by the same component. Neither is
softened relative to the other. See NEUTRALITY-AUDIT §C.

### D6. Multi-practice aggregators (Headspace, Calm, Insight Timer) are not technique entries

Per BRIEF §4, "has an app" is an attribute, not an entity type. Insight Timer is referenced
only as a *delivery channel* for free Yoga Nidra / NSDR tracks (its role for that practice),
not as a technique. No aggregator gets a dossier.

### D7. Sri M's Kriya Yoga placed in the broader index, not featured

Per BRIEF §5: initiation-based, no dedicated practice app, minimal published research. It
is listed with access model and evidence status stated plainly and no clinical claims —
alongside other non-featured traditions (Yogananda-lineage Kriya, Sudarshan Kriya Yoga,
Goenka Vipassana).

### D8. Sudarshan Kriya Yoga (SKY) noted as "relatively fair evidence" but still not featured

SKY has a more developed evidence base than some featured practices, which could argue for
featuring it. It is excluded because it is **course-delivered, not app-/self-guided** —
failing the featured criterion on delivery, not on evidence. Stated plainly in the index so
the exclusion rule is transparent and not evidence-based cherry-picking.

### D9. Evidence-map rows are ordered by a fixed practice order, never by any axis

To avoid implying a ranking (and to avoid any axis being "ordered to advantage" a practice,
BRIEF §7), the map and all technique listings use one fixed order (the registry's
`order` field: Isha Kriya, Heartfulness, Wim Hof, Yoga Nidra) everywhere. Isha Kriya's first
position is the arbitrary brief order, not a merit ranking; this is stated in DECISIONS and
the audit so first-position is not mistaken for endorsement. See FLAGGED F2.

### D10. Founder-voice blocks included for all four practices, symmetrically

Per BRIEF §10, a founder/teacher quote may appear only on that tradition's own page, framed
as perspective not evidence. To keep this symmetric, every featured practice — not just
Isha Kriya — carries one clearly-framed, sourced quote block rendered by the same
component. The Wim Hof quote was changed from an initially-drafted profane paraphrase to a
clean, commonly-cited line, because the paraphrase violated the verbatim-and-sourced rule.
See FLAGGED F3.

### D11. Site kept `noindex` + `robots.txt` disallow, staging-only deploy

Per BRIEF §13/§18: a `<meta name="robots" content="noindex,nofollow">` on every page, a
site-wide `robots.txt` disallow, and a GitHub Pages staging workflow. No custom domain, no
production flag. A visible staging banner states the review status.

### D12. Some PubMed records carry corrupted DOIs (indexing artifact)

Several Heartfulness records return DOIs that point to unrelated older papers. Where a
verified DOI was found it is used; where uncertain, the PMID link is authoritative and a
note appears on the research library page. See FLAGGED F4.

### D13. NIH iCite / RCR impact metric not surfaced as a per-practice number

BRIEF §8 lists RCR as an impact input. Surfacing a normalized citation number per practice
risks becoming a de-facto composite "score" and could disadvantage newer practices with
fewer citations regardless of quality. Impact is instead reflected qualitatively (study
design and count on one hierarchy). Flagged as a deviation-by-omission for reviewer
confirmation. See FLAGGED F5.

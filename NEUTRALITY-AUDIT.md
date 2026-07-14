# NEUTRALITY-AUDIT.md — the credibility keystone

Positive proof that the independence contract (BRIEF §2) held during the v1 build. This
audit exists to make the trustworthiness of the whole enterprise checkable, not merely
asserted. Where possible, claims here are verifiable by inspecting the source in this
repository. Build date: 2026-07-14.

Naming: the featured entry is presented as **Miracle of Mind**; **Isha Kriya** is the
protocol its studies tested (see DECISIONS D14). "MoM" abbreviates Miracle of Mind.

The question this document answers: **did Miracle of Mind / Isha Kriya receive any
advantage — in scoring, wording, placement, or scope — that another practice did not?**
The finding is **no**, and below is the evidence.

---

## A. MoM's evidence tier matches its own corpus (BRIEF §2.4)

Miracle of Mind (the app delivering the Isha Kriya practice) is rated **"Pilot /
early-stage"** — the *lowest* evidence tier of the four featured practices. This is not a
courtesy; it is what the directly-mapped corpus supports:

| Practice | Evidence-depth tier | Direct-evidence corpus |
|---|---|---|
| Miracle of Mind (studied as Isha Kriya) | **Pilot / early-stage** | 1 RCT (null on primary), 1 uncontrolled observational (high dropout), 1 single-session pilot, 1 feasibility RCT |
| Heartfulness | Emerging | several small RCTs + cohorts, no meta-analysis |
| Wim Hof Method | Limited / mixed | 1 landmark mechanistic RCT + 1 systematic review; several nulls |
| Yoga Nidra | Emerging | multiple small RCTs + 2 meta-analyses (rated low/very-low certainty) |

Verifiable facts a reviewer can check:
- MoM's **one genuine RCT (Chopra 2023) was null on its primary endpoint**, and the page
  says so in its first evidence bullet and in the claims register (IK1).
- The larger, more favorable Isha studies (Shambhavi Mahamudra / Inner Engineering) are
  **firewalled as a different practice** and carry a visible "Tested a different practice"
  tag. Had they been counted (the tempting, biased choice), MoM's tier would have risen.
  The build took the conservative reading. See DECISIONS D1, FLAGGED F6.
- MoM is therefore **not shown as better-evidenced than any practice with a larger
  literature** — it is shown as the least-evidenced of the four, because it is.

## B. No practice-family or institution bonus exists in the pipeline (BRIEF §2.3)

The predecessor's additive weights — the "+yogic" family bonus and the
"+affiliated-institution" bonus — are **abolished and absent**. Verifiable in source:

- Evidence depth is an **ordinal tier from study count and design on one hierarchy**
  (`src/data/techniques/*.json` → `scorecard.evidenceDepth`), not a computed composite with
  weight terms. There is no code path that adds points for a tradition or an institution.
  (DECISIONS D2.)
- A source-level check: grep the repository for weighting terms. There is **no** `yogic`
  weight, `affiliation` weight, `bonus`, or `boost` multiplier anywhere in
  `src/lib/data.js` or the data files. The only ordering key is a neutral `order` integer
  used identically for display (DECISIONS D9).
- The six axes are rendered by **one shared component** (`src/components/Scorecard.astro`)
  and one shared table (`/evidence-map`), so no practice can receive a bespoke, more
  flattering presentation.

## C. MoM's page is no more favorably worded than its peers' (BRIEF §2.2)

Structural symmetry (all four dossiers rendered by the **same** `[slug].astro` template
and the same components — verifiable by inspection):

| Template element (BRIEF §12) | Miracle of Mind | Heartfulness | Wim Hof | Yoga Nidra |
|---|---|---|---|---|
| Neutral one-line definition | ✅ | ✅ | ✅ | ✅ |
| Lineage / access / cost | ✅ | ✅ | ✅ | ✅ |
| Evidence dossier (claim-strength) | ✅ | ✅ | ✅ | ✅ |
| Multi-axis scorecard | ✅ | ✅ | ✅ | ✅ |
| Limitations & open questions | ✅ | ✅ | ✅ | ✅ |
| Safety | ✅ | ✅ | ✅ (substantive) | ✅ |
| Self-research disclosure | ✅ | ✅ (identical wording) | n/a | n/a |
| Single official-resource link block | ✅ | ✅ | ✅ | ✅ |
| Full citations + disclaimer | ✅ | ✅ | ✅ | ✅ |

Wording symmetry checks:
- **Limitations are not softer for MoM.** MoM's limitations section leads with "only one
  genuine randomized controlled trial has tested this practice (as Isha Kriya), and it did
  not confirm benefit on its primary outcome" — at least as blunt as any peer's.
- **Affiliated-research disclosure is identical.** MoM and Heartfulness use the same
  sentence pattern ("several supporting studies were conducted by [affiliated] researchers
  ... disclosed here in the same terms used for any other practice's in-house research").
  Verifiable: `selfResearchDisclosure` fields in both JSON files. (DECISIONS D5.)
- **No second-person health promises, no banned science verbs** anywhere, including MoM's
  page. Automated scan passed with only false positives (journal name "Cureus"; the
  methodology page naming the banned words). (CLAIMS-REGISTER site-wide checks.)
- **Body-length is not skewed toward MoM.** Rendered word counts: Miracle of Mind ~1,950,
  Heartfulness ~1,940, Wim Hof ~2,230, Yoga Nidra ~2,000. MoM is mid-pack; the longest page
  is Wim Hof, driven by its mandatory safety section (BRIEF §6.3), not favorable copy.

## D. MoM's placement is not privileged (BRIEF §2.2, §7)

- The evidence map and every technique listing use **one fixed order everywhere**, never
  sorted by an axis or by merit (DECISIONS D9). MoM's first position is the arbitrary brief
  order and is documented as such; FLAGGED F2 offers the reviewer a one-line reorder to
  remove even the appearance of prominence.
- The homepage introduces all four practices in the **same card component** with the same
  fields. MoM gets no hero treatment, no larger card, no distinct styling.
- No imagery privileges any practice; the design is text-only and clinical (BRIEF §13).

## E. The scope rules were applied to MoM's disadvantage where honesty required (BRIEF §2.5)

- The **evidence-landscape section** states plainly that the most-studied practices (MBSR,
  MBCT, TM, Vipassana) are course-/retreat-delivered and that **none of the four featured
  app-based practices — MoM included — is among the most-researched forms of meditation.**
  This directly prevents the reader from inferring app-based (hence MoM) leadership.
- MoM's dose caveat (studied protocol is longer than the ~7-min app session) is stated as a
  limitation, per BRIEF §6.1 — an honesty cost borne by MoM specifically.

## F. Success metric integrity (BRIEF §1, §16 anti-bias lock)

- **No install-optimization anywhere.** There is no app-store deep-link push, no "download
  now" call-to-action styling, no conversion instrumentation. MoM's app link uses the
  **same neutral "official free resource" link block** as every other practice's resource
  link. Verifiable: `officialResource` field + shared render in `[slug].astro`.
- Nothing in the build was optimized for downloads over trust. The About page states
  success is measured in trust and citation, not installs.

## G. Residual risks (handed to the reviewer)

Full transparency requires naming what this audit cannot self-certify:
1. The Isha-Kriya-vs-SMK firewall (A) is a judgment call; if overturned, MoM's tier rises.
   Flagged (F6) precisely because it is the load-bearing neutrality decision.
2. Fixed-order first placement (D) could be misread; reorder option offered (F2).
3. Wim Hof safety sourcing leans partly on non-peer-reviewed material (F1); a reviewer
   should confirm the safety framing is fair rather than punitive toward a competitor.
4. This audit was produced by the same process that built the site. It is a **self-audit**
   and is explicitly *not* a substitute for the independent Gate-2 reviewer (BRIEF §18).

## Conclusion

On every dimension the contract names — evidence tier, scoring pipeline, wording,
placement, scope, and success metric — Miracle of Mind (the Isha Kriya practice) was held
to the same rules as its peers and, where honesty demanded, rated *below* them. The
independence contract (BRIEF §2) held. The build's own confidence in that finding is
recorded here alongside the residual risks that only a qualified independent reviewer can
close.

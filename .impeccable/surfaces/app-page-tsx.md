---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# Home (single-page portfolio)

Scope: the whole one-page site (app/page.tsx and its sections). Visitor mode: Experience.
Audience: hiring managers/recruiters, product/design leads, engineers. Action: contact or download CV.
Constraints: keep current copy (ask before rewriting), light + dark themes, AFOO logo, no fabricated proof. Not flashy/slow, not corporate/bland, not dark-tech cliché, not empty.
Memorable moment: a catalogue entry opening into its full spec sheet.

## Direction contract

THESIS: Every project is a designed object in an industrial-design catalogue: the object, its spec sheet, and a caption with the product decisions behind it. Refuses the centred-name-over-card-grid developer portfolio.

OWN-WORLD: Warm matte grey ground (#e7e5e0), graphite ink (#1e1e1c), signal orange (#f25a1d) only on the one primary action, power-green (#5b7f5a) for "current/live". Dark theme inverts to graphite ground with warm-grey ink. Spec tables with 2px top rule and hairline rows, "Fig. 0X" captions, round dot controls that press in, large flush-left grotesk.

STORY: The visitor reads the name and "I turn ideas into products", scans the role facts in the spec table, studies each work as an object with its engineering spec and product decisions, then contacts or downloads the CV.

FIRST VIEWPORT: Single column, no spec table (user decision). Nav strip on top (AFOO logo left, section links with live power dot centred, theme switch and CV key right). "Hi, I'm" then the name flush-left on two lines at up to ~168px, sized to its container; statement and bio side by side beneath. A hairline rule, then a foot row: orange dot "See my work" left; power-dot role line and GitHub/LinkedIn/Twitter links right.

FORM: Product Catalogue, position 1 on the ordered list. seed:33db12387f5c1b26. Signature interaction: a catalogue entry opens into its full spec sheet through a spring shared-element transition, with drag-to-dismiss. Motion grammar: interruptible springs, press-in on pointerdown, crossfade under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

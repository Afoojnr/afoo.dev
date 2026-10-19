# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitors are hiring managers and recruiters, product and design leads, and fellow engineers. They arrive to judge Afolabi as an engineer and as someone with product sense, then decide whether to get in touch (by email or LinkedIn) or download the CV.

## Product Purpose

afoo.dev is Afolabi's personal portfolio: a single-page site (Hero, About, Experience, Works, Contact, Footer) that presents their work, the problems they solve and the technologies they use. Success is a visitor who understands quickly what Afolabi has shipped and emails them or downloads the CV.

## Positioning

An engineer who also leads product. Afolabi is Founding Engineer & Product Lead at Propatis HQ, where they ship the frontend for web and mobile and also own roadmap, product design and marketing. They also build their own products (Applyd Hub, the open-source Lab Brain) and take on client work. Few frontend portfolios can truthfully claim both sides.

## Operating Context

Visitors skim on desktop or phone, often as part of reviewing several candidates. The site is a Next.js 16 App Router app (React 19, Tailwind CSS 4, TypeScript, Motion, Radix UI, next-themes) managed with yarn. Light and dark themes follow the system setting, and switching crossfades the whole page. All content (experience, projects, skills, links) lives in `constants/`. There is no backend, form or CMS: contact is a direct email.

## Capabilities and Constraints

- Sections: Hero, About, Experience, Works, Contact, Footer, with a fixed navigation bar that hides while reading down and returns on scroll up.
- Contact is a `mailto:` link, a copy-email button, the CV download and social links (GitHub, LinkedIn, Twitter). There is no contact form.
- CV is served as a PDF at `public/afoo_cv.pdf`.
- Work history: Propatis HQ (2024 to present), Neo64 GmbH (2023 to 2024), DigiSign Technologies Limited (2022 to 2023).
- Projects (8): Propatis HQ, Applyd Hub, Lab Brain (open source), Perry Luscious (freelance), Rungis Express, Fideco, DigiSign, Klierfeld. Each opens a case-study sheet with a pinned action bar for its links.
- Link previews, favicon and Open Graph image are generated in code; metadata, sitemap, robots and structured data are set in `app/`.
- Accessibility: keyboard reachable, visible focus, reduced-motion respected (motion degrades to still or instant), animated text keeps a plain-text copy for screen readers, touch devices get no pointer-only effects.

## Visual System

- **Palette:** matte grey ground, graphite ink, signal orange reserved for the one primary action (and small moments of "idea becoming product"), green only for "live" or current. Dark theme inverts to a graphite ground with warm grey ink.
- **Type:** Archivo, a variable font on weight and width, for everything. Mokoto is reserved for the AFOO wordmark. Display type is very large and flush to the grid.
- **Motion:** springs that stay interruptible, press-in on pointer-down, and continuous cursor response (the name's width and weight stretch, the bio's letters ripple, the primary dot reaches toward the cursor, a soft spotlight and ring cursor on mouse devices). Scroll scenes: a pinned About story where the text takes colour as you read, and Works cards that stack over each other. Everything has a still fallback.
- **Tone:** confident and precise, never flashy, slow, corporate or dark-tech cliché.

## Brand Commitments

- The AFOO name and the existing logo files (`logo-light.png`, `logo-dark.png`) are fixed.

## Evidence on Hand

Real experience entries and project write-ups with screenshots in `public/images`. Links to live sites, the App Store and Google Play, and the Lab Brain repository. No testimonials, metrics or client quotes exist; future work must not fabricate any.

## Product Principles

- Make the "engineer who leads product" story visible, not just the code.
- Show real work first; never invent proof, testimonials or numbers.
- A recruiter should get who Afolabi is and how to contact them within seconds.
- Craft and interaction should show engineering and product judgment, not decoration.
- Ask before rewriting existing copy.

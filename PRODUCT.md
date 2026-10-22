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

Visitors skim on desktop or phone, often as part of reviewing several candidates. The site is a Next.js 16 App Router app (React 19, Tailwind CSS 4, TypeScript, Motion, Radix UI, next-themes, next-intl) managed with yarn. Light and dark themes follow the system setting; the theme switch sits in the footer (low priority), and switching crossfades the whole page. English and French: an EN/FR switch in the navbar and mobile menu, remembered in the `NEXT_LOCALE` cookie; first visits follow the browser language. The French site links to the French CV. All visible text lives in `messages/<locale>/<section>.json` (one file per section, loaded by `i18n/`); `constants/` holds only data that doesn't change by language (images, links, dates, tech tags). There is no backend, form or CMS: contact is a direct email. Page views are counted with Vercel Web Analytics, which is cookieless, so no consent banner is needed; the only cookie is the visitor's language choice.

## Capabilities and Constraints

- Sections: Hero, About, Experience, Works, Contact, Footer, with a fixed navigation bar that hides while reading down and returns on scroll up.
- Contact is a `mailto:` link, a copy-email button, the CV download and social links (GitHub, LinkedIn, Twitter). There is no contact form.
- CV: generated from the site's own text at `/cv` and exported with `yarn cv:export` to `public/Abdulhamid-Afolabi-CV.pdf` and `-FR.pdf`; it opens in a new tab. Variants per kind of job live in `constants/cv.ts`.
- Work history: Propatis HQ (2024 to present), Applyd Hub as solo founder under Afoo Inc (2026 to present), Neo64 GmbH (2023 to 2024), DigiSign Technologies Limited (2022 to 2023).
- Availability: Contact says "Available full-time from Oct 2027" and "Lyon, France · open to relocation" (`messages/<locale>/contact.json`).
- Projects (8): four featured case studies (Applyd Hub, Propatis HQ, Perry Luscious, Lab Brain) in the stacked cards, each structured as problem, role, what I did and result; then a "More work" list (Rungis Express, Fideco, DigiSign, Klierfeld). Both open the same sheet with a pinned action bar for its links.
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

Real experience entries and project write-ups with screenshots in `public/images`. Links to live sites, the App Store and Google Play, and the Lab Brain repository. Metrics supplied by Afolabi: Propatis ~200 daily visitors and 80+ sign-ups (team of 4), Applyd Hub 30+ downloads, Perry Luscious ~80% of orders (about 20 a month) via the website. The Perry Luscious testimonial is the owner's own verbal review, condensed. Testimonials marked `placeholder` render only in development. Future work must not fabricate proof or present a placeholder as real.

## Product Principles

- Make the "engineer who leads product" story visible, not just the code.
- Show real work first; never invent proof, testimonials or numbers.
- A recruiter should get who Afolabi is and how to contact them within seconds.
- Craft and interaction should show engineering and product judgment, not decoration.
- Ask before rewriting existing copy.

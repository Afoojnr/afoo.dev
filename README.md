# Abdulhamid Afolabi — Portfolio

Personal portfolio of Abdulhamid Afolabi, a software engineer who builds web and mobile products from idea to launch. It covers my story, experience, and selected projects.

**Live site:** [afoo.dev](https://afoo.dev)

## Highlights

- **Single-page, five sections:** Hero, About, Experience, Works, Contact.
- **Motion with purpose:** spring-based animation, scroll-driven scenes (pinned About story, stacking project cards), and cursor-responsive typography.
- **Case studies:** featured projects open a sheet with the problem, my role, what I did and the result; older work sits in a compact archive list.
- **English and French:** a language switch with no `/en` or `/fr` in the URL; the choice is saved in a cookie, and first visits follow the browser language.
- **Generated CV:** the CV is built from the same text as the site and exported to PDF, with versions tailored to different kinds of jobs.
- **Light and dark themes** with a crossfade on switch, following the system setting by default.
- **Accessible by default:** keyboard navigation, visible focus, reduced-motion support, and a plain-text copy of animated text for screen readers.
- **SEO ready:** metadata, generated Open Graph image and favicon, sitemap, robots, and structured data.
- **Privacy-friendly analytics:** Vercel Web Analytics, which sets no cookies, so the site needs no consent banner.

## Tech Stack

| Area      | Tools                                      |
| --------- | ------------------------------------------ |
| Framework | Next.js 16 (App Router), React 19          |
| Language  | TypeScript                                 |
| Styling   | Tailwind CSS 4                             |
| Motion    | Motion (`motion/react`)                    |
| UI        | Radix UI (dialog, hover card), React Icons |
| Theming   | next-themes                                |
| i18n      | next-intl                                  |
| Analytics | Vercel Web Analytics                       |
| CV export | Playwright (with the local Chrome)         |
| Tooling   | ESLint, Prettier, Husky, commitlint        |

## Getting Started

Requires Node.js 20.9 or later and [Yarn](https://yarnpkg.com).

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command             | What it does                   |
| ------------------- | ------------------------------ |
| `yarn dev`          | Start the development server   |
| `yarn build`        | Create a production build      |
| `yarn start`        | Serve the production build     |
| `yarn lint`         | Run ESLint                     |
| `yarn ts-check`     | Type-check without emitting    |
| `yarn format:check` | Check formatting with Prettier |
| `yarn format:fix`   | Format the codebase            |
| `yarn cv:export`    | Export the CV PDFs (see below) |

### Configuration

Optional: set `NEXT_PUBLIC_SITE_URL` to your deployed address so links and previews use the right domain (it defaults to `https://afoo.dev`).

## Project Structure

```
app/          Routes (the site and /cv), layout, metadata, icons, Open Graph image
components/   Shared UI (navigation, language and theme switches, motion primitives)
sections/     Page sections (Hero, About, Experience, Works, Contact, Footer) and the CV
messages/     All visible text, one JSON file per section, in en/ and fr/
i18n/         Language detection, message loading and the language switch action
constants/    Data that is the same in every language: images, links, dates, CV versions
hooks/        Reusable hooks (pointer, reduced motion, active section, dates)
lib/          Helpers: motion presets, theme transition, project links, durations
scripts/      CV export
types/        Shared TypeScript types
public/       Images, fonts, and the exported CV PDFs
```

### Editing content

- **Text:** edit `messages/en/<section>.json` and the matching file in `messages/fr/`. A key missing from the French files fails `yarn ts-check`.
- **Projects and experience data** (links, dates, images, tech tags): `constants/index.ts`.

### The CV

The CV is the `/cv` page, built from the same messages plus `messages/<lang>/cv.json`. Versions for different kinds of jobs live in `constants/cv.ts`: each one picks the summary, roles, bullets, projects and skills it shows. Preview one at `/cv?variant=research`.

To export, start a server (`yarn dev`) and run:

```bash
yarn cv:export
```

This writes `public/Abdulhamid-Afolabi-CV.pdf` and `-FR.pdf` (the versions the site links to) and every version to `cv-exports/` (not committed), and prints the page count of each. It uses your installed Chrome; set `CHROME_PATH` for another browser or `CV_URL` for another server.

## Contributing

Commits follow [Conventional Commits](https://www.conventionalcommits.org) (`feat:`, `fix:`, `chore:`), enforced by commitlint. A pre-commit hook runs type-check, lint, and formatting on staged files.

## Contact

[hello@afoo.dev](mailto:hello@afoo.dev) · [GitHub](https://github.com/Afoojnr) · [LinkedIn](https://www.linkedin.com/in/abdulhamidafolabi)

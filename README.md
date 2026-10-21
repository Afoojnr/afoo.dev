# Afolabi Abdulhamid — Portfolio

Personal portfolio of Afolabi Abdulhamid, a software engineer who builds web and mobile products from idea to launch. It covers my story, experience, and selected projects.

**Live site:** [afoo.dev](https://afoo.dev)

## Highlights

- **Single-page, five sections:** Hero, About, Experience, Works, Contact.
- **Motion with purpose:** spring-based animation, scroll-driven scenes (pinned About story, stacking project cards), and cursor-responsive typography.
- **Case studies:** each project opens a sheet with the description, key features, stack, and links, with the main action always in view.
- **Light and dark themes** with a crossfade on switch, following the system setting by default.
- **Accessible by default:** keyboard navigation, visible focus, reduced-motion support, and a plain-text copy of animated text for screen readers.
- **SEO ready:** metadata, generated Open Graph image and favicon, sitemap, robots, and structured data.

## Tech Stack

| Area      | Tools                                      |
| --------- | ------------------------------------------ |
| Framework | Next.js 16 (App Router), React 19          |
| Language  | TypeScript                                 |
| Styling   | Tailwind CSS 4                             |
| Motion    | Motion (`motion/react`)                    |
| UI        | Radix UI (dialog, hover card), React Icons |
| Theming   | next-themes                                |
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

### Configuration

Optional: set `NEXT_PUBLIC_SITE_URL` to your deployed address so links and previews use the right domain (it defaults to `https://afoo.dev`).

## Project Structure

```
app/          Routes, layout, metadata, generated icons and Open Graph image
components/   Shared UI (navigation, cursor, themed controls, motion primitives)
sections/     Page sections: Hero, About, Experience, Works, Contact, Footer
constants/    Content: experience, projects, skills, links
hooks/        Reusable hooks (pointer, reduced motion, active section)
lib/          Helpers: motion presets, theme transition, project parsing
types/        Shared TypeScript types
public/       Images, fonts, and the CV
```

All page content lives in `constants/`, so projects and experience can be updated without touching components.

## Contributing

Commits follow [Conventional Commits](https://www.conventionalcommits.org) (`feat:`, `fix:`, `chore:`), enforced by commitlint. A pre-commit hook runs type-check, lint, and formatting on staged files.

## Contact

[hello@afoo.dev](mailto:hello@afoo.dev) · [GitHub](https://github.com/Afoojnr) · [LinkedIn](https://www.linkedin.com/in/abdulhamidafolabi)

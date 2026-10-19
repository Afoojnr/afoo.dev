# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is yarn (`yarn.lock`); the README mentions npm but the lockfile is yarn.

- `yarn dev` — dev server at http://localhost:3000
- `yarn build` / `yarn start` — production build / serve
- `yarn lint` / `yarn lint:fix` — ESLint (flat config in `eslint.config.mjs`, extends next + prettier)
- `yarn format:check` / `yarn format:fix` — Prettier (`prettier-plugin-tailwindcss` sorts Tailwind classes; no trailing commas, double quotes, no parens on single-arg arrows)

## Architecture

Single-page portfolio on Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript. Path alias `@/*` maps to the repo root (no `src/` dir).

## Verification

Work is done when `yarn ts-check` and `yarn lint` pass with no errors. Show the
output rather than claiming success. Fix root causes; never add `@ts-ignore` or
disable a lint rule to get green.

## Tooling gotchas

- Commits must follow Conventional Commits (`feat:`, `fix:`, `chore:` …); commitlint
  rejects others. Husky runs lint-staged (typecheck, lint, format) on commit.

## UI components

- Use the design skills in `.claude/skills/` when designing or reviewing UI plus impeccable skills plugin initialized. Ask to install the impeccable skills if not found. They load on their own from their descriptions, so no need to restate them here.

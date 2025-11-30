# Afolabi's Portfolio

Hi 👋, I'm Afolabi. I'm a software engineer who builds modern, interactive web experiences with a strong focus on frontend craftsmanship, but I also design end-to-end solutions that span backend, tooling, and product design. This portfolio highlights my best work, the problems I solve, and the technologies I use.

## Overview

Built with **Next.js 16**, this portfolio features:

- ✨ **Smooth animations** using Framer Motion
- 🌐 **3D interactive elements** powered by Three.js
- 🎨 **Dark/Light theme support** with next-themes
- 📱 **Fully responsive design** with Tailwind CSS
- ⌨️ **Keyboard accessible** navigation
- 🎯 **Sections**: Hero, About, Experience, Works, and Contact

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **3D Graphics**: [Three.js](https://threejs.org) with React Three Fiber
- **UI Components**: Radix UI
- **Icons**: React Icons
- **Email**: EmailJS for contact form
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # Reusable UI components
├── sections/         # Page sections (Hero, About, Works, etc.)
├── constants/        # Constants and configuration
├── types/            # TypeScript type definitions
├── public/           # Static assets (images, GeoJSON)
└── styles/           # Global styles
```

## Development

The site is organized into logical sections with smooth scroll navigation. Each section is a React component with built-in animations and responsive layouts.

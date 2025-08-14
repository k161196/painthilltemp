# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 static landing page for PaintHill company (https://painthill.in) built with TypeScript and Tailwind CSS. The project uses Next.js App Router architecture and is configured for static export to deploy on GitHub Pages.

## Common Development Commands

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production (outputs to /out directory)
npm run start        # Start production server
npm run lint         # Run ESLint

# Deployment
npm run deploy       # Build and deploy to GitHub Pages
```

## Architecture Overview

### Component Structure
- **App Router**: Uses `/app` directory with `page.tsx` as main component and `layout.tsx` for shared layout
- **Components**: Located in `/app/components/` organized by feature (Banner, Aboutus, Digital, etc.)
- **Static Assets**: All images and static files in `/public/` directory
- **Styling**: Tailwind CSS with custom design tokens defined in `tailwind.config.js`

### Key Configuration Files
- **next.config.js**: Configured for static export with `output: "export"` and unoptimized images
- **tailwind.config.js**: Custom color palette, breakpoints (lg: 1150px), and large display font sizes
- **package.json**: Homepage set to https://painthill.in for GitHub Pages deployment

### Static Export Setup
The project is configured for static site generation:
- Images are unoptimized (required for static hosting)
- Outputs to `/out` directory
- GitHub Actions workflow handles automated deployment
- Custom domain configured via CNAME file

### Component Patterns
- Functional components using React hooks
- Some components use "use client" directive for client-side interactivity
- Scroll-based navbar effects with debounced scroll handling
- Slick Carousel integration for image carousels

### UI/UX Patterns
- **Modal Layout**: GetQuoteModal uses sticky header and footer pattern with scrollable content area
- **Sticky Action Buttons**: Form action buttons are positioned at bottom using `sticky bottom-0` with step-based conditional rendering
- **Flexbox Layout**: Modal uses `flex flex-col` with `max-h-[90vh]` for responsive height management
- **Scrollbar Hidden**: Global CSS hides scrollbars across all elements while maintaining scroll functionality

## Development Notes

- **No Testing Framework**: Currently no test setup exists (Jest, Cypress, etc.)
- **State Management**: Uses React hooks only, no global state management
- **Fonts**: Custom Google Fonts (Dancing Script, Urbanist) configured
- **Several components commented out** in main `page.tsx` (Wework, Featured, Manage, etc.)
- **Empty data file**: `/app/static-data/info.ts` exists but is currently empty

## Deployment Pipeline

Dual deployment strategy:
1. GitHub Actions workflow (`.github/workflows/nextjs.yml`)
2. npm script using gh-pages package

Both methods build the static site and deploy to GitHub Pages with custom domain support.
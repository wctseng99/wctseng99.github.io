# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` - Runs Vite development server
- **Build for production**: `npm run build` - Creates optimized production build in `/dist`
- **Lint code**: `npm run lint` - Runs ESLint with React-specific rules
- **Preview production build**: `npm run preview` - Preview built application locally

## Project Architecture

This is a personal portfolio website built as a React SPA using Vite. The architecture follows these patterns:

### Core Structure
- **Entry point**: `index.html` → `src/main.jsx` → `src/App.jsx`
- **Routing**: Uses React Router with single route serving `Portfolio` component at root path
- **Styling**: Tailwind CSS with dark mode support, custom fonts (Inter, Montserrat)
- **Build tool**: Vite with React plugin

### Component Organization
Components are organized in `/src/Components/` with each component in its own directory:
- **Portfolio**: Main landing page component
- **Sphere**: 3D interactive globe component using React Three Fiber and D3.js
- **Map**: Interactive map visualization 
- **ThemeContext/ThemeSwitcher**: Dark mode implementation
- **Home, About, Experience, Footer, Navbar, Project, Title**: Standard page sections

### Key Technologies
- **React 18** with modern hooks and patterns
- **D3.js** for data visualization and geographic projections
- **React Three Fiber** for 3D graphics (Sphere component)
- **Framer Motion & GSAP** for animations
- **Tailwind CSS** for styling with dark mode
- **MapBox Vector Tiles** for geographic data

### Data Files
- Geographic coordinate data stored in `/src/Components/Sphere/` as JSON files
- Land boundaries with random perturbations for visualizations

### Deployment
- Automated deployment to GitHub Pages via GitHub Actions
- Builds trigger on pushes to `main` branch
- SPA routing handled with redirect script in `index.html`

### Development Notes
- ESLint configured for React with React Refresh for hot reloading
- PostCSS configured for Tailwind processing
- No test framework currently configured
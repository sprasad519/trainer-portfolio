# Copilot Instructions - Trainer Portfolio

## Project Overview

A premium, Apple-inspired personal portfolio website for a Microsoft Certified Trainer (MCT) showcasing professional credentials, expertise, and projects. The design prioritizes trust, clarity, and minimal aesthetic with strong visual hierarchy and accessibility.

## Design Philosophy (STRICT)

- **Minimal & Professional**: Clean white/gray palette, no gradients or flashy effects
- **System-First Typography**: Uses `system-ui, -apple-system, BlinkMacSystemFont` for optimal readability
- **Subtle Animations**: Only Framer Motion scroll-triggers and hover effects
- **Visual Hierarchy**: Large H1 (5-6rem), clear H2-H4 distinctions, comfortable line-height (1.6)
- **ATS-Friendly**: Semantic HTML, accessible structure, no decorative elements

## Architecture & Key Files

**Single-file monolithic structure:**

- [src/App.jsx](../src/App.jsx) - All components (Button, Section, SkillGroup, ProjectCard) and full page layout
- [src/main.jsx](../src/main.jsx) - React 19 entry point with StrictMode
- [src/index.css](../src/index.css) - System font stack, Tailwind directives, typography layer
- [vite.config.js](../vite.config.js) - Minimal Vite + React plugin config

**Static assets:**

- `public/profile-photo.png` - Professional headshot (centered/left-aligned in hero)
- `public/mct-logo.png` - Trust badge in navbar
- `public/mct-footer.png` - Footer logo
- `public/badges/` - Microsoft certification badge images

## Component Patterns

**Reusable Components (in App.jsx):**

1. **Button** - Polymorphic, 3 variants (primary black, secondary gray, outline)

   - Props: `asChild`, `href`, `onClick`, `variant`, `disabled`, `className`, `children`
   - Primary: `bg-black text-white hover:bg-gray-800`
   - No gradients or colors—pure grayscale + black

2. **Section** - Scroll-triggered fade-in animation wrapper

   - Props: `children`, `id`, `className`
   - Uses: `initial={{ opacity: 0, y: 20 }}` → `whileInView={{ opacity: 1, y: 0 }}`
   - Viewport margin: `-50px` (triggers slightly before entering view)
   - `once: true` ensures animations play only once

3. **SkillGroup** - Grouped skill tags with category title

   - Props: `title`, `items` (array of strings)
   - Styled: Gray pill badges, responsive flex wrap
   - Renders skill items as `text-xs rounded-full` tags

4. **ProjectCard** - Portfolio project showcase with link
   - Props: `title`, `description`, `tags`, `link`
   - Includes optional external link arrow icon
   - Hover effect: `whileHover={{ y: -3 }}`

**Animation Patterns:**

- Scroll-triggered sections with `-50px` viewport margin
- Navbar: entrance fade-in (no scroll trigger)
- Cards: subtle lift on hover (`y: -3`, `-2`, `-4`)
- All transitions: `duration: 0.5s` or `duration: 0.8s`
- `once: true` on all scroll triggers (animations play only once)

## Styling Approach

**System Font Stack (CRITICAL):**

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

- No Google Fonts or custom font-weight variations
- Ensures native system font rendering on all platforms
- Optimal reading experience, fastest loading

**Color Palette:**

- Background: `white` (#ffffff)
- Text: `gray-900` (#111827) for headings, `gray-600` (#4b5563) for body
- Borders: `gray-200` (#e5e7eb)
- Hover: `gray-100` (#f3f4f6)
- Primary action: `black` (#000000)
- No blue, red, or colorful accents—pure grayscale

**Typography Hierarchy:**

- H1: 5-6rem, 700 weight, -0.02em letter-spacing, 1.1 line-height
- H2: 2.25rem, 700 weight, -0.015em letter-spacing, 1.2 line-height
- H3: 1.5rem, 600 weight
- Body: 1rem, 400 weight, 1.6 line-height
- Small: 0.875rem (text-sm)
- Tiny: 0.75rem (text-xs)

**Component Classes (in Tailwind layer):**

- `.btn-primary`, `.btn-secondary` (if used in CSS)
- `.card-default` (general card styling)
- No shadow abuse—only subtle `shadow-sm`, `shadow-lg` where appropriate

## Skills Content (STRICT – Do Not Deviate)

**Programming Languages:**

- C#, JavaScript, Python, TypeScript
- HTML5, CSS3, SQL

**Technical Stack:**

- React, Modern JavaScript, Tailwind CSS
- Accessibility (ARIA, semantics, contrast)
- Git, VS Code, Azure DevOps, Docker

**Specializations:**

- Azure cloud architecture, AI services, enterprise solutions
- React development with accessibility focus
- Technical training delivery and curriculum design
- Building accessible, maintainable web applications

## Visitor Location Tracking (OPTIONAL & ETHICAL)

- Lightweight country-level detection via `https://ipapi.co/json/` API
- 3-second timeout to prevent slowdown
- **NO personal data, IP logging, or tracking**
- **NO creepy popups** ("You're from X")
- Shows only in footer/debug context: `"{visitorLocation} visitor"`
- Gracefully fails silent if API unavailable
- Can be easily removed or disabled without breaking site

## Section Structure & Content

1. **Navbar** - Logo, desktop nav links, mobile menu toggle, Contact CTA button
2. **Hero (#about)** - Profile photo (left-aligned desktop, centered mobile), headline, subheading, CTAs
3. **Expertise (#expertise)** - Programming languages grid, technical stack, specializations list
4. **Projects (#projects)** - React project cards with descriptions and GitHub links
5. **Certifications (#certs)** - Featured MCT badge, Azure certifications grid, additional certs
6. **Contact (#contact)** - Email and LinkedIn CTAs, simple call-to-action
7. **Footer** - Copyright, MCT footer logo, tagline

## Build & Development Commands

```bash
npm run dev       # Vite dev server → http://localhost:5173
npm run build     # Production build to `dist/`
npm run lint      # ESLint check
npm run preview   # Preview production build locally
npm run clean     # Remove node_modules & package-lock.json
```

## Key Dependencies & Versions

- **React 19.1.1** - Strict mode enabled
- **Framer Motion 12.23.26** - Scroll animations only
- **Tailwind CSS 3.4.18** - Utility-first CSS (no custom CSS needed)
- **Vite 7.1.7** - Build tool & dev server
- **PostCSS 8.5.6** + **Autoprefixer** - CSS processing
- **ESLint with React hooks config** - Code quality

## Image Fallbacks

**Pattern used throughout:**

```jsx
onError={(e) => {
  e.target.style.display = "none";
  e.target.nextElementSibling.style.display = "flex"; // or "block"
}}
```

- If image fails to load, it hides and shows fallback (initials "SG", checkmark, etc.)
- No broken image placeholders
- Fallbacks are light gray or styled gradients

## Common Tasks

**Update skills/expertise:**

1. Locate "Programming Languages" or "Technical Stack" section in App.jsx
2. Edit `SkillGroup` items array with new skills
3. Maintain the strict 7 language / 4 tech stack rules

**Add project:**

1. Find "Projects" section
2. Add new `ProjectCard` with title, description, tags, GitHub link
3. Keep to 2-3 projects max (quality over quantity)

**Change certifications:**

1. Azure certs: Edit the `map()` array in "Azure Certifications" section
2. Badge filename must match exactly in `/public/badges/`
3. Featured MCT is primary—keep centered and prominent

**Adjust animations:**

1. Modify `initial`, `whileInView`, `whileHover` props in motion components
2. Change `duration` in transitions (0.5 or 0.8 typical)
3. Viewport margin: `-50px` for early trigger (do not increase)
4. `once: true` prevents repeat animations

**Add contact method:**

1. Update email link in CTAs (currently `sprasadg519@gmail.com`)
2. Update LinkedIn URL (currently `https://www.linkedin.com/in/sivaprasadg`)
3. No backend needed—static site only

## Notes

- **No TypeScript** - Uses `.jsx` files with JSX syntax
- **No state management** - React hooks only (`useState`, `useEffect`)
- **No testing framework** - Not configured
- **Single-page app (SPA)** - Hash-based anchors (`#about`, `#certs`, etc.)
- **Mobile-first responsive** - Tailwind breakpoints: sm (640px), md (768px), lg (1024px)
- **Fully accessible** - Semantic HTML, proper heading hierarchy, ARIA labels where needed
- **ATS-friendly** - No decorative elements, clear text structure for parsing

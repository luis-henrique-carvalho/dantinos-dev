# Project Context - Dantinos Dev

## Purpose
Personal portfolio website showcasing projects, skills, and professional experience. Built with Prismic CMS for content management and Next.js for high-performance content delivery.

## Tech Stack

### Core Framework & Runtime
- **Next.js** 16.0.10 (App Router, SSG, Server Components)
- **React** 19.2.3 with React DOM
- **TypeScript** 5+ (strict mode enabled)
- **Node.js** 24.10.2

### CMS & Data Management
- **Prismic** v7.21.3 (@prismicio/client, @prismicio/next, @prismicio/react)
- **Slice Machine** v2.20.5 (component-driven CMS)

### Styling & UI
- **Tailwind CSS** 4.1.17 (primary styling framework)
- **Radix UI** (headless component primitives)
  - @radix-ui/react-dialog
  - @radix-ui/react-dropdown-menu
  - @radix-ui/react-navigation-menu
  - @radix-ui/react-slot
- **Framer Motion** 12.26.2 (animations)
- **Lucide React** 0.562.0 (icon library)

### Utilities
- **clsx** 2.1.1 (class name utilities)
- **tailwind-merge** 3.4.0 (Tailwind class merging)
- **class-variance-authority** 0.7.1 (component variant system)

### Development Tools
- **pnpm** 10.14.0 (package manager)
- **ESLint** 9.39.1 (code linting)
- **Prettier** 3.7.4 (code formatting)
- **prettier-plugin-tailwindcss** 0.7.2 (Tailwind class sorting)
- **concurrently** 9.2.1 (run multiple scripts in parallel)

## Project Conventions

### Code Style
- **Language**: TypeScript with strict mode enabled
- **Formatting**: Prettier (80-character line length)
- **Import Order**:
  1. React/Next imports
  2. Prismic imports
  3. Local components/utilities
  4. Other utilities
- **File Naming**:
  - Components: `PascalCase.tsx` (e.g., `Header.tsx`)
  - Utilities/Lib: `camelCase.ts` (e.g., `prismicio.ts`)
  - Slices: `PascalCase/index.tsx` (e.g., `Hero/index.tsx`)
- **CSS Classes**: Tailwind CSS exclusively (zero custom CSS)
- **Class Merging**: Use `cn()` utility from `@/lib/utils` for conditional classes

### Architecture Patterns

#### Server Components First
- All pages and data-fetching components are Server Components
- Client Components used only for interactivity (Header nav, sheets, dropdowns)
- Never fetch data in Client Components

#### Prismic Integration
- Always use `createClient()` factory from `src/prismicio.ts`
- Pattern for missing pages: `.catch(() => notFound())`
- Dynamic routes must implement `generateStaticParams()` for SSG
- Production caching: `force-cache` (ISR via Prismic webhooks)
- Development caching: `revalidate: 5`

#### Slice Components
- Pure presentation components (no data fetching)
- Accept `SliceComponentProps<Content.SliceName>` for typing
- Always check optional fields with `isFilled.*()` before rendering
- Wrap content in `<Bounded>` for consistent layout
- Use `<PrismicRichText>` for rich text content (pre-styled)

#### Layout & Spacing
- `<Bounded>` component provides max-width + responsive padding
- yPadding options: "sm" (8px), "base" (20px), "lg" (32px)
- Consistent vertical rhythm using Tailwind spacing scale

#### Content Structure
Custom Types:
- `page` – General pages (home, about, etc.)
- `blog_post` – Blog articles with metadata
- `settings` – Global site configuration
- `navigation` – Navigation menu structure

Routes (from `src/prismicio.ts`):
```
{ type: "page", path: "/", uid: "home" }           // Home
{ type: "page", path: "/:uid" }                    // Dynamic pages
{ type: "blog_post", path: "/blog/:uid" }          // Blog posts
{ type: "settings", path: "/" }                    // Global settings
{ type: "navigation", path: "/" }                  // Global navigation
```

### Testing Strategy
- No automated tests configured (add Jest/Vitest if needed)
- Manual testing via `npm run dev`
- ESLint compliance required before commits

### Git Workflow
- Main branch: `main`
- No specific branching strategy documented
- Commit conventions: Not specified (follow conventional commits recommended)

## Domain Context

### Slices Implemented
- **Hero** – Large hero sections with background images
- **About** – About section with rich text
- **Text** – Generic text content block
- **TextWithImage** – Content paired with images
- **Image** – Single image display
- **ImageCards** – Grid of card-based content
- **FeaturedProjects** – Project showcase section
- **ExperienceSection** – Work experience timeline
- **SkillsCertifications** – Skills and certifications display
- **TechStack** – Technology stack showcase
- **Quote** – Pull quotes or testimonials
- **Contact** – Contact information/form
- **Slice Simulator** – Development preview tool

### Components
- `Bounded` – Layout wrapper (max-width + padding)
- `Header` – Navigation component (responsive desktop + mobile drawer)
- `Heading` – Semantic heading component
- `PrismicRichText` – Pre-styled rich text renderer
- `ConditionalWrap` – Utility for conditional wrapping
- Radix UI components in `src/components/ui/` (Button, Card, Sheet, etc.)

## Important Constraints

1. **Do not edit `src/slices/index.ts`** – Auto-generated by Slice Machine
2. **Do not use `any` types** – Enforce strict TypeScript
3. **No custom CSS** – Only Tailwind CSS
4. **Server-side by default** – Prove need for Client Components
5. **Always use `createClient()`** – Never instantiate Prismic client directly
6. **Check fields before rendering** – Use `isFilled.*()` for optional Prismic fields

## External Dependencies

### Prismic CMS
- Repository: dantinos-dev (assumed)
- Content Types: page, blog_post, settings, navigation
- Webhooks: Configured for ISR on content updates
- Preview Mode: Enabled via `/api/preview` and `/api/exit-preview`

### Deployment
- Target: Vercel (assumed, based on Next.js setup)
- Build Command: `npm run build`
- Start Command: `npm start`

### Development Workflow
```bash
pnpm dev              # Run Next.js + Slice Machine concurrently
pnpm lint             # ESLint check
pnpm format           # Prettier format
pnpm slicemachine     # Open Slice Machine UI
pnpm build            # Production build
```

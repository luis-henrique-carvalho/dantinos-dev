# Copilot Instructions - Dantinos Dev

You are a senior expert in **Prismic CMS** and **Next.js 16+**. This is a personal portfolio site built with Prismic as CMS and Next.js App Router for content delivery.

## 🏗️ Core Architecture

**Stack**: Next.js 16.0.10 + Prismic v7.21.3 + Tailwind CSS 4.1.17 + Radix UI
**Package Manager**: pnpm 10.14.0 | **Build**: Slice Machine

**Key Files**:

- `src/prismicio.ts` – Prismic client factory with routes configuration
- `src/app/layout.tsx` – Root layout fetches `settings` & `navigation` from Prismic (critical!)
- `src/slices/index.ts` – Auto-generated slice component registry (DO NOT EDIT)
- `src/components/` – Reusable UI components (Bounded, Header, Heading, PrismicRichText)

**Route Configuration** (in `prismicio.ts`):

```typescript
{ type: "page", path: "/", uid: "home" },          // Home page
{ type: "page", path: "/:uid" },                    // Dynamic pages
{ type: "blog_post", path: "/blog/:uid" },         // Blog posts
{ type: "settings", path: "/" },                    // Global settings
{ type: "navigation", path: "/" },                  // Global navigation
```

## 🎯 Core Development Patterns

### Server Components + Prismic Client Pattern

All pages use **server-side rendering** with `createClient()`:

```typescript
// ✅ CORRECT: src/app/[uid]/page.tsx
const client = createClient();
const page = await client.getByUID("page", uid).catch(() => notFound());

// generateStaticParams must be implemented for dynamic routes
export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");
  return pages.map((p) => ({ uid: p.uid }));
}
```

**Critical Rules**:

- Always use `createClient()` factory (configured with proper cache/revalidate)
- Use `.catch(() => notFound())` pattern for missing documents
- Wrap dynamic routes with `generateStaticParams` for SSG
- Production: auto-uses `force-cache`, Dev: auto-uses `revalidate: 5`

### Slice Components

Slices are pure, layout-focused components that **never fetch data**. Example pattern in `src/slices/Hero/index.tsx`:

```typescript
import { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

const Hero = ({ slice }: SliceComponentProps<Content.HeroSlice>) => (
  <section className="relative bg-slate-900 text-white">
    {isFilled.image(slice.primary.backgroundImage) && (
      <PrismicNextImage field={slice.primary.backgroundImage} fill alt="" />
    )}
    <Bounded yPadding="lg">
      <PrismicRichText field={slice.primary.text} />
    </Bounded>
  </section>
);
```

**Key Rules**:

- Use `isFilled.*()` before rendering optional Prismic fields
- Always wrap content in `<Bounded>` for consistent layout
- Use custom `PrismicRichText` component (wraps @prismicio/react with pre-configured styles)
- Slices are auto-imported in `src/slices/index.ts` by Slice Machine - never edit this file

### Layout Pattern: Bounded

`Bounded` is the layout wrapper for all sections. Provides max-width container + responsive padding:

```typescript
// src/components/Bounded.tsx
<Bounded yPadding="lg" className="bg-slate-900">
  <Content />
</Bounded>
```

**Props**: `yPadding`: "sm" (8px), "base" (20px), "lg" (32px) | `as`: element type | `collapsible`: boolean

### Rich Text with Custom Styling

Use the pre-configured `PrismicRichText` component:

```typescript
// Pre-configured in src/components/PrismicRichText.tsx
// Already styles headings (h1-h3), paragraphs, lists, links, code blocks
<PrismicRichText field={slice.data.description} />

// Override components if needed:
<PrismicRichText
  field={slice.data.description}
  components={{
    paragraph: ({ children }) => <p className="text-lg font-semibold">{children}</p>,
  }}
/>
```

## 🔧 Developer Workflows

### Development Server

```bash
pnpm dev  # Runs Next.js + Slice Machine simultaneously
```

### Slice Management

```bash
pnpm slicemachine  # Opens Slice Machine UI to create/edit slices
```

**Slice Creation Workflow**:

1. Run `pnpm slicemachine`
2. Click "Create Slice" in UI
3. Define fields in UI
4. Component auto-generated in `src/slices/MySlice/index.tsx`
5. Export registered in `src/slices/index.ts` automatically

### Code Quality

```bash
pnpm lint    # ESLint check
pnpm format  # Prettier format (80 char line length)
```

**Import Order**:

```typescript
// 1. React/Next
import { FC, ReactNode } from "react";
import { notFound } from "next/navigation";

// 2. Prismic
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

// 3. Local components
import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

// 4. Utils
import { cn } from "@/lib/utils";
```

**File Naming**:

- Components: `PascalCase.tsx` (e.g., `Header.tsx`)
- Utilities: `camelCase.ts` (e.g., `prismicio.ts`)
- Slices: `PascalCase/index.tsx` (e.g., `Hero/index.tsx`)

## 🎨 Styling & Layout

### Tailwind + Radix Pattern

All styling is Tailwind CSS - no custom CSS. Use `cn()` utility for merging classes:

```typescript
import { cn } from "@/lib/utils";

<div className={cn("px-4 py-2", variant === "active" && "bg-blue-500")} />
```

The `cn()` function uses `clsx` + `tailwind-merge` to handle conditional classes and prevent conflicts.

### Component Library

Pre-built Radix UI components in `src/components/ui/`:

- `Button` – Standard button
- `Card` / `CardHeader` / `CardTitle` / `CardContent` – Card layout
- `NavigationMenu` – Top nav menu
- `DropdownMenu` – Dropdown actions
- `Sheet` – Mobile menu drawer

Used in `Header.tsx` for navigation (responsive design: desktop nav + mobile sheet).

## 🚫 Critical Patterns to Avoid

1. **Don't fetch data in Client Components** – Use Server Components always
2. **Don't edit `src/slices/index.ts`** – Auto-generated by Slice Machine
3. **Don't use `any` types** – Use proper TypeScript types
4. **Don't bypass `createClient()`** – Always use the configured factory
5. **Don't render optional Prismic fields without `isFilled.*()`** – Causes errors

## 📱 Blog & Content Patterns

The blog section in `src/app/blog/` follows the same patterns:

```typescript
// src/app/blog/[uid]/page.tsx
export async function generateStaticParams() {
  const client = createClient();
  const posts = await client.getAllByType("blog_post");
  return posts.map(p => ({ uid: p.uid }));
}

export default async function BlogPost({ params }: { params: Promise<{ uid: string }> }) {
  const { uid } = await params;
  const client = createClient();
  const post = await client.getByUID("blog_post", uid).catch(() => notFound());
  return <SliceZone slices={post.data.slices} components={components} />;
}
```

Note: `params` is now a Promise in Next.js 16 (must be awaited).

## 🔗 Resources

- [Prismic Docs](https://prismic.io/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)

---

**Last Updated**: January 15, 2026 | **Project Version**: 0.0.0

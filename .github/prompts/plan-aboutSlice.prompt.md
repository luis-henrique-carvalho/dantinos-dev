# Plan: Create About Slice from HTML Reference

Create a new Prismic slice component that recreates the About section from `docs/home_page.html`, featuring a timeline-based services list, rich text bio, and statistics grid following the project's established patterns.

## Steps

1. **Create About slice via Slice Machine** – Run `pnpm slicemachine`, create new slice named "About" with fields: `heading` (RichText/heading), `description` (RichText/paragraph), `services` Group (icon Select, title Text, description Text), `stats` Group (value Text, label Text)

2. **Implement component in `src/slices/About/index.tsx`** – Build 2-column layout using `Bounded` wrapper, left column with timeline border and service items (Lucide icons from `lucide-react`), right column with `PrismicRichText` and stats grid

3. **Style with Tailwind matching HTML reference** – Apply `lg:grid-cols-12` layout, timeline design (`border-l-2 border-slate-800`, circular dots at `-left-[39px]` with `bg-accent`, hover scale effects), stats with `grid-cols-3` and accent-colored suffixes

4. **Add icon mapping logic** – Create `iconMap` object mapping string values ("Code", "Smartphone", "Server", etc.) to Lucide React components, render dynamically based on `service.icon` field

## Further Considerations

1. **Icon field options** – Should we use a Select field with predefined icons (Code, Smartphone, Server, Database, Globe, Zap) or allow free text input for flexibility? Recommend Select for content editor simplicity.

2. **Stats value parsing** – The accent highlighting for suffixes (+, %) can be done via regex split or should we add a separate field for the suffix? Current plan uses regex for automatic detection.

3. **Responsive behavior** – Timeline and stats look best on desktop. Should stats collapse to single column or 2-column grid on mobile? Recommend `grid-cols-1 sm:grid-cols-3` for better mobile UX.

## HTML Reference Structure

### About Section Layout (2-column grid)

**Left Column (5/12): Timeline with Services**

- Vertical border line on left side
- 3 repeatable service items with:
  - Circular dot on timeline (accent color, scales on hover)
  - Icon box (bordered, hover effect)
  - Title and description text

**Right Column (7/12): Bio + Stats**

- Heading ("About me")
- Rich text description (2 paragraphs)
- 3-column stats grid with border separator:
  - Large number with accent suffix
  - Uppercase label

### Content from HTML Reference

**Services:**

1. **Website Development** (icon: Code) – "High-performance responsive websites tailored to your brand."
2. **App Development** (icon: Smartphone) – "Cross-platform mobile applications with seamless UX."
3. **Website Hosting** (icon: Server) – "Secure and scalable deployment solutions."

**Stats:**

1. **120+** – Completed Projects
2. **95%** – Client Satisfaction
3. **10+** – Years of Experience

**Bio Text:**

> I started my software journey from photography. Through that, I learned to love the process of creating from scratch. Since then, this has led me to software development as it fulfills my love for learning and building things.
>
> Specializing in modern frontend architectures, I help businesses transform complex requirements into intuitive digital experiences.

## Implementation Details

### Prismic Model Structure

```json
{
  "primary": {
    "heading": {
      "type": "StructuredText",
      "config": {
        "label": "Heading",
        "single": "heading1,heading2"
      }
    },
    "description": {
      "type": "StructuredText",
      "config": {
        "label": "Description",
        "multi": "paragraph,strong,em"
      }
    },
    "services": {
      "type": "Group",
      "config": {
        "label": "Services",
        "repeat": true,
        "fields": {
          "icon": {
            "type": "Select",
            "config": {
              "label": "Icon",
              "options": [
                "Code",
                "Smartphone",
                "Server",
                "Database",
                "Globe",
                "Zap",
                "Cpu",
                "Layers",
                "Cloud"
              ]
            }
          },
          "title": {
            "type": "Text",
            "config": {
              "label": "Title"
            }
          },
          "description": {
            "type": "Text",
            "config": {
              "label": "Description"
            }
          }
        }
      }
    },
    "stats": {
      "type": "Group",
      "config": {
        "label": "Stats",
        "repeat": true,
        "fields": {
          "value": {
            "type": "Text",
            "config": {
              "label": "Value",
              "placeholder": "120+ or 95%"
            }
          },
          "label": {
            "type": "Text",
            "config": {
              "label": "Label",
              "placeholder": "Completed Projects"
            }
          }
        }
      }
    }
  }
}
```

### Component Structure

```tsx
import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import {
  Code,
  Smartphone,
  Server,
  Database,
  Globe,
  Zap,
  Cpu,
  Layers,
  Cloud,
  type LucideIcon,
} from "lucide-react";

import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

// Icon mapper
const iconMap: Record<string, LucideIcon> = {
  Code,
  Smartphone,
  Server,
  Database,
  Globe,
  Zap,
  Cpu,
  Layers,
  Cloud,
};

type AboutProps = SliceComponentProps<Content.AboutSlice>;

const About: FC<AboutProps> = ({ slice }) => {
  return (
    <Bounded as="section" yPadding="lg">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
        {/* Left Column: Timeline */}
        <div className="lg:col-span-5">
          {slice.primary.services && slice.primary.services.length > 0 && (
            <div className="relative space-y-12 border-l-2 border-slate-800 pl-8">
              {slice.primary.services.map((service, index) => {
                const Icon = iconMap[service.icon as string];
                return (
                  <div key={index} className="group relative">
                    {/* Timeline dot */}
                    <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-[#0f141e] bg-[#ff6b6b] transition-transform group-hover:scale-125"></span>

                    <div className="flex items-start gap-4">
                      {/* Icon box */}
                      <div className="rounded-lg border border-slate-800 bg-slate-900 p-3 text-white transition-colors group-hover:border-[#ff6b6b]/50">
                        {Icon && <Icon className="h-6 w-6" />}
                      </div>

                      {/* Content */}
                      <div>
                        {isFilled.keyText(service.title) && (
                          <h3 className="text-xl font-medium text-white">
                            {service.title}
                          </h3>
                        )}
                        {isFilled.keyText(service.description) && (
                          <p className="mt-1 text-base text-slate-400">
                            {service.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column: About + Stats */}
        <div className="lg:col-span-7">
          {isFilled.richText(slice.primary.heading) && (
            <div className="mb-8">
              <PrismicRichText
                field={slice.primary.heading}
                components={{
                  heading1: ({ children }) => (
                    <h2 className="text-4xl font-semibold tracking-tight text-white">
                      {children}
                    </h2>
                  ),
                  heading2: ({ children }) => (
                    <h2 className="text-4xl font-semibold tracking-tight text-white">
                      {children}
                    </h2>
                  ),
                }}
              />
            </div>
          )}

          {isFilled.richText(slice.primary.description) && (
            <div className="space-y-6 text-lg leading-relaxed text-slate-400">
              <PrismicRichText field={slice.primary.description} />
            </div>
          )}

          {/* Stats Grid */}
          {slice.primary.stats && slice.primary.stats.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-8 border-t border-slate-800 pt-12 sm:grid-cols-3">
              {slice.primary.stats.map((stat, index) => (
                <div key={index}>
                  {isFilled.keyText(stat.value) && (
                    <div className="text-4xl font-semibold text-white">
                      {stat.value.split(/([+%])/).map((part, i) =>
                        part.match(/[+%]/) ? (
                          <span key={i} className="text-[#ff6b6b]">
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                    </div>
                  )}
                  {isFilled.keyText(stat.label) && (
                    <div className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-500">
                      {stat.label}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default About;
```

### Key Styling Classes

**Timeline Design:**

- Container: `relative space-y-12 border-l-2 border-slate-800 pl-8`
- Timeline dot: `absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-[#0f141e] bg-[#ff6b6b] transition-transform group-hover:scale-125`
- Icon box: `rounded-lg border border-slate-800 bg-slate-900 p-3 text-white transition-colors group-hover:border-[#ff6b6b]/50`

**Typography:**

- Heading: `text-4xl font-semibold tracking-tight text-white`
- Service title: `text-xl font-medium text-white`
- Description: `text-lg leading-relaxed text-slate-400`
- Stat value: `text-4xl font-semibold text-white`
- Stat label: `text-sm font-medium uppercase tracking-wide text-slate-500`

**Layout:**

- Grid: `grid gap-16 lg:grid-cols-12 lg:gap-24`
- Left column: `lg:col-span-5`
- Right column: `lg:col-span-7`
- Stats: `grid grid-cols-1 gap-8 sm:grid-cols-3`

## Next Actions

1. Open Slice Machine UI (`pnpm slicemachine`)
2. Create new slice named "About"
3. Add all fields as specified in model structure
4. Save and push to Prismic
5. Implement component code in generated `src/slices/About/index.tsx`
6. Test with sample content in Slice Machine simulator
7. Add to a page document and verify in development server

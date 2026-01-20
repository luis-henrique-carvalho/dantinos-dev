"use client";

import { type Content, isFilled } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";
import { motion } from "framer-motion";
import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";
import {
  Briefcase,
  Layers,
  Code2,
  Star,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  layers: Layers,
  "code-2": Code2,
  star: Star,
  zap: Zap,
};

export type ExperienceSectionProps =
  SliceComponentProps<Content.ExperienceSectionSlice>;

/**
 * Component for "ExperienceSection" Slices.
 * Container for professional experience timeline with multiple job entries.
 */
const ExperienceSection: FC<ExperienceSectionProps> = ({ slice }) => {
  // Container animation with stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Individual item animations
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  // Heading animation
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <Bounded
      as="section"
      yPadding="base"
      id="experience"
      className="border-t border-white/5 bg-card"
    >
      {/* Section Heading */}
      {isFilled.richText(slice.primary.heading) && (
        <motion.div
          className="mb-16"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <PrismicRichText
            field={slice.primary.heading}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-4xl font-semibold tracking-tight text-white">
                  {children}
                </h2>
              ),
            }}
          />
        </motion.div>
      )}

      {/* Experience Items Timeline */}
      <motion.div
        className="relative space-y-8 sm:space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Vertical Timeline Line - Desktop Only */}
        <div className="absolute left-[27px] top-2 bottom-2 w-px bg-slate-800 z-0 hidden md:block" />

        {/* Experience Items */}
        {slice.primary.items && slice.primary.items.length > 0 ? (
          slice.primary.items.map((item, index) => {
            const Icon = iconMap[item.iconType as string] || Briefcase;

            return (
              <motion.div
                key={index}
                className="group relative z-10"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Mobile Layout: Icon on top, content below */}
                <div className="md:hidden">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Icon */}
                    <div className="shrink-0 mt-1">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-white shadow-lg transition-colors group-hover:border-accent group-hover:text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Title and Company - Mobile */}
                    <div className="min-w-0 flex-1">
                      {isFilled.keyText(item.jobTitle) && (
                        <h3 className="text-lg font-semibold text-white leading-tight">
                          {item.jobTitle}
                        </h3>
                      )}
                      {isFilled.keyText(item.company) && (
                        <p className="text-accent text-sm font-medium mt-1">
                          {item.company}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Date Badge - Mobile */}
                  {isFilled.keyText(item.dateRange) && (
                    <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 font-mono text-xs text-slate-400 mb-4">
                      {item.dateRange}
                    </span>
                  )}
                </div>

                {/* Desktop Layout: Icon left, content right */}
                <div className="hidden md:flex flex-row gap-8">
                  {/* Left: Icon Circle */}
                  <div className="shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-white shadow-lg transition-colors group-hover:border-accent group-hover:text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="grow pt-2">
                    {/* Header: Title, Company, Date */}
                    <div className="mb-4 flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
                      <div>
                        {isFilled.keyText(item.jobTitle) && (
                          <h3 className="text-xl font-semibold text-white">
                            {item.jobTitle}
                          </h3>
                        )}
                        {isFilled.keyText(item.company) && (
                          <p className="text-accent text-sm font-medium">
                            {item.company}
                          </p>
                        )}
                      </div>

                      {/* Date Range Badge */}
                      {isFilled.keyText(item.dateRange) && (
                        <span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 font-mono text-xs text-slate-500 w-fit">
                          {item.dateRange}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Achievements List - Both Mobile and Desktop */}
                {isFilled.richText(item.achievements) && (
                  <div className="text-slate-400 md:pl-24">
                    <PrismicRichText
                      field={item.achievements}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="mb-2 leading-relaxed first:mb-3 last:mb-0 text-base">
                            {children}
                          </p>
                        ),
                        list: ({ children }) => (
                          <ul className="text-slate-400 leading-relaxed list-disc list-inside marker:text-slate-700 space-y-2">
                            {children}
                          </ul>
                        ),
                        listItem: ({ children }) => (
                          <li className="text-base">{children}</li>
                        ),
                      }}
                    />
                  </div>
                )}
              </motion.div>
            );
          })
        ) : (
          <p className="text-slate-400">No experience items to display.</p>
        )}
      </motion.div>
    </Bounded>
  );
};

export default ExperienceSection;

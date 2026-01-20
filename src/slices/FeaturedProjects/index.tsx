"use client";

import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import type { SliceComponentProps } from "@prismicio/react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";
import { cn } from "@/lib/utils";

/**
 * Props for `FeaturedProjects`.
 */
export type FeaturedProjectsProps =
  SliceComponentProps<Content.FeaturedProjectsSlice>;

/**
 * Component for "FeaturedProjects" Slices.
 */
const FeaturedProjects: FC<FeaturedProjectsProps> = ({ slice }) => {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, easing: "easeOut" as const },
    },
  };

  const dividerVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 0.8, easing: "easeOut" as const, delay: 0.2 },
    },
  };

  const projectContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const projectItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, easing: "easeOut" as const },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, easing: "easeOut" as const },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, easing: "easeOut" as const },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.4 + i * 0.05, duration: 0.4, easing: "easeOut" as const },
    }),
  };

  return (
    <Bounded
      as="section"
      id="featured-projects"
      yPadding="base"
      className="bg-card"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Section Title */}
      <motion.div
        className="mb-20 flex flex-col items-center"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {isFilled.richText(slice.primary.title) && (
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <Heading as="h2" size="lg" className="text-white">
                  {children}
                </Heading>
              ),
            }}
          />
        )}
        <motion.div
          className="mt-6 h-12 w-0.5 bg-linear-to-b from-[#FF6B6B] to-transparent"
          variants={dividerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        />
      </motion.div>

      {/* Projects List */}
      {isFilled.group(slice.primary.projects) && (
        <motion.div
          className="space-y-32"
          variants={projectContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {slice.primary.projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={cn(
                  "grid items-center gap-12 lg:grid-cols-2",
                  index !== slice.primary.projects.length - 1 && "mb-32",
                )}
                variants={projectItemVariants}
              >
                {/* Project Content */}
                <motion.div
                  className={cn(
                    "order-2",
                    isEven ? "lg:order-1" : "lg:order-2",
                  )}
                  variants={contentVariants}
                >
                  {/* Project Title */}
                  {isFilled.richText(project.project_title) && (
                    <PrismicRichText
                      field={project.project_title}
                      components={{
                        heading3: ({ children }) => (
                          <Heading
                            as="h3"
                            size="md"
                            className="mb-4 text-white"
                          >
                            {children}
                          </Heading>
                        ),
                      }}
                    />
                  )}

                  {/* Tech Stack Tags */}
                  {isFilled.group(project.tech_stack) && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech_stack.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-[#FF6B6B]/50 hover:bg-slate-700"
                          custom={techIndex}
                          variants={tagVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech.tag}
                        </motion.span>
                      ))}
                    </div>
                  )}

                  {/* Project Description */}
                  {isFilled.richText(project.project_description) && (
                    <div className="mb-8 text-lg leading-relaxed text-slate-400">
                      <PrismicRichText field={project.project_description} />
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {isFilled.link(project.github_link) && (
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <PrismicNextLink
                          field={project.github_link}
                          className="inline-flex items-center gap-2 rounded-md bg-[#FF6B6B] px-6 py-2.5 font-medium text-white shadow-lg shadow-[#FF6B6B]/20 transition-all hover:bg-[#ff5252] hover:shadow-[#FF6B6B]/40"
                        >
                          {project.github_link.text || "View Github"}
                        </PrismicNextLink>
                      </motion.div>
                    )}
                    {isFilled.link(project.demo_link) && (
                      <motion.div
                        whileHover={{ scale: 1.05, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <PrismicNextLink
                          field={project.demo_link}
                          className="group inline-flex items-center gap-2 px-6 py-2.5 font-medium text-white transition-colors hover:text-[#FF6B6B]"
                        >
                          {project.demo_link.text || "View project"}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </PrismicNextLink>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Project Visual */}
                <motion.div
                  className={cn(
                    "order-1",
                    isEven ? "lg:order-2" : "lg:order-1",
                  )}
                  variants={imageVariants}
                >
                  <motion.div
                    className="group relative overflow-hidden rounded-lg border border-slate-800 shadow-2xl"
                    whileHover={{ y: -4 }}
                  >
                    <div className="absolute inset-0 z-10 bg-slate-900/50 transition-colors group-hover:bg-transparent" />
                    <PrismicNextImage
                      field={project.project_image}
                      className="h-auto w-full transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </Bounded>
  );
};

export default FeaturedProjects;



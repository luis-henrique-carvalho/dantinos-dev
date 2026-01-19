"use client";

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
import { motion } from "framer-motion";

import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

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

export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps) => {
    // Container animation with stagger effect
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    // Service items animation
    const serviceItemVariants = {
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
                duration: 0.5,
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

    // Description animation
    const descriptionVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
                delay: 0.1,
            },
        },
    };

    // Stats animation
    const statsContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.4,
            },
        },
    };

    const statItemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut" as const,
            },
        },
    };
    return (
        <Bounded as="section" yPadding="base">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
                {/* Left Column: Timeline */}
                <div className="lg:col-span-5">
                    {slice.primary.services && slice.primary.services.length > 0 && (
                        <motion.div
                            className="relative space-y-12 border-l-2 border-slate-800 pl-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {slice.primary.services.map((service, index) => {
                                const Icon = iconMap[service.icon as string];
                                return (
                                    <motion.div
                                        key={index}
                                        className="group relative"
                                        variants={serviceItemVariants}
                                        whileHover={{
                                            x: 8,
                                            transition: { duration: 0.2 },
                                        }}
                                    >
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
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}
                </div>

                {/* Right Column: About + Stats */}
                <div className="lg:col-span-7">
                    {isFilled.richText(slice.primary.heading) && (
                        <motion.div
                            className="mb-8"
                            variants={headingVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
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
                        </motion.div>
                    )}

                    {isFilled.richText(slice.primary.description) && (
                        <motion.div
                            className="space-y-6 text-lg leading-relaxed text-slate-400"
                            variants={descriptionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <PrismicRichText field={slice.primary.description} />
                        </motion.div>
                    )}

                    {/* Stats Grid */}
                    {slice.primary.stats && slice.primary.stats.length > 0 && (
                        <motion.div
                            className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-slate-800"
                            variants={statsContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {slice.primary.stats.map((stat, index) => (
                                <motion.div key={index} variants={statItemVariants}>
                                    {isFilled.keyText(stat.value) && (
                                        <div className="text-4xl font-semibold text-white">
                                            {stat.value.split(/([+%])/).map((part, i) =>
                                                part.match(/[+%]/) ? (
                                                    <span key={i} className="text-accent">
                                                        {part}
                                                    </span>
                                                ) : (
                                                    part
                                                ),
                                            )}
                                        </div>
                                    )}
                                    {isFilled.keyText(stat.label) && (
                                        <div className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-500">
                                            {stat.label}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </Bounded>
    );
};

export default About;

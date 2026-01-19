"use client";

import { type Content, isFilled } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";
import { motion } from "framer-motion";
import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";
import {
    Award,
    ShieldCheck,
    Database,
    Verified,
    Star,
    type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    award: Award,
    "shield-check": ShieldCheck,
    database: Database,
    certificate: Verified,
    star: Star,
};

export type SkillsCertificationsProps =
    SliceComponentProps<Content.SkillsCertificationsSlice>;

// Animation variants for smooth, elegant transitions
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

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
        },
    },
};

const certificationCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
    hover: {
        y: -4,
        transition: {
            duration: 0.2,
        },
    },
};

/**
 * Component for "SkillsCertifications" Slices.
 * Displays technical skills grouped by category and professional certifications.
 * Responsive layout: stacked on mobile, side-by-side on desktop.
 */
const SkillsCertifications: FC<SkillsCertificationsProps> = ({ slice }) => {
    return (
        <Bounded as="section" yPadding="base" className="border-t border-white/5">
            <motion.div
                className="grid gap-16 md:gap-24 lg:grid-cols-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* LEFT COLUMN: SKILLS */}
                <motion.div variants={itemVariants}>
                    {/* Skills Heading */}
                    {isFilled.richText(slice.primary.skillsHeading) && (
                        <motion.div
                            className="mb-8 md:mb-12"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <PrismicRichText
                                field={slice.primary.skillsHeading}
                                components={{
                                    heading2: ({ children }) => (
                                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                                            {children}
                                        </h2>
                                    ),
                                }}
                            />
                        </motion.div>
                    )}

                    {/* Skill Categories */}
                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {slice.primary.skillCategories &&
                            slice.primary.skillCategories.length > 0 ? (
                            slice.primary.skillCategories.map((category, categoryIndex) => (
                                <motion.div key={categoryIndex} variants={itemVariants}>
                                    {/* Category Name */}
                                    {isFilled.keyText(category.category_name) && (
                                        <h4 className="mb-4 text-sm font-medium uppercase tracking-widest text-slate-500">
                                            {category.category_name}
                                        </h4>
                                    )}

                                    {/* Skills Tags */}
                                    <motion.div
                                        className="flex flex-wrap gap-2"
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        {category.skills && category.skills.length > 0 ? (
                                            category.skills.map((skill, skillIndex) => (
                                                <motion.div
                                                    key={skillIndex}
                                                    className="px-4 py-2 rounded-md bg-slate-800/50 border border-slate-700 text-slate-300 text-sm hover:border-accent hover:text-white transition-colors cursor-pointer"
                                                    variants={skillTagVariants}
                                                    whileHover="hover"
                                                >
                                                    {skill.skillName}
                                                </motion.div>
                                            ))
                                        ) : (
                                            <div className="text-slate-500 text-sm">
                                                No skills added
                                            </div>
                                        )}
                                    </motion.div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-slate-500">No skill categories added</div>
                        )}
                    </motion.div>
                </motion.div>

                {/* RIGHT COLUMN: CERTIFICATIONS */}
                <motion.div variants={itemVariants}>
                    {/* Certifications Heading */}
                    {isFilled.richText(slice.primary.certificationsHeading) && (
                        <motion.div
                            className="mb-8 md:mb-12"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <PrismicRichText
                                field={slice.primary.certificationsHeading}
                                components={{
                                    heading2: ({ children }) => (
                                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                                            {children}
                                        </h2>
                                    ),
                                }}
                            />
                        </motion.div>
                    )}

                    {/* Certifications Cards */}
                    <motion.div
                        className="space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {slice.primary.certifications &&
                            slice.primary.certifications.length > 0 ? (
                            slice.primary.certifications.map((cert, certIndex) => {
                                const Icon = iconMap[cert.iconType as string] || Award;

                                return (
                                    <motion.div
                                        key={certIndex}
                                        className="group p-4 rounded-lg bg-[#0B0F17] border border-slate-800 hover:border-accent/50 transition-all duration-300"
                                        variants={certificationCardVariants}
                                        whileHover="hover"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            {/* Left: Icon + Content */}
                                            <div className="flex gap-4 flex-1 min-w-0">
                                                {/* Icon */}
                                                <motion.div
                                                    className="p-2 h-10 w-10 bg-slate-800 rounded flex items-center justify-center text-white shrink-0"
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Icon className="w-5 h-5" />
                                                </motion.div>

                                                {/* Content */}
                                                <div className="min-w-0 flex-1">
                                                    {isFilled.keyText(cert.certificationName) && (
                                                        <h4 className="text-white font-medium group-hover:text-accent transition-colors leading-tight">
                                                            {cert.certificationName}
                                                        </h4>
                                                    )}
                                                    {isFilled.keyText(cert.issuer) && (
                                                        <p className="text-sm text-slate-500 mt-1">
                                                            {cert.issuer}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Right: Year */}
                                            {isFilled.keyText(cert.year) && (
                                                <motion.span
                                                    className="font-mono text-xs text-slate-600 shrink-0"
                                                    initial={{ opacity: 0.7 }}
                                                    whileHover={{ opacity: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {cert.year}
                                                </motion.span>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })
                        ) : (
                            <div className="text-slate-500">No certifications added</div>
                        )}
                    </motion.div>
                </motion.div>
            </motion.div>
        </Bounded>
    );
};

export default SkillsCertifications;

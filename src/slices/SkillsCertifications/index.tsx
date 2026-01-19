import { type Content, isFilled } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";
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

/**
 * Component for "SkillsCertifications" Slices.
 * Displays technical skills grouped by category and professional certifications.
 * Responsive layout: stacked on mobile, side-by-side on desktop.
 */
const SkillsCertifications: FC<SkillsCertificationsProps> = ({ slice }) => {
    return (
        <Bounded as="section" yPadding="base" className="border-t border-white/5">
            <div className="grid gap-16 md:gap-24 lg:grid-cols-2">
                {/* LEFT COLUMN: SKILLS */}
                <div>
                    {/* Skills Heading */}
                    {isFilled.richText(slice.primary.skillsHeading) && (
                        <div className="mb-8 md:mb-12">
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
                        </div>
                    )}

                    {/* Skill Categories */}
                    <div className="space-y-8">
                        {slice.primary.skillCategories &&
                            slice.primary.skillCategories.length > 0 ? (
                            slice.primary.skillCategories.map((category, categoryIndex) => (
                                <div key={categoryIndex}>
                                    {/* Category Name */}
                                    {isFilled.keyText(category.category_name) && (
                                        <h4 className="mb-4 text-sm font-medium uppercase tracking-widest text-slate-500">
                                            {category.category_name}
                                        </h4>
                                    )}

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills && category.skills.length > 0 ? (
                                            category.skills.map((skill, skillIndex) => (
                                                <div
                                                    key={skillIndex}
                                                    className="px-4 py-2 rounded-md bg-slate-800/50 border border-slate-700 text-slate-300 text-sm hover:border-accent hover:text-white transition-colors"
                                                >
                                                    {skill.skillName}
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-slate-500 text-sm">
                                                No skills added
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-slate-500">No skill categories added</div>
                        )}
                    </div>
                </div>

                {/* RIGHT COLUMN: CERTIFICATIONS */}
                <div>
                    {/* Certifications Heading */}
                    {isFilled.richText(slice.primary.certificationsHeading) && (
                        <div className="mb-8 md:mb-12">
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
                        </div>
                    )}

                    {/* Certifications Cards */}
                    <div className="space-y-4">
                        {slice.primary.certifications &&
                            slice.primary.certifications.length > 0 ? (
                            slice.primary.certifications.map((cert, certIndex) => {
                                const Icon = iconMap[cert.iconType as string] || Award;

                                return (
                                    <div
                                        key={certIndex}
                                        className="group p-4 rounded-lg bg-[#0B0F17] border border-slate-800 hover:border-accent/50 transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            {/* Left: Icon + Content */}
                                            <div className="flex gap-4 flex-1 min-w-0">
                                                {/* Icon */}
                                                <div className="p-2 h-10 w-10 bg-slate-800 rounded flex items-center justify-center text-white shrink-0">
                                                    <Icon className="w-5 h-5" />
                                                </div>

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
                                                <span className="font-mono text-xs text-slate-600 shrink-0">
                                                    {cert.year}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-slate-500">No certifications added</div>
                        )}
                    </div>
                </div>
            </div>
        </Bounded>
    );
};

export default SkillsCertifications;

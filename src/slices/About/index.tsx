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

export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps) => {
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
                                                ),
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

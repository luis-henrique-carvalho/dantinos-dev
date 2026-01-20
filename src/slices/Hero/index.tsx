import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps } from "@prismicio/react";
import { Code2, ChevronRight } from "lucide-react";

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section 
      id="hero"
      className="relative overflow-hidden px-6 pb-20 pt-16 lg:pb-32 lg:pt-32"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">
                {slice.primary.greeting}
                <span className="text-accent">.</span>
              </span>
              <span className="mt-2 block text-2xl font-medium text-slate-400 sm:text-3xl lg:text-4xl">
                Sou {slice.primary.name}
              </span>
              <span className="mt-3 block text-4xl sm:text-5xl lg:text-7xl">
                {slice.primary.title}
              </span>
            </h1>

            <div className="mt-8 flex w-full flex-col sm:flex-row justify-center gap-4 lg:mt-10 lg:justify-start">
              {isFilled.link(slice.primary.primaryButtonLink) && (
                <PrismicNextLink
                  field={slice.primary.primaryButtonLink}
                  className="rounded-sm bg-[#FF6B6B] px-6 py-3 text-sm font-medium text-white shadow-[0_4px_20px_rgba(255,107,107,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff5252] hover:shadow-[0_4px_25px_rgba(255,107,107,0.4)] sm:px-8 sm:text-base"
                >
                  {slice.primary.primaryButtonText || "Got a project?"}
                </PrismicNextLink>
              )}
              {isFilled.link(slice.primary.secondaryButtonLink) && (
                <PrismicNextLink
                  field={slice.primary.secondaryButtonLink}
                  className="rounded-sm border border-slate-700 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-white/5 sm:px-8 sm:text-base"
                >
                  {slice.primary.secondaryButtonText || "My resume"}
                </PrismicNextLink>
              )}
            </div>
          </div>

          {/* Right Content: Abstract Visual/Image */}
          <div className="relative z-0 flex justify-center lg:justify-end">
            <div className="absolute inset-0 blur-2xl sm:blur-3xl bg-linear-to-tr from-blue-500/10 to-purple-500/10 rounded-full"></div>
            <div className="relative h-80 w-80 sm:h-92 sm:w-92 lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 rounded-full border border-slate-800 opacity-50"></div>
              <div className="absolute inset-4 transform rotate-45 rounded-full border-2 border-[#FF6B6B]/30"></div>
              <div className="absolute inset-10 flex items-end justify-center overflow-hidden rounded-full border-4 border-slate-800 bg-slate-900">
                {isFilled.image(slice.primary.profileImage) && (
                  <PrismicNextImage
                    field={slice.primary.profileImage}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                    preload={true}
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 500px"
                  />
                )}
              </div>
              <div
                className="absolute right-10 top-0 animate-pulse text-slate-700 hidden md:block"
                aria-hidden="true"
              >
                <Code2 className="h-12 w-12" />
              </div>
              <div
                className="absolute bottom-10 left-0 text-[#FF6B6B] opacity-50 hidden md:block"
                aria-hidden="true"
              >
                <ChevronRight className="h-16 w-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

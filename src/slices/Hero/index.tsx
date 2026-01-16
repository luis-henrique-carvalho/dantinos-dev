import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps } from "@prismicio/react";

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 lg:pb-32 lg:pt-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="order-2 z-10 lg:order-1">
            <div className="relative">
              {/* Decorative line accent - desktop only */}
              <div className="absolute -left-8 top-8 hidden h-20 w-1 bg-[#FF6B6B] lg:block"></div>

              <h1 className="text-center text-4xl font-semibold leading-[1.15] tracking-tight text-white lg:text-left lg:text-7xl">
                {slice.primary.greeting}
                <span className="text-[#FF6B6B]">.</span>
                <br />
                <span className="mt-1 block text-2xl font-medium text-slate-400 lg:mt-2 lg:text-5xl">
                  {slice.primary.name}
                </span>
                <span className="mt-3 block text-3xl lg:mt-4 lg:text-6xl">
                  {slice.primary.title}
                </span>
              </h1>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:mt-10 lg:justify-start lg:gap-4">
                {isFilled.link(slice.primary.primaryButtonLink) && (
                  <PrismicNextLink
                    field={slice.primary.primaryButtonLink}
                    className="rounded-md bg-[#FF6B6B] px-6 py-3 text-center font-medium text-white shadow-[0_0_20px_rgba(255,107,107,0.3)] transition-all duration-200 hover:bg-[#ff5252] hover:shadow-[0_0_30px_rgba(255,107,107,0.5)] lg:px-8"
                  >
                    {slice.primary.primaryButtonText || "Got a project?"}
                  </PrismicNextLink>
                )}
                {isFilled.link(slice.primary.secondaryButtonLink) && (
                  <PrismicNextLink
                    field={slice.primary.secondaryButtonLink}
                    className="rounded-md border border-slate-700 bg-transparent px-6 py-3 text-center font-medium text-white transition-all duration-200 hover:border-slate-500 hover:bg-white/5 lg:px-8"
                  >
                    {slice.primary.secondaryButtonText || "My resume"}
                  </PrismicNextLink>
                )}
              </div>
            </div>
          </div>

          {/* Right Content: Abstract Visual */}
          <div className="order-1 z-0 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[500px] lg:w-[500px]">
              {/* Outer border ring */}
              <div className="absolute inset-0 rounded-full border border-slate-800 opacity-50"></div>

              {/* Accent border (rotated) */}
              <div className="absolute inset-3 rotate-45 transform rounded-full border-2 border-[#FF6B6B]/30 lg:inset-4"></div>

              {/* Profile Image Container */}
              <div className="absolute inset-8 flex items-end justify-center overflow-hidden rounded-full border-4 border-slate-800 bg-slate-900 lg:inset-10">
                {isFilled.image(slice.primary.profileImage) && (
                  <PrismicNextImage
                    field={slice.primary.profileImage}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                  />
                )}
              </div>

              {/* Decorative Icons */}
              <div className="absolute right-6 top-0 animate-pulse text-slate-700 lg:right-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lg:h-12 lg:w-12"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="absolute bottom-6 left-0 text-[#FF6B6B] opacity-50 lg:bottom-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lg:h-16 lg:w-16"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Strip - Mobile Only */}
      <div className="mt-12 border-y border-white/5 bg-white/[0.02] py-6 lg:hidden">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 text-xs font-medium uppercase tracking-widest text-slate-500 sm:gap-6 sm:text-sm">
          <span className="cursor-default transition-colors hover:text-white">
            HTML5
          </span>
          <span className="cursor-default transition-colors hover:text-white">
            CSS
          </span>
          <span className="cursor-default transition-colors hover:text-white">
            Javascript
          </span>
          <span className="cursor-default transition-colors hover:text-white">
            Node.js
          </span>
          <span className="cursor-default transition-colors hover:text-white">
            React
          </span>
          <span className="cursor-default transition-colors hover:text-white">
            Git
          </span>
          <span className="cursor-default transition-colors hover:text-white">
            Github
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

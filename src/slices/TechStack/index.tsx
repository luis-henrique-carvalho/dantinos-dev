import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { isFilled } from "@prismicio/client";

/**
 * Props for `TechStack`.
 */
export type TechStackProps = SliceComponentProps<Content.TechStackSlice>;

/**
 * Component for "TechStack" Slices.
 */
const TechStack: FC<TechStackProps> = ({ slice }) => {
  return (
    <div className="border-y border-white/5 bg-white/2">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-wrap justify-between items-center gap-8 text-lg font-medium text-slate-500 uppercase tracking-widest">
          {isFilled.group(slice.primary.technologies) &&
            slice.primary.technologies.map((item, index) => (
              <span
                key={index}
                className="hover:text-white transition-colors cursor-default"
              >
                {item.name}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

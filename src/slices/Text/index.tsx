import { FC } from "react";
import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { cn } from "@/lib/utils";

import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

type TextProps = SliceComponentProps<Content.TextSlice>;

const Text: FC<TextProps> = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-background leading-relaxed">
      <div
        className={cn(
          slice.variation === "twoColumns" && "md:columns-2 md:gap-6",
        )}
      >
        <PrismicRichText field={slice.primary.text} />
      </div>
    </Bounded>
  );
};

export default Text;

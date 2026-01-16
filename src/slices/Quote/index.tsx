import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicText, type SliceComponentProps } from "@prismicio/react";
import { cn } from "@/lib/utils";

import { Bounded } from "@/components/Bounded";

type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

const Quote: FC<QuoteProps> = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-background">
      {isFilled.richText(slice.primary.quote) && (
        <figure className="grid gap-6">
          <blockquote className="border-l-4 border-primary pl-6 italic">
            <p
              className={cn(
                "text-4xl font-medium leading-tight md:text-5xl md:leading-tight text-foreground",
                !isFilled.keyText(slice.primary.source) && "text-center",
              )}
            >
              <span className="-ml-3.5 select-none text-muted-foreground md:-ml-5">
                &ldquo;
              </span>
              <PrismicText field={slice.primary.quote} />
              <span className="select-none text-muted-foreground">&rdquo;</span>
            </p>
          </blockquote>
          {isFilled.keyText(slice.primary.source) && (
            <figcaption className="text-right text-muted-foreground">
              &mdash; {slice.primary.source}
            </figcaption>
          )}
        </figure>
      )}
    </Bounded>
  );
};

export default Quote;

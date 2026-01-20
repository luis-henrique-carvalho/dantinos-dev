import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BoundedProps = {
  as?: React.ElementType;
  yPadding?: "sm" | "base" | "lg";
  collapsible?: boolean;
  fullHeight?: boolean;
  id?: string;
  className?: string;
  children?: ReactNode;
};

export function Bounded({
  as: Comp = "div",
  yPadding = "base",
  collapsible = true,
  id,
  className,
  children,
}: BoundedProps) {
  return (
    <Comp
      data-collapsible={collapsible}
      id={id}
      className={cn(
        "px-6 md:px-8 w-full flex flex-col justify-center",
        yPadding === "sm" && "py-8 md:py-10",
        yPadding === "base" && "py-20 md:py-28",
        yPadding === "lg" && "py-32 md:py-48",
        className,
      )}
    >
      <div className="mx-auto container max-w-7xl">{children}</div>
    </Comp>
  );
}

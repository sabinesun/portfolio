import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const typographyVariants = cva("text-justify text-zinc-600", {
  variants: {
    variant: {
      h1: "text-9xl font-black text-black my-5",
      h2: "text-5xl font-bold text-black my-4",
      h3: "text-xl font-semibold text-black my-3",
      h4: "text-l text-black my",
      list: "my-6 ml-3 list-disc",
      muted: "text-xs sm:text-sm text-slate-400",
    },
  },
});

export type TypographyProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof typographyVariants> & {};

const Typography = ({ className, variant, ...props }: TypographyProps) => {
  return (
    <div
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  );
};

export { Typography, typographyVariants };

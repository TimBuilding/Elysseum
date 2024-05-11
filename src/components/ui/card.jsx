import React from "react";
import { cn } from "@/utils/cn";

const Card = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const Front = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "absolute rounded-lg border bg-red-500 text-card-foreground shadow-sm transition-all duration-100 delay-200 hover:opacity-0",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Front";

const Back = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "absolute bg-red-500 h-full w-full rounded-lg border bg-card text-card-foreground shadow-sm transition-all z-10 card-back",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Back";

export { Card, CardContent, Front, Back };

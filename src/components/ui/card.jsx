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
        "absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0",
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
        "absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back",
        className
      )}
      {...props}
    >KKKK</div>
  )
);
Card.displayName = "Back";

export { Card, CardContent, Front, Back };

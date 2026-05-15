import { cn } from "@/lib/utils";
import { LucideIcon, Lightbulb } from "lucide-react";

interface HighlightProps {
  text: string;
  icon?: LucideIcon;
  variant?: "primary" | "accent";
  className?: string;
}

export const Highlight = ({ 
  text, 
  icon: Icon = Lightbulb, 
  variant = "accent",
  className 
}: HighlightProps) => {
  return (
    <div
      className={cn(
        "rounded-lg p-5 flex items-start gap-4",
        variant === "accent" 
          ? "bg-accent/10 border border-accent/20" 
          : "bg-primary/5 border border-primary/10",
        className
      )}
    >
      <div
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
          variant === "accent" ? "bg-accent/20" : "bg-primary/10"
        )}
      >
        <Icon
          className={cn(
            "w-5 h-5",
            variant === "accent" ? "text-accent" : "text-primary"
          )}
        />
      </div>
      <p
        className={cn(
          "font-body text-base md:text-lg leading-relaxed",
          variant === "accent" ? "text-foreground" : "text-foreground"
        )}
      >
        {text}
      </p>
    </div>
  );
};

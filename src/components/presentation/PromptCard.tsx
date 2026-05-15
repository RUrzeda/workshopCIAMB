import { cn } from "@/lib/utils";

interface PromptCardProps {
  type: "bad" | "good";
  title: string;
  content: string;
  className?: string;
}

export const PromptCard = ({ type, title, content, className }: PromptCardProps) => {
  const isBad = type === "bad";
  
  return (
    <div
      className={cn(
        "rounded-lg border-2 overflow-hidden",
        isBad 
          ? "border-destructive/30 bg-destructive/5" 
          : "border-accent/30 bg-accent/5",
        className
      )}
    >
      <div
        className={cn(
          "px-4 py-2 font-display text-sm font-semibold uppercase tracking-wider",
          isBad 
            ? "bg-destructive/10 text-destructive" 
            : "bg-accent/10 text-accent"
        )}
      >
        {title}
      </div>
      <div className="p-4">
        <pre className="font-mono text-sm md:text-base text-foreground whitespace-pre-wrap leading-relaxed">
          {content}
        </pre>
      </div>
    </div>
  );
};

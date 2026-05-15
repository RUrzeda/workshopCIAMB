import { cn } from "@/lib/utils";
import { X, Check } from "lucide-react";

interface ComparisonItem {
  label: string;
  description?: string;
}

interface ComparisonGridProps {
  bad: ComparisonItem[];
  good: ComparisonItem[];
  className?: string;
}

export const ComparisonGrid = ({ bad, good, className }: ComparisonGridProps) => {
  return (
    <div className={cn("grid md:grid-cols-2 gap-6", className)}>
      {/* Bad column */}
      <div className="space-y-3">
        <h3 className="font-display text-lg font-semibold text-destructive flex items-center gap-2">
          <X className="w-5 h-5" />
          Problemas identificados
        </h3>
        <div className="space-y-3">
          {bad.map((item, index) => (
            <div
              key={index}
              className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 animate-slide-in-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="font-medium text-foreground">{item.label}</p>
              {item.description && (
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Good column */}
      <div className="space-y-3">
        <h3 className="font-display text-lg font-semibold text-accent flex items-center gap-2">
          <Check className="w-5 h-5" />
          Por que funciona
        </h3>
        <div className="space-y-3">
          {good.map((item, index) => (
            <div
              key={index}
              className="bg-accent/5 border border-accent/20 rounded-lg p-4 animate-slide-in-right"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="font-medium text-foreground">{item.label}</p>
              {item.description && (
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import { cn } from "@/lib/utils";
import { Check, X, Circle } from "lucide-react";

interface BulletItem {
  text: string;
  subtext?: string;
  type?: "default" | "success" | "error";
}

interface BulletListProps {
  items: BulletItem[];
  className?: string;
}

export const BulletList = ({ items, className }: BulletListProps) => {
  const getIcon = (type: BulletItem["type"]) => {
    switch (type) {
      case "success":
        return <Check className="w-5 h-5 text-accent flex-shrink-0" />;
      case "error":
        return <X className="w-5 h-5 text-destructive flex-shrink-0" />;
      default:
        return <Circle className="w-2 h-2 text-accent flex-shrink-0 fill-accent" />;
    }
  };

  return (
    <ul className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <span className="mt-1">{getIcon(item.type)}</span>
          <div>
            <span className="text-foreground font-body text-base md:text-lg">
              {item.text}
            </span>
            {item.subtext && (
              <p className="text-muted-foreground text-sm mt-1">{item.subtext}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

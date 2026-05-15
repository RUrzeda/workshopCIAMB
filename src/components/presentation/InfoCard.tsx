import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const InfoCard = ({ icon: Icon, title, description, className }: InfoCardProps) => {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

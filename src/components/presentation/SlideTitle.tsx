import { cn } from "@/lib/utils";

interface SlideTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SlideTitle = ({ title, subtitle, className }: SlideTitleProps) => {
  return (
    <div className={cn("mb-10", className)}>
      <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-lg md:text-xl text-secondary font-medium">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-1 w-24 bg-accent rounded-full" />
    </div>
  );
};

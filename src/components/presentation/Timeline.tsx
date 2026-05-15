import { cn } from "@/lib/utils";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export const Timeline = ({ events, className }: TimelineProps) => {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-0 right-0 top-8 h-0.5 bg-border hidden md:block" />
      <div className="grid md:grid-cols-5 gap-6">
        {events.map((e, i) => (
          <div key={i} className="relative animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="hidden md:flex w-4 h-4 rounded-full bg-accent border-4 border-background mx-auto mb-4 relative z-10" />
            <div className="bg-card border border-border rounded-lg p-4 text-center md:text-left">
              <p className="font-display font-bold text-accent text-lg">{e.year}</p>
              <p className="font-display font-semibold text-foreground text-sm mt-1">{e.title}</p>
              <p className="text-muted-foreground text-xs mt-2 leading-relaxed">{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

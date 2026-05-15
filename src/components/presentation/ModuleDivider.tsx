import { SlideWrapper } from "./SlideWrapper";
import { Clock } from "lucide-react";

interface ModuleDividerProps {
  number: string;
  title: string;
  subtitle?: string;
  duration: string;
  topics: string[];
}

export const ModuleDivider = ({ number, title, subtitle, duration, topics }: ModuleDividerProps) => {
  return (
    <SlideWrapper className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-secondary blur-2xl" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-[auto_1fr] gap-12 items-center">
        <div className="font-display font-bold text-accent text-[10rem] leading-none tracking-tighter">
          {number}
        </div>
        <div>
          <p className="font-display uppercase tracking-[0.3em] text-accent text-sm mb-3">
            Módulo
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-primary-foreground/80 mb-6 max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="flex items-center gap-2 text-primary-foreground/70 mb-8">
            <Clock className="w-4 h-4 text-accent" />
            <span className="font-display text-sm uppercase tracking-wider">
              Duração estimada: {duration}
            </span>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 max-w-2xl">
            <p className="font-display uppercase tracking-wider text-xs text-primary-foreground/60 mb-3">
              Tópicos abordados
            </p>
            <ul className="space-y-2">
              {topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3 text-primary-foreground/90">
                  <span className="text-accent font-mono text-sm mt-1">{String(i + 1).padStart(2, "0")}</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

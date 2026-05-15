import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
}

// Boundaries between modules (slide indices where a new section begins)
const moduleBreaks = [0, 2, 9, 17, 25, 30, 38];
const moduleLabels = [
  "Abertura",
  "Módulo 1 — Fundamentos",
  "Módulo 2 — Engenharia de Prompt",
  "Módulo 3 — Pesquisa",
  "Módulo 4 — Ensino",
  "Módulo 5 — Reflexões",
  "Encerramento",
];

const getModuleLabel = (index: number) => {
  let m = 0;
  for (let i = 0; i < moduleBreaks.length; i++) {
    if (index >= moduleBreaks[i]) m = i;
  }
  return moduleLabels[m];
};

export const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
}: SlideNavigationProps) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-sm border-t border-primary-foreground/10 z-50">
      {/* Progress bar */}
      <div className="h-0.5 bg-primary-foreground/10 relative">
        <div
          className="absolute left-0 top-0 h-full bg-accent transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <button
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg font-display text-sm transition-all",
            currentSlide === 0
              ? "text-primary-foreground/30 cursor-not-allowed"
              : "text-primary-foreground hover:bg-primary-foreground/10"
          )}
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        <div className="flex items-center gap-3 min-w-0 flex-1 justify-center">
          <span className="font-display text-xs uppercase tracking-wider text-accent truncate">
            {getModuleLabel(currentSlide)}
          </span>
          <span className="text-primary-foreground/40">·</span>
          <span className="font-display text-sm text-primary-foreground tabular-nums">
            {String(currentSlide + 1).padStart(2, "0")}
            <span className="text-primary-foreground/50"> / {totalSlides}</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {moduleBreaks.map((b, i) => {
            const isCurrent =
              currentSlide >= b &&
              (i === moduleBreaks.length - 1 || currentSlide < moduleBreaks[i + 1]);
            return (
              <button
                key={b}
                onClick={() => onGoToSlide(b)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  isCurrent ? "w-8 bg-accent" : "w-3 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                )}
                aria-label={`Ir para ${moduleLabels[i]}`}
                title={moduleLabels[i]}
              />
            );
          })}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg font-display text-sm transition-all",
            currentSlide === totalSlides - 1
              ? "text-primary-foreground/30 cursor-not-allowed"
              : "text-primary-foreground hover:bg-primary-foreground/10"
          )}
          aria-label="Próximo slide"
        >
          <span className="hidden sm:inline">Próximo</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

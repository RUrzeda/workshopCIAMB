import { cn } from "@/lib/utils";

interface FigureFrameProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
}

/**
 * Frame padronizado para figuras, com borda esmeralda e legenda opcional.
 * Inspirado nos slides originais (palestra IF Posse / IA Escrita Acadêmica).
 */
export const FigureFrame = ({
  src,
  alt,
  caption,
  className,
  imageClassName,
}: FigureFrameProps) => {
  return (
    <figure className={cn("flex flex-col items-center", className)}>
      <div className="relative w-full rounded-xl border-2 border-accent/40 bg-card overflow-hidden shadow-lg">
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-auto object-contain block",
            imageClassName
          )}
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-muted-foreground font-mono text-center px-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

import { SlideWrapper } from "./SlideWrapper";
import { SlideTitle } from "./SlideTitle";
import { Wrench, Clock, Target, FileCheck } from "lucide-react";

interface ActivitySlideProps {
  number: string;
  title: string;
  objective: string;
  duration: string;
  steps: string[];
  deliverable: string;
  prompt?: string;
}

export const ActivitySlide = ({
  number,
  title,
  objective,
  duration,
  steps,
  deliverable,
  prompt,
}: ActivitySlideProps) => {
  return (
    <SlideWrapper>
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-display text-xs uppercase tracking-widest">
          <Wrench className="w-3.5 h-3.5" />
          Atividade {number} — Mão na massa
        </span>
      </div>
      <SlideTitle title={title} />

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" />
              Objetivo
            </h3>
            <p className="text-muted-foreground leading-relaxed">{objective}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
              <Clock className="w-5 h-5 text-secondary mb-2" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Tempo</p>
              <p className="font-display font-semibold text-foreground">{duration}</p>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
              <FileCheck className="w-5 h-5 text-accent mb-2" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Entrega</p>
              <p className="font-display font-semibold text-foreground text-sm leading-tight">{deliverable}</p>
            </div>
          </div>

          {prompt && (
            <div className="bg-code-bg text-primary-foreground rounded-lg p-4 border border-border">
              <p className="font-display text-xs uppercase tracking-wider text-accent mb-2">
                Sugestão de ponto de partida
              </p>
              <pre className="font-mono text-xs whitespace-pre-wrap leading-relaxed">{prompt}</pre>
            </div>
          )}
        </div>

        <div>
          <h3 className="font-display font-semibold text-foreground mb-4">
            Passo a passo
          </h3>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li
                key={i}
                className="flex gap-4 bg-card border border-border rounded-lg p-4 animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground font-display font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-foreground leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SlideWrapper>
  );
};

import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { Highlight } from "../Highlight";
import { FigureFrame } from "../FigureFrame";
import { TrendingUp } from "lucide-react";
import gartnerHypeCycle from "@/assets/gartner-hype-cycle.png";

const phases = [
  { name: "Disparador tecnológico", note: "Surgimento da inovação" },
  { name: "Pico de expectativas infladas", note: "Hype e promessas exageradas", current: false },
  { name: "Vale da desilusão", note: "Limitações ficam evidentes", current: true },
  { name: "Ladeira da iluminação", note: "Casos de uso reais consolidados" },
  { name: "Platô de produtividade", note: "Adoção madura e estável" },
];

export const HypeCycleSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Hype Cycle de Gartner"
        subtitle="Onde a IA generativa se localiza hoje"
      />

      <p className="text-muted-foreground mb-6 max-w-4xl leading-relaxed">
        O modelo de Gartner descreve trajetórias típicas de adoção tecnológica.
        Reconhecer a fase atual ajuda a moderar expectativas e planejar usos
        sustentáveis na universidade.
      </p>

      <FigureFrame
        src={gartnerHypeCycle}
        alt="Gráfico do Gartner Hype Cycle mostrando a curva de expectativas em função do tempo, passando pelas cinco fases: Technology Trigger, Peak of Inflated Expectations, Trough of Disillusionment, Slope of Enlightenment e Plateau of Productivity"
        caption="As cinco fases da curva de adoção tecnológica (Gartner)"
        className="max-w-4xl mx-auto mb-6"
      />

      <div className="grid lg:grid-cols-5 gap-2 mb-6">
        {phases.map((p, i) => (
          <div
            key={i}
            className={`rounded-lg p-3 border ${
              p.current
                ? "bg-accent/5 border-accent/40"
                : "bg-card border-border"
            }`}
          >
            <span className="font-display font-bold text-accent text-xs tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-display font-semibold text-foreground text-sm leading-tight mt-1">
              {p.name}
            </p>
            <p className="text-muted-foreground text-xs mt-1">{p.note}</p>
            {p.current && (
              <span className="inline-flex items-center gap-1 mt-2 text-accent font-display text-xs uppercase tracking-wider">
                <TrendingUp className="w-3 h-3" />
                Hoje (2025)
              </span>
            )}
          </div>
        ))}
      </div>

      <Highlight
        text="A IA generativa transita do pico de expectativas para um momento de reavaliação crítica. Projetos cancelados e relatos de limitações marcam a fase atual."
        variant="accent"
      />
    </SlideWrapper>
  );
};

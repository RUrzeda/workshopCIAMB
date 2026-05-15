import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { Timeline } from "../Timeline";
import { FigureFrame } from "../FigureFrame";
import turingPortrait from "@/assets/turing-portrait.png";
import aiWinter from "@/assets/ai-winter.png";
import deepBlueKasparov from "@/assets/deep-blue-kasparov.png";
import autonomousCar from "@/assets/autonomous-car.png";

export const HistoryTimelineSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Marcos Históricos da IA"
        subtitle="Da formalização teórica aos modelos generativos"
      />

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 items-start">
        <Timeline
          events={[
            {
              year: "1950",
              title: "Teste de Turing",
              description: "Alan Turing propõe o critério operacional para inteligência maquínica.",
            },
            {
              year: "1956",
              title: "Conferência de Dartmouth",
              description: "John McCarthy cunha o termo 'Inteligência Artificial'.",
            },
            {
              year: "1970–90",
              title: "Inverno da IA",
              description: "Limitações computacionais e expectativas frustradas reduzem investimentos.",
            },
            {
              year: "1997",
              title: "Deep Blue × Kasparov",
              description: "IA simbólica vence o campeão mundial de xadrez.",
            },
            {
              year: "2010+",
              title: "Era do Aprendizado Profundo",
              description: "Big Data, GPUs e Transformers viabilizam IA generativa em larga escala.",
            },
          ]}
        />

        <div className="grid grid-cols-2 gap-3">
          <FigureFrame
            src={turingPortrait}
            alt="Alan Turing"
            caption="Alan Turing (1950)"
          />
          <FigureFrame
            src={aiWinter}
            alt="Inverno da IA"
            caption="Inverno da IA (70–90)"
          />
          <FigureFrame
            src={deepBlueKasparov}
            alt="Partida Deep Blue contra Kasparov"
            caption="Deep Blue × Kasparov (1997)"
          />
          <FigureFrame
            src={autonomousCar}
            alt="Carro autônomo com detecção de objetos"
            caption="IA na vida cotidiana (2010+)"
          />
        </div>
      </div>

      <div className="mt-8 bg-secondary/10 border border-secondary/20 rounded-lg p-5">
        <p className="text-foreground text-sm leading-relaxed">
          A evolução não foi linear: períodos de entusiasmo (verões) intercalaram-se com
          ciclos de descrença (invernos). A inflexão recente decorre da convergência entre
          dados, capacidade de processamento e novas arquiteturas neurais.
        </p>
      </div>
    </SlideWrapper>
  );
};

import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import turingPortrait from "@/assets/turing-portrait.png";
import aiWinter from "@/assets/ai-winter.png";
import deepBlueKasparov from "@/assets/deep-blue-kasparov.png";
import autonomousCar from "@/assets/autonomous-car.png";
import aiBrainChip from "@/assets/ai-brain-chip.png";

const events = [
  {
    year: "1950",
    title: "Teste de Turing",
    description: "Alan Turing propõe o critério operacional para inteligência maquínica.",
    image: turingPortrait,
    imageAlt: "Retrato de Alan Turing",
  },
  {
    year: "1956",
    title: "Conferência de Dartmouth",
    description: "John McCarthy cunha o termo 'Inteligência Artificial'.",
    image: aiBrainChip,
    imageAlt: "Representação simbólica do nascimento do campo da IA",
  },
  {
    year: "1970–90",
    title: "Inverno da IA",
    description: "Limitações computacionais e expectativas frustradas reduzem investimentos.",
    image: aiWinter,
    imageAlt: "Bonecos de neve representando o Inverno da IA",
  },
  {
    year: "1997",
    title: "Deep Blue × Kasparov",
    description: "IA simbólica vence o campeão mundial de xadrez.",
    image: deepBlueKasparov,
    imageAlt: "Partida entre Deep Blue e Garry Kasparov",
  },
  {
    year: "2010+",
    title: "Aprendizado Profundo",
    description: "Big Data, GPUs e Transformers viabilizam IA generativa em larga escala.",
    image: autonomousCar,
    imageAlt: "Carro autônomo com detecção de objetos",
  },
];

export const HistoryTimelineSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Marcos Históricos da IA"
        subtitle="Da formalização teórica aos modelos generativos"
      />

      <div className="relative mt-4">
        {/* horizontal connecting line behind dots */}
        <div className="absolute left-0 right-0 top-[88px] h-0.5 bg-border hidden md:block" />

        <div className="grid md:grid-cols-5 gap-3">
          {events.map((e, i) => (
            <div
              key={i}
              className="flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image at top, aligned with timeline */}
              <div className="w-full aspect-[4/3] rounded-lg border-2 border-accent/40 bg-card overflow-hidden shadow-md mb-3">
                <img
                  src={e.image}
                  alt={e.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Dot on the timeline */}
              <div className="hidden md:block w-4 h-4 rounded-full bg-accent border-4 border-background relative z-10" />

              {/* Year + content below the dot */}
              <div className="bg-card border border-border rounded-lg p-3 text-center w-full mt-3">
                <p className="font-display font-bold text-accent text-base">{e.year}</p>
                <p className="font-display font-semibold text-foreground text-sm mt-1 leading-tight">
                  {e.title}
                </p>
                <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                  {e.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-secondary/10 border border-secondary/20 rounded-lg p-4">
        <p className="text-foreground text-sm leading-relaxed">
          A evolução não foi linear. Períodos de entusiasmo (verões) intercalaram-se com
          ciclos de descrença (invernos). A inflexão recente decorre da convergência entre
          dados, capacidade de processamento e novas arquiteturas neurais.
        </p>
      </div>
    </SlideWrapper>
  );
};

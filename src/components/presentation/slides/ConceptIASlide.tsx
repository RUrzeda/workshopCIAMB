import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { FigureFrame } from "../FigureFrame";
import { Brain, Cpu, Lightbulb } from "lucide-react";
import naturalIntelligence from "@/assets/natural-intelligence.png";
import aiBrainChip from "@/assets/ai-brain-chip.png";

export const ConceptIASlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Conceitos: Inteligência Natural e Artificial"
        subtitle="Delimitação conceitual antes de discutir aplicações"
      />

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center">
              <Brain className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-display font-semibold text-foreground text-lg">
              Inteligência "Natural"
            </h3>
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-4 items-start">
            <div>
              <p className="text-muted-foreground text-sm mb-3">
                Conceito amplo e controverso. Habilidades atribuídas a um indivíduo inteligente:
              </p>
              <BulletList
                items={[
                  { text: "Comunicar-se" },
                  { text: "Memorizar" },
                  { text: "Planejar e resolver problemas" },
                  { text: "Compreender e aprender" },
                  { text: "Ter emoções e sentimentos" },
                ]}
              />
            </div>
            <FigureFrame
              src={naturalIntelligence}
              alt="Cérebro humano representando inteligência natural"
              className="w-32 self-center"
            />
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-foreground text-lg">
              Inteligência Artificial
            </h3>
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-4 items-start">
            <div>
              <p className="text-muted-foreground mb-3 text-sm">
                Forma de inteligência <strong className="text-foreground">não produzida naturalmente</strong>:
                capacidade de máquinas ou softwares exibirem comportamentos associados à
                cognição humana.
              </p>
              <p className="text-muted-foreground text-sm">
                Engloba subáreas como aprendizado de máquina, processamento de linguagem
                natural, visão computacional e raciocínio simbólico.
              </p>
            </div>
            <FigureFrame
              src={aiBrainChip}
              alt="Robô com elementos visuais de inteligência artificial"
              className="w-32 self-center"
            />
          </div>
        </div>
      </div>

      <Highlight
        icon={Lightbulb}
        text="A IA contemporânea é estatística, não consciente. Modela padrões em dados, sem compreender no sentido fenomenológico."
        variant="accent"
      />
    </SlideWrapper>
  );
};

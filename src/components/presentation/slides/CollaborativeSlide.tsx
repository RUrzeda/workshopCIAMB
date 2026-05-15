import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { Highlight } from "../Highlight";
import { FigureFrame } from "../FigureFrame";
import { Handshake, X, Check } from "lucide-react";
import humanRobotHandshake from "@/assets/human-robot-handshake.png";

export const CollaborativeSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="IA como Ferramenta Colaborativa"
        subtitle="Reposicionar o papel da máquina no trabalho intelectual"
      />

      <FigureFrame
        src={humanRobotHandshake}
        alt="Aperto de mão entre uma mão humana e uma mão robótica, simbolizando colaboração entre pessoa e IA"
        className="max-w-md mx-auto mb-6"
      />

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
          <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
            <X className="w-5 h-5 text-destructive" />
            IA substituta
          </h3>
          <ul className="space-y-2 text-foreground">
            <li className="text-sm leading-relaxed">
              Delegação acrítica do pensamento autoral
            </li>
            <li className="text-sm leading-relaxed">
              Aceitação automática de saídas geradas
            </li>
            <li className="text-sm leading-relaxed">
              Empobrecimento da formação discente
            </li>
            <li className="text-sm leading-relaxed">
              Diluição da responsabilidade epistêmica
            </li>
          </ul>
        </div>

        <div className="bg-accent/5 border border-accent/30 rounded-xl p-5">
          <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
            <Check className="w-5 h-5 text-accent" />
            IA parceira
          </h3>
          <ul className="space-y-2 text-foreground">
            <li className="text-sm leading-relaxed">
              Apoio à exploração e ao aprofundamento
            </li>
            <li className="text-sm leading-relaxed">
              Contraste e confronto de perspectivas
            </li>
            <li className="text-sm leading-relaxed">
              Aceleração de tarefas operacionais repetitivas
            </li>
            <li className="text-sm leading-relaxed">
              Mediação de aprendizagem ativa (Guided Learning)
            </li>
          </ul>
        </div>
      </div>

      <Highlight
        icon={Handshake}
        text="O ganho intelectual decorre da fricção crítica entre humano e máquina, não da terceirização do pensamento."
        variant="accent"
      />
    </SlideWrapper>
  );
};

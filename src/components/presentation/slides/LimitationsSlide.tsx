import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { InfoCard } from "../InfoCard";
import { Highlight } from "../Highlight";
import { FigureFrame } from "../FigureFrame";
import { AlertTriangle, Brain, Scale, Lock, Database, Clock } from "lucide-react";
import illusionOfThinking from "@/assets/illusion-of-thinking-paper.png";
import blackBox from "@/assets/black-box.png";

export const LimitationsSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Limitações Atuais dos Modelos"
        subtitle="O que a literatura recente evidencia"
      />

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 mb-6">
        <div className="grid md:grid-cols-2 gap-3">
          <InfoCard
            icon={AlertTriangle}
            title="Alucinação"
            description="Geração confiante de informações falsas, inclusive citações inexistentes"
          />
          <InfoCard
            icon={Brain}
            title="Raciocínio limitado"
            description='Apple (2024) — "The Illusion of Thinking" expõe limites em problemas formais'
          />
          <InfoCard
            icon={Scale}
            title="Vieses"
            description="Reprodução de estereótipos presentes nos dados de treinamento"
          />
          <InfoCard
            icon={Lock}
            title="Opacidade"
            description="Dificuldade de auditar como uma resposta foi produzida"
          />
          <InfoCard
            icon={Database}
            title="Janela de conhecimento"
            description="Corte temporal nos dados; eventos recentes podem ser ignorados"
          />
          <InfoCard
            icon={Clock}
            title="Custo e energia"
            description="Treinamento e inferência exigem infraestrutura e consumo expressivos"
          />
        </div>

        <div className="space-y-3">
          <FigureFrame
            src={illusionOfThinking}
            alt='Capa do paper "The Illusion of Thinking: Understanding the Strengths and Limitations of Reasoning Models via the Lens of Problem Complexity", da Apple, com autores Shojaee, Mirzadeh, Alizadeh, Horton, Bengio e Farajtabar'
            caption='Shojaee et al. (Apple, 2024)'
          />
          <FigureFrame
            src={blackBox}
            alt={`Ilustração de uma caixa preta com flechas de input e output, e um balão de pensamento dizendo "I know I did it. I just don't know how I did it"`}
            caption="A opacidade dos modelos"
          />
        </div>
      </div>

      <Highlight
        text="A maturidade no uso passa por reconhecer que IA generativa não é mecanismo de verdade — é mecanismo de plausibilidade textual."
        variant="primary"
      />
    </SlideWrapper>
  );
};

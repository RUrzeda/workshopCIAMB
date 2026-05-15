import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { PromptCard } from "../PromptCard";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { AlertTriangle } from "lucide-react";

export const BadPromptResearchSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Por que a IA responde mal?"
        subtitle="Prompt inadequado para contexto de ensino superior"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left column - Bad prompt */}
        <div className="space-y-6">
          <PromptCard
            type="bad"
            title="Exemplo de prompt ruim"
            content="Explique meu projeto de pesquisa sobre carbono."
          />

          <Highlight
            icon={AlertTriangle}
            text="Resultado típico: Resposta genérica, rasa e pouco útil academicamente."
            variant="primary"
          />
        </div>

        {/* Right column - Problems */}
        <div>
          <h3 className="font-display font-semibold text-foreground mb-4">
            Problemas deste prompt:
          </h3>
          <BulletList
            items={[
              {
                text: "Sem contexto",
                subtext: "Não informa área, objetivo ou nível acadêmico",
                type: "error",
              },
              {
                text: "Sem persona",
                subtext: "A IA não sabe se deve agir como professor, pesquisador ou divulgador",
                type: "error",
              },
              {
                text: "Tarefa vaga",
                subtext: '"Explique" pode significar muitas coisas',
                type: "error",
              },
              {
                text: "Sem formato definido",
                subtext: "Resposta imprevisível",
                type: "error",
              },
              {
                text: "Sem restrições",
                subtext: "Pode simplificar demais ou escrever superficialmente",
                type: "error",
              },
            ]}
          />
        </div>
      </div>
    </SlideWrapper>
  );
};

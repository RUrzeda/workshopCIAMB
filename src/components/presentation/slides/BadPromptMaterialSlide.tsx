import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { PromptCard } from "../PromptCard";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { AlertTriangle } from "lucide-react";

export const BadPromptMaterialSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Quando o material fica raso ou genérico"
        subtitle="Prompt inadequado para produção de material didático"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left column - Bad prompt */}
        <div className="space-y-6">
          <PromptCard
            type="bad"
            title="Exemplo de prompt ruim"
            content="Crie um material didático sobre sensoriamento remoto."
          />

          <Highlight
            icon={AlertTriangle}
            text="Resultado típico: Conteúdo genérico, enciclopédico e pouco utilizável em sala de aula."
            variant="primary"
          />
        </div>

        {/* Right column - Problems */}
        <div>
          <h3 className="font-display font-semibold text-foreground mb-4">
            Problemas identificados:
          </h3>
          <BulletList
            items={[
              {
                text: "Contexto inexistente",
                subtext: "Não informa nível (graduação? pós?) nem área específica",
                type: "error",
              },
              {
                text: "Sem persona",
                subtext: "A IA não sabe se deve agir como professor, pesquisador ou divulgador",
                type: "error",
              },
              {
                text: "Tarefa vaga",
                subtext: '"Criar material" pode ser qualquer coisa',
                type: "error",
              },
              {
                text: "Formato indefinido",
                subtext: "Pode virar texto longo, lista solta ou explicação superficial",
                type: "error",
              },
              {
                text: "Sem critérios pedagógicos",
                subtext: "Não há objetivos de aprendizagem",
                type: "error",
              },
            ]}
          />
        </div>
      </div>
    </SlideWrapper>
  );
};

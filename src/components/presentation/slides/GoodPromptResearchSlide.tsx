import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { PromptCard } from "../PromptCard";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { CheckCircle } from "lucide-react";

export const GoodPromptResearchSlide = () => {
  const goodPrompt = `CONTEXTO:
Projeto de pesquisa de doutorado na área de sensoriamento remoto e inteligência artificial aplicada à estimativa de estoques de carbono em áreas de restauração no Brasil.

PERSONA:
Atue como pesquisador sênior em ciência ambiental, com experiência em avaliação de projetos acadêmicos e revisão por pares.

TAREFA:
Explique o projeto destacando relevância científica, metodologia proposta e contribuições esperadas.

FORMATO:
Resposta em tópicos curtos e linguagem acadêmica.

RESTRIÇÕES:
- Não simplifique excessivamente.
- Não use linguagem de divulgação científica.`;

  return (
    <SlideWrapper>
      <SlideTitle
        title="Como orientar o raciocínio da IA"
        subtitle="Prompt estruturado para contexto de pesquisa acadêmica"
      />

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left column - Good prompt (wider) */}
        <div className="lg:col-span-3 space-y-6">
          <PromptCard
            type="good"
            title="Exemplo de prompt estruturado"
            content={goodPrompt}
          />
        </div>

        {/* Right column - Why it works */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="font-display font-semibold text-foreground mb-4">
            Por que este prompt funciona:
          </h3>
          <BulletList
            items={[
              { text: "Contexto claro", type: "success" },
              { text: "Persona bem definida", type: "success" },
              { text: "Tarefa específica", type: "success" },
              { text: "Formato controlado", type: "success" },
              { text: "Restrições explícitas", type: "success" },
            ]}
          />

          <Highlight
            icon={CheckCircle}
            text="Resultado esperado: Resposta consistente, acadêmica e alinhada ao nível superior."
            variant="accent"
          />
        </div>
      </div>
    </SlideWrapper>
  );
};

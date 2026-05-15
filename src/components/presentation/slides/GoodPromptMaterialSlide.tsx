import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { PromptCard } from "../PromptCard";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { CheckCircle } from "lucide-react";

export const GoodPromptMaterialSlide = () => {
  const goodPrompt = `CONTEXTO:
Disciplina de pós-graduação na área de ciência ambiental e sensoriamento remoto.

PERSONA:
Atue como professor universitário com experiência em ensino e pesquisa em sensoriamento remoto aplicado à estimativa de estoques de carbono.

TAREFA:
Elabore um material didático introdutório sobre:
- Sensoriamento remoto
- Integração com inteligência artificial
- Aplicações em estimativa de estoques de carbono

OBJETIVOS DE APRENDIZAGEM:
- Compreender conceitos fundamentais
- Relacionar teoria e aplicação prática
- Preparar os estudantes para leitura de artigos científicos

FORMATO:
Texto estruturado em seções curtas, com subtítulos e exemplos aplicados.

RESTRIÇÕES:
- Não simplificar para nível de divulgação científica.
- Não usar linguagem de ensino básico.`;

  return (
    <SlideWrapper>
      <SlideTitle
        title="Material alinhado ao ensino superior"
        subtitle="Prompt estruturado para produção de material didático"
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
              { text: "Define nível acadêmico", type: "success" },
              { text: "Define papel docente da IA", type: "success" },
              { text: "Inclui objetivos pedagógicos", type: "success" },
              { text: "Controla formato e profundidade", type: "success" },
            ]}
          />

          <Highlight
            icon={CheckCircle}
            text="Resultado esperado: Material didático coerente, utilizável e alinhado ao ensino superior."
            variant="accent"
          />
        </div>
      </div>
    </SlideWrapper>
  );
};

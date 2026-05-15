import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { PromptCard } from "../PromptCard";
import { BulletList } from "../BulletList";
import { InfoCard } from "../InfoCard";
import { Search, FileSearch, TrendingUp, Lightbulb, BookOpen } from "lucide-react";

export const DeepResearchSlide = () => {
  const deepResearchPrompt = `CONTEXTO:
Pesquisa científica na área de sensoriamento remoto e inteligência artificial, com foco na estimativa de estoques de carbono e biomassa acima do solo.

TAREFA:
Realize uma pesquisa aprofundada (Deep Research) sobre o uso de técnicas de inteligência artificial aplicadas a dados de sensoriamento remoto (multiespectrais, hiperespectrais e LiDAR) para estimativa de biomassa e carbono.

OBJETIVOS:
- Identificar abordagens metodológicas predominantes
- Mapear tipos de dados utilizados (orbitais, drones, LiDAR)
- Levantar modelos de IA mais empregados
- Identificar métricas de validação mais comuns
- Apontar lacunas e desafios atuais da área

FORMATO:
- Resultados organizados por temas
- Síntese analítica, não apenas listagem
- Linguagem acadêmica

RESTRIÇÕES:
- Não escrever texto de artigo
- Não inventar referências
- Priorizar análise crítica da literatura`;

  return (
    <SlideWrapper>
      <SlideTitle
        title="Deep Research no Gemini"
        subtitle="Funcionalidade voltada à pesquisa aprofundada"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Search className="w-5 h-5 text-accent" />
              O que é o Deep Research?
            </h3>
            <BulletList
              items={[
                { text: "Explorar literatura científica de forma estruturada" },
                { text: "Identificar tendências, lacunas e convergências" },
                { text: "Organizar resultados por temas e abordagens metodológicas" },
              ]}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <InfoCard
              icon={FileSearch}
              title="Revisões sistemáticas"
              description="Mapeamento estruturado da literatura"
            />
            <InfoCard
              icon={TrendingUp}
              title="Estado da arte"
              description="Visão panorâmica do campo"
            />
            <InfoCard
              icon={Lightbulb}
              title="Fundamentação teórica"
              description="Base sólida para escrita científica"
            />
            <InfoCard
              icon={BookOpen}
              title="Temas emergentes"
              description="Atualização rápida sobre novidades"
            />
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-lg p-5">
            <h4 className="font-display font-semibold text-foreground mb-3">
              O que o Deep Research entrega:
            </h4>
            <BulletList
              items={[
                { text: "Visão panorâmica do campo", type: "success" },
                { text: "Organização do conhecimento", type: "success" },
                { text: "Base sólida para escrita científica posterior", type: "success" },
              ]}
            />
          </div>
        </div>

        {/* Right column - Prompt */}
        <div>
          <PromptCard
            type="good"
            title="Prompt exemplo para Deep Research"
            content={deepResearchPrompt}
          />
        </div>
      </div>
    </SlideWrapper>
  );
};

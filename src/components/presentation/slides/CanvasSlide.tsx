import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { PromptCard } from "../PromptCard";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { ExternalLink, Palette, Layout, BookOpen, HelpCircle } from "lucide-react";

export const CanvasSlide = () => {
  const canvasPrompt = `Aja como um professor universitário e desenvolvedor.

Com base no conteúdo de Introdução a Redes de Computadores, crie um resumo interativo no formato de um artefato visual direto.

O portal deve ser uma página única e funcional, com design moderno (estilo cards), contendo:
- Cabeçalho com o título da aula
- Seções expansíveis para cada tópico (Conceitos, Modelos, Protocolos)
- Uma analogia central de destaque
- Um comparativo visual entre modelos ou protocolos
- Um mini-quiz interativo ao final

Importante: Renderize este conteúdo como um componente de interface (artefato) para que eu possa visualizá-lo e interagir com ele aqui mesmo na tela, sem precisar baixar arquivos.`;

  return (
    <SlideWrapper>
      <SlideTitle
        title="Canvas do Gemini"
        subtitle="Criação de artefatos visuais interativos"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left column - Description */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Palette className="w-5 h-5 text-accent" />
              O que é o Canvas do Gemini?
            </h3>
            <BulletList
              items={[
                { text: "Ferramenta que permite ao Gemini renderizar artefatos visuais interativos" },
                { text: "Cria páginas, portais e componentes de interface diretamente na tela" },
              ]}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-center">
              <Layout className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground">Portais</p>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-center">
              <BookOpen className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground">Resumos</p>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-center">
              <HelpCircle className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground">Quizzes</p>
            </div>
          </div>

          <Highlight
            icon={Palette}
            text="Diferente de gerar texto, aqui o Gemini constrói a interface."
            variant="accent"
          />

          {/* Example links */}
          <div className="space-y-3">
            <h4 className="font-display font-medium text-foreground">Exemplos reais de uso em aula:</h4>
            <div className="space-y-2">
              <a
                href="https://gemini.google.com/share/4097563b2302"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Resumo de aula - Aula 05
              </a>
              <a
                href="https://gemini.google.com/share/3505b4587df7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Quiz interativo
              </a>
            </div>
          </div>
        </div>

        {/* Right column - Prompt example */}
        <div>
          <PromptCard
            type="good"
            title="Prompt exemplo para Canvas"
            content={canvasPrompt}
          />
        </div>
      </div>
    </SlideWrapper>
  );
};

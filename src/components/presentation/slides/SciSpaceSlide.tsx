import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { FigureFrame } from "../FigureFrame";
import { ExternalLink, FileText } from "lucide-react";
import scispaceScreenshot from "@/assets/scispace-screenshot.png";

export const SciSpaceSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="SciSpace"
        subtitle="Leitura assistida de artigos científicos"
      />

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-accent" />
              <h3 className="font-display font-semibold text-foreground">O que é</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Ambiente de leitura interativa para PDFs científicos. Permite seleção
              de trechos para explicação contextualizada, tradução de termos
              técnicos e exploração de fórmulas, tabelas e figuras com apoio de IA.
            </p>
          </div>

          <BulletList
            items={[
              { text: "Explicação de parágrafos selecionados" },
              { text: "Decomposição de equações matemáticas" },
              { text: "Comparação entre múltiplos artigos" },
              { text: "Sugestão de leituras relacionadas" },
            ]}
          />

          <a
            href="https://typeset.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline font-display"
          >
            <ExternalLink className="w-4 h-4" />
            typeset.io
          </a>

          <Highlight
            text="Útil como apoio à compreensão; jamais como substituto da leitura integral do trabalho."
            variant="primary"
          />
        </div>

        <FigureFrame
          src={scispaceScreenshot}
          alt="Tela do SciSpace mostrando PDF científico aberto à esquerda com o Copilot à direita oferecendo perguntas sugeridas para o artigo"
          caption="Copilot do SciSpace lendo um PDF e propondo perguntas contextuais"
          className="self-start"
        />
      </div>
    </SlideWrapper>
  );
};

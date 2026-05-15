import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { ExternalLink, FileText } from "lucide-react";

export const SciSpaceSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="SciSpace"
        subtitle="Leitura assistida de artigos científicos"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-accent" />
              <h3 className="font-display font-semibold text-foreground">O que é</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ambiente de leitura interativa para PDFs científicos. Permite seleção
              de trechos para explicação contextualizada, tradução de termos
              técnicos e exploração de fórmulas, tabelas e figuras com apoio de IA.
            </p>
          </div>

          <a
            href="https://typeset.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline font-display"
          >
            <ExternalLink className="w-4 h-4" />
            typeset.io
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="font-display font-semibold text-foreground">
            Principais funcionalidades
          </h3>
          <BulletList
            items={[
              { text: "Explicação de parágrafos selecionados" },
              { text: "Decomposição de equações matemáticas" },
              { text: "Comparação entre múltiplos artigos" },
              { text: "Sugestão de leituras relacionadas" },
            ]}
          />

          <Highlight
            text="Útil como apoio à compreensão. Jamais como substituto da leitura integral do trabalho."
            variant="primary"
          />
        </div>
      </div>
    </SlideWrapper>
  );
};

import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { FigureFrame } from "../FigureFrame";
import { ExternalLink, BookOpen, Lock } from "lucide-react";
import notebooklmScreenshot from "@/assets/notebooklm-screenshot.png";

export const NotebookLMSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="NotebookLM"
        subtitle="Análise de fontes próprias com IA"
      />

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-accent" />
              <h3 className="font-display font-semibold text-foreground">O que é</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Ambiente do Google que permite carregar fontes próprias (PDFs, slides,
              transcrições, sites) e interagir com elas via IA. Diferentemente de um
              chat genérico, as respostas se restringem ao corpus enviado e indicam
              as passagens de origem.
            </p>
          </div>

          <BulletList
            items={[
              { text: "Resposta ancorada nas fontes carregadas" },
              { text: "Citações com link para o trecho original" },
              { text: "Geração de resumos, FAQs e roteiros de estudo" },
              { text: "Geração opcional de áudio em formato de podcast" },
            ]}
          />

          <a
            href="https://notebooklm.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline font-display"
          >
            <ExternalLink className="w-4 h-4" />
            notebooklm.google.com
          </a>

          <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
            <Lock className="w-4 h-4 text-accent mb-2" />
            <p className="text-foreground text-xs leading-relaxed">
              <strong>Aplicação acadêmica:</strong> estudo de bibliografia de
              disciplina, síntese de entrevistas qualitativas, análise comparada de
              documentos institucionais.
            </p>
          </div>

          <Highlight
            text="Reduz drasticamente o risco de alucinação: as respostas são restritas ao corpus carregado e rastreáveis."
            variant="accent"
          />
        </div>

        <FigureFrame
          src={notebooklmScreenshot}
          alt="Tela do NotebookLM com fontes à esquerda, chat central baseado em PDF carregado e Studio à direita com áudio overview e geração de notas"
          caption="Interface do NotebookLM: fontes carregadas, chat ancorado e Studio com áudio"
          className="self-start"
        />
      </div>
    </SlideWrapper>
  );
};

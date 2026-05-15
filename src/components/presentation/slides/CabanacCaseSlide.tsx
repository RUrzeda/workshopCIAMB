import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { FigureFrame } from "../FigureFrame";
import { Quote, AlertTriangle } from "lucide-react";
import cabanacPaper1 from "@/assets/cabanac-paper-1.jpg";
import cabanacPaper2 from "@/assets/cabanac-paper-2.jpg";

export const CabanacCaseSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Caso Cabanac: Prompts Vazados em Publicações"
        subtitle="Quando a estrutura interna do prompt sobrevive à revisão por pares"
      />

      <div className="grid lg:grid-cols-[1fr_1fr] gap-6 mb-4">
        <FigureFrame
          src={cabanacPaper1}
          alt='Trecho real de paper publicado na Radiology Case Reports em 2024 com a frase "I am an AI language model" deixada por engano no corpo do texto, destacada em azul'
          caption='Radiology Case Reports (2024): "I am an AI language model" no corpo do artigo'
        />
        <FigureFrame
          src={cabanacPaper2}
          alt='Trecho de paper publicado pela Springer com a frase "Certainly! Here is a more detailed explanation" no início da seção de metodologia, indicando saída direta do ChatGPT'
          caption='Springer ETBS 2023: "Certainly! Here is..." preserva o prólogo do ChatGPT'
        />
      </div>

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
        <div className="bg-card border border-border rounded-xl p-5">
          <Quote className="w-5 h-5 text-accent mb-2" />
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            Trechos identificados em artigos publicados em revistas indexadas
            revelam que partes do texto foram coladas diretamente da saída de
            modelos conversacionais, sem edição ou reescrita, passando por
            autores, coautores, revisores, copy editors e diagramadores sem
            detecção.
          </p>
          <div className="border-t border-border pt-3">
            <p className="font-display text-xs uppercase tracking-wider text-muted-foreground">
              Sinalizado por
            </p>
            <p className="text-foreground font-display font-semibold text-sm">
              Guillaume Cabanac · Problematic Paper Screener (2024)
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4">
            <AlertTriangle className="w-5 h-5 text-destructive mb-2" />
            <h4 className="font-display font-semibold text-foreground mb-1 text-sm">
              Falha em cinco camadas
            </h4>
            <p className="text-foreground text-xs leading-relaxed">
              Autores, coautores, revisores, copy editors e diagramadores não
              identificaram o vazamento.
            </p>
          </div>

          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
            <p className="text-foreground text-xs leading-relaxed">
              O problema não é a IA, mas o <strong>uso acrítico</strong> e a
              ausência de verificação. A integridade científica depende, em
              última instância, da diligência humana.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

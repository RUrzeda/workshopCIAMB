import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { FileText, Zap } from "lucide-react";

export const TransformersSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title='Transformers: "Attention Is All You Need"'
        subtitle="O artigo de 2017 que reorganizou o campo"
      />

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="bg-primary text-primary-foreground rounded-xl p-6 flex flex-col justify-center">
          <FileText className="w-8 h-8 text-accent mb-4" />
          <p className="font-display text-xs uppercase tracking-wider text-primary-foreground/60 mb-2">
            Referência
          </p>
          <p className="font-display text-xl font-bold mb-3 leading-tight">
            Attention Is All You Need
          </p>
          <p className="text-primary-foreground/80 text-sm mb-4">
            Vaswani et al., 2017 — Google Brain & Google Research
          </p>
          <div className="border-t border-primary-foreground/20 pt-4">
            <p className="font-display text-3xl font-bold text-accent">2017</p>
            <p className="text-primary-foreground/70 text-sm">
              Marco fundacional dos LLMs modernos
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              Contribuições centrais
            </h3>
            <BulletList
              items={[
                {
                  text: "Mecanismo de atenção",
                  subtext: "Substitui a recorrência sequencial das RNNs por relações diretas entre tokens",
                },
                {
                  text: "Paralelização",
                  subtext: "Treinamento massivamente paralelo, viabilizando bilhões de parâmetros",
                },
                {
                  text: "Escalabilidade",
                  subtext: "Desempenho cresce de forma previsível com dados e computação",
                },
              ]}
            />
          </div>

          <Highlight
            text="GPT, BERT, T5, LLaMA, Claude, Gemini — todos derivam, direta ou indiretamente, da arquitetura Transformer."
            variant="accent"
          />
        </div>
      </div>
    </SlideWrapper>
  );
};

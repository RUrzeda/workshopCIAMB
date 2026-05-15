import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { Zap } from "lucide-react";

export const TransformersSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title='Transformers: "Attention Is All You Need"'
        subtitle="O artigo de 2017 que reorganizou o campo"
      />

      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
        {/* Stylized representation of the paper's first page */}
        <div className="bg-white text-neutral-900 rounded-xl p-6 shadow-lg border-2 border-accent/40 font-serif flex flex-col">
          <p className="text-center text-[10px] uppercase tracking-widest text-neutral-500 mb-3 font-sans">
            arXiv:1706.03762v7 [cs.CL]
          </p>

          <h3 className="text-center text-xl md:text-2xl font-bold leading-tight mb-3">
            Attention Is All You Need
          </h3>

          <p className="text-center text-[11px] text-neutral-700 leading-snug mb-2">
            Ashish Vaswani · Noam Shazeer · Niki Parmar · Jakob Uszkoreit
            <br />
            Llion Jones · Aidan N. Gomez · Łukasz Kaiser · Illia Polosukhin
          </p>
          <p className="text-center text-[10px] italic text-neutral-500 mb-4">
            Google Brain · Google Research
          </p>

          <div className="border-t border-neutral-300 pt-3">
            <p className="text-center text-[10px] uppercase tracking-wider text-neutral-500 mb-2 font-sans">
              Abstract
            </p>
            <p className="text-[11px] leading-relaxed text-neutral-700 text-justify">
              The dominant sequence transduction models are based on complex
              recurrent or convolutional neural networks that include an encoder
              and a decoder. The best performing models also connect the encoder
              and decoder through an attention mechanism. We propose a new simple
              network architecture, the <em>Transformer</em>, based solely on
              attention mechanisms, dispensing with recurrence and convolutions
              entirely.
            </p>
          </div>

          <div className="mt-auto pt-4 text-center">
            <span className="inline-block bg-neutral-900 text-white px-3 py-1 rounded text-[10px] font-sans tracking-wider">
              NeurIPS · 2017
            </span>
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
                  subtext:
                    "Substitui a recorrência sequencial das RNNs por relações diretas entre tokens",
                },
                {
                  text: "Paralelização",
                  subtext:
                    "Treinamento massivamente paralelo, viabilizando bilhões de parâmetros",
                },
                {
                  text: "Escalabilidade",
                  subtext:
                    "Desempenho cresce de forma previsível com dados e computação",
                },
              ]}
            />
          </div>

          <Highlight
            text="GPT, BERT, T5, LLaMA, Claude, Gemini. Todos derivam, direta ou indiretamente, da arquitetura Transformer."
            variant="accent"
          />
        </div>
      </div>
    </SlideWrapper>
  );
};

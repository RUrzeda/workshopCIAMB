import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { Highlight } from "../Highlight";
import { FigureFrame } from "../FigureFrame";
import foundationModelsDiagram from "@/assets/foundation-models-diagram.png";

export const FoundationModelsSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Modelos Fundamentais (Foundation Models)"
        subtitle="Base técnica das aplicações generativas atuais"
      />

      <p className="text-muted-foreground mb-6 max-w-4xl leading-relaxed">
        São modelos de larga escala, treinados em corpora massivos e adaptáveis a
        múltiplas tarefas via <em>fine-tuning</em> ou <em>prompting</em>. Constituem
        a infraestrutura sobre a qual ferramentas de IA generativa são construídas.
      </p>

      <FigureFrame
        src={foundationModelsDiagram}
        alt="Diagrama: dados diversos (texto, imagens, fala, dados estruturados, sinais 3D) treinam um Foundation Model que é adaptado para múltiplas tarefas (Q&A, análise de sentimento, extração de informação, legendagem, reconhecimento de objeto, seguimento de instruções)"
        caption="Múltiplos tipos de dados → Foundation Model → adaptação para diversas tarefas"
        className="mb-6 max-w-4xl mx-auto"
      />

      <div className="grid md:grid-cols-3 gap-3 mb-6">
        {[
          "Gemini (Google)",
          "GPT-4 / GPT-5 (OpenAI)",
          "Claude (Anthropic)",
          "LLaMA (Meta)",
          "Mistral",
          "DeepSeek",
        ].map((m) => (
          <div
            key={m}
            className="bg-card border border-border rounded-lg px-4 py-2 text-center font-display text-sm text-foreground"
          >
            {m}
          </div>
        ))}
      </div>

      <Highlight
        text="Compreender que estamos diante de modelos estatísticos pré-treinados — e não de sistemas de raciocínio formal — é essencial para uso crítico em pesquisa."
        variant="primary"
      />
    </SlideWrapper>
  );
};

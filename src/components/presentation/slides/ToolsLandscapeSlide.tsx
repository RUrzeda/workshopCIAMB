import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { Highlight } from "../Highlight";
import { MessageSquare, Sparkles } from "lucide-react";
import logoGemini from "@/assets/logo-gemini.png";
import logoChatgpt from "@/assets/logo-chatgpt.png";
import logoClaude from "@/assets/logo-claude.png";
import logoDeepseek from "@/assets/logo-deepseek.png";
import logoMaritalk from "@/assets/logo-maritalk.png";

const conversational = [
  { name: "Gemini", maker: "Google", note: "Multimodal, integrado ao Google Workspace", logo: logoGemini },
  { name: "ChatGPT", maker: "OpenAI", note: "Família GPT, com plugins e Canvas", logo: logoChatgpt },
  { name: "Claude", maker: "Anthropic", note: "Forte em raciocínio e textos longos", logo: logoClaude },
  { name: "DeepSeek", maker: "DeepSeek AI", note: "Modelos abertos com bom desempenho", logo: logoDeepseek },
  { name: "MariTalk", maker: "Maritaca AI", note: "LLM brasileiro, treinado em português", logo: logoMaritalk },
];

const academic = [
  { name: "Elicit", note: "Síntese de literatura científica" },
  { name: "Research Rabbit", note: "Mapeamento de citações e descoberta" },
  { name: "SciSpace", note: "Leitura assistida de PDFs científicos" },
  { name: "NotebookLM", note: "Análise de fontes próprias" },
  { name: "Consensus", note: "Respostas baseadas em evidência" },
  { name: "Connected Papers", note: "Visualização de redes de citação" },
];

export const ToolsLandscapeSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Panorama de Ferramentas de IA"
        subtitle="Conversacionais e especializadas em pesquisa acadêmica"
      />

      {/* Logo strip */}
      <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
        <div className="flex flex-wrap items-center justify-around gap-4">
          {conversational.map((t) => (
            <div key={t.name} className="flex items-center justify-center h-10 px-2">
              <img
                src={t.logo}
                alt={`Logo ${t.name}`}
                className="h-full w-auto object-contain max-w-[120px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-accent" />
            Conversacionais (LLMs de uso geral)
          </h3>
          <div className="space-y-2">
            {conversational.map((t) => (
              <div key={t.name} className="border-b border-border last:border-0 py-2">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-display font-semibold text-foreground">{t.name}</span>
                  <span className="text-xs text-secondary font-medium">{t.maker}</span>
                </div>
                <p className="text-muted-foreground text-xs">{t.note}</p>
              </div>
            ))}
            <div className="border-b border-border last:border-0 py-2">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-display font-semibold text-foreground">Grok</span>
                <span className="text-xs text-secondary font-medium">xAI</span>
              </div>
              <p className="text-muted-foreground text-xs">Integrado à plataforma X</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Especializadas em pesquisa
          </h3>
          <div className="space-y-2">
            {academic.map((t) => (
              <div key={t.name} className="border-b border-border last:border-0 py-2">
                <span className="font-display font-semibold text-foreground">{t.name}</span>
                <p className="text-muted-foreground text-xs">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Highlight
        text="A escolha da ferramenta deve responder à tarefa, não ao inverso. Ferramentas conversacionais não substituem bases indexadas, e ferramentas acadêmicas não substituem leitura crítica."
        variant="accent"
      />
    </SlideWrapper>
  );
};

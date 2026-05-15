import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { FigureFrame } from "../FigureFrame";
import { ExternalLink } from "lucide-react";
import elicitScreenshot from "@/assets/elicit-screenshot.png";
import elicitLogo from "@/assets/elicit-logo.png";

export const ElicitSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle title="Elicit" subtitle="Síntese assistida de literatura científica" />

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <img
              src={elicitLogo}
              alt="Logo Elicit"
              className="h-10 w-auto object-contain mb-3"
              loading="lazy"
            />
            <p className="text-muted-foreground leading-relaxed text-sm">
              Plataforma que utiliza IA para localizar artigos relevantes a partir de
              uma pergunta de pesquisa em linguagem natural e extrair, de forma
              estruturada, informações como objetivos, métodos, amostra e resultados.
            </p>
          </div>

          <BulletList
            items={[
              { text: "Busca semântica em mais de 125 milhões de artigos" },
              { text: "Tabela comparativa automática entre estudos" },
              { text: "Resumo crítico baseado em evidências" },
              { text: "Exportação para gerenciadores de referência" },
            ]}
          />

          <a
            href="https://elicit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline font-display"
          >
            <ExternalLink className="w-4 h-4" />
            elicit.com
          </a>

          <Highlight
            text="Elicit acelera a triagem; não substitui a análise crítica do pesquisador."
            variant="primary"
          />
        </div>

        <FigureFrame
          src={elicitScreenshot}
          alt="Tela do Elicit mostrando análise de literatura sobre áreas de pastagem brasileira, com resumo automático dos artigos e tabela comparativa"
          caption="Exemplo: síntese automática de artigos sobre pastagens brasileiras"
          className="self-start"
        />
      </div>
    </SlideWrapper>
  );
};

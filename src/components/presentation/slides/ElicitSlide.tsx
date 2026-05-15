import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { ExternalLink, Search } from "lucide-react";

export const ElicitSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle title="Elicit" subtitle="Síntese assistida de literatura científica" />

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-5 h-5 text-accent" />
              <h3 className="font-display font-semibold text-foreground">O que é</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Plataforma que utiliza IA para localizar artigos relevantes a partir de
              uma pergunta de pesquisa em linguagem natural e extrair, de forma
              estruturada, informações como objetivos, métodos, amostra e resultados.
            </p>
          </div>

          <a
            href="https://elicit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline font-display"
          >
            <ExternalLink className="w-4 h-4" />
            elicit.com
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="font-display font-semibold text-foreground">
            Principais funcionalidades
          </h3>
          <BulletList
            items={[
              { text: "Busca semântica em mais de 125 milhões de artigos" },
              { text: "Tabela comparativa automática entre estudos" },
              { text: "Resumo crítico baseado em evidências" },
              { text: "Exportação para gerenciadores de referência" },
            ]}
          />

          <Highlight
            text="Elicit acelera a triagem. Não substitui a análise crítica do pesquisador."
            variant="primary"
          />
        </div>
      </div>
    </SlideWrapper>
  );
};

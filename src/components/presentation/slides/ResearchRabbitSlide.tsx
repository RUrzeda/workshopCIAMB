import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { ExternalLink, Network } from "lucide-react";

export const ResearchRabbitSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Research Rabbit"
        subtitle="Mapeamento visual de redes de citação"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Network className="w-5 h-5 text-accent" />
              <h3 className="font-display font-semibold text-foreground">O que é</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ferramenta para descoberta de literatura por relações de citação. A
              partir de um conjunto inicial de artigos (sementes), identifica
              trabalhos relacionados, autores recorrentes e linhas de pesquisa
              conectadas, organizando os resultados em coleções dinâmicas.
            </p>
          </div>

          <a
            href="https://researchrabbitapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline font-display"
          >
            <ExternalLink className="w-4 h-4" />
            researchrabbitapp.com
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="font-display font-semibold text-foreground">
            Principais funcionalidades
          </h3>
          <BulletList
            items={[
              { text: "Coleções de artigos como ponto de partida" },
              { text: "Sugestão de trabalhos similares e citantes" },
              { text: "Visualização gráfica das redes de citação" },
              { text: "Linha do tempo de publicações por tema" },
            ]}
          />

          <Highlight
            text="A representação visual da rede de citações torna explícitas relações que passam despercebidas em buscas lineares."
            variant="accent"
          />
        </div>
      </div>
    </SlideWrapper>
  );
};

import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { FigureFrame } from "../FigureFrame";
import { ExternalLink, Network } from "lucide-react";
import researchRabbitScreenshot from "@/assets/research-rabbit-screenshot.png";
import researchRabbitLogo from "@/assets/research-rabbit-logo.png";

export const ResearchRabbitSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Research Rabbit"
        subtitle="Mapeamento visual de redes de citação"
      />

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6">
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <img
              src={researchRabbitLogo}
              alt="Logo Research Rabbit"
              className="h-10 w-auto object-contain mb-3"
              loading="lazy"
            />
            <div className="flex items-center gap-2 mb-2">
              <Network className="w-5 h-5 text-accent" />
              <h3 className="font-display font-semibold text-foreground">O que é</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Ferramenta para descoberta de literatura por relações de citação. A
              partir de um conjunto inicial de artigos (sementes), identifica
              trabalhos relacionados, autores recorrentes e linhas de pesquisa
              conectadas, organizando os resultados em coleções dinâmicas.
            </p>
          </div>

          <BulletList
            items={[
              { text: "Coleções de artigos como ponto de partida" },
              { text: "Sugestão de trabalhos similares e citantes" },
              { text: "Visualização gráfica das redes de citação" },
              { text: "Linha do tempo de publicações por tema" },
            ]}
          />

          <a
            href="https://researchrabbitapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline font-display"
          >
            <ExternalLink className="w-4 h-4" />
            researchrabbitapp.com
          </a>

          <Highlight
            text="A representação visual da rede de citações torna explícitas relações que passam despercebidas em buscas lineares."
            variant="accent"
          />
        </div>

        <FigureFrame
          src={researchRabbitScreenshot}
          alt="Tela do Research Rabbit mostrando coleção de artigos, papers similares e visualização em grafo das relações de citação"
          caption='Exemplo: rede de citações a partir do paper "Attention Is All You Need"'
          className="self-start"
        />
      </div>
    </SlideWrapper>
  );
};

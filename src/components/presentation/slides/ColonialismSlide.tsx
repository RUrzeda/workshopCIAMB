import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { Highlight } from "../Highlight";
import { FigureFrame } from "../FigureFrame";
import { Globe2, Boxes, Repeat } from "lucide-react";
import dataColonialism from "@/assets/data-colonialism.png";

export const ColonialismSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Colonialismo de Dados e Produção de Conhecimento"
        subtitle="Reflexão crítica sobre os efeitos epistêmicos da IA generativa"
      />

      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 mb-6">
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Boxes className="w-5 h-5 text-accent" />
              <h3 className="font-display font-semibold text-foreground">
                Caixa-preta
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Modelos opacos dificultam auditoria de premissas, dados de treinamento
              e vieses incorporados nas respostas.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Repeat className="w-5 h-5 text-accent" />
              <h3 className="font-display font-semibold text-foreground">
                Restrição do horizonte
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A homogeneização das saídas tende a reduzir a pluralidade epistêmica,
              favorecendo abordagens hegemônicas em detrimento de tradições locais.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Globe2 className="w-5 h-5 text-accent" />
              <h3 className="font-display font-semibold text-foreground">
                Centro × periferia
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Corpora de treinamento são predominantemente em inglês e oriundos do
              Norte global, reproduzindo assimetrias na produção do conhecimento.
            </p>
          </div>
        </div>

        <FigureFrame
          src={dataColonialism}
          alt="Ilustração de mapa-múndi mostrando pilhas de moedas concentradas no Norte global enquanto o Sul global aparece esvaziado, representando o colonialismo de dados"
          caption="O fluxo de dados reproduz assimetrias geopolíticas"
          className="self-center"
        />
      </div>

      <Highlight
        text="O paradoxo: ferramentas que democratizam o acesso à informação podem, simultaneamente, concentrar poder epistêmico nas instituições que treinam e operam os modelos."
        variant="primary"
      />
    </SlideWrapper>
  );
};

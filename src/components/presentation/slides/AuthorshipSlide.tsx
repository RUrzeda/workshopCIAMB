import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { FigureFrame } from "../FigureFrame";
import { ShieldAlert, FileCheck } from "lucide-react";
import copyPaste from "@/assets/copy-paste.png";

export const AuthorshipSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Autoria, Plágio e Integridade Científica"
        subtitle="O uso de IA generativa exige nova ética de declaração e responsabilidade"
      />

      <div className="grid lg:grid-cols-[1fr_1fr_0.7fr] gap-6">
        <div className="bg-card border border-border rounded-xl p-5">
          <ShieldAlert className="w-6 h-6 text-destructive mb-3" />
          <h3 className="font-display font-semibold text-foreground mb-3">
            Riscos
          </h3>
          <BulletList
            items={[
              { text: "Plágio de modelo: textos gerados sem reformulação crítica", type: "error" },
              { text: "Atribuição indevida: IA listada como coautora", type: "error" },
              { text: "Citações fabricadas (alucinações bibliográficas)", type: "error" },
              { text: "Diluição da autoria intelectual do(a) pesquisador(a)", type: "error" },
            ]}
          />
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <FileCheck className="w-6 h-6 text-accent mb-3" />
          <h3 className="font-display font-semibold text-foreground mb-3">
            Boas práticas
          </h3>
          <BulletList
            items={[
              { text: "Declarar uso e finalidade da IA na metodologia", type: "success" },
              { text: "Verificar manualmente toda referência citada", type: "success" },
              { text: "Manter registro dos prompts e versões geradas", type: "success" },
              { text: "Atribuir autoria apenas a humanos responsáveis", type: "success" },
            ]}
          />
        </div>

        <FigureFrame
          src={copyPaste}
          alt="Teclas COPY e PASTE em um teclado, representando o risco de copiar-e-colar acrítico de saídas de IA"
          caption="O atalho que ameaça a autoria"
          className="self-center"
        />
      </div>

      <div className="mt-6">
        <Highlight
          text="Diretrizes recentes (COPE, ICMJE, agências de fomento) convergem: IA pode ser ferramenta, nunca autora. Responsabilidade final é sempre humana."
          variant="primary"
        />
      </div>
    </SlideWrapper>
  );
};

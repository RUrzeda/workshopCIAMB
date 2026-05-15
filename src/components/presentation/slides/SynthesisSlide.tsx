import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { CheckCircle2 } from "lucide-react";

const principles = [
  {
    title: "Transparência",
    desc: "Declare uso, propósito e ferramenta empregada em produções acadêmicas.",
  },
  {
    title: "Verificação",
    desc: "Toda referência, dado e citação produzida por IA exige checagem manual.",
  },
  {
    title: "Mediação, não substituição",
    desc: "Use a IA para amplificar pensamento crítico, não para terceirizá-lo.",
  },
  {
    title: "Engenharia de prompt como método",
    desc: "Prompts são instrumentos metodológicos: documente-os e refine-os.",
  },
  {
    title: "Pluralidade epistêmica",
    desc: "Confronte saídas da IA com tradições teóricas e fontes próprias.",
  },
];

export const SynthesisSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Síntese: Princípios para Uso Responsável"
        subtitle="O que levar deste workshop para a prática docente e de pesquisa"
      />

      <div className="grid gap-3">
        {principles.map((p, i) => (
          <div
            key={i}
            className="grid grid-cols-[auto_auto_1fr] items-start gap-4 bg-card border border-border rounded-xl p-5 animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="font-display font-bold text-accent text-xl tabular-nums">
              0{i + 1}
            </span>
            <CheckCircle2 className="w-5 h-5 text-accent mt-1" />
            <div>
              <h3 className="font-display font-semibold text-foreground text-lg">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SlideWrapper>
  );
};

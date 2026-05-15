import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { TrendingUp } from "lucide-react";

const data = [
  { year: "2012", model: "AlexNet", scale: "~5×10²" },
  { year: "2017", model: "Transformer", scale: "~2×10⁴" },
  { year: "2018", model: "BERT-Large / GPT-1", scale: "~10⁵" },
  { year: "2019", model: "GPT-2 / Megatron", scale: "~10⁷" },
  { year: "2020", model: "GPT-3 (175B)", scale: "~10⁸" },
  { year: "2022", model: "Megatron-Turing NLG (530B)", scale: "~10⁹" },
];

export const ComputeGrowthSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Crescimento Computacional dos Modelos"
        subtitle="Requisitos de treinamento em escala logarítmica (petaFLOPs)"
      />

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="text-left px-4 py-3 font-display text-xs uppercase tracking-wider">
                  Ano
                </th>
                <th className="text-left px-4 py-3 font-display text-xs uppercase tracking-wider">
                  Modelo de referência
                </th>
                <th className="text-right px-4 py-3 font-display text-xs uppercase tracking-wider">
                  Computação (petaFLOPs)
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="px-4 py-3 font-display font-semibold text-accent">
                    {d.year}
                  </td>
                  <td className="px-4 py-3 text-foreground">{d.model}</td>
                  <td className="px-4 py-3 text-right font-mono text-secondary tabular-nums">
                    {d.scale}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-5">
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
            <TrendingUp className="w-6 h-6 text-accent mb-3" />
            <p className="font-display font-bold text-3xl text-foreground">
              275×
            </p>
            <p className="text-muted-foreground text-sm">
              crescimento da computação em modelos Transformer a cada 2 anos
            </p>
          </div>

          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-5">
            <p className="text-foreground text-sm leading-relaxed">
              Em uma década, os requisitos computacionais para modelos de ponta
              cresceram cerca de <strong>sete ordens de grandeza</strong>. Esse ritmo
              levanta questões sobre custo energético, concentração de poder
              computacional e sustentabilidade da pesquisa em IA.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

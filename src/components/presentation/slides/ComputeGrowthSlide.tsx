import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { TrendingUp } from "lucide-react";

const data = [
  { year: "2012", model: "AlexNet", scale: "~5×10²" },
  { year: "2017", model: "Transformer (Vaswani et al.)", scale: "~2×10⁴" },
  { year: "2018", model: "BERT-Large / GPT-1", scale: "~10⁵" },
  { year: "2019", model: "GPT-2 (1,5B)", scale: "~10⁷" },
  { year: "2020", model: "GPT-3 (175B)", scale: "~10⁸" },
  { year: "2022", model: "PaLM (540B) / Chinchilla", scale: "~10⁹" },
  { year: "2023", model: "GPT-4 (~1,7T MoE est.)", scale: "~10¹⁰" },
  { year: "2024", model: "Llama 3.1 (405B) / DeepSeek-V3 (671B MoE)", scale: "~3×10¹⁰" },
  { year: "2025", model: "DeepSeek-R1, o3, GPT-5, Claude Opus 4, Gemini 2.5", scale: "~10¹¹" },
];

export const ComputeGrowthSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Crescimento Computacional dos Modelos"
        subtitle="Requisitos de treinamento em escala logarítmica (petaFLOPs)"
      />

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
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
                  <td className="px-4 py-2.5 font-display font-semibold text-accent text-sm">
                    {d.year}
                  </td>
                  <td className="px-4 py-2.5 text-foreground text-sm">{d.model}</td>
                  <td className="px-4 py-2.5 text-right font-mono text-secondary tabular-nums text-sm">
                    {d.scale}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-4">
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
            <TrendingUp className="w-6 h-6 text-accent mb-3" />
            <p className="font-display font-bold text-3xl text-foreground">
              ~10⁸×
            </p>
            <p className="text-muted-foreground text-sm">
              crescimento dos requisitos computacionais entre 2012 e 2025
            </p>
          </div>

          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-5">
            <p className="font-display font-bold text-2xl text-secondary mb-1">
              US$ 600 bi
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              estimativa de capex global em data centers de IA em 2025 (NVIDIA, hyperscalers).
              Projeção para US$ 3 a 4 trilhões anuais até 2030.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-foreground text-sm leading-relaxed">
              Em pouco mais de uma década, os requisitos computacionais cresceram
              cerca de <strong>oito ordens de grandeza</strong>. Esse ritmo levanta
              questões sobre custo energético, concentração de poder computacional
              e sustentabilidade da pesquisa em IA.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

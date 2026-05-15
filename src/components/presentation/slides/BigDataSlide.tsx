import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { Highlight } from "../Highlight";
import { Database } from "lucide-react";

const stats = [
  { value: "≈ 2,5", unit: "quintilhões", label: "de bytes gerados por dia globalmente" },
  { value: "≈ 90%", unit: "", label: "dos dados existentes foram criados nos últimos dois anos" },
  { value: "328,77", unit: "milhões TB", label: "de dados criados por dia" },
];

export const BigDataSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Big Data: o Combustível dos Modelos"
        subtitle="A escala dos dados como pré-condição para a IA contemporânea"
      />

      <p className="text-muted-foreground text-lg mb-8 max-w-3xl leading-relaxed">
        A explosão de dados digitais nas últimas duas décadas — redes sociais, IoT,
        transações, sensores — produziu o substrato necessário para que modelos
        estatísticos aprendam padrões em larga escala.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl p-6 animate-fade-in"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <Database className="w-6 h-6 text-accent mb-3" />
            <p className="font-display font-bold text-3xl text-primary tabular-nums">
              {s.value}
            </p>
            {s.unit && (
              <p className="font-display text-sm text-secondary uppercase tracking-wider">
                {s.unit}
              </p>
            )}
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{s.label}</p>
          </div>
        ))}
      </div>

      <Highlight
        text="Sem disponibilidade massiva de dados, a IA generativa contemporânea seria inviável. Dado é pré-requisito, não consequência."
        variant="primary"
      />
    </SlideWrapper>
  );
};

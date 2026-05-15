import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { PromptCard } from "../PromptCard";

export const PromptAnatomySlide = () => {
  const annotated = `[CONTEXTO]
Disciplina de Metodologia Científica em curso de Pós-Graduação stricto sensu.

[PERSONA]
Aja como orientador acadêmico experiente em Ciências Exatas.

[TAREFA]
Avalie criticamente a problematização abaixo, indicando fragilidades
metodológicas e sugerindo refinamentos.

[ENTRADA]
"<colar aqui o texto a ser avaliado>"

[FORMATO]
1. Diagnóstico em até 5 pontos
2. Sugestões de reescrita
3. Referências canônicas a consultar

[RESTRIÇÕES]
- Não reescrever o texto integralmente
- Não inventar citações
- Manter linguagem acadêmica`;

  return (
    <SlideWrapper>
      <SlideTitle
        title="Anatomia de um Prompt Acadêmico"
        subtitle="Estrutura mínima recomendada para uso em pesquisa e ensino"
      />

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8">
        <div className="space-y-3">
          {[
            { label: "Contexto", desc: "Situa a tarefa no domínio acadêmico apropriado" },
            { label: "Persona", desc: "Define o papel epistêmico que a IA deve assumir" },
            { label: "Tarefa", desc: "Verbo de ação claro e escopo delimitado" },
            { label: "Entrada", desc: "Material de referência (texto, dados, transcrição)" },
            { label: "Formato", desc: "Estrutura esperada da resposta" },
            { label: "Restrições", desc: "O que a IA não deve fazer" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="grid grid-cols-[auto_1fr] gap-4 items-start bg-card border border-border rounded-lg p-4 animate-fade-in"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span className="font-mono text-xs px-2 py-1 rounded bg-accent/10 text-accent border border-accent/30 uppercase tracking-wider">
                {item.label}
              </span>
              <p className="text-foreground text-sm pt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <PromptCard
            type="good"
            title="Template anotado"
            content={annotated}
          />
        </div>
      </div>
    </SlideWrapper>
  );
};

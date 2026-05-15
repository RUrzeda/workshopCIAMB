import { ActivitySlide } from "../ActivitySlide";

export const Activity2Slide = () => (
  <ActivitySlide
    number="02"
    title="Revisão de Literatura Assistida"
    objective="Conduzir uma revisão exploratória sobre um tema da própria linha de pesquisa, articulando ferramentas conversacionais (Deep Research no Gemini) e ferramentas especializadas (Elicit ou Research Rabbit)."
    duration="20 min"
    deliverable="Síntese de 1 página: tema, abordagens predominantes, autores recorrentes e lacunas identificadas"
    prompt={`CONTEXTO: <sua área e problema de pesquisa>
TAREFA: Conduza um Deep Research sobre o tema, organizando por (i) abordagens metodológicas, (ii) tipos de dados, (iii) lacunas atuais.
RESTRIÇÕES: Não inventar referências; priorizar análise crítica.`}
    steps={[
      "Defina uma pergunta de pesquisa específica e delimitada.",
      "Execute um Deep Research no Gemini para mapear o panorama.",
      "Levante 5–8 artigos-semente no Elicit ou Research Rabbit.",
      "Compare a síntese da IA com os artigos lidos integralmente.",
      "Anote convergências, divergências e possíveis alucinações.",
      "Produza a síntese final com fontes verificadas.",
    ]}
  />
);

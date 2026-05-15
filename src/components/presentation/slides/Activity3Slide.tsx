import { ActivitySlide } from "../ActivitySlide";

export const Activity3Slide = () => (
  <ActivitySlide
    number="03"
    title="Plano de Aula com Canvas e Guided Learning"
    objective="Produzir, em conjunto com o Gemini, um artefato pedagógico interativo (Canvas) e um roteiro de mediação socrática (Guided Learning) para uma aula de sua disciplina."
    duration="20 min"
    deliverable="Link compartilhável do artefato Canvas + roteiro de mediação em texto"
    prompt={`CONTEXTO: Disciplina <nome>, <nível>, tema <X>.
TAREFA 1 (Canvas): Crie um artefato visual interativo da aula com cabeçalho, seções expansíveis, analogia central e mini-quiz.
TAREFA 2 (Guided Learning): Produza um roteiro de perguntas orientadoras sobre o mesmo tema, sem entregar respostas prontas.`}
    steps={[
      "Selecione um tema de uma aula que ministrará nas próximas semanas.",
      "Construa o prompt do Canvas com seções, analogia e quiz.",
      "Gere o artefato e ajuste o conteúdo iterativamente.",
      "Construa o prompt do Guided Learning para o mesmo tema.",
      "Teste o roteiro: a IA conduz o aluno ou entrega a resposta?",
      "Refine restrições para garantir mediação, não solução.",
    ]}
  />
);

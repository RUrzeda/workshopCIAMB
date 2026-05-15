import { ActivitySlide } from "../ActivitySlide";

export const Activity1Slide = () => (
  <ActivitySlide
    number="01"
    title="Reescrita Crítica de um Prompt"
    objective="Aplicar os seis componentes (contexto, persona, tarefa, entrada, formato, restrições) na reescrita de um prompt fraco extraído da prática docente ou de pesquisa do(a) participante."
    duration="15 min"
    deliverable="Versão revisada do prompt + comentário de uma frase justificando cada decisão"
    prompt={`Prompt original a ser reescrito:
"Me ajuda a fazer uma aula sobre redes neurais."`}
    steps={[
      "Identifique o problema central que o prompt original deveria resolver.",
      "Escreva o contexto: disciplina, nível, perfil do público-alvo.",
      "Defina uma persona pertinente ao seu campo de atuação.",
      "Reformule a tarefa com verbos de ação e escopo delimitado.",
      "Especifique formato de saída e ao menos duas restrições.",
      "Teste no Gemini, compare com a saída do prompt original e refine.",
    ]}
  />
);

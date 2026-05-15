import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { InfoCard } from "../InfoCard";
import { Highlight } from "../Highlight";
import { MessageSquare, User, Target, Layout, ShieldCheck, Lightbulb } from "lucide-react";

export const PromptEngineeringSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Engenharia de Prompt"
        subtitle="Introdução à prática de estruturar instruções para IA generativa"
      />

      <p className="text-muted-foreground text-lg mb-8 max-w-3xl">
        Engenharia de Prompt é a prática de estruturar instruções claras e contextualizadas
        para orientar o comportamento e o tipo de resposta de uma IA generativa.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <InfoCard
          icon={MessageSquare}
          title="Contexto"
          description="Situação, tema, objetivo acadêmico ou problema a ser resolvido"
        />
        <InfoCard
          icon={User}
          title="Papel (Persona)"
          description="Quem a IA deve 'ser': orientador, parecerista, pesquisador sênior"
        />
        <InfoCard
          icon={Target}
          title="Tarefa"
          description="O que exatamente se espera da IA como resultado"
        />
        <InfoCard
          icon={Layout}
          title="Formato"
          description="Texto, tópicos, tabela, perguntas, análise crítica"
        />
        <InfoCard
          icon={ShieldCheck}
          title="Restrições"
          description="O que a IA não deve fazer: não simplificar, não escrever respostas prontas"
        />
      </div>

      <Highlight
        icon={Lightbulb}
        text="IA responde melhor quando entende o problema, não apenas a pergunta."
        variant="accent"
      />
    </SlideWrapper>
  );
};

import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { BulletList } from "../BulletList";
import { Highlight } from "../Highlight";
import { InfoCard } from "../InfoCard";
import { GraduationCap, Brain, Users, Lightbulb, X, Check } from "lucide-react";

export const GuideLearningSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Guide Learning no Gemini"
        subtitle="IA como mediadora da aprendizagem"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent" />
              O que é Guide Learning?
            </h3>
            <p className="text-muted-foreground mb-4">
              Estratégia em que a IA não entrega a resposta, mas atua como:
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-3 text-center">
                <Users className="w-5 h-5 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium">Tutor</p>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-3 text-center">
                <Brain className="w-5 h-5 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium">Mediador</p>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-3 text-center">
                <Lightbulb className="w-5 h-5 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium">Orientador</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-5">
            <h4 className="font-display font-semibold text-foreground mb-3">
              Baseada em:
            </h4>
            <BulletList
              items={[
                { text: "Metacognição" },
                { text: "Aprendizagem ativa" },
                { text: "Pensamento crítico" },
              ]}
            />
          </div>

          <Highlight
            icon={Lightbulb}
            text="No Guide Learning, errar faz parte do processo."
            variant="accent"
          />
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Fundamental difference */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-4">
              Diferença fundamental
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-foreground">Resolver o problema pelo aluno</p>
              </div>
              <div className="flex items-start gap-3 bg-accent/5 border border-accent/20 rounded-lg p-4">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground">Ajudar o aluno a pensar como resolver</p>
              </div>
            </div>
          </div>

          {/* Example */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
            <h4 className="font-display font-semibold text-foreground mb-4">
              Exemplo: Exercício de Algoritmo
            </h4>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">Problema proposto ao aluno:</p>
              <p className="font-mono text-sm text-foreground">
                Crie um algoritmo que leia dois números inteiros e informe qual deles é o maior. 
                Caso sejam iguais, informe que os valores são iguais.
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              A IA guia o aluno através de perguntas orientadoras, sem fornecer o código pronto.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

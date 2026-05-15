import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { BulletList } from "../BulletList";
import { InfoCard } from "../InfoCard";
import { Brain, GraduationCap, FileText, Users } from "lucide-react";

export const WhatIsGeminiSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="O que é o Gemini?"
        subtitle="Plataforma de Inteligência Artificial Generativa do Google"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left column - Definition */}
        <div className="space-y-6">
          <BulletList
            items={[
              {
                text: "Baseada em Modelos de Linguagem de Grande Escala (LLMs)",
              },
              {
                text: "Capaz de compreender, analisar, sintetizar e gerar conhecimento",
              },
              {
                text: "Integrada ao ecossistema Google",
                subtext: "Docs, Drive, PDFs, textos científicos",
              },
            ]}
          />

          <div className="bg-accent/5 border border-accent/20 rounded-lg p-5 mt-6">
            <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent" />
              Acesso Educacional
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              O Google disponibiliza períodos de acesso gratuito voltados para docentes e
              estudantes com e-mail institucional, visando formação, experimentação
              e inovação educacional.
            </p>
          </div>
        </div>

        {/* Right column - Use cases */}
        <div className="space-y-4">
          <h3 className="font-display font-semibold text-secondary mb-4">
            Na Educação Superior, apoia:
          </h3>
          <div className="grid gap-4">
            <InfoCard
              icon={FileText}
              title="Produção de Material Didático"
              description="Criação de conteúdos estruturados e adaptados ao nível acadêmico"
            />
            <InfoCard
              icon={Brain}
              title="Revisão e Análise Crítica"
              description="Avaliação de textos, identificação de lacunas e sugestões de melhoria"
            />
            <InfoCard
              icon={Users}
              title="Parceiro Intelectual"
              description="Atua como interlocutor para desenvolvimento de ideias e projetos"
            />
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

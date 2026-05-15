import { SlideWrapper } from "../SlideWrapper";
import { Mail, Clock, GraduationCap } from "lucide-react";

export const CoverSlide = () => {
  return (
    <SlideWrapper className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-secondary blur-2xl" />
      </div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent font-display text-xs uppercase tracking-[0.25em] mb-8">
          <GraduationCap className="w-3.5 h-3.5" />
          Workshop · 3 horas
        </div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl leading-tight">
          Recursos para Ensino e Pesquisa com{" "}
          <span className="text-accent">Inteligência Artificial</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-3xl mb-12 leading-relaxed">
          Fundamentos, engenharia de prompt, ferramentas para pesquisa científica,
          recursos para ensino e reflexões críticas sobre integridade acadêmica.
        </p>

        <div className="border-t border-primary-foreground/20 pt-8 grid md:grid-cols-2 gap-6 max-w-3xl">
          <div>
            <p className="font-display text-xs uppercase tracking-wider text-primary-foreground/60 mb-2">
              Ministrante
            </p>
            <p className="font-display text-xl md:text-2xl font-semibold mb-2">
              Prof. Roberto Urzêda
            </p>
            <a
              href="mailto:roberto.paiva@ueg.br"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              roberto.paiva@ueg.br
            </a>
            <p className="text-primary-foreground/60 text-sm mt-2">
              Universidade Estadual de Goiás
            </p>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-wider text-primary-foreground/60 mb-2">
              Carga horária
            </p>
            <div className="inline-flex items-center gap-2 text-primary-foreground">
              <Clock className="w-5 h-5 text-accent" />
              <span className="font-display text-xl font-semibold">3 horas · 5 módulos</span>
            </div>
            <p className="text-primary-foreground/60 text-sm mt-2">
              Inclui atividades práticas (Mão na massa)
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

import { SlideWrapper } from "../SlideWrapper";
import { Mail, ExternalLink } from "lucide-react";

export const ClosingSlide = () => {
  return (
    <SlideWrapper className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-secondary blur-2xl" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Obrigado.
        </h1>

        <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-12 leading-relaxed">
          Recursos para Ensino e Pesquisa com Inteligência Artificial — workshop
          aberto à continuidade na Universidade Estadual de Goiás.
        </p>

        <div className="border-t border-primary-foreground/20 pt-8 grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
          <div>
            <p className="font-display text-xs uppercase tracking-wider text-primary-foreground/60 mb-2">
              Contato
            </p>
            <p className="font-display font-semibold mb-2">Prof. Roberto Urzêda</p>
            <a
              href="mailto:roberto.paiva@ueg.br"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              roberto.paiva@ueg.br
            </a>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-wider text-primary-foreground/60 mb-2">
              Continue explorando
            </p>
            <a
              href="https://rurzeda.github.io/PortalEduIA/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline text-sm font-display"
            >
              <ExternalLink className="w-4 h-4" />
              Portal EduIA
            </a>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

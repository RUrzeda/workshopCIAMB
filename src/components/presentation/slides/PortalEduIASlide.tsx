import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { BulletList } from "../BulletList";
import { ExternalLink, GraduationCap, Brain, FileText, Layout, BookOpen } from "lucide-react";
import qrCodePortalEduIA from "@/assets/qr-portal-eduia.png";

export const PortalEduIASlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Portal EduIA"
        subtitle="Recursos, Gems e Ferramentas de IA na Educação"
      />

      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
        {/* Left column: description and features */}
        <div className="space-y-5">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent" />
              O que é o Portal EduIA
            </h3>
            <p className="text-muted-foreground text-sm mb-3">
              Portal educacional dedicado ao uso de Inteligência Artificial na Educação.
            </p>
            <p className="text-muted-foreground text-sm mb-2">Reúne:</p>
            <BulletList
              items={[
                { text: "Gems prontos para uso pedagógico" },
                { text: "Ferramentas de IA aplicadas ao ensino e à pesquisa" },
                { text: "Exemplos práticos de uso em sala de aula" },
                { text: "Materiais de apoio para docentes" },
              ]}
            />
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm">
              O que você encontra no portal
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-xs text-foreground leading-snug">
                  Gems para ensino superior e pesquisa
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Brain className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-xs text-foreground leading-snug">
                  Exemplos de prompts educacionais
                </p>
              </div>
              <div className="flex items-start gap-2">
                <FileText className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-xs text-foreground leading-snug">
                  Ferramentas para produção de material didático
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Layout className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-xs text-foreground leading-snug">
                  Artefatos interativos (portais, quizzes, resumos)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: access card with QR code */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-6 flex flex-col items-center">
          <h3 className="font-display text-xl md:text-2xl font-bold mb-2 text-center">
            Acesse o Portal
          </h3>
          <p className="text-primary-foreground/80 text-sm mb-5 text-center">
            Recursos gratuitos para docentes e pesquisadores
          </p>

          {/* QR Code: square container, large, centered */}
          <div className="bg-white rounded-xl p-4 mb-5 w-64 h-64 flex items-center justify-center">
            <img
              src={qrCodePortalEduIA}
              alt="QR Code para o Portal EduIA"
              className="w-full h-full object-contain"
            />
          </div>

          <a
            href="https://rurzeda.github.io/PortalEduIA/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-lg font-display font-medium hover:bg-accent/90 transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            rurzeda.github.io/PortalEduIA
          </a>
        </div>
      </div>
    </SlideWrapper>
  );
};

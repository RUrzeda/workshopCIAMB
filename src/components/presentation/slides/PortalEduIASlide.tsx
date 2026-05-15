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

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent" />
              O que é o Portal EduIA?
            </h3>
            <p className="text-muted-foreground mb-4">
              Portal educacional dedicado ao uso de Inteligência Artificial na Educação.
            </p>
            <p className="text-muted-foreground">Reúne:</p>
            <BulletList
              className="mt-3"
              items={[
                { text: "Gems prontos para uso pedagógico" },
                { text: "Ferramentas de IA aplicadas ao ensino e à pesquisa" },
                { text: "Exemplos práticos de uso em sala de aula" },
                { text: "Materiais de apoio para docentes" },
              ]}
            />
          </div>

          {/* What you find */}
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
            <h4 className="font-display font-semibold text-foreground mb-4">
              O que você encontra no portal:
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">Gems para ensino superior e pesquisa</p>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">Exemplos de prompts educacionais</p>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">Ferramentas para produção de material didático</p>
              </div>
              <div className="flex items-start gap-3">
                <Layout className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">Artefatos interativos (portais, quizzes, resumos)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Access */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center max-w-md w-full">
            <h3 className="font-display text-2xl font-bold mb-4">
              Acesse o Portal
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Recursos gratuitos para docentes e pesquisadores
            </p>
            
            {/* QR Code */}
            <div className="bg-primary-foreground rounded-xl p-4 mb-6 mx-auto">
              <img 
                src={qrCodePortalEduIA} 
                alt="QR Code para o Portal EduIA" 
                className="w-40 h-40 object-contain"
              />
            </div>

            <a
              href="https://rurzeda.github.io/PortalEduIA/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-display font-medium hover:bg-accent/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              rurzeda.github.io/PortalEduIA
            </a>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

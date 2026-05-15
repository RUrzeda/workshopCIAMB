import { SlideWrapper } from "../SlideWrapper";
import { Mail, ExternalLink } from "lucide-react";
import qrCodePortalEduIA from "@/assets/qr-portal-eduia.png";

export const ClosingSlide = () => {
  return (
    <SlideWrapper className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-secondary blur-2xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Obrigado.
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center border-t border-primary-foreground/20 pt-8">
          {/* Contact */}
          <div>
            <p className="font-display text-xs uppercase tracking-wider text-primary-foreground/60 mb-3">
              Contato
            </p>
            <p className="font-display font-semibold text-2xl mb-3">
              Roberto Urzêda
            </p>
            <a
              href="mailto:roberto.paiva@ueg.br"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-base"
            >
              <Mail className="w-5 h-5" />
              roberto.paiva@ueg.br
            </a>
          </div>

          {/* Continue exploring with QR */}
          <div className="flex flex-col items-start">
            <p className="font-display text-xs uppercase tracking-wider text-primary-foreground/60 mb-3">
              Continue explorando
            </p>

            <div className="flex items-center gap-5">
              <div className="bg-white rounded-xl p-3 w-40 h-40 flex items-center justify-center flex-shrink-0">
                <img
                  src={qrCodePortalEduIA}
                  alt="QR Code para o Portal EduIA"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <a
                  href="https://rurzeda.github.io/PortalEduIA/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline text-base font-display font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  Portal EduIA
                </a>
                <p className="text-primary-foreground/70 text-xs mt-2 leading-snug">
                  Aponte a câmera do celular para o QR Code
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

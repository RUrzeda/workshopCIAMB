import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { Brain, Wand2, FlaskConical, BookOpen, Compass } from "lucide-react";

const modules = [
  {
    n: "01",
    title: "Fundamentos da IA",
    icon: Brain,
    desc: "Conceitos, marcos históricos, Big Data, Transformers e modelos fundamentais.",
  },
  {
    n: "02",
    title: "Engenharia de Prompt",
    icon: Wand2,
    desc: "Componentes de um prompt acadêmico, exemplos contrastivos e atividade prática.",
  },
  {
    n: "03",
    title: "Ferramentas para Pesquisa",
    icon: FlaskConical,
    desc: "Elicit, Research Rabbit, SciSpace, NotebookLM e Deep Research.",
  },
  {
    n: "04",
    title: "Ferramentas para Ensino",
    icon: BookOpen,
    desc: "Gemini Canvas, Guided Learning e Portal EduIA.",
  },
  {
    n: "05",
    title: "Reflexões Críticas e Futuro",
    icon: Compass,
    desc: "Autoria, integridade científica, limitações dos modelos e cenários futuros.",
  },
];

export const AgendaSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle title="Programação do Workshop" subtitle="Cinco módulos" />

      <div className="grid gap-3">
        {modules.map((m, i) => {
          const Icon = m.icon;
          return (
            <div
              key={m.n}
              className="grid grid-cols-[auto_auto_1fr] items-center gap-6 bg-card border border-border rounded-xl p-5 hover:border-accent/40 transition-colors animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="font-display font-bold text-accent text-2xl tabular-nums">{m.n}</span>
              <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-lg">{m.title}</h3>
                <p className="text-muted-foreground text-sm">{m.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SlideWrapper>
  );
};

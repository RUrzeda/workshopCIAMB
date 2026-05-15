import { SlideWrapper } from "../SlideWrapper";
import { SlideTitle } from "../SlideTitle";
import { Highlight } from "../Highlight";
import { FigureFrame } from "../FigureFrame";
import { TrendingUp, TrendingDown, GraduationCap } from "lucide-react";
import jobsRiseOfAi from "@/assets/jobs-rise-of-ai.png";
import jobsWefTable from "@/assets/jobs-wef-table.png";

export const JobsSlide = () => {
  return (
    <SlideWrapper>
      <SlideTitle
        title="Empregos e Qualificação na Era da IA"
        subtitle="Projeções do World Economic Forum (Future of Jobs Report)"
      />

      <div className="grid lg:grid-cols-2 gap-4 mb-5">
        <FigureFrame
          src={jobsRiseOfAi}
          alt="Gráfico de barras intitulado 'The rise of AI will' mostrando 97 milhões de novos empregos criados e 85 milhões eliminados até 2025, com lista de novas especialidades (AI, ML, big data, automação de processos)"
          caption="Estimativa do impacto líquido até 2025"
        />
        <FigureFrame
          src={jobsWefTable}
          alt="Tabela do World Economic Forum listando profissões emergentes com a adoção de LLMs: AI Model and Prompt Engineers, Interface and Interaction Designers, AI Content Creators, Data Curators and Trainers, Ethics and Governance Specialists"
          caption="Novas profissões previstas pelo WEF com a adoção de LLMs"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-card border border-border rounded-xl p-4">
          <TrendingUp className="w-5 h-5 text-accent mb-2" />
          <p className="font-display font-bold text-3xl text-accent">+97 mi</p>
          <p className="font-display text-xs uppercase tracking-wider text-secondary mt-1">
            novos postos projetados
          </p>
          <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
            Engenharia de prompt, ética em IA, governança de dados, especialistas
            em integração e curadoria humana de saídas.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-4">
          <TrendingDown className="w-5 h-5 text-destructive mb-2" />
          <p className="font-display font-bold text-3xl text-destructive">−85 mi</p>
          <p className="font-display text-xs uppercase tracking-wider text-secondary mt-1">
            postos passíveis de eliminação
          </p>
          <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
            Funções operacionais e tarefas altamente padronizadas tendem à
            automação ou recomposição substantiva.
          </p>
        </div>
      </div>

      <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4 mb-4">
        <h3 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2 text-sm">
          <GraduationCap className="w-4 h-4 text-secondary" />
          Implicações para a universidade
        </h3>
        <ul className="space-y-1 text-foreground text-xs">
          <li>• Currículos precisam incorporar literacia em IA, não apenas seu uso</li>
          <li>• Formação contínua de docentes torna-se condição estrutural</li>
          <li>• Pesquisa interdisciplinar (ética, regulação, impacto) ganha centralidade</li>
        </ul>
      </div>

      <Highlight
        text="A questão deslocou-se: não é se a IA transformará o trabalho intelectual, mas como universidades formarão sujeitos capazes de usá-la com discernimento."
        variant="accent"
      />
    </SlideWrapper>
  );
};

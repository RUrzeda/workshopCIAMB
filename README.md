# Workshop CIAMB — Recursos para Ensino e Pesquisa com IA

Portal interativo do workshop de 3 horas sobre uso de Inteligência Artificial em ensino e pesquisa acadêmica, ministrado pelo Prof. Roberto Urzêda (Universidade Estadual de Goiás).

## Conteúdo

40 slides organizados em 5 módulos:

1. **Fundamentos** — Conceitos, evolução histórica, Big Data, Transformers, Foundation Models
2. **Engenharia de Prompt** — Anatomia de prompts, exemplos bons e ruins
3. **Ferramentas para Pesquisa** — Elicit, Research Rabbit, SciSpace, NotebookLM, Deep Research
4. **Recursos para Ensino** — Canvas, Guided Learning, Portal EduIA
5. **Reflexões Críticas** — Autoria e plágio, caso Cabanac, colonialismo de dados, Hype Cycle, limitações, futuro do trabalho

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **React Router** para navegação entre slides
- **Lucide React** para ícones

## Desenvolvimento local

```bash
npm install
npm run dev
```

A aplicação fica disponível em `http://localhost:8080`.

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy no GitHub Pages

O deploy é automático via GitHub Actions a cada push na branch `main`.

**Configuração inicial necessária (uma vez):**

1. No repositório, acesse **Settings → Pages**
2. Em **Source**, selecione **GitHub Actions**
3. O primeiro deploy roda automaticamente após o próximo push

O site fica disponível em: `https://rurzeda.github.io/workshopCIAMB/`

## Autor

Prof. Roberto Urzêda — roberto.paiva@ueg.br
Universidade Estadual de Goiás (UEG)

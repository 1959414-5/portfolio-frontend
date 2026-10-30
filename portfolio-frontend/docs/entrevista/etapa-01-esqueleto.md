# Etapa 1 — Esqueleto, padrões e decisões de arquitetura

## O que foi feito

Criei a base do projeto: React + TypeScript estrito com Vite, roteamento com três áreas (pedidos, clientes, financeiro), estrutura por feature, ferramentas de qualidade (oxlint, Prettier, EditorConfig), testes iniciais com Vitest e quatro ADRs que registram as decisões.

Verificado ao final: lint sem erros, checagem de tipos sem erros, 3 testes passando e build de produção gerado.

## Arquivos principais

- `vite.config.ts`: base do GitHub Pages, alias `@/` e configuração do Vitest.
- `tsconfig.app.json`: opções estritas do TypeScript.
- `src/app/router.tsx` e `src/app/AppLayout.tsx`: rotas e layout.
- `src/features/*`: uma pasta por área, cada uma com `index.ts` público.
- `src/shared/lib/format.ts`: formatação de moeda e data em pt-BR.
- `docs/adr/*`: decisões de arquitetura.
- `CONTRIBUTING.md`: padrão de commits e de código.

## Roteiro de fala (1 minuto)

"Comecei pela fundação, porque é onde a vaga pede que a pessoa defina padrões. Usei TypeScript no modo estrito, organizei o código por feature, com uma interface pública por área, e registrei as decisões em ADRs. Montei lint, formatação e testes antes de escrever telas, para que qualidade seja verificada desde o primeiro commit."

## Perguntas de entrevistador e respostas-modelo

**Por que organizar por feature e não por tipo de arquivo?**
Porque o que muda junto deve ficar junto. Quando preciso alterar ou remover a área de pedidos, mexo em uma pasta. Por tipo de arquivo, eu espalharia a mudança por vários diretórios. Também facilita dividir responsabilidade entre times.

**O que é um ADR e por que usar?**
É um registro curto de uma decisão de arquitetura: contexto, decisão, consequências e alternativas. Serve para quem entra no projeto entender o porquê, e para revisitar a decisão quando o contexto mudar.

**O que o modo estrito do TypeScript te dá?**
Elimina `any` implícito e trata `null`/`undefined` explicitamente. Com `noUncheckedIndexedAccess`, acessar `lista[0]` retorna `T | undefined`, e o compilador me obriga a tratar o caso vazio.

**Por que HashRouter?**
O GitHub Pages é estático e não reescreve rotas. Com rotas normais, recarregar `/pedidos` daria 404. Registrei isso no ADR 0003 e deixei claro que, em um host com reescrita, eu trocaria por `createBrowserRouter`.

**Como você garante que um módulo não dependa de código interno de outro?**
Hoje por convenção, com o `index.ts` de cada feature como API pública, documentada no CONTRIBUTING. O próximo passo seria uma regra de lint que bloqueie importações indevidas.

**Por que oxlint em vez de ESLint?**
Já vem no template do Vite e é muito rápido. Registrei no ADR 0004 o limite: tem menos regras e plugins, e se eu precisar de uma regra que só o ESLint oferece, adiciono ou migro.

**Por que já há testes numa etapa de esqueleto?**
Para validar a ferramenta de teste de ponta a ponta (jsdom, Testing Library, roteamento) antes de ter código real. Um teste cobre uma função pura e outro, a navegação.

## Conceitos para estudar

- Modos estritos do TypeScript e o que cada flag faz.
- SPA, SSR e SSG: diferenças e quando escolher cada um.
- Roteamento por hash e por histórico (History API).
- ADR: estrutura e quando escrever.
- Conventional Commits e versionamento semântico.
- Testing Library: consultar por papel (`getByRole`) em vez de por classe ou id.
- `Intl.NumberFormat` e `Intl.DateTimeFormat` para internacionalização.

## Limites que você deve conhecer (honestidade na entrevista)

- É uma SPA estática sem backend: a API será simulada na Etapa 2.
- A regra de dependência entre features ainda é convenção, sem lint que a force.
- As telas são placeholders; o conteúdo vem nas próximas etapas.

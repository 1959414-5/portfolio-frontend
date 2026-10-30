# Do pedido ao recebimento — projeto demonstrativo de front-end

Aplicação em **React + TypeScript** que acompanha o caminho de um pedido: venda, relacionamento com o cliente e recebimento.

> **Projeto demonstrativo.** Todos os dados são **fictícios** e gerados para este repositório. Não há dados de nenhuma empresa real. Partes simuladas (API, eventos em tempo real) estão identificadas como simuladas na documentação.

## Objetivo

Demonstrar, em um único projeto, práticas de engenharia de front-end: arquitetura documentada, integração com APIs REST, componentes reutilizáveis, testes, performance, observabilidade e CI/CD.

## Status

| Etapa | Conteúdo                                     | Situação  |
| ----- | -------------------------------------------- | --------- |
| 1     | Esqueleto, padrões e decisões de arquitetura | Concluída |
| 2     | Camada de API (REST simulada)                | Pendente  |
| 3     | Design System e Storybook                    | Pendente  |
| 4     | Telas de pedidos, clientes e financeiro      | Pendente  |
| 5     | Eventos em tempo real (simulado)             | Pendente  |
| 6     | Performance e observabilidade                | Pendente  |
| 7     | Testes (unitário, integração, E2E)           | Pendente  |
| 8     | CI/CD e deploy no GitHub Pages               | Pendente  |

## Como rodar

```bash
npm install
npm run dev
```

| Comando                | O que faz                              |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento            |
| `npm run build`        | Checagem de tipos e build de produção  |
| `npm run lint`         | Análise estática com oxlint            |
| `npm run format:check` | Verifica a formatação com Prettier     |
| `npm run typecheck`    | Checagem de tipos (TypeScript estrito) |
| `npm test`             | Testes com Vitest e Testing Library    |

## Estrutura

```
src/
  app/        composição da aplicação: roteamento e layout
  features/   um diretório por área de negócio (orders, customers, finance)
  shared/     código reutilizável sem regra de negócio (utilitários, depois o Design System)
  styles/     estilos globais e tokens
  test/       configuração dos testes
docs/
  adr/        decisões de arquitetura (Architecture Decision Records)
  entrevista/ material de estudo e apresentação (uma nota por etapa)
```

## Decisões de arquitetura

- [0001 — React, TypeScript estrito e Vite](docs/adr/0001-react-typescript-vite.md)
- [0002 — Organização por feature](docs/adr/0002-organizacao-por-feature.md)
- [0003 — HashRouter no GitHub Pages](docs/adr/0003-hashrouter-github-pages.md)
- [0004 — Ferramentas de qualidade](docs/adr/0004-ferramentas-de-qualidade.md)

## Contribuindo

Veja [CONTRIBUTING.md](CONTRIBUTING.md) para o padrão de commits e de código.

# 0001 — React, TypeScript estrito e Vite

**Status:** aceita

## Contexto

A vaga-alvo pede aplicações web com React.js e TypeScript. Precisamos de uma base rápida para desenvolver, testar e publicar como site estático.

## Decisão

- React com TypeScript no modo estrito (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`).
- Vite como ferramenta de build e servidor de desenvolvimento.
- Vitest como executor de testes, porque compartilha a configuração do Vite.

## Consequências

- O compilador acusa acessos a índices que podem ser `undefined` e propriedades opcionais mal tratadas, o que reduz erros em tempo de execução.
- Sem renderização no servidor: o projeto é uma SPA estática. Isso é adequado para um projeto demonstrativo e para o GitHub Pages, mas não atende SEO por página.

## Alternativas consideradas

- Next.js: oferece SSR, mas adiciona complexidade que este projeto não exige.
- Create React App: descontinuado.

# 0003 — HashRouter no GitHub Pages

**Status:** aceita

## Contexto

O GitHub Pages serve arquivos estáticos e não reescreve rotas para o `index.html`. Com rotas normais, atualizar a página em `/pedidos` retornaria 404.

## Decisão

Usar `createHashRouter` do React Router. As rotas ficam depois do `#` (ex.: `/#/pedidos`), então o servidor sempre entrega o `index.html`.

## Consequências

- Funciona sem configuração de servidor.
- As URLs são menos limpas e não servem para SEO.
- Se o projeto migrar para um host com reescrita de rotas, basta trocar por `createBrowserRouter`; as rotas em `routes` não mudam.

# 0004 — Ferramentas de qualidade

**Status:** aceita

## Contexto

Padrões de código só funcionam se forem verificados automaticamente.

## Decisão

- **oxlint** para análise estática (já vem configurado no template do Vite e roda em milissegundos).
- **Prettier** para formatação, para eliminar discussões de estilo.
- **EditorConfig** para manter indentação e fim de linha iguais entre editores.
- **Conventional Commits** para um histórico legível.
- Os mesmos comandos rodarão no CI na Etapa 8.

## Consequências

- O oxlint tem menos regras e plugins que o ESLint. Se surgirem regras que só o ESLint oferece (por exemplo, restrição de importação entre features), podemos adicioná-lo ou migrar, registrando um novo ADR.

# 0002 — Organização por feature

**Status:** aceita

## Contexto

Organizar por tipo de arquivo (`components/`, `hooks/`, `pages/`) espalha o código de uma mesma funcionalidade e dificulta evoluir ou remover uma área.

## Decisão

- `src/features/<area>/` reúne tudo de uma área de negócio (telas, hooks, chamadas de API, tipos).
- Cada feature expõe sua interface pública em `index.ts`.
- `src/shared/` guarda o que é reutilizável e não tem regra de negócio.
- `src/app/` compõe a aplicação (rotas e layout).

Regras de dependência: `app` pode importar de `features` e `shared`; `features` importa de `shared`; `shared` não importa de `features`; uma feature não importa arquivos internos de outra.

## Consequências

- Mudanças ficam localizadas e a revisão de código é mais simples.
- Exige disciplina: a regra de dependência hoje é convenção. Pode ser reforçada com uma regra de lint em etapa futura.

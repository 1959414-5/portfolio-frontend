# Padrões do projeto

## Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/pt-br/):

```
feat: adiciona listagem de pedidos
fix: corrige formatação de moeda
docs: registra decisão sobre roteamento
test: cobre o cálculo de saldo em aberto
chore: atualiza dependências
```

## Antes de abrir um commit

```bash
npm run format
npm run lint
npm run typecheck
npm test
```

## Regras de código

- TypeScript estrito. Sem `any`; use `unknown` e estreite o tipo.
- Cada feature expõe só o que é público pelo `index.ts` da sua pasta. Outras features não importam arquivos internos dela.
- `shared/` não importa de `features/`.
- Importações usam o alias `@/` (ex.: `@/shared/lib/format`).
- Mudança de arquitetura gera um novo ADR em `docs/adr/`.

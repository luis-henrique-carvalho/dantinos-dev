---
modified: 2026-01-17T16:31:21.435Z
title: MVP Scope Template
---

# MVP Scope Template

> Defina claramente o que entra e o que NÃO entra no MVP.

---

## [Nome do Projeto] - MVP Scope

**Data:** [Data]
**Versão:** 1.0

---

## Visão do MVP

**Em uma frase, o que o MVP faz?**

> [Descreva]

**Qual hipótese estamos testando?**

> [Hipótese principal a validar]

**Como saberemos que funcionou?**

> [Métrica de sucesso]

---

## Escopo: O que ENTRA

### Must Have (P0) - Sem isso não lança

| Feature | Descrição | Critério de Done |
| ------- | --------- | ---------------- |
|         |           |                  |
|         |           |                  |
|         |           |                  |
|         |           |                  |

### Should Have (P1) - Importante, mas pode esperar v1.1

| Feature | Descrição | Por que não é P0 |
| ------- | --------- | ---------------- |
|         |           |                  |
|         |           |                  |
|         |           |                  |

### Could Have (P2) - Nice to have

| Feature | Descrição | Quando considerar |
| ------- | --------- | ----------------- |
|         |           |                   |
|         |           |                   |

---

## Escopo: O que NÃO ENTRA

### Explicitamente Fora do MVP

| Feature | Por que não entra | Quando reconsiderar |
| ------- | ----------------- | ------------------- |
|         |                   |                     |
|         |                   |                     |
|         |                   |                     |
|         |                   |                     |
|         |                   |                     |

### Tentações Comuns a Evitar

- [ ] Múltiplos tipos de usuário (foque em um)
- [ ] Dashboard de admin elaborado
- [ ] Analytics avançados
- [ ] Múltiplas integrações
- [ ] Multi-tenancy complexo
- [ ] Internacionalização (i18n)
- [ ] Mobile app nativo
- [ ] API pública
- [ ] Marketplace/plugins
- [ ] Billing complexo (múltiplos planos)

---

## Decisões de Simplificação

### Autenticação

- [ ] Magic link only (sem senha)
- [ ] Google OAuth only
- [ ] Email + senha simples
- [ ] Supabase Auth default

### Billing

- [ ] Free only no MVP
- [ ] Um plano pago simples
- [ ] Stripe Checkout (sem custom)
- [ ] Trial manual (sem automação)

### UI/UX

- [ ] Light mode only
- [ ] Desktop-first (mobile depois)
- [ ] shadcn/ui default styling
- [ ] Sem onboarding elaborado

### Features

- [ ] CRUD básico primeiro
- [ ] Sem bulk actions
- [ ] Sem export/import
- [ ] Sem histórico/versioning
- [ ] Sem real-time (polling ok)

---

## Personas no MVP

### Persona Principal (foco total)

**Nome:** [Nome]
**Quem é:** [Descrição]
**Job to be Done:** [JTBD]

### Personas FORA do MVP

| Persona | Por que não agora |
| ------- | ----------------- |
|         |                   |
|         |                   |

---

## Fluxos Críticos

### Fluxo 1: [Nome do Fluxo Principal]

```
1. Usuário [ação]
2. Sistema [resposta]
3. Usuário [ação]
4. Sistema [resposta]
5. [Resultado]
```

### Fluxo 2: [Nome do Segundo Fluxo]

```
1. ...
2. ...
```

---

## Stack do MVP

### Escolhas Definitivas

| Camada     | Tecnologia           | Justificativa       |
| ---------- | -------------------- | ------------------- |
| Frontend   | Next.js              | Performance, DX     |
| Styling    | Tailwind + shadcn    | Speed, consistência |
| Backend    | Supabase             | Auth + DB + Storage |
| Deploy     | Vercel               | Zero config         |
| Pagamentos | Stripe (se precisar) | Standard            |

### O que NÃO usar (complexidade desnecessária)

- [ ] GraphQL (REST é suficiente)
- [ ] State management complexo (React state ok)
- [ ] Micro-frontends
- [ ] Kubernetes
- [ ] Multiple databases
- [ ] Message queues
- [ ] Microservices

---

## Timeline Estimado

| Fase          | Duração    | Entregáveis                |
| ------------- | ---------- | -------------------------- |
| Setup         | X dias     | Projeto base, auth, deploy |
| Core Features | X dias     | Features P0                |
| Polish        | X dias     | Ajustes, bugs, UX          |
| Soft Launch   | X dias     | Beta fechado               |
| **Total**     | **X dias** |                            |

---

## Definition of Done (MVP)

O MVP está pronto quando:

- [ ] Todas as features P0 funcionando
- [ ] Fluxos críticos testados
- [ ] Deploy em produção
- [ ] Monitoring básico
- [ ] Pelo menos 1 usuário real usando
- [ ] Métricas de sucesso rastreáveis

---

## Riscos e Mitigações

| Risco       | Probabilidade | Impacto | Mitigação                     |
| ----------- | ------------- | ------- | ----------------------------- |
| Scope creep | Alta          | Alto    | Revisar este doc semanalmente |
| Tech debt   | Média         | Médio   | Aceitar para MVP, documentar  |
|             |               |         |                               |

---

## Hipóteses a Validar

| Hipótese                  | Como validar | Sucesso =   |
| ------------------------- | ------------ | ----------- |
| Pessoas têm esse problema | X signups    | > Y signups |
| Nossa solução resolve     | Retention    | > Z% 7-day  |
| Pagariam por isso         | Upgrade rate | > W%        |

---

## Próximos Passos Pós-MVP

Depois de validar o MVP, considerar:

1. [ ] [Feature para v1.1]
2. [ ] [Feature para v1.1]
3. [ ] [Feature para v1.2]
4. [ ] [Feature para v2]

---

## Regra de Ouro

Quando em dúvida se algo entra no MVP, pergunte:

> "Posso validar minha hipótese principal SEM essa feature?"

Se sim → Não entra no MVP.

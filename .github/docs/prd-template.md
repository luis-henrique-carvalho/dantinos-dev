---
modified: 2026-01-17T16:31:20.268Z
title: PRD Template
---

# PRD Template

> Baseado no estilo Linear/OpenAI - curto, direto, focado no problema.

---

# [Nome do Projeto]

**Autor:** [Nome]
**Data:** [Data]
**Status:** Draft | In Review | Approved

---

## Overview

Uma ou duas frases explicando o que é este projeto e por que ele importa agora.

---

## Problem

### O que está acontecendo?

Descreva o problema atual. Seja específico.

### Quem é afetado?

Liste as personas impactadas.

### Qual o custo de não resolver?

Tempo perdido, dinheiro, frustração, oportunidade.

### Como resolvem hoje?

Alternativas atuais (concorrentes, workarounds, planilhas, etc.)

---

## Goals

O que significa sucesso para este projeto?

- [ ] **Goal 1:** [Descrição] → Métrica: [Como medir]
- [ ] **Goal 2:** [Descrição] → Métrica: [Como medir]
- [ ] **Goal 3:** [Descrição] → Métrica: [Como medir]

---

## Non-Goals

O que NÃO estamos tentando fazer nesta versão:

- ❌ [Coisa que não entra]
- ❌ [Outra coisa que não entra]
- ❌ [Feature para o futuro]

---

## User Stories

### Persona 1: [Nome da Persona]

> [Breve descrição: quem é, o que faz, qual sua dor principal]

- Como [persona], eu quero [ação] para [benefício]
- Como [persona], eu quero [ação] para [benefício]
- Como [persona], eu quero [ação] para [benefício]

### Persona 2: [Nome da Persona]

> [Breve descrição]

- Como [persona], eu quero [ação] para [benefício]
- Como [persona], eu quero [ação] para [benefício]

---

## Solution

### Visão Geral

Descreva a solução proposta em 2-3 parágrafos.

### Features Principais

| Feature   | Descrição | Prioridade  |
| --------- | --------- | ----------- |
| Feature 1 | O que faz | Must have   |
| Feature 2 | O que faz | Must have   |
| Feature 3 | O que faz | Should have |
| Feature 4 | O que faz | Could have  |

### User Flow

1. Usuário faz X
2. Sistema responde com Y
3. Usuário vê Z
4. ...

---

## Technical Approach

### Stack

- **Frontend:** Next.js, shadcn/ui, Tailwind
- **Backend:** Supabase (Auth, Database, Storage)
- **Infra:** Vercel

### Arquitetura

```
[Cliente] → [Next.js] → [Supabase]
                ↓
           [Auth + DB + Storage]
```

### Integrações

- [ ] Supabase Auth
- [ ] Supabase Database
- [ ] [Outras integrações]

### Constraints

- Client-side first
- Mínimo de server-side
- [Outras limitações]

---

## Design Guidelines

### Estilo Visual

- Clean, moderno, light mode
- Referências: Linear, Resend, Vercel
- Base: shadcn/ui

### Cores

- Primary: [hex]
- Background: [hex]
- Text: [hex]

### Tipografia

- Font: Inter ou Geist

---

## Success Metrics

| Métrica   | Baseline | Target | Como medir |
| --------- | -------- | ------ | ---------- |
| Métrica 1 | 0        | X      | [Método]   |
| Métrica 2 | 0        | Y      | [Método]   |

---

## Timeline

| Fase      | Descrição        | Duração | Entregáveis           |
| --------- | ---------------- | ------- | --------------------- |
| Discovery | Validar problema | X dias  | Pesquisa, entrevistas |
| MVP       | Core features    | X dias  | Produto funcional     |
| Beta      | Feedback loop    | X dias  | Iterações             |
| Launch    | Go to market     | X dias  | LP, marketing         |

---

## Risks & Assumptions

### Assumptions

- [Assumimos que X é verdade]
- [Assumimos que Y vai acontecer]

### Risks

| Risco   | Probabilidade    | Impacto          | Mitigação |
| ------- | ---------------- | ---------------- | --------- |
| Risco 1 | Alta/Média/Baixa | Alto/Médio/Baixo | [Plano]   |
| Risco 2 | Alta/Média/Baixa | Alto/Médio/Baixo | [Plano]   |

---

## Open Questions

- [ ] Pergunta 1?
- [ ] Pergunta 2?
- [ ] Pergunta 3?

---

## Appendix

### Referências

- [Link 1]
- [Link 2]

### Pesquisas/Entrevistas

- [Resumo de entrevistas]

### Competitors

- [Análise de concorrentes]

# MVP-SCOPE - HabitCoach

## 🎯 Objetivo do MVP

Validar que usuários pagam por IA como coach pessoal em gerenciamento de hábitos. Criar base sólida para iteração rápida.

---

## ✅ O Que ENTRA no MVP (Must Have)

### Tier 1: Core (Essencial)

- [ ] **Autenticação**: Email/senha + OAuth Google (JWT via Supabase)
- [ ] **Criar Hábitos**: Nome, descrição, frequência (diário/seg-sex/custom)
- [ ] **Marcar Hábito Feito**: Botão simples "Marcar como Feito" (dia atual)
- [ ] **Review Dia Anterior**: Modal ao iniciar novo dia para revisar/corrigir hábitos
- [ ] **Dashboard**: Lista de hábitos + status de hoje + streak visual
- [ ] **Relatório Semanal IA**: Análise automática segunda 9h, mostra padrões
- [ ] **Sugestões IA**: IA sugere ajustes (ex: falhas repetidas → reduzir frequência)
- [ ] **Gamificação**: Pontos (10/hábito + bonus streak), visualização no dashboard
- [ ] **Freemium**: 3 hábitos grátis, IA é premium ($4.99/mês)

### Tier 2: Importante (Should Have)

- [ ] **Criar Metas**: Com data início/fim, visualização de progresso
- [ ] **Histórico de Hábitos**: Ver registro de cada dia (últimos 30 dias)
- [ ] **Gráfico de Progresso**: Streak visual (7-30 dias)
- [ ] **Badges Simples**: "Semana Perfeita", "30 dias seguidos"
- [ ] **Email de Relatório**: Enviar relatório por email toda segunda

### Tier 3: Legal ter (Could Have)

- [ ] **Dark Mode**: Tema escuro opcional
- [ ] **Ícones para Hábitos**: Categorização visual (exercise, meditation, etc)
- [ ] **Notificação Web**: Reminder às 9h para marcar hábitos

---

## ❌ O Que NÃO Entra no MVP (Won't Have)

| Feature                              | Por quê                                          |
| ------------------------------------ | ------------------------------------------------ |
| Comunidade/Leaderboards              | Complexa, não é core do problema (coach pessoal) |
| Mobile App Nativo                    | Web-first, se houver demanda, depois             |
| Integração com Wearables             | Futura fase, valida core antes                   |
| Chat Contínuo com IA                 | MVP foca em relatório semanal + sugestões        |
| Análise Agregada (Benchmarking)      | Precisa + usuários, dados sensíveis              |
| Export PDF/CSV                       | Nice to have, pode ser manual depois             |
| Notificações Push                    | MVP usa email, push é future                     |
| Apple Health/Google Fit              | Futura, não MVP                                  |
| Múltiplos Planos Premium             | Começa com 1 plano: $4.99/mês                    |
| Customização Avançada (cores, temas) | Foco no core, UI padrão                          |

---

## 📊 Priorização MoSCoW

### MUST (Não sai sem isso)

1. Autenticação segura
2. CRUD de hábitos
3. Tracking diário (marcar hábito + review dia anterior)
4. Dashboard simples
5. Relatório semanal IA
6. Sugestões IA básicas
7. Freemium paywall
8. Stripe integration

### SHOULD (MVP+, próximas 1-2 semanas)

1. Metas
2. Histórico (calendário de progresso)
3. Email de relatório
4. Badges

### COULD (Post-MVP)

1. Dark mode
2. Web notifications
3. Ícones de categoria
4. Export de dados

### WON'T (Fase 2+)

1. Mobile nativo
2. Comunidade
3. Wearables
4. Chat IA contínuo

---

## 📈 Hipóteses a Validar

| Hipótese                                 | Métrica de Sucesso                    | Ação se Falhar                         |
| ---------------------------------------- | ------------------------------------- | -------------------------------------- |
| **Usuários pagam por IA como coach**     | > 5% conversão freemium → premium     | Ajustar positioning, melhorar IA       |
| **Retenção melhora com IA**              | Dia 7 retention > 40% (vs 20% sem IA) | Melhorar onboarding, IA mais agressiva |
| **Relatório semanal é suficiente**       | 70% de usuários abrem relatório       | Testar frequência diferente            |
| **Dashboard simples é usável**           | 90% conseguem marcar hábito em 1s     | Simplificar UI                         |
| **Review dia anterior resolve problema** | > 80% dos usuários usam feature       | Simplificar UX do modal                |

---

## 🎯 Critérios de Sucesso do MVP

### Funcional

- [ ] 100% uptime no primeiro mês
- [ ] Latência < 1s para dashboard
- [ ] IA relatório < 5s
- [ ] Zero bugs críticos (app-breaking)

### Product

- [ ] > 100 usuários beta
- [ ] > 40% retention dia 7
- [ ] > 5% conversão (freemium → premium)
- [ ] NPS > 30

### Business

- [ ] > 5 usuários premium pagantes
- [ ] CAC < $10 (durante beta)
- [ ] LTV estimado > $100 (anual)

---

## ⏱️ Timeline Estimado

| Fase              | Dias           | Descrição                                    |
| ----------------- | -------------- | -------------------------------------------- |
| Setup + Infra     | 3-5            | Next.js, Supabase, TypeScript, Design System |
| Autenticação      | 2-3            | Signup, login, JWT, OAuth Google             |
| Hábitos CRUD      | 3-5            | Create, read, update, delete, validação      |
| Tracking + Review | 3-5            | Marcar feito, modal review dia anterior      |
| Dashboard         | 3-4            | Layout, gráficos, real-time                  |
| IA Relatório      | 4-5            | Prompt design, integração OpenAI, storage    |
| IA Sugestões      | 3-4            | Lógica simples, armazenamento                |
| Gamificação       | 2-3            | Pontos, badges, visualização                 |
| Freemium + Stripe | 3-4            | Paywall, checkout, webhook                   |
| Metas             | 2-3            | CRUD, progresso                              |
| Testes + Deploy   | 3-5            | E2E, staging, produção                       |
| Buffer            | 2-3            | Imprevistos, refinements                     |
| **TOTAL**         | **35-45 dias** | ~5-6 semanas dedicado                        |

---

## 🛠️ Stack Decisivo

| Layer      | Ferramenta                 | Por quê                          |
| ---------- | -------------------------- | -------------------------------- |
| Frontend   | Next.js 16                 | App Router, SSR, performance     |
| Styling    | Tailwind + shadcn/ui       | Rápido, clean, accessible        |
| Backend    | Supabase                   | Auth, DB, realtime, funções      |
| IA         | OpenAI gpt-3.5 (ou Claude) | Custo baixo, rápido              |
| Billing    | Stripe                     | Confiável, webhook               |
| Monitoring | Sentry                     | Erros em produção                |
| Deployment | Vercel                     | Next.js nativa, CI/CD automático |

---

## 📋 Decisões de Design (Não Voltar)

1. **Freemium 3-hábitos grátis**: Reduz fricção, valida core antes de cobrar
2. **IA semanal, não diária**: Menos custo, suficiente para MVP, iterável
3. **Review Dia Anterior**: Usuário controla o que marcar, dados confiáveis
4. **Relatório estruturado, não chat**: Mais fácil de implementar, ainda oferece valor
5. **Sugestões simples (regras)**: MVP sem ML complexo, escalável depois
6. **Web-first**: Mobile web responsivo, app nativo se houver tração

---

## 🚨 Riscos & Mitigações

| Risk                                | Probabilidade | Impacto | Mitigation                                        |
| ----------------------------------- | ------------- | ------- | ------------------------------------------------- |
| IA muito genérica, usuário não paga | Alto          | Alto    | Design prompt com exemplos pessoais, testar early |
| Churn alto (dia 7 < 40%)            | Médio         | Alto    | Onboarding força, 1ª IA grátis, daily reminder    |
| Custo OpenAI explode                | Baixo         | Médio   | Rate limit, cache, usar gpt-3.5                   |
| Review não mostrado ao usuário      | Baixo         | Médio   | Testes de fluxo de novo dia, UX simples           |
| DB performance cai                  | Baixo         | Alto    | Índices, Supabase managed                         |

---

## ✨ Diferencial Mantido no MVP

✅ **IA como coach** (não tracking passivo)
✅ **Sugestões personalizadas** (não genéricas)
✅ **Review Dia Anterior** (usuário controla dados, sem automação arbitrária)
✅ **Gamificação motivadora** (pontos + badges)
✅ **Freemium focado** (valida disposição de pagar)

---

## 📌 Go/No-Go para Kickoff

**Go se:**

- [ ] Time técnico confirmado (pelo menos 1 dev full-time)
- [ ] Supabase account criada e testada
- [ ] OpenAI API key pronta
- [ ] Design mockups aprovados (em outra doc)
- [ ] Orçamento confirmado (Supabase + OpenAI + Stripe)

**No-Go se:**

- [ ] Escopo não estiver claro
- [ ] IA muito complexa no design
- [ ] Não houver validação inicial do problema

---

**Status**: Ready for Development ✅

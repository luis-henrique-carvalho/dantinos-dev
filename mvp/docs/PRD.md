# PRD - HabitCoach

## 1. Visão Geral do Produto

**HabitCoach** é um SaaS de gerenciamento de hábitos + metas com IA integrada. Funciona como um coach pessoal que:

- Rastreia hábitos diários e metas com prazos
- Analisa padrões de sucesso/falha
- Gera relatórios semanais inteligentes
- Sugere ajustes específicos para melhorar aderência
- Gamifica progresso (pontos, streaks)

**Stack**: Next.js 16 + Supabase + OpenAI/Claude + Tailwind + shadcn/ui

---

## 2. Personas

### Persona 1: Lucas (Estudante)

- **Idade**: 22 anos
- **Profissão**: Estudante de Engenharia
- **Problema**: Quer manter hábitos saudáveis, mas desorganizado. Tenta apps, abandona rápido.
- **Motivação**: Ter um "amigo" que cobra e motiva
- **Comportamento**: Usa celular 6h/dia, prefere interfaces limpas

### Persona 2: Maria (Profissional)

- **Idade**: 32 anos
- **Profissão**: Gerente de Projetos
- **Problema**: Quer equilibrar trabalho com saúde, mas sem tempo pra análise completa
- **Motivação**: Relatórios automáticos que poupem tempo
- **Comportamento**: Paga por ferramentas que economizam tempo

### Persona 3: João (Entusiasta de Saúde)

- **Idade**: 28 anos
- **Profissão**: Empreendedor
- **Problema**: Treina e quer otimizar, mas não tem feedback estruturado
- **Motivação**: Dados e dicas para otimizar performance
- **Comportamento**: Está disposto a pagar por features premium

---

## 3. User Stories

### Epic 1: Autenticação & Onboarding

```
Como novo usuário,
Quero fazer login/signup rápido,
Para começar a rastrear hábitos imediatamente
```

**Critérios de Aceitação:**

- [ ] Signup com email/senha ou OAuth (Google)
- [ ] Email de confirmação obrigatório
- [ ] Onboarding com 3 telas (Problema, Solução, Começar)

---

### Epic 2: Criar & Gerenciar Hábitos

```
Como usuário,
Quero criar hábitos diários com nome, descrição e frequência,
Para rastreá-los systematicamente
```

**Critérios de Aceitação:**

- [ ] Criar hábito com: nome, descrição, frequência (diário/seg-sex/custom)
- [ ] Editar hábito existente
- [ ] Deletar hábito (soft delete, não perder histórico)
- [ ] Listar todos os hábitos do usuário
- [ ] Validação: nome obrigatório, máx 50 caracteres

**User Story - Marcar Hábito:**

```
Como usuário,
Quero marcar um hábito como "feito" quando completo,
Para visualizar meu progresso
```

**Critérios de Aceitação:**

- [ ] Botão "Marcar como Feito" na tela do dia atual
- [ ] Hábito marcado recebe checkmark visual
- [ ] Streak conta automaticamente (dias consecutivos)
- [ ] Usuário pode desmarcar se marcar errado
- [ ] Dados sincronizam em tempo real (Supabase realtime)

---

### Epic 2B: Review Dia Anterior

```
Como usuário,
Quero revisar e corrigir os hábitos do dia anterior ao iniciar um novo dia,
Para manter dados precisos e não perder informações
```

**Critérios de Aceitação:**

- [ ] Ao acessar o app em um novo dia, aparece modal/página "Revise seu dia anterior"
- [ ] Modal mostra todos os hábitos do dia anterior com checkbox (feito/não feito)
- [ ] Usuário consegue marcar/desmarcar hábitos
- [ ] Botão "Iniciar Novo Dia" confirma e muda para o dia atual
- [ ] Após confirmar, dashboard mostra dia atual limpo
- [ ] Se usuário marcar hábito "tarde" (ex: 3am do dia siguiente), consegue marcar no review

---

### Epic 3: Criar & Gerenciar Metas

```
Como usuário,
Quero criar metas com prazo específico,
Para ter objetivos além de hábitos diários
```

**Critérios de Aceitação:**

- [ ] Criar meta com: nome, descrição, data de início, data de término
- [ ] Meta linked a hábito (opcional)
- [ ] Visualizar progresso da meta vs. hábitos relacionados
- [ ] Validação: data fim > data início

---

### Epic 4: Dashboard & Visualização

```
Como usuário,
Quero ver meu progresso em um dashboard limpo,
Para ter visão geral do meu desempenho
```

**Critérios de Aceitação:**

- [ ] Dashboard mostra: todos os hábitos, status de hoje (feito/não feito)
- [ ] Gráfico de streak (últimos 7-30 dias)
- [ ] Progresso das metas em cards
- [ ] Taxa de conclusão do dia (ex: 3/5 hábitos)
- [ ] Estatísticas: maior streak, taxa média mensal

---

### Epic 5: Relatório Semanal com IA

```
Como usuário,
Quero receber um relatório semanal analisado por IA,
Para entender meus padrões e melhorar
```

**Critérios de Aceitação:**

- [ ] Relatório gerado automaticamente toda segunda-feira
- [ ] Análise IA contém: taxa de conclusão, padrões de falha, tendências
- [ ] Exemplo: "Você teve 85% de aderência. Dias mais fracos: terça e quarta. Hábito mais abandonado: meditação."
- [ ] Usuário pode gerar relatório manualmente a qualquer hora
- [ ] Relatório é viewável no app e enviável por email

---

### Epic 6: Sugestões Inteligentes da IA

```
Como usuário,
Quero receber sugestões específicas da IA sobre como melhorar,
Para ajustar hábitos com base em dados pessoais
```

**Critérios de Aceitação:**

- [ ] IA analisa falhas e sugere ajustes viáveis (ex: "Você falha no café da manhã. Tente acordar 10min mais cedo ou mude para noite")
- [ ] Sugestão contém: problema identificado, sugestão de ação, lógica por trás
- [ ] Máx 3-5 sugestões por semana (não sobrecarregar)
- [ ] Usuário pode marcar sugestão como "útil" ou "não aplicável"

---

### Epic 7: Gamificação

```
Como usuário,
Quero ganhar pontos e ver streaks,
Para me sentir motivado a continuar
```

**Critérios de Aceitação:**

- [ ] Cada hábito completado = 10 pontos
- [ ] Bonus streak: +1 ponto por dia consecutivo (ex: dia 7 = 17 pontos)
- [ ] Visualização de pontos totais no dashboard
- [ ] Badges (ex: "Semana Perfeita", "30 dias seguidos")
- [ ] Ranking pessoal (não há ranking global no MVP)

---

### Epic 8: Freemium Paywall

```
Como usuário gratuito,
Quero ver valor da IA antes de pagar,
Para converter facilmente
```

**Critérios de Aceitação:**

- [ ] Grátis: até 3 hábitos, dashboard básico, sem IA
- [ ] Premium trial: primeiro relatório IA grátis
- [ ] Premium paywall: se tentar acessar IA, aparece "upgrade agora"
- [ ] Upgrade leva a checkout (Stripe)

---

## 4. Requisitos Funcionais por Feature

### Feature: Autenticação

- Signup com email/senha
- Login
- Logout
- Persistência de sessão (token JWT via Supabase)
- OAuth Google (opcional no MVP 1)

### Feature: Hábitos

- CRUD completo
- Validação de entrada
- Soft delete
- Listing com filtros (ativo/inativo)

### Feature: Tracking Diário

- Marcar hábito como feito (botão, dia atual)
- Desmarcar hábito se errou
- Review dia anterior ao iniciar novo dia
- Histórico de registro (quando foi marcado)

### Feature: Metas

- CRUD
- Link com hábitos
- Cálculo de progresso (% dos hábitos completados durante período da meta)

### Feature: Dashboard

- Real-time sync (Supabase real-time)
- Gráficos de streak (recharts ou similar)
- Cards de progresso

### Feature: Relatório Semanal IA

- Acionado por cron job (toda segunda 9h da manhã) ou gerado manualmente
- Coleta dados: hábitos completados, padrões, falhas
- Chama OpenAI/Claude com prompt estruturado
- Armazena resultado no banco
- Usuário acessa via interface ou email

### Feature: Sugestões IA

- Rodas semanalmente (segunda 9h30)
- Análise simples: se falhou 3x no mesmo hábito, sugerir reduzir frequência
- Armazenadas e exibidas no dashboard

### Feature: Gamificação

- Cálculo de pontos (trigger: hábito marcado como feito)
- Armazenamento de streak por hábito
- Visualização no dashboard

### Feature: Freemium

- Middleware que bloqueia IA se não premium
- Integração Stripe para checkout
- Webhook para atualizar status do usuário no banco

---

## 5. Requisitos Não-Funcionais

### Performance

- Tempo de carregamento do dashboard: < 1s
- Relatório IA gerado em < 5s (ideal < 2s)
- Suportar 10k usuários simultâneos no MVP

### Segurança

- Autenticação via JWT
- Criptografia de senhas (bcrypt)
- HTTPS obrigatório
- CORS configurado
- Rate limit em APIs (100 req/min por usuário)

### Escalabilidade

- Banco Supabase com auto-scaling
- Relatório IA rodado via job queue (não síncrono)
- Cache de relatórios (não regenerar se já existe)

### Disponibilidade

- SLA: 99.5% uptime
- Backup automático (Supabase cuida)

### Confiabilidade

- Falha silenciosa da IA não quebra app (mostra mensagem "IA em manutenção")
- Retry automático em falhas de rede
- Logging de erros (Sentry ou similar)

---

## 6. Integrações (MVP)

### Supabase

- Auth (JWT)
- PostgreSQL (banco relacional)
- Realtime (websockets para sync)
- Functions (cron jobs para relatórios IA semanais)

### OpenAI ou Claude (via API)

- Chamadas para gerar relatórios
- Chamadas para sugestões
- Rate limit: máx 100 chamadas/dia (para não estourar custos)

### Stripe (Billing)

- Checkout de plano premium
- Webhook para confirmar pagamento
- Portal de gerenciamento de assinatura

---

## 7. Casos de Borde & Edge Cases

| Caso                                           | Solução                                          |
| ---------------------------------------------- | ------------------------------------------------ |
| Usuário marca hábito "tarde" (ex: 3am)         | Consegue revisar/marcar no modal de dia anterior |
| IA cair/timeout                                | Mostrar erro amigável, oferecer retry            |
| Usuário deletar hábito durante período de meta | Manter histórico, mas não contar para frente     |
| Múltiplas abas abertas                         | Real-time sync atualiza em todas                 |
| Timezone do usuário diferente                  | Usar timezone do browser                         |
| Usuário com zero hábitos                       | Dashboard vazio com CTA "Criar Hábito"           |
| Premium expirar sem renovação                  | Desabilitar acesso a IA, manter dados intactos   |
| Usuário fecha modal sem revisar dia anterior   | Data persiste, pode revisar depois               |

---

## 8. Critérios de Aceitação Globais

- [ ] Todos os endpoints testados (testes E2E)
- [ ] TypeScript com zero `any`
- [ ] Loading states em todo lugar
- [ ] Mensagens de erro claras
- [ ] Mobile responsivo (min 320px)
- [ ] Accessibility: WCAG 2.1 AA (cores, contrast, keyboard nav)
- [ ] Documentação de API (OpenAPI/Swagger)
- [ ] Documentação de banco (schema)

---

## 9. Dependências & Risks

| Risk                       | Mitigation                                         |
| -------------------------- | -------------------------------------------------- |
| Custo de IA (OpenAI) alto  | Usar modelo barato (gpt-3.5), cache, rate limit    |
| Retenção baixa de usuários | Onboarding forte, primeira IA grátis, notificações |
| Churn de usuários premium  | Feedback contínuo, melhorias mensais               |
| Complexity de automação    | Começar simples, testar bem                        |

---

## 10. Roadmap Futuro (Pós-MVP)

- [ ] Comunidade (leaderboards, desafios com amigos)
- [ ] Integração com wearables (Apple Watch, Fitbit)
- [ ] Mobile app nativo (React Native)
- [ ] Análise com dados agregados de usuários (benchmarking)
- [ ] Chat contínuo com IA (não apenas relatórios)
- [ ] Export de dados (PDF, CSV)

# DESIGN-GUIDELINES - HabitCoach

---

## 🎨 Paleta de Cores

### Cores Primárias

| Cor               | Hex       | RGB          | Uso                          |
| ----------------- | --------- | ------------ | ---------------------------- |
| **Brand Blue**    | `#3B82F6` | 59, 130, 246 | CTAs, botões, highlights     |
| **Accent Green**  | `#10B981` | 16, 185, 129 | Sucesso, completado, streaks |
| **Accent Orange** | `#F59E0B` | 245, 158, 11 | Atenção, sugestões, warnings |

### Cores Neutras

| Cor             | Hex       | RGB           | Uso                |
| --------------- | --------- | ------------- | ------------------ |
| **Dark Text**   | `#1F2937` | 31, 41, 55    | Texto principal    |
| **Light Text**  | `#6B7280` | 107, 114, 128 | Texto secundário   |
| **Light Gray**  | `#F3F4F6` | 243, 244, 246 | Backgrounds        |
| **White**       | `#FFFFFF` | 255, 255, 255 | Backgrounds claros |
| **Border Gray** | `#E5E7EB` | 229, 231, 235 | Borders, dividers  |

### Cores de Status

| Status         | Cor      | Hex       | Uso               |
| -------------- | -------- | --------- | ----------------- |
| **Success**    | Verde    | `#10B981` | Hábito completado |
| **Incomplete** | Cinza    | `#D1D5DB` | Hábito não feito  |
| **Warning**    | Laranja  | `#F59E0B` | Sugestão, ajuste  |
| **Error**      | Vermelho | `#EF4444` | Erro, deletar     |

### Color Psychology

- **Azul**: Confiança, calma, produtividade
- **Verde**: Sucesso, crescimento, motivação
- **Laranja**: Atração, ação, ajustes

---

## 🔤 Tipografia

### Font Stack

```css
/* Headings */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

/* Body */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

**Alternativa (Google Fonts)**:

- **Headings**: Inter Bold (700-800)
- **Body**: Inter Regular (400-500)

### Escala Tipográfica (8px base)

| Uso              | Size | Weight | Line-height |
| ---------------- | ---- | ------ | ----------- |
| **Headline 1**   | 48px | 700    | 1.2         |
| **Headline 2**   | 36px | 700    | 1.25        |
| **Headline 3**   | 28px | 600    | 1.35        |
| **Headline 4**   | 24px | 600    | 1.4         |
| **Subheading**   | 20px | 600    | 1.5         |
| **Body Large**   | 16px | 400    | 1.6         |
| **Body Regular** | 14px | 400    | 1.6         |
| **Body Small**   | 12px | 400    | 1.5         |
| **Caption**      | 11px | 500    | 1.4         |

### Text Colors

- **Headings**: `#1F2937` (Dark)
- **Body**: `#374151` (Gray-900)
- **Secondary**: `#6B7280` (Gray-600)
- **Tertiary**: `#9CA3AF` (Gray-500)

---

## 📏 Espaçamento (8px Grid)

### Scale

```
4px   = 0.5x
8px   = 1x (base)
12px  = 1.5x
16px  = 2x
24px  = 3x
32px  = 4x
40px  = 5x
48px  = 6x
56px  = 7x
64px  = 8x
80px  = 10x
```

### Aplicações

| Elemento    | Padding   | Margin           |
| ----------- | --------- | ---------------- |
| **Button**  | 12px 16px | 0                |
| **Card**    | 24px      | 16px bottom      |
| **Input**   | 12px 16px | 0                |
| **Section** | 0 24px    | 80px 0 (desktop) |

---

## 🔲 Border Radius

| Uso                | Value        |
| ------------------ | ------------ |
| **Buttons**        | 8px          |
| **Cards**          | 12px         |
| **Inputs**         | 8px          |
| **Modals**         | 16px         |
| **Avatars**        | 50% (circle) |
| **Small Elements** | 4px          |

---

## 🌫️ Sombras (Depth)

### Elevation Scale

| Level                | Box Shadow                            |
| -------------------- | ------------------------------------- |
| **Level 0 (None)**   | none                                  |
| **Level 1 (Subtle)** | `0 1px 2px 0 rgba(0, 0, 0, 0.05)`     |
| **Level 2 (Hover)**  | `0 4px 6px -1px rgba(0, 0, 0, 0.1)`   |
| **Level 3 (Card)**   | `0 10px 15px -3px rgba(0, 0, 0, 0.1)` |
| **Level 4 (Modal)**  | `0 20px 25px -5px rgba(0, 0, 0, 0.1)` |

**Aplicações**:

- Buttons (hover): Level 2
- Cards: Level 1-2
- Modals: Level 4
- Dropdowns: Level 3

---

## 🎯 Componentes shadcn/ui

### Recomendados para HabitCoach

| Componente         | Uso                         | Props                                      |
| ------------------ | --------------------------- | ------------------------------------------ |
| **Button**         | CTAs, ações                 | variant (primary/outline), size (sm/md/lg) |
| **Card**           | Containers                  | Básico (sem variações)                     |
| **Input**          | Formulários                 | placeholder, disabled, error               |
| **Select**         | Dropdowns (frequência)      | options, defaultValue                      |
| **Checkbox**       | Marcar hábito feito         | checked, onChange                          |
| **Badge**          | Status, badges              | variant (success/warning)                  |
| **Dialog**         | Confirmar ação              | title, description, buttons                |
| **DropdownMenu**   | Menu de usuário             | trigger, items                             |
| **Tabs**           | Navegação (hoje/semana/mês) | defaultValue                               |
| **Progress**       | Barra de progresso          | value (0-100)                              |
| **Avatar**         | Foto do usuário             | src, fallback                              |
| **Sheet**          | Menu mobile                 | side (left)                                |
| **NavigationMenu** | Navbar desktop              | items                                      |

### Variantes Padrão

**Button**:

```tsx
// Primary (CTA principal)
<Button variant="default" size="md">Começar Grátis</Button>

// Secondary
<Button variant="outline" size="md">Saiba Mais</Button>

// Danger
<Button variant="destructive" size="sm">Deletar</Button>
```

**Badge**:

```tsx
// Success
<Badge variant="success">Completado</Badge>

// Warning
<Badge variant="warning">Sugestão</Badge>

// Gray
<Badge variant="secondary">Não Feito</Badge>
```

---

## 🎮 Interações & Animations

### Transições

```css
/* Default */
transition: all 0.2s ease;

/* Smooth */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Estados de Componentes

| Estado             | Visual                                          |
| ------------------ | ----------------------------------------------- |
| **Default**        | Cor padrão, sem sombra                          |
| **Hover**          | Sombra Level 2, cor mais escura (10% mais dark) |
| **Active/Pressed** | Sombra Level 1, cor mais escura (15%)           |
| **Disabled**       | Opacidade 50%, cursor not-allowed               |
| **Focus**          | Outline 2px cor primária                        |
| **Loading**        | Spinner, desabilitado                           |

### Animações (Recomendadas)

```css
/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
animation: fadeIn 0.3s ease;

/* Slide In */
@keyframes slideInUp {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
animation: slideInUp 0.3s ease;
```

**Onde usar**:

- Fade-in em seções ao scroll
- Slide-in em CTAs
- Spin em loading states
- Bounce suave em badges novos

---

## 📱 Responsividade & Breakpoints

```tsx
// Tailwind breakpoints
sm: 640px   // Mobile
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
```

### Diretrizes por Breakpoint

| Breakpoint     | Layout                                                 |
| -------------- | ------------------------------------------------------ |
| **< 640px**    | 1 coluna, botões full-width, touch-friendly (44px min) |
| **640-768px**  | 2 colunas, começar mobile-first                        |
| **768-1024px** | 2-3 colunas, navigation horizontal                     |
| **> 1024px**   | 3+ colunas, sidebar                                    |

**Mobile-first approach**: Começar com mobile, depois expandir.

---

## 🌞 Light Mode (MVP)

- **Background**: Branco ou `#F9FAFB`
- **Text**: `#1F2937` (Dark)
- **Borders**: `#E5E7EB` (Light Gray)

_Dark mode é post-MVP_

---

## ♿ Acessibilidade

### Contrast Ratios (WCAG AA)

- Texto normal: 4.5:1
- Texto grande: 3:1
- Graficos/UI: 3:1

### Verificação

- Heading 1 + Body: `#1F2937` + `#FFFFFF` ✅ 16:1
- Heading 1 + `#F3F4F6` ✅ 12:1
- Body + Borders ✅ 9:1

### Boas Práticas

- [ ] Não usar só cor para comunicar status (adicionar ícone/texto)
- [ ] Mínimo 44px de área clicável (mobile)
- [ ] Focus visible em todos os botões
- [ ] Alt text em imagens
- [ ] Labels em inputs

---

## 🎬 Referências Visuais

**Inspiração de Design**:

- [Linear.app](https://linear.app) - Clean, modern, minimal
- [Vercel](https://vercel.com) - Typography, spacing
- [Figma](https://figma.com) - UI refinement
- [Strava](https://strava.com) - Gamificação visual

**Estilo**: Clean, moderno, light mode, foco em tipografia e espaçamento.

---

## 📐 Grid System

**8px Base Grid** (Tailwind compatible):

- Todos os espaçamentos múltiplos de 4 ou 8px
- Containers: 8px padding mínimo
- Gaps: 16px, 24px, 32px

**Max-width**:

- Desktop: 1200px
- Container: `max-w-6xl` (Tailwind)

---

## 🎨 Modo Escuro (Future)

Quando implementar dark mode:

- Background: `#0F172A` (slate-950)
- Text: `#F1F5F9` (slate-100)
- Border: `#334155` (slate-700)

Reutilizar paleta primária (azul, verde, laranja).

---

## 📋 Checklist de Implementação

- [ ] Cores aplicadas em CSS/Tailwind
- [ ] Typography scale implementada
- [ ] Spacing grid consistente
- [ ] Componentes shadcn/ui customizados
- [ ] Animações suaves em transições
- [ ] Dark mode CSS pronto (desabilitado)
- [ ] Acessibilidade testada (WCAG AA)
- [ ] Mobile responsivo (testado 320-1200px)
- [ ] Focus states visíveis
- [ ] Loading states definidos

---

## 🚀 Deploy & Refinement

1. **Beta**: Usar paleta definida, testar com usuários
2. **Feedback**: Ajustar cores se não comunicar bem
3. **Iteração**: Adicionar dark mode se houver demanda
4. **Evolução**: Post-MVP pode adicionar mais cores/temas

---

**Status**: Ready for Implementation ✅

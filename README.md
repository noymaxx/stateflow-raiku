# 🌊 FlowState - Deterministic DePIN Orchestrator

> Transformando o caos do hardware na certeza do blockspace.

## 🎯 O Que Foi Implementado

### ✅ Funcionalidades Completas

1. **Design Totalmente Responsivo**
   - Mobile-first approach
   - Breakpoints: sm (640px), lg (1024px)
   - Funciona perfeitamente em qualquer tamanho de tela

2. **Logo Adaptativa**
   - 🔴 **Vermelha** no Step 1 (Chaos Dashboard)
   - 🟢 **Verde** nos Steps 2-3 (FlowState Ativo)
   - Transição suave entre estados

3. **Header Responsivo**
   - Logo compacta em mobile
   - Botão de wallet sempre visível
   - Badge "Powered by Raiku" oculto em telas pequenas

4. **Integração Phantom Wallet**
   - Conexão real com Phantom
   - Detecção automática da extensão
   - Exibição do endereço truncado
   - Resto da aplicação permanece mockada

5. **3 Steps Completos de Interação**
   - **Step 1:** Chaos Dashboard (Problema)
   - **Step 2:** Configuration Hub (Solução)
   - **Step 3:** The Orchestrator (Resultado)

6. **Globo 3D Completo**
   - Renderização completa (não cortado)
   - Centralizado perfeitamente
   - Responsivo ao tamanho da tela
   - Cores adaptativas (vermelho/verde)

## 🚀 Como Rodar

\`\`\`bash
cd flowstate
npm run dev
\`\`\`

Abra: `http://localhost:5173`

## 📱 Navegação

- **Botões Invisíveis (canto inferior direito):**
  - Passe o mouse para revelar
  - `1` = Chaos Dashboard
  - `2` = Configuration Hub
  - `3` = Orchestrator

- **Fluxo Normal:**
  1. Clique em "ENABLE FLOWSTATE OPTIMIZATION"
  2. Ajuste configurações e clique em "ACTIVATE ORCHESTRATOR"
  3. Observe a execução determinística

## 🎨 Design System

### Cores por Estado
- **Chaos:** `#FF4444` (Red) + `#F59E0B` (Orange)
- **FlowState:** `#00FFA3` (Green) + `#3B82F6` (Blue)

### Tipografia
- **UI:** Inter (Google Fonts)
- **Data/Code:** JetBrains Mono (Google Fonts)

## 🔌 Phantom Wallet

### Como Testar
1. Instale a extensão Phantom
2. Clique em "Connect Wallet" no header
3. Aprove a conexão
4. Veja seu endereço truncado

### Nota
- A conexão é real
- O resto da aplicação é mockado (não faz transações)
- Perfeito para demonstração

## 📂 Estrutura do Projeto

\`\`\`
flowstate/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header responsivo + Wallet
│   │   ├── Globe.jsx           # Globo 3D (cobe)
│   │   ├── ChaosDashboard.jsx  # Step 1 (Responsivo)
│   │   ├── ConfigurationHub.jsx # Step 2
│   │   └── Orchestrator.jsx    # Step 3
│   ├── App.jsx                 # Gerenciador de estados
│   └── index.css               # Tailwind + Fonts
├── flowstate_whitepaper.md     # Conceito do projeto
├── flowstate_design_spec.md    # Especificações de design
└── flowstate_user_journey.md   # Fluxo de interação completo
\`\`\`

## 🎯 Para o Hackathon

### Documentos de Submissão
1. **`flowstate_whitepaper.md`** - Pitch técnico
2. **`flowstate_user_journey.md`** - Fluxo completo de interação
3. **`flowstate_design_spec.md`** - Design system

### Demo ao Vivo
- URL: `http://localhost:5173` (ou deploy em Vercel/Netlify)
- Vídeo: Grave a navegação pelos 3 steps

### Pitch de 2 Minutos
1. **Problema (0:00-0:30):** Mostre o Chaos Dashboard
2. **Solução (0:30-1:00):** Explique a Raiku AOT
3. **Demo (1:00-1:45):** Navegue pelos 3 steps
4. **Impacto (1:45-2:00):** "100% Success Rate"

## 🏆 Diferenciais

- ✅ Design profissional (não parece MVP)
- ✅ Totalmente responsivo
- ✅ Animações suaves (Framer Motion)
- ✅ Globo 3D real (não imagem estática)
- ✅ Integração real com Phantom
- ✅ Documentação completa

## 🔧 Tecnologias

- **Framework:** Vite + React 19
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **3D Globe:** Cobe
- **Wallet:** Solana Wallet Adapter
- **Icons:** Lucide React

## 📊 Métricas Mockadas

- Failure Rate: 34.2%
- Retries Cost: 14.5 SOL/day
- Success Rate (FlowState): 100.0%
- Estimated AOT Cost: 0.002 SOL/epoch

---

**Desenvolvido para o Solana Hacker Hotel DevCon 2025**
*Powered by Raiku*
# stateflow-raiku

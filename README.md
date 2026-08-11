# @edubrq/design-system

Design system compartilhado entre **AquaFarm** (repo `ecamarao`) e **Oficina Inteligente**. Um único conjunto de componentes React, no padrão visual do **Carbon Design System** (IBM): cantos retos, superfícies achatadas, tipografia IBM Plex, grade de espaçamento em base 2px, foco em contorno sólido.

Cor de interação é única e compartilhada entre produtos (Carbon Blue 60) — a diferença entre os dois apps é o **tema** (claro ou escuro), não mais a cor de marca.

## Instalação

Cada app consome este repositório como dependência git, apontando para uma tag/commit:

```bash
npm install github:EduBrQ/design-system#v1.0.0
```

## Uso

```tsx
// no entrypoint do app (main.tsx)
import "@edubrq/design-system/tokens/base.css";       // tema White (claro) — padrão
import "@edubrq/design-system/tokens/theme-g100.css"; // opcional: tema Gray 100 (escuro)
import "@edubrq/design-system/components.css";

// no elemento raiz do HTML (index.html)
// <html data-theme="g100"> força escuro (uso do AquaFarm, sempre-escuro)
// <html data-theme="white"> força claro
// sem o atributo: segue prefers-color-scheme do sistema
```

```tsx
import { Button, Card, Badge, Input, StatTile } from "@edubrq/design-system";

function Exemplo() {
  return (
    <Card title="Viveiro 03 — Camarão Rosa" meta="Densidade 18/m² · Ciclo dia 42">
      <Badge tone="warning">Atenção</Badge>
      <Button variant="primary">Registrar ração</Button>
    </Card>
  );
}
```

## Arquitetura de tokens

```
src/tokens/base.css       → neutros do tema White (claro, padrão) + espaço, raio (0), tipo, sombra, movimento
src/tokens/theme-g100.css → overrides do tema Gray 100 (escuro) — [data-theme="g100"] ou prefers-color-scheme
src/components/*.tsx      → componentes React, só consomem var(--token), nunca hex fixo
```

Decisões de tokens que valem registrar:

- **Raio zero.** `--radius-sm/md/lg` são todos `0` — o Carbon não arredonda botão, card, input ou tile. Só `--radius-pill` (2px) existe, reservado à Tag/Badge.
- **Sombra quase inexistente.** `--shadow-card` é `none` — cards e tiles se diferenciam da página por cor de superfície e borda, não por sombra suave. `--shadow-popover` existe só para o que realmente flutua por cima do conteúdo (Modal, Tooltip).
- **Espaço em grade 2px.** `--space-0` a `--space-9` = 2, 4, 8, 12, 16, 24, 32, 40, 48, 64px — a escala real do Carbon.
- **Cor de interação única.** `--accent` é Carbon Blue 60 (`#0f62fe`) no tema claro; no escuro vira Blue 40 (`#78a9ff`) para manter contraste legível sobre um fundo quase-preto — o próprio Carbon faz essa troca entre temas.
- **Input com sublinhado.** `.eds-input`/`.eds-select` usam preenchimento sólido + borda inferior de 2px, não borda ao redor — é a assinatura visual do campo de texto do Carbon.
- **Alert/Toast como Notification.** Fundo neutro (`--surface-1`) + tarja lateral colorida de 4px + ícone na cor semântica — não um fundo inteiro tingido.

## Desenvolvimento

```bash
npm install
npm run dev        # site de documentação em http://localhost:5183 — Home, Componentes, Tokens
npm run typecheck
npm run build       # gera dist/ (ESM + .d.ts) via tsup
```

O site de documentação (`docs/`) tem três páginas — **Home** (visão geral, arquitetura de tokens, como começar), **Componentes** (todos os componentes reais renderizados, com troca de tema ao vivo) e **Tokens** (referência visual de cor, espaço, raio, tipografia e sombra nos dois temas). Ele mesmo é construído consumindo o pacote (`src/`) diretamente, então é sempre um reflexo fiel do que existe.

## Componentes disponíveis (v1.0)

- **Layout** — `Stack`, `Grid` (+ `Grid.Item`), `Container`
- **Ações** — `Button`, `IconButton`
- **Formulário** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
- **Dados** — `Badge`, `Card`, `StatTile`, `Table` (+ `Table.Head`/`Body`/`Row`/`Th`/`Td`), `Avatar`, `Divider`
- **Feedback** — `Alert`, `Spinner`, `Skeleton`, `EmptyState`, `Tooltip`, `ToastProvider` + `useToast`
- **Overlay & navegação** — `Modal`, `Tabs` (+ `Tabs.List`/`Tab`/`Panel`), `Breadcrumbs`, `Pagination`

## Próximos passos

- Carregar a fonte IBM Plex Sans/Mono nos apps consumidores (o token `--font-app` já assume Plex, com fallback de sistema caso não esteja carregada).
- Publicar como pacote versionado (tag por release) para os dois apps fixarem uma versão.
- Adicionar um componente de navegação de app (sidebar/topbar) e Popover/Dropdown, quando surgir um caso de uso real.

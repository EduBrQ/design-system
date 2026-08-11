# @edubrq/design-system

Design system white-label compartilhado entre **AquaFarm** (repo `ecamarao`) e **Oficina Inteligente**. Um único conjunto de componentes React, com a marca (cor, e só a cor — o resto do visual é igual) trocada por CSS, não por fork de código.

Direção visual: **Sinal & Métrica** — tema sempre escuro, números grandes, pensado para painéis operacionais (dashboard de fazenda, atendimento de oficina), não só telas de KPI.

## Instalação

Cada app consome este repositório como dependência git, apontando para uma tag/commit:

```bash
npm install github:EduBrQ/design-system#v0.1.0
```

## Uso

```tsx
// no entrypoint do app (main.tsx)
import "@edubrq/design-system/tokens/base.css";
import "@edubrq/design-system/tokens/brand-aqua.css"; // ou brand-oficina.css
import "@edubrq/design-system/components.css";

// no elemento raiz do HTML (index.html)
// <html data-brand="aqua"> — ou "oficina"
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

Só um arquivo de marca deve ser importado por app (`brand-aqua.css` no AquaFarm, `brand-oficina.css` na Oficina Inteligente). O atributo `data-brand` no `<html>` existe para quando os dois arquivos de marca precisam conviver no mesmo bundle — como no site de documentação (`docs/`) deste repositório.

## Arquitetura de tokens

```
src/tokens/base.css          → neutros, espaço, raio, tipografia, sombra (tema único, sempre escuro)
src/tokens/brand-aqua.css    → --accent e derivados para o AquaFarm (azul-esverdeado)
src/tokens/brand-oficina.css → --accent e derivados para a Oficina Inteligente (cobre)
src/components/*.tsx         → componentes React, só consomem var(--token), nunca hex fixo
```

Motivo do tema único sempre-escuro: é uma decisão de produto (ver especificação de direções visuais), não uma limitação — os dois apps são painéis operacionais de uso contínuo, e a direção D foi escolhida deliberadamente entre 4 alternativas testadas.

## Desenvolvimento

```bash
npm install
npm run dev        # site de documentação em http://localhost:5183 — Home, Componentes, Tokens
npm run typecheck
npm run build       # gera dist/ (ESM + .d.ts) via tsup
```

O site de documentação (`docs/`) tem três páginas — **Home** (visão geral, arquitetura de tokens, como começar), **Componentes** (todos os componentes reais renderizados, com troca de marca ao vivo) e **Tokens** (referência visual de cor, espaço, raio, tipografia e sombra). Ele mesmo é construído consumindo o pacote (`src/`) diretamente, então é sempre um reflexo fiel do que existe.

## Componentes disponíveis (v0.2)

- **Layout** — `Stack`, `Grid` (+ `Grid.Item`), `Container`
- **Ações** — `Button`, `IconButton`
- **Formulário** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
- **Dados** — `Badge`, `Card`, `StatTile`, `Table` (+ `Table.Head`/`Body`/`Row`/`Th`/`Td`), `Avatar`, `Divider`
- **Feedback** — `Alert`, `Spinner`, `Skeleton`, `EmptyState`, `Tooltip`, `ToastProvider` + `useToast`
- **Overlay & navegação** — `Modal`, `Tabs` (+ `Tabs.List`/`Tab`/`Panel`), `Breadcrumbs`, `Pagination`

## Próximos passos

- Publicar como pacote versionado (tag por release) para os dois apps fixarem uma versão.
- Migrar `ecamarao` e `oficina-inteligente` para consumir estes tokens no lugar do CSS solto atual.
- Adicionar um componente de navegação de app (sidebar/topbar) e Popover/Dropdown, quando surgir um caso de uso real.

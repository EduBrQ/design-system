import { Link } from "react-router-dom";
import { Badge } from "../../../src";

const CATEGORIES = [
  { title: "Layout", items: ["Stack", "Grid", "Container"] },
  { title: "Formulário", items: ["Input", "Textarea", "Select", "Checkbox", "Radio", "Switch"] },
  { title: "Ações", items: ["Button", "IconButton"] },
  { title: "Dados", items: ["Badge", "Card", "StatTile", "Table", "Avatar", "Divider"] },
  { title: "Feedback", items: ["Alert", "Spinner", "Skeleton", "EmptyState", "Tooltip", "Toast"] },
  { title: "Overlay & navegação", items: ["Modal", "Tabs", "Breadcrumbs", "Pagination"] },
];

export function HomePage() {
  return (
    <div className="docs-stack">
      <section className="docs-hero">
        <span className="docs-eyebrow">Design system · v1.0</span>
        <h1>Um sistema, no padrão Carbon</h1>
        <p className="docs-lede">
          27 componentes React + TypeScript, tokens em CSS puro, visual no padrão do Carbon Design System (IBM):
          cantos retos, superfícies achatadas, tipografia IBM Plex, grade de espaçamento em base 2px. Dois produtos
          (AquaFarm e Oficina Inteligente) compartilham o mesmo sistema — a diferença entre eles agora é o tema
          (claro ou escuro), não mais a cor.
        </p>
        <div className="docs-pill-row">
          <span className="docs-pill">
            <Badge tone="accent">AquaFarm</Badge> gestão de viveiros de camarão
          </span>
          <span className="docs-pill">
            <Badge tone="accent">Oficina Inteligente</Badge> atendimento em oficina de motos
          </span>
        </div>
        <div className="docs-hero__actions">
          <Link to="/componentes" className="eds-btn eds-btn--primary">
            Ver componentes
          </Link>
          <Link to="/tokens" className="eds-btn eds-btn--secondary">
            Ver tokens
          </Link>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-section__head">
          <h2>Como o tema funciona</h2>
          <p>Quatro camadas, cada uma só depende da anterior — trocar de tema nunca exige tocar em componente.</p>
        </div>
        <div className="docs-layers">
          <div className="docs-layer">
            <span className="docs-layer__n">01</span>
            <h3>Primitivos</h3>
            <p>
              Escalas cruas em <code>base.css</code> — espaço (grade 2px), raio (zero), tipo (IBM Plex), sombra. Sem
              cor de tema.
            </p>
          </div>
          <div className="docs-layer">
            <span className="docs-layer__n">02</span>
            <h3>Semânticos</h3>
            <p>
              <code>--accent</code>, <code>--surface-1</code>, <code>--danger</code>. É aqui que mora o tema —
              White por padrão em <code>base.css</code>.
            </p>
          </div>
          <div className="docs-layer">
            <span className="docs-layer__n">03</span>
            <h3>Componentes</h3>
            <p>
              Button, Card, Table... só consomem <code>var()</code>, nunca um hex fixo.
            </p>
          </div>
          <div className="docs-layer">
            <span className="docs-layer__n">04</span>
            <h3>Tema por app</h3>
            <p>
              Importe <code>theme-g100.css</code> e use <code>data-theme="g100"</code> no <code>&lt;html&gt;</code>{" "}
              para forçar o escuro — como o AquaFarm faz.
            </p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-section__head">
          <h2>Começando</h2>
        </div>
        <pre className="docs-code">
          <code>{`npm install github:EduBrQ/design-system#v1.0.0

// main.tsx
import "@edubrq/design-system/tokens/base.css";       // tema White (claro), padrão
import "@edubrq/design-system/tokens/theme-g100.css"; // opcional: tema escuro
import "@edubrq/design-system/components.css";

// <html data-theme="g100"> força escuro; "white" força claro;
// sem o atributo, segue prefers-color-scheme do sistema.

import { Button, Card, Badge } from "@edubrq/design-system";`}</code>
        </pre>
      </section>

      <section className="docs-section">
        <div className="docs-section__head">
          <h2>O que já existe</h2>
          <p>27 componentes, organizados por função. Exemplos ao vivo em cada seção da página de componentes.</p>
        </div>
        <div className="docs-link-grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.title} className="docs-link-card">
              <h3>{cat.title}</h3>
              <p>{cat.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

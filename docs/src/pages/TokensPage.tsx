import { DocSection } from "../components/DocSection";

interface TokenItem {
  token: string;
  label: string;
}

function SwatchRow({ items }: { items: TokenItem[] }) {
  return (
    <div className="docs-swatch-row">
      {items.map((item) => (
        <div key={item.token} className="docs-swatch">
          <div className="docs-swatch__box" style={{ background: `var(${item.token})` }} />
          <code>{item.token}</code>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

const SURFACES: TokenItem[] = [
  { token: "--surface-0", label: "Fundo da página" },
  { token: "--surface-1", label: "Card, painel, input" },
  { token: "--surface-2", label: "Zebra de tabela, trilho" },
  { token: "--surface-3", label: "Hover, chip neutro" },
];

const BORDERS: TokenItem[] = [
  { token: "--border", label: "Borda padrão" },
  { token: "--border-strong", label: "Borda em hover" },
];

const TEXT: TokenItem[] = [
  { token: "--text", label: "Texto principal" },
  { token: "--text-muted", label: "Texto secundário" },
  { token: "--text-faint", label: "Placeholder, desabilitado" },
];

const BRAND: TokenItem[] = [
  { token: "--accent", label: "Cor de marca (troque no topo da página)" },
  { token: "--accent-strong", label: "Hover / destaque" },
  { token: "--accent-soft", label: "Fundo suave" },
  { token: "--accent-ink", label: "Texto sobre --accent" },
];

const STATUS: TokenItem[] = [
  { token: "--success", label: "Sucesso" },
  { token: "--warning", label: "Atenção" },
  { token: "--danger", label: "Erro" },
];

const SPACE = [1, 2, 3, 4, 5, 6] as const;
const RADIUS = [
  { token: "--radius-sm", label: "sm" },
  { token: "--radius-md", label: "md" },
  { token: "--radius-lg", label: "lg" },
  { token: "--radius-pill", label: "pill" },
];
const TYPE_SCALE = [
  "--fs-xs",
  "--fs-sm",
  "--fs-base",
  "--fs-md",
  "--fs-lg",
  "--fs-xl",
  "--fs-stat",
  "--fs-stat-lg",
];

export function TokensPage() {
  return (
    <div className="docs-stack">
      <div className="docs-page-head">
        <span className="docs-eyebrow">Referência</span>
        <h1>Tokens</h1>
        <p className="docs-lede">
          Valores definidos em <code>src/tokens/base.css</code> e nos arquivos de marca. Nenhum componente deve usar
          um hex fixo — só estes tokens.
        </p>
      </div>

      <DocSection id="cor" title="Cor">
        <p className="docs-token-group-label">Superfície</p>
        <SwatchRow items={SURFACES} />
        <p className="docs-token-group-label">Borda</p>
        <SwatchRow items={BORDERS} />
        <p className="docs-token-group-label">Texto</p>
        <SwatchRow items={TEXT} />
        <p className="docs-token-group-label">Marca (dinâmico — troque no topo da página)</p>
        <SwatchRow items={BRAND} />
        <p className="docs-token-group-label">Semântico</p>
        <SwatchRow items={STATUS} />
      </DocSection>

      <DocSection id="espaco" title="Espaço" description="--space-1 a --space-6, em incrementos de 4px.">
        <div className="docs-scale-row">
          {SPACE.map((n) => (
            <div key={n} className="docs-scale-item">
              <div className="docs-space-bar" style={{ width: `var(--space-${n})` }} />
              <code>--space-{n}</code>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection id="raio" title="Raio">
        <div className="docs-scale-row">
          {RADIUS.map((r) => (
            <div key={r.token} className="docs-scale-item">
              <div className="docs-radius-box" style={{ borderRadius: `var(${r.token})` }} />
              <code>{r.token}</code>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection id="tipografia" title="Tipografia" description="Escala usada por todos os componentes de texto.">
        <div className="docs-type-scale">
          {TYPE_SCALE.map((token) => (
            <div key={token} className="docs-type-row">
              <span style={{ fontSize: `var(${token})` }}>Aa 123</span>
              <code>{token}</code>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection id="sombra" title="Sombra">
        <div className="docs-scale-row">
          <div className="docs-scale-item">
            <div className="docs-shadow-box" style={{ boxShadow: "var(--shadow-card)" }} />
            <code>--shadow-card</code>
          </div>
          <div className="docs-scale-item">
            <div className="docs-shadow-box" style={{ boxShadow: "var(--shadow-popover)" }} />
            <code>--shadow-popover</code>
          </div>
        </div>
      </DocSection>
    </div>
  );
}

import { useState } from "react";
import { Badge, Button, Card, Input, Select, StatTile, Table } from "../../src";
import type { BadgeTone } from "../../src";

type Brand = "aqua" | "oficina";

interface BrandContent {
  name: string;
  stats: { label: string; value: string; unit?: string }[];
  card: { title: string; meta: string; badgeLabel: string; badgeTone: BadgeTone; action: string };
  table: { head: string[]; rows: string[][] };
}

const CONTENT: Record<Brand, BrandContent> = {
  aqua: {
    name: "AquaFarm",
    stats: [
      { label: "Viveiros ativos", value: "12" },
      { label: "Ração hoje", value: "340", unit: "kg" },
      { label: "FCR médio", value: "1.42" },
    ],
    card: {
      title: "Viveiro 03 — Camarão Rosa",
      meta: "Densidade 18/m² · Ciclo dia 42",
      badgeLabel: "Atenção",
      badgeTone: "warning",
      action: "Registrar ração",
    },
    table: {
      head: ["Viveiro", "Ração manhã", "Ração tarde", "Mortalidade"],
      rows: [
        ["Viveiro 01", "62 kg", "58 kg", "0"],
        ["Viveiro 02", "71 kg", "69 kg", "3"],
        ["Viveiro 03", "54 kg", "—", "1"],
      ],
    },
  },
  oficina: {
    name: "Oficina Inteligente",
    stats: [
      { label: "OS abertas", value: "8" },
      { label: "Tempo médio", value: "42", unit: "min" },
      { label: "Satisfação", value: "94", unit: "%" },
    ],
    card: {
      title: "OS #0892 — Honda CG 160",
      meta: "Troca de óleo + revisão de freios · Placa ABC1D23",
      badgeLabel: "Em andamento",
      badgeTone: "accent",
      action: "Abrir atendimento",
    },
    table: {
      head: ["OS", "Cliente", "Serviço", "Status"],
      rows: [
        ["0891", "J. Ferreira", "Revisão 10k", "Concluída"],
        ["0892", "M. Alves", "Óleo + freios", "Em andamento"],
        ["0893", "R. Costa", "Diagnóstico", "Aberta"],
      ],
    },
  },
};

export function App() {
  const [brand, setBrand] = useState<Brand>("aqua");
  const c = CONTENT[brand];

  return (
    <div data-brand={brand} className="pg-shell">
      <header className="pg-header">
        <div>
          <p className="pg-eyebrow">Design system · playground</p>
          <h1>{c.name}</h1>
        </div>
        <div className="pg-switch" role="tablist" aria-label="Marca">
          {(Object.keys(CONTENT) as Brand[]).map((key) => (
            <button
              key={key}
              type="button"
              className={"pg-switch__btn" + (key === brand ? " is-active" : "")}
              onClick={() => setBrand(key)}
              aria-pressed={key === brand}
            >
              {CONTENT[key].name}
            </button>
          ))}
        </div>
      </header>

      <section className="pg-stats">
        {c.stats.map((s) => (
          <StatTile key={s.label} label={s.label} value={s.value} unit={s.unit} />
        ))}
      </section>

      <Card title={c.card.title} meta={c.card.meta} action={<Badge tone={c.card.badgeTone}>{c.card.badgeLabel}</Badge>}>
        <div className="pg-actions">
          <Button variant="primary">{c.card.action}</Button>
          <Button variant="secondary">Detalhes</Button>
          <Button variant="ghost">Exportar</Button>
          <Button variant="danger">Excluir</Button>
        </div>
      </Card>

      <section className="pg-form">
        <Input label="Quantidade" placeholder="0" hint="Valor em kg" />
        <Select
          label="Status"
          placeholder="Selecione"
          options={[
            { value: "aberta", label: "Aberta" },
            { value: "andamento", label: "Em andamento" },
            { value: "concluida", label: "Concluída" },
          ]}
        />
        <Input label="Observações" defaultValue="teste" error="Campo obrigatório" />
      </section>

      <Table>
        <Table.Head>
          <Table.Row>
            {c.table.head.map((h) => (
              <Table.Th key={h}>{h}</Table.Th>
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {c.table.rows.map((row, i) => (
            <Table.Row key={i}>
              {row.map((cell, j) => (
                <Table.Td key={j}>{cell}</Table.Td>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

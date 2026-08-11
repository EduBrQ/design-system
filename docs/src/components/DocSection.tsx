import type { ReactNode } from "react";

export function DocSection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="docs-section">
      <div className="docs-section__head">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  );
}

export function DocExample({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="docs-example">
      <p className="docs-example__label">{label}</p>
      <div className="docs-example__stage">{children}</div>
    </div>
  );
}

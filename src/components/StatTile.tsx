import type { HTMLAttributes, ReactNode } from "react";

export interface StatTileProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
  unit?: ReactNode;
  size?: "md" | "lg";
}

export function StatTile({ label, value, unit, size = "md", className, ...rest }: StatTileProps) {
  return (
    <div className={["eds-stat", className].filter(Boolean).join(" ")} {...rest}>
      <div className="eds-stat__label">{label}</div>
      <div className={["eds-stat__value", size === "lg" ? "eds-stat__value--lg" : ""].filter(Boolean).join(" ")}>
        {value}
        {unit && <span className="eds-stat__unit">{unit}</span>}
      </div>
    </div>
  );
}

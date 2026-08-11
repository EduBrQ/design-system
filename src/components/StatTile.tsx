import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../utils/cx";

export interface StatTileProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
  unit?: ReactNode;
  size?: "md" | "lg";
}

export function StatTile({ label, value, unit, size = "md", className, ...rest }: StatTileProps) {
  return (
    <div className={cx("eds-stat", className)} {...rest}>
      <div className="eds-stat__label">{label}</div>
      <div className={cx("eds-stat__value", size === "lg" && "eds-stat__value--lg")}>
        {value}
        {unit && <span className="eds-stat__unit">{unit}</span>}
      </div>
    </div>
  );
}

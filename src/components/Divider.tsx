import type { HTMLAttributes } from "react";
import { cx } from "../utils/cx";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export function Divider({ orientation = "horizontal", className, ...rest }: DividerProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cx("eds-divider", orientation === "vertical" && "eds-divider--vertical", className)}
      {...rest}
    />
  );
}

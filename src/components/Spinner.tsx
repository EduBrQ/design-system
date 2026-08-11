import type { HTMLAttributes } from "react";
import { cx } from "../utils/cx";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
  label?: string;
}

export function Spinner({ size = "md", label = "Carregando", className, ...rest }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cx("eds-spinner", `eds-spinner--${size}`, className)}
      {...rest}
    />
  );
}

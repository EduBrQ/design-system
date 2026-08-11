import type { HTMLAttributes } from "react";
import { cx } from "../utils/cx";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "md" | "lg" | "xl";
}

export function Container({ size = "lg", className, ...rest }: ContainerProps) {
  return <div className={cx("eds-container", `eds-container--${size}`, className)} {...rest} />;
}

import type { HTMLAttributes } from "react";
import { cx } from "../utils/cx";

export type BadgeTone = "accent" | "success" | "warning" | "danger" | "neutral";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

export function Badge({ tone = "neutral", className, ...rest }: BadgeProps) {
  return <span className={cx("eds-badge", `eds-badge--${tone}`, className)} {...rest} />;
}

import type { HTMLAttributes } from "react";

export type BadgeTone = "accent" | "success" | "warning" | "danger" | "neutral";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

export function Badge({ tone = "neutral", className, ...rest }: BadgeProps) {
  return <span className={["eds-badge", `eds-badge--${tone}`, className].filter(Boolean).join(" ")} {...rest} />;
}

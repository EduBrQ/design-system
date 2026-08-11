import type { CSSProperties, HTMLAttributes } from "react";
import { cx } from "../utils/cx";

export type SpaceToken = 1 | 2 | 3 | 4 | 5 | 6;

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: SpaceToken;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  wrap?: boolean;
}

export function Stack({ direction = "column", gap = 3, align, justify, wrap, style, className, ...rest }: StackProps) {
  return (
    <div
      className={cx("eds-stack", className)}
      style={{
        flexDirection: direction,
        gap: `var(--space-${gap})`,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? "wrap" : undefined,
        ...style,
      }}
      {...rest}
    />
  );
}

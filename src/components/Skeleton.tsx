import type { CSSProperties, HTMLAttributes } from "react";
import { cx } from "../utils/cx";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  radius?: "sm" | "md" | "lg" | "pill";
}

export function Skeleton({ width = "100%", height = "16px", radius = "sm", style, className, ...rest }: SkeletonProps) {
  return (
    <div
      className={cx("eds-skeleton", className)}
      style={
        {
          width,
          height,
          borderRadius: `var(--radius-${radius})`,
          ...style,
        } as CSSProperties
      }
      {...rest}
    />
  );
}

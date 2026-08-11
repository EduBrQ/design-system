import type { CSSProperties, HTMLAttributes } from "react";
import { cx } from "../utils/cx";
import type { SpaceToken } from "./Stack";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Columns below the `md` breakpoint (640px). Default 1. */
  cols?: number;
  /** Columns from the `md` breakpoint (768px) up. */
  colsMd?: number;
  /** Columns from the `lg` breakpoint (1024px) up. */
  colsLg?: number;
  gap?: SpaceToken;
}

function GridRoot({ cols = 1, colsMd, colsLg, gap = 4, style, className, ...rest }: GridProps) {
  return (
    <div
      className={cx("eds-grid", className)}
      style={
        {
          "--cols-base": cols,
          "--cols-md": colsMd,
          "--cols-lg": colsLg,
          gap: `var(--space-${gap})`,
          ...style,
        } as CSSProperties
      }
      {...rest}
    />
  );
}

export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  /** How many columns this item spans, at the currently active breakpoint. */
  span?: number;
}

function GridItem({ span, style, className, ...rest }: GridItemProps) {
  return (
    <div
      className={cx("eds-grid-item", className)}
      style={{ gridColumn: span ? `span ${span} / span ${span}` : undefined, ...style }}
      {...rest}
    />
  );
}

export const Grid = Object.assign(GridRoot, { Item: GridItem });

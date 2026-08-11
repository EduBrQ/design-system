import type { ReactElement } from "react";
import { cx } from "../utils/cx";

export interface TooltipProps {
  label: string;
  children: ReactElement;
  className?: string;
}

/**
 * CSS-only tooltip: shows on hover and on keyboard focus of the child.
 * The child must be a single focusable element (button, link, input...).
 */
export function Tooltip({ label, children, className }: TooltipProps) {
  return (
    <span className={cx("eds-tooltip", className)}>
      {children}
      <span role="tooltip" className="eds-tooltip__bubble">
        {label}
      </span>
    </span>
  );
}

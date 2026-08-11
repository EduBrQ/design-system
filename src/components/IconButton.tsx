import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cx } from "../utils/cx";
import type { ButtonSize, ButtonVariant } from "./Button";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon: ReactNode;
  /** Required — an icon-only button has no visible label for assistive tech. */
  "aria-label": string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = "secondary", size = "md", icon, className, type = "button", ...rest }, ref) => {
    const classes = cx("eds-btn", "eds-btn--icon", `eds-btn--${variant}`, size === "sm" && "eds-btn--sm", className);
    return (
      <button ref={ref} type={type} className={classes} {...rest}>
        {icon}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";

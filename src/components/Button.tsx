import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cx } from "../utils/cx";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, type = "button", ...rest }, ref) => {
    const classes = cx("eds-btn", `eds-btn--${variant}`, size === "sm" && "eds-btn--sm", className);
    return <button ref={ref} type={type} className={classes} {...rest} />;
  },
);

Button.displayName = "Button";

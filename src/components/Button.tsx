import { forwardRef, type ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, type = "button", ...rest }, ref) => {
    const classes = ["eds-btn", `eds-btn--${variant}`, size === "sm" ? "eds-btn--sm" : "", className]
      .filter(Boolean)
      .join(" ");
    return <button ref={ref} type={type} className={classes} {...rest} />;
  },
);

Button.displayName = "Button";

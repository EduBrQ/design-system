import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../utils/cx";

export type AlertTone = "accent" | "success" | "warning" | "danger";

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  tone?: AlertTone;
  title?: ReactNode;
  icon?: ReactNode;
  onClose?: () => void;
}

export function Alert({ tone = "accent", title, icon, onClose, children, className, ...rest }: AlertProps) {
  return (
    <div className={cx("eds-alert", `eds-alert--${tone}`, className)} role="status" {...rest}>
      {icon && <span className="eds-alert__icon">{icon}</span>}
      <div className="eds-alert__body">
        {title && <p className="eds-alert__title">{title}</p>}
        {children && <div className="eds-alert__desc">{children}</div>}
      </div>
      {onClose && (
        <button type="button" className="eds-alert__close" aria-label="Fechar" onClick={onClose}>
          ×
        </button>
      )}
    </div>
  );
}

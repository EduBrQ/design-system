import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../utils/cx";

export interface EmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}

export function EmptyState({ icon, title, description, action, className, ...rest }: EmptyStateProps) {
  return (
    <div className={cx("eds-empty", className)} {...rest}>
      {icon && <div className="eds-empty__icon">{icon}</div>}
      <p className="eds-empty__title">{title}</p>
      {description && <p className="eds-empty__desc">{description}</p>}
      {action && <div className="eds-empty__action">{action}</div>}
    </div>
  );
}

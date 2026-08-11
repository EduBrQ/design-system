import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../utils/cx";

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  meta?: ReactNode;
  action?: ReactNode;
}

export function Card({ title, meta, action, children, className, ...rest }: CardProps) {
  return (
    <div className={cx("eds-card", className)} {...rest}>
      {(title || meta || action) && (
        <div className="eds-card__head">
          <div>
            {title && <h4 className="eds-card__title">{title}</h4>}
            {meta && <p className="eds-card__meta">{meta}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

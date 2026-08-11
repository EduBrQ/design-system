import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";
import { cx } from "../utils/cx";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, id, className, ...rest }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    return (
      <div className={cx("eds-field", Boolean(error) && "eds-field--error")}>
        {label && (
          <label className="eds-field__label" htmlFor={inputId}>
            {label}
          </label>
        )}
        <input ref={ref} id={inputId} className={cx("eds-input", className)} {...rest} />
        {(error || hint) && <span className="eds-field__hint">{error ?? hint}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";

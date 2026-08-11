import { forwardRef, useId, type SelectHTMLAttributes, type ReactNode } from "react";
import { cx } from "../utils/cx";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, hint, error, options, placeholder, id, className, ...rest }, ref) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;
    return (
      <div className={cx("eds-field", Boolean(error) && "eds-field--error")}>
        {label && (
          <label className="eds-field__label" htmlFor={selectId}>
            {label}
          </label>
        )}
        <select ref={ref} id={selectId} className={cx("eds-select", className)} {...rest}>
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {(error || hint) && <span className="eds-field__hint">{error ?? hint}</span>}
      </div>
    );
  },
);

Select.displayName = "Select";

import { forwardRef, useId, type SelectHTMLAttributes } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, hint, error, options, placeholder, id, className, ...rest }, ref) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;
    return (
      <div className={["eds-field", error ? "eds-field--error" : ""].filter(Boolean).join(" ")}>
        {label && (
          <label className="eds-field__label" htmlFor={selectId}>
            {label}
          </label>
        )}
        <select ref={ref} id={selectId} className={["eds-select", className].filter(Boolean).join(" ")} {...rest}>
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

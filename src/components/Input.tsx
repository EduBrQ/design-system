import { forwardRef, useId, type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, id, className, ...rest }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    return (
      <div className={["eds-field", error ? "eds-field--error" : ""].filter(Boolean).join(" ")}>
        {label && (
          <label className="eds-field__label" htmlFor={inputId}>
            {label}
          </label>
        )}
        <input ref={ref} id={inputId} className={["eds-input", className].filter(Boolean).join(" ")} {...rest} />
        {(error || hint) && <span className="eds-field__hint">{error ?? hint}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";

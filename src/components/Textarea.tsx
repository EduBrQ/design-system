import { forwardRef, useId, type TextareaHTMLAttributes } from "react";
import { cx } from "../utils/cx";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, hint, error, id, className, rows = 4, ...rest }, ref) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;
    return (
      <div className={cx("eds-field", error && "eds-field--error")}>
        {label && (
          <label className="eds-field__label" htmlFor={textareaId}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cx("eds-input", "eds-textarea", className)}
          {...rest}
        />
        {(error || hint) && <span className="eds-field__hint">{error ?? hint}</span>}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

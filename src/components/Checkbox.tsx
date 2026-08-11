import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { cx } from "../utils/cx";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, id, className, ...rest }, ref) => {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;
  return (
    <label htmlFor={checkboxId} className="eds-check-row">
      <input ref={ref} id={checkboxId} type="checkbox" className={cx("eds-checkbox", className)} {...rest} />
      {label && <span>{label}</span>}
    </label>
  );
});

Checkbox.displayName = "Checkbox";

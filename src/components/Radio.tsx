import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { cx } from "../utils/cx";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({ label, id, className, ...rest }, ref) => {
  const generatedId = useId();
  const radioId = id ?? generatedId;
  return (
    <label htmlFor={radioId} className="eds-check-row">
      <input ref={ref} id={radioId} type="radio" className={cx("eds-radio", className)} {...rest} />
      {label && <span>{label}</span>}
    </label>
  );
});

Radio.displayName = "Radio";

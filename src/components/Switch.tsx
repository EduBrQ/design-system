import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { cx } from "../utils/cx";

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ label, id, className, ...rest }, ref) => {
  const generatedId = useId();
  const switchId = id ?? generatedId;
  return (
    <label htmlFor={switchId} className={cx("eds-switch", className)}>
      <input ref={ref} id={switchId} type="checkbox" role="switch" className="eds-switch__input" {...rest} />
      <span className="eds-switch__track">
        <span className="eds-switch__thumb" />
      </span>
      {label && <span className="eds-switch__label">{label}</span>}
    </label>
  );
});

Switch.displayName = "Switch";

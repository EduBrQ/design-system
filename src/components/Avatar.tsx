import type { HTMLAttributes } from "react";
import { cx } from "../utils/cx";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
}

function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export function Avatar({ name, src, size = "md", className, ...rest }: AvatarProps) {
  return (
    <div className={cx("eds-avatar", `eds-avatar--${size}`, className)} title={name} {...rest}>
      {src ? <img src={src} alt={name} /> : <span>{initialsOf(name)}</span>}
    </div>
  );
}

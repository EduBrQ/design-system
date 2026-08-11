import { createContext, useContext, useState, type ReactNode } from "react";
import { cx } from "../utils/cx";

interface TabsContextValue {
  value: string;
  setValue: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs.List/Tab/Panel devem ser usados dentro de <Tabs>");
  return ctx;
}

export interface TabsProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children?: ReactNode;
  className?: string;
}

function TabsRoot({ value, defaultValue, onValueChange, children, className }: TabsProps) {
  const [internal, setInternal] = useState(defaultValue ?? "");
  const active = value ?? internal;

  const setValue = (next: string) => {
    if (value === undefined) setInternal(next);
    onValueChange?.(next);
  };

  return (
    <TabsContext.Provider value={{ value: active, setValue }}>
      <div className={cx("eds-tabs", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <div role="tablist" className={cx("eds-tabs__list", className)}>
      {children}
    </div>
  );
}

function Tab({ value, children }: { value: string; children?: ReactNode }) {
  const { value: active, setValue } = useTabsContext();
  const isActive = active === value;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      className={cx("eds-tabs__tab", isActive && "is-active")}
      onClick={() => setValue(value)}
    >
      {children}
    </button>
  );
}

function Panel({ value, children }: { value: string; children?: ReactNode }) {
  const { value: active } = useTabsContext();
  if (active !== value) return null;
  return (
    <div role="tabpanel" className="eds-tabs__panel">
      {children}
    </div>
  );
}

export const Tabs = Object.assign(TabsRoot, { List: TabsList, Tab, Panel });

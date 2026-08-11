import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Brand = "aqua" | "oficina";

interface BrandContextValue {
  brand: Brand;
  setBrand: (brand: Brand) => void;
}

const BrandContext = createContext<BrandContextValue | null>(null);

export function BrandProvider({ children }: { children: ReactNode }) {
  const [brand, setBrand] = useState<Brand>("aqua");

  useEffect(() => {
    document.documentElement.setAttribute("data-brand", brand);
  }, [brand]);

  return <BrandContext.Provider value={{ brand, setBrand }}>{children}</BrandContext.Provider>;
}

export function useBrand(): BrandContextValue {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error("useBrand deve ser usado dentro de <BrandProvider>");
  return ctx;
}

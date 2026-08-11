import { NavLink, Outlet } from "react-router-dom";
import { useBrand } from "../BrandContext";

export function DocsLayout() {
  const { brand, setBrand } = useBrand();

  return (
    <div className="docs-shell">
      <header className="docs-nav">
        <div className="docs-nav__brand">
          <span className="docs-nav__dot" aria-hidden="true" />
          <span>@edubrq/design-system</span>
        </div>

        <nav className="docs-nav__links" aria-label="Documentação">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            Home
          </NavLink>
          <NavLink to="/componentes" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            Componentes
          </NavLink>
          <NavLink to="/tokens" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            Tokens
          </NavLink>
        </nav>

        <div className="docs-nav__switch" role="tablist" aria-label="Marca de preview">
          <button
            type="button"
            role="tab"
            aria-selected={brand === "aqua"}
            className={brand === "aqua" ? "is-active" : undefined}
            onClick={() => setBrand("aqua")}
          >
            AquaFarm
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={brand === "oficina"}
            className={brand === "oficina" ? "is-active" : undefined}
            onClick={() => setBrand("oficina")}
          >
            Oficina Inteligente
          </button>
        </div>
      </header>

      <main className="docs-main">
        <Outlet />
      </main>
    </div>
  );
}

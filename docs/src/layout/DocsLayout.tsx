import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "../ThemeContext";

export function DocsLayout() {
  const { theme, setTheme } = useTheme();

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

        <div className="docs-nav__switch" role="tablist" aria-label="Tema de preview">
          <button
            type="button"
            role="tab"
            aria-selected={theme === "white"}
            className={theme === "white" ? "is-active" : undefined}
            onClick={() => setTheme("white")}
          >
            White
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={theme === "g100"}
            className={theme === "g100" ? "is-active" : undefined}
            onClick={() => setTheme("g100")}
          >
            Gray 100
          </button>
        </div>
      </header>

      <main className="docs-main">
        <Outlet />
      </main>
    </div>
  );
}

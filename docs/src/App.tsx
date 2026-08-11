import { Route, Routes } from "react-router-dom";
import { ToastProvider } from "../../src";
import { BrandProvider } from "./BrandContext";
import { DocsLayout } from "./layout/DocsLayout";
import { ComponentsPage } from "./pages/ComponentsPage";
import { HomePage } from "./pages/HomePage";
import { TokensPage } from "./pages/TokensPage";

export function App() {
  return (
    <BrandProvider>
      <ToastProvider>
        <Routes>
          <Route element={<DocsLayout />}>
            <Route index element={<HomePage />} />
            <Route path="componentes" element={<ComponentsPage />} />
            <Route path="tokens" element={<TokensPage />} />
          </Route>
        </Routes>
      </ToastProvider>
    </BrandProvider>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../../src/tokens/base.css";
import "../../src/tokens/brand-aqua.css";
import "../../src/tokens/brand-oficina.css";
import "../../src/components/components.css";
import "./docs.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

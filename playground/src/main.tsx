import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../src/tokens/base.css";
import "../../src/tokens/brand-aqua.css";
import "../../src/tokens/brand-oficina.css";
import "../../src/components/components.css";
import "./playground.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

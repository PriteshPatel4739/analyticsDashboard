import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { OutletHomepage } from "./screens/OutletHomePage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <OutletHomepage />
  </StrictMode>,
);

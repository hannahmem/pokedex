import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PokedexContext } from "./context/PokedexContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PokedexContext>
        <App />
      </PokedexContext>
    </BrowserRouter>
  </StrictMode>,
);

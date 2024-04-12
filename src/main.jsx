import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CharacterProvider } from "./context/CharacterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CharacterProvider>
    <App />
  </CharacterProvider>
);

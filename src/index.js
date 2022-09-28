import React from "react";
import { StrictMode } from "react";
import "./index.css";
import App from "./App";
import "tw-elements";
import * as serviceWorker from "./serviceWorker";
import { createRoot } from "react-dom/client";

window.renderCats = (containerId, history) => {
  const rootElement = document.getElementById(containerId);
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App history={history} />
    </StrictMode>
  );
  serviceWorker.unregister();
};

window.unmountCats = (containerId) => {
  const rootElement = document.getElementById(containerId);
  const root = createRoot(rootElement);
  root.unmountComponentAtNode(root);
};

if (!document.getElementById("Cats-container")) {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  serviceWorker.unregister();
}

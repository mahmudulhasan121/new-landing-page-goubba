import React, { Suspense } from "react";
import { StrictMode } from "react";
import "./index.css";
import App from "./App";
import "tw-elements";
import * as serviceWorker from "./serviceWorker";
import { createRoot } from "react-dom/client";
import i18next from './i18n'

i18next.t('my.key')

window.renderCats = (containerId, history) => {
  const rootElement = document.getElementById(containerId);
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Suspense fallback="loading">
        <App history={history} />
      </Suspense>
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
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </StrictMode>
  );
  serviceWorker.unregister();
}

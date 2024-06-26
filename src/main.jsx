import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorker from "../public/registerPWA.js";
import App from "./App.jsx";
import GlobalContextProvider from "./Context/GlobalContext.jsx";
import "./Styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);

// serviceWorker.register();

import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorker from "../public/registerPWA.js";
import App from "./App.jsx";
import "./Styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.register();

import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import React from "react";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

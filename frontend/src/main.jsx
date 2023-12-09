import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider clientId="d4f1e3ec9a74a6aad8a4753f08d55d12">
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

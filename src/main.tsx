import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import "./i18n/config.ts";
import "./index.css";

import { PrivyProvider } from "@privy-io/react-auth";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrivyProvider
        appId="clu9vys1101e3a15kej12ssha"
        config={{
          loginMethods: ["twitter"]
        }}>
        <App />
      </PrivyProvider>
    </BrowserRouter>
  </React.StrictMode>
);

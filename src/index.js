import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "utils/ContextProvider";
import Navigator from "navigator/navigator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  </ContextProvider>
);
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { AppProvider } from "./context";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
  <BrowserRouter basename="recipe-app">
    <ScrollToTop>
      <AppProvider>
        <App />
      </AppProvider>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);

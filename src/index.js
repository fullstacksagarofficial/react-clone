import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import  "./App.css";
import { BrowserRouter, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));

// scroll to top when navigate
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <App />
      </Wrapper>
    </BrowserRouter>
  </React.StrictMode>
);

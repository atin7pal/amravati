import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import routes from "./Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AppRouter from "./AppRouter.jsx";
import ScrollToTop from "./components/user/ScrollToTop.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
       <AppRouter/>
       </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

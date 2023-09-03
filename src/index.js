import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import Nav from "./components/nav";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Index() {
  return (
    <React.StrictMode>
      <ParallaxProvider>
        <CssBaseline />
        <Nav />
        <App />
      </ParallaxProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);

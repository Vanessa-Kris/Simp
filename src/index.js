import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import Nav from "./components/nav";

export default function Index() {
  return (
    <React.StrictMode>
      <CssBaseline />
      <Nav />
      <App />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);

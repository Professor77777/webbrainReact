import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Navbar from "./Component/Navbar";
import Index from "./Components_movie";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Index />
    <indexNav />
  </React.StrictMode>
);

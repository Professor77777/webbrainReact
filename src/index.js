import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
const photos = [
  { url: "", name: "Sardor" },
  { url: "", name: "Orange" },
];
root.render(
  <React.StrictMode>
    {photos.map((value) => {
      return <App data={value} />;
    })}
  </React.StrictMode>
);

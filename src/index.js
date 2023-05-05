import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./useContext/Navbar";
import SignUp from "./Components/SignUp";
import Hook from "./Component3/Hook.jsx";
import Hook1 from "./Component3/Hook1.jsx";
import Calculator from "./Component3/Calculator";
import StudentsContextProvider from "./useContext/useContext.jsx";
import Body from "./useContext/Body";
import Footer from "./useContext/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Navbar />
    <SignUp /> */}
    {/* <Hook />
    <Hook1 />
    <Calculator /> */}
    <StudentsContextProvider>
      <h1>useContext</h1>
      <Navbar />
      <Body />
      <Footer />
    </StudentsContextProvider>
  </React.StrictMode>
);

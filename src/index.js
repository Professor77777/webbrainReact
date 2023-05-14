import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Navbar from "./useContext/Navbar";
import SignUp from "./Components/SignUp";
import Hook from "./Component3/Hook.jsx";
import Hook1 from "./Component3/Hook1.jsx";
import Calculator from "./Component3/Calculator";
import Provider from "./useContext/Provider.jsx";
import Navbar from "./ComponentsContext/Navbar/Navbar";
import Body from "./ComponentsContext/Body/Body";
import ProductsContextProvider from "./useContext/ProductsContext";
import CartContextProvider from "./useContext/CartContext";
import Cart from "./ComponentsContext/Cart/Cart";
import UsersContextProvider from "./useContext/UsersContext";
import Controlled from "./ControlledCom/Controlled.jsx";
import UnControlled from "./ControlledCom/UnControlled";
import Practice from "./ControlledCom/Practice";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Navbar />
    <SignUp /> */}
    {/* <Hook />
    <Hook1 />
    <Calculator /> */}
    {/* <Provider /> */}
    <ProductsContextProvider>
      <UsersContextProvider>
        <Navbar />
        <Body />
      </UsersContextProvider>
      {/* <Cart /> */}
    </ProductsContextProvider>
    {/* <Controlled />
    <UnControlled /> */}
    <Practice />
  </React.StrictMode>
);

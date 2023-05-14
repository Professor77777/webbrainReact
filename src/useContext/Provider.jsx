import React from "react";
import StudentsContextProvider from "./useContext.jsx";
import ProductsContextProvider from "./ProductsContext.jsx";
import Navbar from "./Navbar.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import Products from "./Products.jsx";
import CartContextProvider from "./CartContext.jsx";
import Cart from "../ComponentsContext/Cart/Cart.jsx";
function Provider() {
  return (
    <div>
      <StudentsContextProvider>
        <CartContextProvider>
          <h1>useContext</h1>
          <Navbar />
          <Body />
          <Footer />
          <Products />
        </CartContextProvider>
      </StudentsContextProvider>
    </div>
  );
}
export default Provider;

import React, { useContext, useReducer } from "react";
import "./Navbar.css";
import { CartContext } from "../../useContext/CartContext";
import { ProductsContext } from "../../useContext/ProductsContext";
import { useUsersContext } from "../../useContext/UsersContext";
const Navbar = () => {
  const { computers } = useContext(ProductsContext);
  const { state } = useUsersContext();
  console.log(state, "state");
  // const { cartOpen, setCartOpen } = useContext(CartContext);
  // console.log(cartOpen);

  // const showDrawer = () => {
  //   setCartOpen(true);
  // };
  return (
    <header className="navbar">
      <div className="navbar_wrapper">
        <span>Online Shop</span>
        <nav>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div style={{ display: "flex", gap: "20px" }}>
          <span>Users( {state}) </span>
          <span>Products ({computers.products.length}) </span>
          <span>Cart({computers.cart.length})</span>
        </div>
      </div>
    </header>
  );
};
export default Navbar;

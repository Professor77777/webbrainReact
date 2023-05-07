import React, { createContext, useContext } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartOpen, setCartOpen] = useContext(CartContext);

  return (
    <CartContext.Provider value={{ cartOpen, setCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;

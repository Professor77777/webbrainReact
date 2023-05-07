import React, { useContext } from "react";
import "./Body.css";
import { ProductsContext } from "../../useContext/ProductsContext";

const Body = () => {
  const { computers, setComputers } = useContext(ProductsContext);

  const addToCart = (products) => {
    console.log(products);
    setComputers((prev) => ({ ...prev, cart: [...prev.cart, products] }));
  };
  return (
    <div className="products_wrapper">
      <div className="products_container">
        <h2 className="products_title">Products</h2>
        <div className="products">
          {computers.products.map((c) => (
            <div className="card" key={c.id}>
              <h4>{c.title}</h4>
              <p>{c.price}</p>
              <button onClick={() => addToCart(c)}>Add to card</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;

import React, { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

const Products = () => {
  const { computers, setComputers } = useContext(ProductsContext);
  const deleteProduct = (product_id) => {
    let res = computers.filter((computer) => computer.id !== product_id);
    setComputers(res);
  };

  return (
    <div>
      <h4>Products</h4>
      {computers?.map((computer) => (
        <div key={computer.id}>
          {computer.id} {computer.title}-${computer.price}
          <button
            onClick={() => deleteProduct(computer.id)}
            style={{ width: "100px", background: "grey" }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default Products;

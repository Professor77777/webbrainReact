import React, { useState } from "react";
import { Input } from "./Hook";

function Hook1() {
  const [state, setState] = useState({ counter: 0 });
  const [user, setUser] = useState({ username: "Jack", age: 27 });
  const [fruits, setFruits] = useState([
    { id: 1, name: "olma", price: 1000 },
    { id: 2, name: "nok", price: 2000 },
    { id: 3, name: "banan", price: 3000 },
  ]);

  const increment = () => {
    setState((prev) => ({ ...prev, counter: prev.counter + 1 }));
  };
  const decrement = () => {
    setState((prev) => ({ ...prev, counter: prev.counter - 1 }));
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const deleteFruits = () => {
    const result = fruits.filter((fruit) => fruit.id !== id);
    console.log(result);
    setFruits(() => deleteFruits);
  };
  return (
    <div>
      <h3>Hook</h3>
      <input type="text" value={state.counter} /> <br />
      <button onClick={increment} style={{ width: "100px" }}>
        increment
      </button>
      <button onClick={decrement} style={{ width: "100px" }}>
        decrement
      </button>
      <br />
      <h3>Name: {user.username}</h3>
      <h3>Age: {user.age}</h3>
      <Input onChange={onChange} name="username" type="text" />
      <Input onChange={onChange} name="age" type="text" />
      <br />
      {fruits.map((fruit) => (
        <div key={fruit.id}>
          {fruit.id}
          {fruit.name}
          {fruit.price}{" "}
          <button onClick={() => deleteFruits} style={{ width: "50px" }}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}
export default Hook1;

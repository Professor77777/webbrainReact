import React, { useState } from "react";
import "./Controlled.css";

const Controlled = () => {
  const [user, setUser] = useState({ phonenumber: "", password: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  // console.log(user);
  // console.log("Login");
  return (
    <div className="wrapper">
      <div className="container">
        <h2 className="title">Sign Up</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
          ipsa.
        </p>
        <form>
          <input
            type="number"
            placeholder="Enter your phone number"
            onChange={onChange}
            name="phonenumber"
          />
          <input
            type="password"
            placeholder="Enter your phone password"
            onChange={onChange}
            name="password"
          />
          <button className="login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Controlled;

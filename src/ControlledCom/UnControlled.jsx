import React, { useRef, useState } from "react";
import "./Controlled.css";

const UnControlled = () => {
  const phonenumberRef = useRef();
  const passwordRef = useRef();
  const login = (e) => {
    e.preventDefault();
    console.log(phonenumberRef.current.value);
    console.log(passwordRef.current.value);
    e.target.reset();
    // return fetch("https://project.user", {
    //   method: "POST",
    //   header: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     phonenumberRef: phonenumberRef.current.value,
    //     passwordRef: passwordRef.current.value,
    //   }),
    // });
  };
  const onKeyDown = (e) => {
    // const { type, key } = e;
    // if (type === "keydown" && key === "Enter") {
    //   login();
    // }
  };
  console.log("Login");

  return (
    <div className="wrapper">
      <div className="container">
        <h2 className="title">Sign Up</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
          ipsa.
        </p>
        <form onSubmit={login}>
          <input
            type="number"
            placeholder="Enter your phone number"
            ref={phonenumberRef}
          />
          <input
            type="password"
            placeholder="Enter your phone password"
            ref={passwordRef}
            onKeyDown={onKeyDown}
          />
          <button className="login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default UnControlled;

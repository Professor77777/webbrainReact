import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "../Products/Products.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Login from "../Login/Login.jsx";
import Home from "../Home/Home.jsx";
import NotFound from "../404/NotFound.jsx";
import { path } from "../Path/Path.jsx";
const Root = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="navbar" element={<Navbar />} />
      <Route path="login" element={<Login />} /> */}
      <Route path="navbar" element={<Navbar />} />
      {path?.map((value) => {
        return (
          <Route key={value.id} path={value.path} element={value.element} />
        );
      })}

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
export default Root;

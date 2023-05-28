import React from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { path } from "../Path/Path";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="container">
        <span className="logo" onClick={() => navigate("/")}>
          Logo
        </span>
        <nav>
          <ul>
            {path?.map((value) => {
              return (
                <li>
                  <NavLink key={value.id} to={value.path}>
                    {value.title}
                  </NavLink>
                </li>
              );
            })}

            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
};
export default Navbar;

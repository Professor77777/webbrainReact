import React, { Component } from "react";
import {
  NavbarWrapper,
  NavContainer,
  NavItems,
  Child,
  Logo,
  NavRight,
  Btn,
} from "../Component/style.jsx";

class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper>
        <NavContainer>
          <Logo>Logo</Logo>
          <NavItems>
            <Child> Home</Child>
            <Child> Products</Child>
            <Child>About</Child>
            <Child>Contact Us</Child>
          </NavItems>
          <NavRight>
            <Btn mr="20px" mt="10px" rang="black" bg="yellow">
              Basket
            </Btn>
            <Btn rang="red">Login</Btn>
            <Btn rang="blue">Register</Btn>
          </NavRight>
        </NavContainer>
      </NavbarWrapper>
    );
  }
}
export default Navbar;

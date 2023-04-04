import React, { Component } from "react";
import "../Components/Login.css";
import Home from "./Home";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      user: {
        username: "",
        password: "",
      },
    };
  }
  render() {
    const onMultiChange = (e) => {
      console.log(e.target.name);
      this.setState((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
    // const onChange = (e) => {
    //   this.setState((prev) => ({ ...prev, username: e.target.value }));
    // };
    // const onChange2 = (e) => {
    //   this.setState((prev) => ({ ...prev, password: e.target.value }));
    // };
    const login = (e) => {
      e.preventDefault();
      this.setState((prev) => ({
        ...prev,
        user: { username: this.state.username, password: this.state.password },
      }));
    };
    console.log(this.state);
    return (
      <div className="wrapper">
        {this.state.user.username === "jack007" &&
        this.state.user.password === "1234" ? (
          <Home />
        ) : (
          <form className="form">
            <h2>Login</h2>
            <input
              type="text"
              placeholder="username"
              onChange={onMultiChange}
              name="username"
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="password"
              onChange={onMultiChange}
              name="password"
            />
            <br />
            <button type="submit" onClick={login}>
              Sign Up
            </button>
          </form>
        )}
      </div>
    );
  }
}
export default Login;

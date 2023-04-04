import React, { Component } from "react";
import "../Components/SignUp.css";
import { data } from "./Data";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
    };
  }
  render() {
    const onChangeInput = (e) => {
      this.setState((prev) => ({ ...prev, name: e.target.value }));
    };
    const login = () => {
      this.setState((prev) => ({
        ...prev,
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Email: this.state.Email,
        Password: this.state.Password,
      }));
    };
    return (
      <div className="wrapper">
        <div className="title">
          <h1 className="title-name">Sign Up </h1>
        </div>
        <div className="body">
          {data.map((data) => (
            <div key={data.id}>
              <h3 className="data_title">{data.title}</h3>
              <input
                className="input"
                type={data.type}
                placeholder={data.placeholder}
                required
                onChange={onChangeInput}
              />
            </div>
          ))}
          <button type="submit" onSubmit={login}>
            Sign Up
          </button>
          <h5>
            Already registrated <a href="# ">sign in</a>?
          </h5>
        </div>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default SignUp;

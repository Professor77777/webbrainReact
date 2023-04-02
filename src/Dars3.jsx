import React, { Component } from "react";

// class Dars3 extends Component {
//   render() {
//     let counter = 0;
//     const increment = () => {
//       console.log("increment");
//       counter++;
//       console.log(counter);
//     };
//     return (
//       <div>
//         <h4>{counter}</h4>
//         <button onClick={increment}>Increment</button>
//       </div>
//     );
//   }
// }

// export default Dars3; //In this condition, function do not rendering and cant get new value, so we have to use state for re-rendering and process will be as below.->

class Dars3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: "",
      email: "",
      password: "",
      completed: false,
    };
  }

  render() {
    const increment = () => {
      console.log("increment");
      this.setState((prev) => ({ ...prev, counter: this.state.counter + 1 }));
      //   this.setState((prev) => ({ ...prev, counter: this.state.counter - 1 }));
    };
    const decrement = () => {
      console.log("decrement");
      this.setState((prev) => ({ ...prev, counter: this.state.counter - 1 }));
    };
    const onChange = (e) => {
      this.setState((pre) => ({ ...pre, name: e.target.value }));
    };
    const onChangeEmail = (e) => {
      this.setState((pre) => ({ ...pre, email: e.target.value }));
    };
    const onChangePassword = (e) => {
      this.setState((pre) => ({ ...pre, password: e.target.value }));
    };
    const onSelectLanguage = (e) => {
      console.log(e.target.value);
      this.setState((pre) => ({ ...pre, language: e.target.value }));
    };
    const onCheckBox = (e) => {
      console.log(e.target.checked);
      this.setState((pre) => ({ ...pre, completed: e.target.checked }));
    };
    console.log("render");
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <input type="text" placeholder="Enter your name" onChange={onChange} />

        <input
          type="email"
          placeholder="Enter your email"
          onChange={onChangeEmail}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={onChangePassword}
          required
        />
        <input type="checkbox" onChange={onCheckBox} />
        <select onChange={onSelectLanguage}>
          <option value="en">En</option>
          <option value="ru">Ru</option>
          <option value="uz">Uz</option>
        </select>

        <p>{this.state.name}</p>
        <p>{this.state.email}</p>
        <p>{this.state.password}</p>
        <p>{this.state.language}</p>
        <h1
          style={{
            textDecoration: this.state.completed ? "line-through" : "underline",
          }}
        >
          Hello world
        </h1>
      </div>
    );
  }
}

export default Dars3;

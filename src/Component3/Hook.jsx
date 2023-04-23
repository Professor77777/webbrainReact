import React, { Component } from "react";
import { Button, Container, Input, Wrapper } from "./Hook";

class Hook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: "",
      user: {
        username: "Jack",
        age: 27,
      },
    };
  }
  render() {
    const Increment = () => {
      this.setState((prev) => ({ ...prev, counter: this.state.counter + 1 }));
    };
    const Decrement = () => {
      this.setState((prev) => ({ ...prev, counter: this.state.counter - 1 }));
    };
    const onChange = (e) => {
      this.setState((prev) => ({ ...prev, name: e.target.value }));
    };
    const onChangeInput = (e) => {
      const { name, value } = e.target;
      this.setState((prev) => ({
        ...prev,
        user: { ...prev.user, [name]: value },
      }));
    };

    return (
      <Wrapper>
        <Container>
          <Input
            onChange={onChange}
            type="number"
            placeholder="Calculate"
            value={this.state.counter}
          />
          <br />
          <Button onClick={Increment}>Increment</Button>
          <Button onClick={Decrement}>Decrement</Button>
          <br />
          <h3>Name: {this.state.user.username}</h3>
          <h3>Age: {this.state.user.age}</h3>
          <Input
            type="text"
            placeholder="enter your name"
            onChange={onChangeInput}
            name="username"
          />
          <Input
            type="text"
            placeholder="enter your name"
            onChange={onChangeInput}
            name="age"
          />
        </Container>
      </Wrapper>
    );
  }
}
export default Hook;

import React, { Component } from "react";
import ".//Form.css";
import { body } from "./Body";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: body,
      name: "",
      status: "",
      age: "",
    };
  }
  render() {
    const InputName = (e) => {
      console.log(e.target.value);
      this.setState((prev) => ({ ...prev, name: e.target.value }));
    };
    const InputStatus = (e) => {
      console.log(e.target.value);
      this.setState((prev) => ({ ...prev, status: e.target.value }));
    };
    const InputAge = (e) => {
      console.log(e.target.value);
      this.setState((prev) => ({ ...prev, age: e.target.value }));
    };
    const ButtonAdd = () => {
      console.log("ButtonAdd");
      const NewUser = {
        id: this.state.data.length + 1,
        name: this.state.name,
        status: this.state.status,
        age: this.state.age,
      };
      this.setState((prev) => ({
        ...prev,
        data: [...this.state.data, NewUser],
      }));
      // this.setState((prev) => ({
      //   ...prev,
      //   name: this.state.name,
      //   status: this.state.status,
      //   age: this.state.age,
      // }));
    };

    return (
      <div className="wrapper">
        <div className="container">
          <div className="Title">WebBrain Academy</div>
          <div className="input_wrapper">
            <input
              className="input_search"
              type="text"
              placeholder="Search..."
            />
            <select className="select">
              <option value="id">ID</option>
              <option value="passport">Passport</option>
            </select>
          </div>
          <div className="status_title">
            <p className="id">ID</p>
            <p className=" status_name">Name</p>
            <p className="status">Status</p>
            <p className="age">Age</p>
            <p className="edit">Edit</p>
          </div>
          <div className="body">
            {this.state.data.map((body) => (
              <div className="student_status" key={body.id}>
                <div className="id ">{body.id}</div>
                <div className="name">{body.name}</div>
                <div className="status ">{body.status}</div>
                <div className="age">{body.age}</div>
                <div className="edit">{body.edit}</div>
              </div>
            ))}
          </div>
          <div className="footer">
            <input
              onChange={InputName}
              className="input_name"
              type="text"
              placeholder="Name"
            />
            <input
              onChange={InputStatus}
              className="input_status"
              type="text"
              placeholder="Status"
            />
            <input
              onChange={InputAge}
              className="input_age"
              type="number"
              placeholder="Age"
            />
            <button onClick={ButtonAdd} className="btn_footer">
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;

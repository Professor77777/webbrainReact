import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="card">
        <h1>
          {data.url}
          {data.name}
        </h1>
      </div>
    );
  }
}
export default App;

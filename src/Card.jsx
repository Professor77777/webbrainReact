import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="container">
        <img className="img" src={this.props?.src}></img>
        <h3 className="title">{this.props?.title}</h3>
      </div>
    );
  }
}
export default Card;
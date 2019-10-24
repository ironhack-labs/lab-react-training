import React, { Component } from "react";

class IdCard extends Component {
  render() {
    console.log("this.props", this.props);
    console.log("this.props.birth", this.props.birth);
    return (
      <div className="Id" style={{ border: "1px solid black" }}>
        <p></p>
        <h1>{this.props.data.firstName}</h1>
        <h1>{this.props.data.lastName}</h1>
        <h1>{this.props.data.country}</h1>
        <h1>{this.props.birthDay.toString()}</h1>
      </div>
    );
  }
}

export default IdCard;

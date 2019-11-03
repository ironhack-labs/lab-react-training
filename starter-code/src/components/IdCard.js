import React, { Component } from "react";
import "../App.css";

class IdCard extends Component {
  render() {
    console.log("this.props", this.props);
    console.log("this.props.birth", this.props.birth);
    console.log("this.props.img", this.props.img);
    return (
      <div className="Id" style={{ border: "1px solid black" }}>
        <div className="left">
          <img src={this.props.data.img} width={100} height={100} mode="fit" />
        </div>
        <div className="right">
          <p>Firstname:</p>
          <p>{this.props.data.firstName}</p>
          <p>Lastname:</p>
          <p>{this.props.data.lastName}</p>
          <p>Origin:</p>
          <p>{this.props.data.country}</p>
          <p>Birtday:</p> <p>{this.props.birthDay.toString()}</p>
        </div>
      </div>
    );
  }
}

export default IdCard;

import React, { Component } from "react";

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.number = Math.round(this.props.children);
    this.rating = "";
    for (let i = 0; i <= 5; i++) {
      this.rating += this.number < i ? "☆" : "★";
    }
  }
  render() {
    return (
      <div>
        <p>{this.rating}</p>
      </div>
    );
  }
}

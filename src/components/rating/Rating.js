import React, { Component } from "react";
import "./Rating.css";

export default class Rating extends Component {
  render() {
    return (
      <div>
        <div>{this.props.start}</div>
      </div>
    );
  }
}

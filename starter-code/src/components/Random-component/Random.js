import React, { Component } from "react";

export default class Random extends Component {
  min = this.props.min;
  max = this.props.max;

  render() {
    return (
      <div>
        <p>
          Random value between {this.min} and {this.max} =>
          {Math.floor(Math.random() * this.max) + this.min}
        </p>
      </div>
    );
  }
}

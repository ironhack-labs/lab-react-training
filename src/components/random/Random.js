import React, { Component } from "react";

export default class Random extends Component {
  ranValue = (min, max) => {
    return min + Math.random() * (max - min);
  };
  render() {
    const { min, max } = this.props;
    return (
      <div>
        <p>
          Return value between {min} and {max} =>{this.ranValue(min, max)}
        </p>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class BoxColor extends Component {
  render() {
    const { color } = this.props;
    return (
      <div className="boxColor-container">
        <div style={{ backgroundColor: `${color}` }}>{color}></div>
      </div>
    );
  }
}

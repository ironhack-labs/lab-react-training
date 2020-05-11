//Iteration 4 | Component: BoxColor

import React, { Component } from "react";

class BoxColor extends Component {
  render() {
    const divStyle = {
      backgroundColor:
        "rgb(" + this.props.r + "," + this.props.g + "," + this.props.b + ")",
    };
    return (
      <div style={divStyle}>
        <p>
          {" "}
          rgb {this.props.r}, {this.props.g}, {this.props.b}
        </p>
      </div>
    );
  }
}

export default BoxColor;

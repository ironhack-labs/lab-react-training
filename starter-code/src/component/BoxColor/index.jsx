import React, { Component } from "react";
import "./index.css";

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export class BoxColor extends Component {

  render() {
    const r = this.props.r;
    const g = this.props.g;
    const b = this.props.b;
    const bgColorNumber = r + "," + g + "," + b;
    const bgColor = `rgb(${bgColorNumber})`;
    const bgColorInX = rgbToHex(r, g, b);

    return (
      <div className="card center" style={{ backgroundColor: bgColor }}>
        <h3>
          RGB({r},{g},{b}){" "}
          <p>{bgColorInX}</p>
        </h3>
      </div>
    );
  }
}

export default BoxColor;

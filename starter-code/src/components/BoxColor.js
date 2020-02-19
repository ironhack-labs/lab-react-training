import React, { Component } from "react";

class BoxColor extends Component {

  hexValue = value => {
    return value.toString(16).length === 1 ? `0${value.toString(16)}` : value.toString(16)
  }
    
  hexText = (r, g, b) => {
    return `#${this.hexValue(r)}${this.hexValue(g)}${this.hexValue(b)}`
  };

  render() {
    return (
      <div
        id="simple-card"
        style={{
          backgroundColor: `rgb(${this.props.r},${this.props.g},${this.props.b})`,
          height: "100px",
          textAlign: "center",
          color: "white"
        }}
      >
        <p>
          rgb({this.props.r}, {this.props.g}, {this.props.b})
        </p>
        <p>
          {(() => this.hexText(this.props.r, this.props.g, this.props.b))()}
        </p>
      </div>
    );
  }
}

export default BoxColor;

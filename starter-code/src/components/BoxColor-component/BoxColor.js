import React, { Component } from "react";

export default class BoxColor extends Component {
  rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  rgb = `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`;
  hex = this.rgbToHex(this.props.r, this.props.g, this.props.b);
  divStyle = {
    backgroundColor: this.rgb
  };

  render() {
    return (
      <div>
        <div style={this.divStyle}>
          <p>{this.rgb}</p>
          <p>{this.hex}</p>
        </div>
      </div>
    );
  }
}

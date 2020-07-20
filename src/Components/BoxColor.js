import React, { Component } from 'react';

export class BoxColor extends Component {
  render() {
    const rgbToHex = (rgb) => {
      let hex = Number(rgb).toString(16);
      if (hex.length < 2) {
        hex = '0' + hex;
      }
      return hex;
    };

    const fullColorHex = (r, g, b) => {
      let red = rgbToHex(r);
      let green = rgbToHex(g);
      let blue = rgbToHex(b);
      return red + green + blue;
    };
    return (
      <div>
        <div
          style={{
            width: '100%',
            height: '60px',
            backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
          }}
        >
          rgb({this.props.r}, {this.props.g}, {this.props.b} ) <br /> #
          {fullColorHex(this.props.r, this.props.g, this.props.b)}
        </div>
      </div>
    );
  }
}

export default BoxColor;

import React from 'react';
import './BoxColor.css';

export default class BoxColor extends React.Component {
  randomBgColor() {
    let bgColor = 'rgb(' + this.props.r + ',' + this.props.g + ',' + this.props.b + ')';
    return bgColor;
  }

  rgbToHex() {
    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
    return "#" + componentToHex(this.props.r) + componentToHex(this.props.g) + componentToHex(this.props.b);
  }


  render() {
    return (
      <div style={{ backgroundColor: this.randomBgColor()}}>
        <p>{this.randomBgColor()}</p>
        <p>{this.rgbToHex()}</p>
      </div>
    );
  }
}

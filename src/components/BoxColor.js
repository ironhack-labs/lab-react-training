import React, { Component } from 'react';

class Random extends Component {
  render() {
    const divStyle = {
      backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
    };
    const rA = this.props.r;
    const gA = this.props.g;
    const bA = this.props.b;

    //from rgb
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? '0' + hex : hex;
    }

    function rgbToHex(r, g, b) {
      return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    let rgbData = rgbToHex(rA, gA, bA);

    return (
      <div style={divStyle} className="card">
        <p>
          rgb ({this.props.r},{this.props.g},{this.props.b})
        </p>
        <br></br>
        <br></br>
        <p>{rgbData}</p>
      </div>
    );
  }
}

export default Random;

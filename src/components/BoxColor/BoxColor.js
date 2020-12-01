import React, { Component } from 'react';

export default class BoxColor extends Component {

  componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  render() {
    const { r, g, b } = this.props;
    const divStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      color: '#fff',
      flexDirection: 'column',
      padding: '10px'
    };
    const hexCode = this.rgbToHex(r, g, b);

    return (
      <div className='card' style={divStyle}>
        <h2>rgb({r},{g},{b})</h2>
        <h2>{hexCode}</h2>
      </div>
    )
  }
}

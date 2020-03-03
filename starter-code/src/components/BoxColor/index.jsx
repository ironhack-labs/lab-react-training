import React, { Component } from 'react';

class BoxColor extends Component {
  
  componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }
  
  render() {
    const { r, g, b } = this.props;
    const hex = this.rgbToHex(r, g, b);
    const style = { 
      backgroundColor: `rgb(${r},${g},${b})`,
      height: '100px',
      width: '100%',
      border: '0.1em solid black',
      textAlign: 'center',
      fontSize: 'large',
      margin: '5px'
    }

    return (
      <div style={style}>
        <p>rgb({r},{g},{b})</p>
        <p>{hex}</p>
      </div>
    );
  }
}

export default BoxColor;
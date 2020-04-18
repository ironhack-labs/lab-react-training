import React, { Component } from 'react';

export default class BoxColor extends Component{

  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  render(){
    const { r, g, b } = this.props
    const divstyle = {
      height: `100px`,
      backgroundColor: `rgb(${r},${g},${b})`,
      border: '1px solid black',
      margin: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '20px'
    }
    return(
      <div style={divstyle}>{`rgb(${r},${g},${b})`}<br/>{this.rgbToHex(r,g,b)}</div>
    ); 
  }
}
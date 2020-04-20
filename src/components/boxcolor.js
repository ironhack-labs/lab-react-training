import React, { Component } from "react";

class BoxColor extends Component {
  
  componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  
  rgbToHex = (r, g, b) => {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }
  
  render () {
    const { r, g, b } = this.props;
    return (
      <div style={
        {
        'backgroundColor': [`rgb(${r}, ${g}, ${b})`], 
        'border': '1px solid black',
        'padding': '0 0.5rem',
        'margin': '0 20rem 2rem',
        'fontSize': '2rem',
        'textAlign': 'center',
        }
      }>
        <p>rgb({r}, {g}, {b})</p>
        <p>{this.rgbToHex(r, g, b)}</p>
      </div>
    )
  }
}

export default BoxColor;
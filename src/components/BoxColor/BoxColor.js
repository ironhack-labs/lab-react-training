import React, { Component } from 'react';

class BoxColor extends Component{
  render(){
    
    const { r, g, b, color }= this.props;
    const style = { backgroundColor: `rgb(${r},${g},${b})`, height: '80px', color: color};
    function rgbToHex(r, g, b) { 
      return toHex(r.r) + toHex(g.g) + toHex(b.b) }
    function toHex(n) {
      n = parseInt(n, 10);
      if (isNaN(n)) return "00";
      n = Math.max(0, Math.min(n, 255));
      return "0123456789ABCDEF".charAt((n - n % 16) / 16)
        + "0123456789ABCDEF".charAt(n % 16);
    }

    return(
      <div className="Box" style={style}>
        <p style={{ textAlign: 'center', alignItems: 'center', paddingTop: '10px'}}>rgb({r},{g},{b})</p>
        <p style={{ textAlign: 'center'}}>{rgbToHex({r}, {g}, {b})}</p>
      </div>
    )
  }
}

export default BoxColor;
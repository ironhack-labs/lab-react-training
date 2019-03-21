import React, { Component } from 'react';

// Definition of the component BoxColor
class BoxColor extends Component {
  render() {
    let { r,g,b } = this.props
    let hex = '#'
      + ('0'+r.toString(16)).substr(-2)
      + ('0'+g.toString(16)).substr(-2)
      + ('0'+b.toString(16)).substr(-2)
    let color = 'white'
    if (r+g+b > 127*3) color = 'black'
    return (
      <div className="BoxColor box" style={{
        backgroundColor: `rgb(${r},${g},${b})`,
        color: color,
      }}>
        rgb({r},{g},{b})<br/>
        {hex}
      </div>
    );
  }
}

export default BoxColor;

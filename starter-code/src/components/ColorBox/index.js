import React, { Component } from 'react';
import './style.css';

class ColorBox extends Component {
  render() {
    const { r, g, b } = this.props;
    const style = { backgroundColor: `rgb(${r},${g},${b})` };
    return (
      <p className="color-card" style={style}>
        rgb({r}, {g}, {b})
      </p>
    );
  }
}

export default ColorBox;
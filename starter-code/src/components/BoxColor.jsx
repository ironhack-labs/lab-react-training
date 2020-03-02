import React, { Component } from 'react';
import './BoxColor.css';

class BoxColor extends Component {
  render() {
    const { r, g, b, color } = this.props;
    const style = {
      color: `${color}`,
      backgroundColor: `rgb(${r},${g},${b})`
    };

    return (
      <div className="box-color" style={style}>
        <span>
          rgb({r},{g},{b})
        </span>
      </div>
    );
  }
}

export default BoxColor;

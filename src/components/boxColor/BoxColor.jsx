import React from 'react';
import './BoxColor.css';

export default class BoxColor extends React.Component {
  render() {
    const { r, g, b } = this.props;
    function rgbToHex(r, g, b) {
      return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    function getBackgroundColor(r, g, b) {
      return `rgb(${r}, ${g}, ${b})`;
    }

    return (
      <div
        className="BoxColor"
        style={{ backgroundColor: getBackgroundColor(r, g, b) }}
      >
        <h1>
          rgb({r},{g},{b})
        </h1>
        <h1>hex {rgbToHex(r, g, b)}</h1>
      </div>
    );
  }
}

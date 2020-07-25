import React, { Component } from 'react';

export class BoxColor extends Component {
  rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  render() {
    //const rgbStyle = `rgb`{ r } ;

    return (
      <div
        className="boxColor"
        style={{
          background: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
        }}
      >
        <div>
          <h1>
            {' '}
            RGB {this.props.r}, {this.props.g}, {this.props.b}{' '}
          </h1>
        </div>

        <div>
          <h2>
            HEX: {this.rgbToHex(this.props.r, this.props.g, this.props.b)}
          </h2>
        </div>
      </div>
    );
  }
}

export default BoxColor;

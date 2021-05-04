import React, { Component } from 'react';

export default class BoxColor extends Component {
  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  rgbToHex(r, g, b) {
    return (
      '#' +
      this.componentToHex(r) +
      this.componentToHex(g) +
      this.componentToHex(b)
    );
  }

  render() {
    return (
      <div className="columns">
        <div
          className="column"
          style={{
            background: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
          }}
        >
          <div className="content has-text-centered">
            rgb({this.props.r},{this.props.g},{this.props.b})
            <br />
            {this.rgbToHex(this.props.r, this.props.g, this.props.b)}
          </div>
        </div>
      </div>
    );
  }
}

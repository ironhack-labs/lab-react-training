import React, { Component } from 'react';
import './BoxColor.css';

export default class BoxColor extends Component {
  convertSingleCode = (colorCode) => {
    let hexCode = colorCode.toString(16);

    return hexCode.length === 1 ? '0' + hexCode : hexCode;
  };

  render() {
    return (
      <div
        className="Row BoxColor"
        style={{
          backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
        }}
      >
        <p>
          rgb({this.props.r}, {this.props.g}, {this.props.b})
        </p>

        <p>
          #
          {this.convertSingleCode(this.props.r) +
            this.convertSingleCode(this.props.g) +
            this.convertSingleCode(this.props.b)}
        </p>
      </div>
    );
  }
}

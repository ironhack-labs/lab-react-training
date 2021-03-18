import React, { Component } from 'react';

class BoxColor extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
        }}
      >
        rgb({this.props.r},{this.props.g}, {this.props.b})
      </div>
    );
  }
}
export default BoxColor;

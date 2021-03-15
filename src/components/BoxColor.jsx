import React, { Component } from 'react';

export class BoxColor extends Component {
  render() {
    const { r, g, b } = this.props;

    return (
      <div
        className="boxColor"
        style={{
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          width: 150,
          height: 200,
        }}
      >
        <p>{`rgb(${r}, ${g}, ${b})`}</p>
      </div>
    );
  }
}

export default BoxColor;

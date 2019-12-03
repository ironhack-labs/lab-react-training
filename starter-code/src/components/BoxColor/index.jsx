import React, { Component } from "react";

export class BoxColor extends Component {
  render() {
    const { r, g, b } = this.props;
    return (
      <div className="border rounded-sm mb-2 text-center" style={{ background: `rgb(${r}, ${g}, ${b})`}}>
        <p>rgb({r},{g},{b})</p>
      </div>
    );
  }
}

export default BoxColor;

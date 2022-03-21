import React, { Component } from 'react';
import './BoxColor.css';

class BoxColor extends Component {
  constructor(props) {
    super(props);
    this.boxColor =  `rgb(${this.props.r},${this.props.g},${this.props.b})`
  }
  render() {
    return (
      <div className="BoxColor" style={{ backgroundColor: `${this.boxColor}` }}>
        {this.boxColor}
      </div>
    );
  }
}

export default BoxColor;

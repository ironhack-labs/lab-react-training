import React, { Component } from 'react';
import "./BoxColor.scss";

class BoxColor extends Component {
  
  render() {
    return (
      <div className="box"
      style={{backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`}}>
        <h1>{this.props.r}, {this.props.g}, {this.props.b}</h1>
      </div>
    )
  }
}

export default BoxColor;

/*  */
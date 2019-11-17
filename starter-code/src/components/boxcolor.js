import React, { Component } from 'react';

export class BoxColor extends Component {
  render() {
    let classColor = "colorbox box";
    classColor = this.props.btnStyle + " " + classColor;
        
    return (
      <div className={classColor} style={{backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`}}>
        rgb({this.props.r}, {this.props.g}, {this.props.b})<br />
        {this.props.hexcolor}
      </div>
    )
  }
}

export default BoxColor;

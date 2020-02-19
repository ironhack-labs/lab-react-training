import React, { Component } from "react";

export default class BoxColor extends Component { 
  render() {
    return (
      <div id="BoxColor" style={{
          backgroundColor:`rgb(${this.props.r},${this.props.g},${this.props.b})`,
      }}>
        <p>rgb({this.props.r},{this.props.g},{this.props.b})</p>
        <p>#{this.props.r.toString(16).length<2?'0':null}{this.props.r.toString(16)}
        {this.props.g.toString(16).length<2?'0':null}{this.props.g.toString(16)}
        {this.props.b.toString(16).length<2?'0':null}{this.props.b.toString(16)}</p>
      </div>
    );
  }
}
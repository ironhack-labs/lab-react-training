import React, { Component } from "react";

export default class Random extends Component { 
  render() {
    return (
      <div id="Box">
        <p>Random value between {this.props.min} and {this.props.max} => {Math.ceil(Math.random()*this.props.max)}</p>
      </div>
    );
  }
}
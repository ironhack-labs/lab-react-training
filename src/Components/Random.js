//1. Import
import React, { Component } from 'react';
import '../Random.css'

// 2. Function || Class & Export
export default class Random extends Component {
  render() {
    let randomValue = this.props.min + Math.floor(Math.random() * (this.props.max-this.props.min+1))
    return (
      <div className="random">
        Random value between {this.props.min} and {this.props.max} => {randomValue}
      </div>
    );
  }
}

import React, { Component } from 'react';

export class Random extends Component {
  render() {
    let randomNumber = this.props.min + Math.floor(Math.random() * (this.props.max - this.props.min + 1));
    return (
      <div className="box">Random value between {this.props.min} and {this.props.max} => {randomNumber}</div>
    );
  }
}

export default Random;

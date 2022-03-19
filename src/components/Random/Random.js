import React, { Component } from 'react';

class Random extends Component {

randomNumber = () => {
  return Math.floor(Math.random() * (this.props.max - this.props.min + 1)) + this.props.min
}

  render() {
    return (
      <div>
      <h1>Random value between {this.props.min} and {this.props.max} = {this.randomNumber()}</h1>
    </div>
    )
  }
}

export default Random;


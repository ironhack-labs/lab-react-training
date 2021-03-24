import React, { Component } from 'react';

class Random extends Component {
  render() {
    const randomNum = Math.floor(
      Math.random() * (this.props.max - this.props.min) + this.props.min
    );
    return (
      <div>
        <h1>RANDOM</h1>
        {randomNum}
      </div>
    );
  }
}

export default Random;

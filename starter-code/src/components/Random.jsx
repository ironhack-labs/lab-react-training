import React, { Component } from 'react';
import './Random.css';

class Random extends Component {
  render() {
    const { min, max } = this.props;
    // random integer between two values, inclusive
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return (
      <div className="random">
        <span>
          Random value between {min} and {max} => {randomNumber}
        </span>
      </div>
    );
  }
}

export default Random;

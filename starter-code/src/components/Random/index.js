import React, { Component } from 'react';
import './style.css';

class Random extends Component {
  render() {
    const { min, max } = this.props;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return (
      <p className="random-card">
        A random value between {min} and {max} => {randomNumber}
      </p>
    );
  }
}
export default Random;

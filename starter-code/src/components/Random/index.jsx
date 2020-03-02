import React, { Component } from 'react';

class Random extends Component {
  render() {
    const { min, max } = this.props;
    const total = Math.floor(Math.random() * (max - min + 1) + min);
    return (
      <p>
        A random value between {min} and {max} =>{total}
      </p>
    );
  }
}

export default Random;

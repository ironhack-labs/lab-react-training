import React, { Component } from 'react';

class RandomNumber extends Component {
  render() {
    const min = this.props.min;
    const max = this.props.max;
    const range = max - min;
    const newRandom = Math.floor(Math.random() * range + min);
    console.log('in random:', min, max, newRandom);
    return (
      <div className="random-box">
        <p>
          With the minimum value of {min} and the maximum value of {max}, your
          random number is now {newRandom}
        </p>
      </div>
    );
  }
}

export default RandomNumber;

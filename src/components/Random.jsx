import React, { Component } from 'react';

export class Random extends Component {
  render() {
    const { min, max } = this.props;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return (
      <div>
        Random value between {min} and {max} =&gt; {randomNumber};
      </div>
    );
  }
}

export default Random;

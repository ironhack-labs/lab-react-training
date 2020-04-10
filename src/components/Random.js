import React, { Component } from 'react';

class Random extends Component {
  render() {
    const { min, max } = this.props;
    return (
      <div className=''>((
        <p>Random value between {min} and {max} => {Math.floor(Math.random() * max) + min}</p>
      </div>
    );
  }
}

export default Random;
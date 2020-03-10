import React, { Component } from 'react';

class Random extends Component {
    
  render() {
    const { min, max } = this.props;
    const rand = Math.floor(Math.random() * (max - min));
    return (
      <div className="random">
        <p>Random value between {min} and {max} => {rand}</p>
      </div>
    );
  }
}

export default Random;
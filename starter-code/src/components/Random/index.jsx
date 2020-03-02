import React, { Component } from 'react';
import './style.scss';

class Random extends Component {
  render() {
    const { min, max } = this.props;

    return (
      <div className="randNumb">
        Random value between {min} and {max} => {''}
        {Math.floor(Math.random() * (max - min) + min)}
      </div>
    );
  }
}

export default Random;

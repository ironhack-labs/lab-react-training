import React, { Component } from 'react';
import './style.scss';

class Random extends Component {
  runRandom() {
    let { min, max } = this.props;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  render() {
    let { min, max } = this.props;
    return (
      <div className="random">
        <h3>
          Random value between {min} and {max} => {this.runRandom()}
        </h3>
      </div>
    );
  }
}

export default Random;

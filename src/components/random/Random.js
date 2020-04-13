import React, {Component} from 'react';
import './index.css';
class Random extends Component {

  _getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const {min, max} = this.props;
    return (
      <div className={'random'}>
        <p>Random value between {min} and {max} => {this._getRandomNumber(min, max)}</p>
      </div>
    );
  }
}

export default Random;
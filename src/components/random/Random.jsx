import React from 'react';
import './Random.css';

export default class Random extends React.Component {
  getRandomArbitrary() {
    return (
      Math.floor(Math.random() * (this.props.max - this.props.min + 1)) +
      this.props.min
    );
  }
  render() {
    return (
      <div className="Random">
        <p>
          Random value between {this.props.min} and {this.props.max} =>{' '}
          {this.getRandomArbitrary()}
        </p>
      </div>
    );
  }
}

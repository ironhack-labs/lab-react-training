import React, { Component } from 'react';
import './Rating.css';

class Rating extends Component {
  render() {
    const { children } = this.props;
    const roundNumber = Math.round(children);
    const rating = [];

    for (let i = 0; i <= 5; i++) {
      if (i <= roundNumber) {
        rating.push('★');
      } else {
        rating.push('☆');
      }
    }

    return (
      <div className="rating">
        <span>{rating}</span>
      </div>
    );
  }
}

export default Rating;

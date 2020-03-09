import React, { Component } from 'react';
import './style.scss';

class Rating extends Component {
  render() {
    const children = this.props.children;
    function stars(children) {
      let rating = [];
      const round = Math.round(children);
      for (let i = 1; i <= 5; i++) {
        if (i <= round) {
          rating.push('★');
        } else {
          rating.push('☆');
        }
      }
      return rating;
    }

    // ☆ ★
    // const style = { backgroundColor: bgColor, color };

    return <p>{stars(children)} </p>;
  }
}

export default Rating;

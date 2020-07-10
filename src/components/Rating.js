import React, { Component } from 'react';
import './Rating.css';

class Rating extends Component {
  render() {
    const starTotal = 5;

    const starPercentage =
      (Math.round(parseFloat(this.props.children)) / starTotal) * 100;
    const starPercentageRounded = Math.round(starPercentage) * 4.7;
    const cssStarsInner = { width: starPercentageRounded };

    return (
      <div class="stars-outer">
        <div class="stars-inner" style={cssStarsInner}></div>
      </div>
    );
  }
}
export default Rating;

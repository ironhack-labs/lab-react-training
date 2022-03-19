import React, { Component } from 'react';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.num = Math.round(props.children);
  }

  renderStars = function () {
    let ratings = [];

    for (let i = 0; i < this.num; i++) {
      ratings.push('★');
    }

    while (ratings.length < 5) {
      ratings.push('☆');
    }
    return ratings;
  };

  render() {
    return (
      <div style={{ fontSize: `${this.props.fontSize}` }}>
        {this.renderStars()}
      </div>
    );
  }
}

export default Rating;

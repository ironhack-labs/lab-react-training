import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { children } = this.props;
    const rounded = Math.floor(children);
    let i = 0, stars = [];

    while(i < rounded) {
      stars.push('★');
      i++;
    }
    while(i < 5) {
      stars.push('☆')
      i++;
    }

    return (
      <div className="rating">
        {stars.map((star) => {
          return <span>{star}</span>
        })
        }
      </div>
    );
  }
}

export default Rating;
import React, { Component } from 'react';

export class Ratings extends Component {
  render() {
    const rates = (rating) => {
      let stars = '';

      for (let i = 0; i < 5; i++) {
        if (i < Math.round(rating)) {
          stars += '★';
        } else {
          stars += '☆';
        }
      }
      return stars;
    };
    return (
      <div className="rating-container">
        <p>{rates(this.props.children)}</p>
      </div>
    );
  }
}

export default Ratings;

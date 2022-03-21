import React, { Component } from 'react';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.rating = Math.round(props.children);
    this.startsRating = '★'.repeat(this.rating) + '☆'.repeat(5 - this.rating);
  }

  render() {
    return (
      <div>
        <h1>{this.startsRating}</h1>
      </div>
    )
  }
}

export default Rating;
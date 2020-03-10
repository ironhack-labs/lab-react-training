import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { children } = this.props;
    const rounded = Math.floor(children);

    return (
      <div className="rating">
        <p>
          {
            '★'.repeat(rounded) + '☆'.repeat(5 - rounded)
          }
        </p>
      </div>
    );
  }
}

export default Rating;
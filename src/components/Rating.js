import React from 'react';

class Rating extends React.Component {
  render() {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      if (Math.round(this.props.children) > i) {
        stars += '★';
      } else {
        stars += '☆';
      }
    }
    return <div className="rating">{stars}</div>;
  }
}

export default Rating;

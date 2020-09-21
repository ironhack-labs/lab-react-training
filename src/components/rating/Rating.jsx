import React from 'react';
import './Rating.css';

export function filledStars(rate) {
  switch (Math.round(rate)) {
    case 0:
      return '☆☆☆☆☆';
      break;
    case 1:
      return '★☆☆☆☆';
      break;
    case 2:
      return '★★☆☆☆';
      break;
    case 3:
      return '★★★☆☆';
      break;
    case 4:
      return '★★★★☆';
      break;
    case 5:
      return '★★★★★';
      break;
  }
}


export default class Rating extends React.Component {

  render() {
    return (
      <div className="Rating" style={{}}>
        <p>{filledStars(Math.round(this.props.children))}</p>
      </div>
    );
  }
}

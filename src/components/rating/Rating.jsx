import React from 'react';
import './Rating.css';

export default class Rating extends React.Component {
  filledStars() {
    let stars = '';
    switch (Math.round(this.props.children)) {
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

  render() {
    return (
      <div className="Rating" style={{}}>
        <p>{this.filledStars(Math.round(this.props.children))}</p>
      </div>
    );
  }
}

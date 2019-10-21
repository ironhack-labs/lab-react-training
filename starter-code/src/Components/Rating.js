import React from 'react';

class Rating extends React.Component {
  render() {
    let rating;
    switch (Math.round(this.props.children)) {
      case 0: rating = "☆ ☆ ☆ ☆ ☆";
        break;
      case 1: rating = "★ ☆ ☆ ☆ ☆";
        break;
      case 2: rating = "★ ★ ☆ ☆ ☆";
        break;
      case 3: rating = "★ ★ ★ ☆ ☆";
        break;
      case 4: rating = "★ ★ ★ ★ ☆";
        break;
      case 5: rating = "★ ★ ★ ★ ★";
        break;
      default: rating = "☆ ☆ ☆ ☆ ☆"
    }
    return <div className="Rating">{rating}</div>
  }
}

export default Rating;
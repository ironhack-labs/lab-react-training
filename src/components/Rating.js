import React, { Component } from 'react';


class Rating extends Component {

  showStars = (number) => {
    let roundedNumber = Math.round(number);
    let stars = '';
    switch (roundedNumber) {
      case 1:
        stars = '★☆☆☆☆';
        break;
      case 2:
        stars = '★★☆☆☆';
        break;
      case 3:
        stars = '★★★☆☆';
        break;
      case 4:
        stars = '★★★★☆';
        break;
      case 5:
        stars = '★★★★★';
        break;
      default:
        stars = '☆☆☆☆☆';
    }
    return stars;
  }
  
  render() {
    const { children } = this.props;
    return (
      <div className="rating-container">
        { this.showStars(children) }
      </div>
    )
  }
}


export default Rating;
import React, { Component } from 'react';

class Rating extends Component {

  printStars = (num) => {
    let stars = Math.round(num.children);
    switch (stars) {
      case 0:
      return stars = '☆☆☆☆☆';
      case 1:
        return stars = '★☆☆☆☆';
      case 2:
        return stars = '★★☆☆☆';
      case 3:
        return stars = '★★★☆☆';
      case 4:
        return stars = '★★★★☆';
      case 5:
        return stars = '★★★★★';
    
      default:
        return stars= 'Not rated';
    }
  }

  render(){
    const { children } = this.props;
    return (
      <div style= {{'fontSize':'40px'}}>{this.printStars({children})}</div>
    )
  }
}

export default Rating;
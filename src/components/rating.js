import React, { Component } from "react";

class Rating extends Component {
  
  numOfStars = (num) => {
    let rounded = Math.round(num);
    let output = '';
    switch(rounded) {
      case 0:
        output = '☆☆☆☆☆';
        break;
      case 1:
        output = '★☆☆☆☆';
        break;
      case 2:
        output = '★★☆☆☆';
        break;
      case 3:
        output = '★★★☆☆';
        break;
      case 4:
        output = '★★★★☆';
        break;
      case 5:
        output = '★★★★★';
        break;
      default:
        output = '☆☆☆☆☆';
    }
    return output;
  }

  render () {
    const { children } = this.props;
    return (
      <div className="ratings-box">
        {this.numOfStars(children)}
      </div>
    )
  }
}

export default Rating;
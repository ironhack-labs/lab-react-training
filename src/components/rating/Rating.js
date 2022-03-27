import React, { Component } from 'react';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.rate = Math.round(Number(props.children));
  }
//Need to fix -->> render just one star for each!

  rateStars = () => {
    let stars = [];

    for (let i = 0; i < this.rate; i++) {
        stars.push('★');
        
        while (stars.length < 5) {
            stars.push('☆');
        }
       
      return stars;
    }
  };

  render() {
    return <div style={{ fontSize: '2em' }}>{this.rateStars()}</div>;
  }
}

export default Rating;

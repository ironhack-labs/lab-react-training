import React from 'react';

class RatingClass extends React.Component {
  constructor(props) {
    super(props)
    this.rating = this.props.children;
    this.stars = ['☆', '☆', '☆', '☆', '☆'];
  }
  renderRating(rat){
    for (let i = 0; i < rat; i++) {
      this.stars[i] = '★';
    }
    return this.stars.join('');
  };
  render() {
    return (
      <p className="rating">{this.renderRating(Math.round(this.rating))}</p>
    )
  }
}



export default RatingClass;

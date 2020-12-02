import React, { Component } from 'react';

export default class Rating extends Component {
  render() {
    const stars = {
      0: '☆☆☆☆☆',
      1: '★☆☆☆☆',
      2: '★★☆☆☆',
      3: '★★★☆☆',
      4: '★★★★☆',
      5: '★★★★★',
    };
    console.log(this.props);
    return (
      <div>
        <p>{stars[Math.round(this.props.children)]}</p>
      </div>
    );
  }
}

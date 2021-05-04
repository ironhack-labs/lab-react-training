import React, { Component } from 'react';

export default class Rating extends Component {
  starRating(num) {
    let numRound = Math.round(num);
    let str = '★'.repeat(numRound) + '☆'.repeat(5 - numRound);
    return str;
  }
  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="content">
            <h1>{this.starRating(this.props.children)}</h1>
          </div>
        </div>
      </div>
    );
  }
}

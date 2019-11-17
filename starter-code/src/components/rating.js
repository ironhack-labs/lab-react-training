import React, { Component } from 'react'

export class Rating extends Component {
// since youre inside a class you cannot put 'let' here

showStars =()=> {
  let starsArr = new Array(5).fill(null);
  let number = Math.round(this.props.children);

  let newstarsArr = starsArr.map((item, i) => {
      // console.log(number, item, i);
        return <span className="star" key={`fs${i}`}>{'\u2606'}</span>
      })
      // console.log(newstarsArr);
      
      newstarsArr.fill(<span className="star">{'\u2605'}</span>, 0, number);
      return newstarsArr;
  }

  render() {
  
    return (
      <div className="starRatingbox">
        {this.showStars()}
      </div>
    )
  }
}

export default Rating

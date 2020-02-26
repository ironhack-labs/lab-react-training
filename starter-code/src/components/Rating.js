import React, { Component } from 'react';

class Rating extends Component {
  total = new Array(5).fill("")
  number = Math.round(Number(this.props.children))
  render() {
    return (
    <div className="Raiting">
     {this.total.map((star, i)=>{
       // if (i<=this.number-1) {
       //   return <span>✭</span>
       // }
       // return <span>☆</span>
       return <span>{i<=this.number-1 ? '✭' : '☆'}</span>
     })}
    </div>
);

  }
}

export default Rating;

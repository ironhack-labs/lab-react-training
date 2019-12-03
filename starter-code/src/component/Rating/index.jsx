import React, { Component } from "react";

function getStarts(number) {
  const array = [];
  while (array.length < number) {
    array.push("★");
  }
  while (array.length < 5) {
    array.push("☆");
  }
  return array;
}

export class Rating extends Component {
  render() {
    const number = this.props.children;
    let results = getStarts(number);
    let stars = results.join('');
    
    return (<div>{stars}</div>)
  }
}

export default Rating;

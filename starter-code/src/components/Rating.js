import React, { Component } from "react";

export default class Rating extends Component {
  
  showStars = () => {
    let starRoundNumber = Math.round(this.props.children);
    let stars = ["☆", "☆", "☆", "☆", "☆"];
    let printStars = "";
    let arrayStars = [];
    for (let i = 0; i < starRoundNumber; i++) {
      printStars += "★";
    }
    arrayStars = printStars.split("");
    stars.splice(0, starRoundNumber);
    // console.log(arrayStars+this.stars)
    return (arrayStars + stars).replace(/,/g, " ");
  };

  render() {
    return <div className="stars">{this.showStars()}</div>;
  }
}

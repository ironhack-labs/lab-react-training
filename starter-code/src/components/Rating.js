import React, { Component } from "react";
import { Ratings } from "../styles/components";

export default class Rating extends Component {
  render() {
    switch (Math.round(this.props.child)) {
      case 0:
        return <Ratings>☆☆☆☆☆</Ratings>;
      case 1:
        return <Ratings>★☆☆☆☆</Ratings>;
      case 2:
        return <Ratings>★★☆☆☆</Ratings>;
      case 3:
        return <Ratings>★★★☆☆</Ratings>;
      case 4:
        return <Ratings>★★★★☆</Ratings>;
      case 5:
        return <Ratings>★★★★★</Ratings>;
      default:
        return "lol";
    }
  }
}

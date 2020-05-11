//Iteration 6 | Component: Rating

import React, { Component } from "react";
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";

class Rating extends Component {
  render() {
    const rating = Math.round(this.props.children);
    function starNumber(rating) {
      switch (rating) {
        case 0:
          return (
            <p>
              <MdStarBorder />
              <MdStarBorder />
              <MdStarBorder />
              <MdStarBorder />
              <MdStarBorder />
            </p>
          );
        case 1:
          return (
            <p>
              <MdStar />
              <MdStarBorder />
              <MdStarBorder />
              <MdStarBorder />
              <MdStarBorder />
            </p>
          );
        case 2:
          return (
            <p>
              <MdStar />
              <MdStar />
              <MdStarBorder />
              <MdStarBorder />
              <MdStarBorder />
            </p>
          );
        case 3:
          return (
            <p>
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStarBorder />
              <MdStarBorder />
            </p>
          );
        case 4:
          return (
            <p>
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStarBorder />
            </p>
          );
        case 5:
          return (
            <p>
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </p>
          );
      }
    }
    return (
      <div>
        <p>{starNumber(rating)}</p>
      </div>
    );
  }
}

export default Rating;

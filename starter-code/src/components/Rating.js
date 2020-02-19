import React, { Component } from "react";

class Rating extends Component {
  render() {
    return (
        <p>
          {(() => {
            switch (Math.round(Number(this.props.children))) {
              case 0:
                return "☆☆☆☆☆";
              case 1:
                return "★☆☆☆☆";
              case 2:
                return "★★☆☆☆";
              case 3:
                return "★★★☆☆";
              case 4:
                return "★★★★☆";
              case 5:
                return "★★★★★";
              default:
            }
          })()}
        </p>
    );
  }
}

export default Rating;

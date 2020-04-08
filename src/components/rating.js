import React, { Component } from "react";

class Rating extends Component {
  render () {
    const { children } = this.props;
    return (
      <div className="ratings-box">
        ☆★
      </div>
    )
  }
}

export default Rating;
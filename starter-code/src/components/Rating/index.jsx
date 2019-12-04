import React, { Component } from "react";

class Rating extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <p>
          {"★".repeat(Math.round(props.children))}
          {"☆".repeat(5 - Math.round(props.children))}
        </p>
      </div>
    );
  }
}

export default Rating;

// import React from "react";

// function LikeButton(props) {
//   // console.log(props);
//   return <button onClick={props.funct}>Like {props.value}</button>;
// }

// export default LikeButton;

import React, { Component } from "react";

export class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      style: {
        backgroundColor: "blue"
      }
    };
    this.incrementCount = this.incrementCount.bind(this);
  }
  incrementCount() {
    let value = this.state.value + 1;
    const possibleStyles = [
      "purple",
      "blue",
      "green",
      "yellow",
      "orange",
      "red"
    ];
    const position = parseInt(Math.random() * (possibleStyles.length - 1));
    const style = {
      backgroundColor: `${possibleStyles[position]}`
    };
    // console.log(position);
    this.setState({
      value,
      style
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.incrementCount} style={this.state.style}>
          Likes {this.state.value}
        </button>
      </div>
    );
  }
}

export default LikeButton;

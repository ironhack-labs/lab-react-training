import React, { Component } from "react";

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfLikes: 0,
      backColors: ["purple", "blue", "green", "yellow", "orange", "red"]
    };

    this.increaseLikes = () => {
      console.log("incrase!");
      this.setState({
        numOfLikes: this.state.numOfLikes + 1
      });
    };
    this.btnStyle = {
      backgroundColor: "{this.state.backColors[0]}"
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.increaseLikes} style={this.btnStyle}>
          {this.state.numOfLikes} likes
        </button>
      </div>
    );
  }
}

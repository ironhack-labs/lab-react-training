import React, { Component } from "react";

export default class LikeButton extends Component {
  state = {
    likes: 0,
    currentColor: "purple",
  };

  addLike = () => {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    let colorPos = colors.indexOf(this.state.currentColor);
    const returnColor =
      this.state.currentColor === "red" ? ((colorPos = 0), colors[colorPos]) : ((colorPos += 1), colors[colorPos]);
    let totalLikes = this.state.likes + 1;
    this.setState({ likes: totalLikes, currentColor: returnColor });
  };

  render() {
    const backGroundStyle = {
      backgroundColor: this.state.currentColor,
      color: "white",
      height: "30px",
      width: "100px",
    };

    return (
      <div>
        <button style={backGroundStyle} onClick={this.addLike}>
          {this.state.likes} Likes
        </button>
      </div>
    );
  }
}

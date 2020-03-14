import React, { Component } from "react";
import "./LikeButton.css";

class LikeButton extends Component {
  state = {
    likes: 0,
    colors: ["purple", "blue", "green", "yellow", "orange", "red"]
  };

  addLike = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  render() {
    const random = Math.floor(Math.random() * this.state.colors.length);
    return (
      <button className="likeButton"
        onClick={this.addLike}
        style={{ backgroundColor: this.state.colors[random] }}
      >
        {this.state.likes} likes
      </button>
    )
  }
}

export default LikeButton;

import React, { Component } from "react";

class LikeButton extends Component {
  state = {
    counter: 0,
    colors: ["purple", "blue", "green", "yellow", "orange", "red"]
  };

  updateCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    const random = Math.floor(Math.random() * this.state.colors.length);
    return (
      <button
        className="like-button"
        onClick={this.updateCounter}
        style={{ backgroundColor: this.state.colors[random] }}
      >
        {this.state.counter} Likes
      </button>
    );
  }
}

export default LikeButton;

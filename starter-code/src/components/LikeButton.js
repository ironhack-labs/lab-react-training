import React, { Component } from "react";

class LikeButton extends Component {
  state = {
    buttonColors: ["purple", "blue", "green", "yellow", "orange", "red"],
    likeCounter: 0
  };

  handleClick = () => {
    this.setState({
      likeCounter: this.state.likeCounter + 1,
      liked: !this.state.liked
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          style={{
            backgroundColor: `${
              this.state.buttonColors[this.state.likeCounter]
            }`
          }}
        >
          {this.state.likeCounter} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;

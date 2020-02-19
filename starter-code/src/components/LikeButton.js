import React, { Component } from "react";

class LikeButton extends Component {
  state = {
    count: 0,
    colors: ["purple", "blue", "green", "yellow", "orange", "red"]
  };

  handleButton = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <button
      id="btn"
      style={{
          backgroundColor: this.state.colors[Math.floor(Math.random() * this.state.colors.length)]
      }}
      onClick={this.handleButton}>
      {this.state.count} Likes
      </button>
    );
  }
}

export default LikeButton;

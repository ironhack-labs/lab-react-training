import React, { Component } from "react";

export default class LikeButton extends Component {
  state = {
    counter: 0,
    backColor: {
      c1: 0,
      c2: 0,
      c3: 0,
    },
  };

  handleClickIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div className="likebutton-container">
        <div>
          <button onClick={this.handleClickIncrement}>
            {this.state.counter} Likes
          </button>
        </div>
      </div>
    );
  }
}

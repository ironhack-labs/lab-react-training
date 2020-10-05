import React, { Component } from 'react';

export default class LikeButton extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <button className="like-btn" onClick={this.handleClick}>
        {this.state.count} likes
      </button>
    );
  }
}

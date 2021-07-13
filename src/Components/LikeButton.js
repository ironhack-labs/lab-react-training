import React, { Component } from 'react';
import './LikeButton';

export default class LikeButton extends Component {
  state = { likeCounter: 0, likeColor: 'pink' };
  clickHandler = () => {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    let index = Math.floor(Math.random() * 5);
    let newColor = colors[index];
    this.setState((state) => ({
      likeCounter: state.likeCounter + 1,
      likeColor: newColor,
    }));
  };
  render() {
    return (
      <button style={{ backgroundColor: this.state.likeColor }} onClick={this.clickHandler}>
        {this.state.likeCounter} Like
      </button>
    );
  }
}

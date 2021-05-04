import React, { Component } from 'react';
import './LikeButton.css';

export default class LikeButton extends Component {
  state = {
    likes: 0,
    colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  };

  clickHandler = () => {
    this.setState((state) => {
      return { likes: state.likes + 1 };
    });
  };

  render() {
    return (
      <button
        className="like-button"
        style={{ backgroundColor: this.state.colors[this.state.likes % 6] }}
        onClick={this.clickHandler}
      >
        {this.state.likes} {this.state.likes === 1 ? 'Like' : 'Likes'}
      </button>
    );
  }
}

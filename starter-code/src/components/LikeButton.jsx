import React, { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      color: 'lightgrey'
    };
    this.incrementLikes = this.incrementLikes.bind(this);
  }

  incrementLikes() {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState(previousState => ({
      likes: previousState.likes + 1,
      color: randomColor
    }));
  }

  render() {
    const style = { backgroundColor: `${this.state.color}` };

    return (
      <button style={style} onClick={this.incrementLikes}>
        {this.state.likes} Likes
      </button>
    );
  }
}

export default LikeButton;

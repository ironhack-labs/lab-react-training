import React, { Component } from 'react';
import './../App.css';

export class LikeButton extends Component {
  state = {
    likes: 0,
    color: 'white',
  };

  handleColorandIncrement = (e) => {
    var colors = ['blue', 'purple', 'green', 'red', 'yellow', 'orange'];
    var random = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      color: random,
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      <div>
        <button
          className="likes"
          style={{ backgroundColor: this.state.color }}
          onClick={this.handleColorandIncrement}
        >
          {this.state.likes} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;

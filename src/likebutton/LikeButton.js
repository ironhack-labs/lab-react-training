import React, { Component } from 'react';

class LikeButton extends Component {
  state = {
    likes: 0,
  };

  likeCounter = () => {
    // console.log('clicked');
    this.setState((state, props) => ({
      likes: state.likes + 1,
    }));
  };

  render() {
    let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    let randomColor = Math.floor(Math.random() * 6);
    return (
      <button
        style={{ backgroundColor: `${colors[randomColor]}` }}
        onClick={this.likeCounter}
      >
        {this.state.likes} Likes
      </button>
    );
  }
}

export default LikeButton;

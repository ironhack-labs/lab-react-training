import React, { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {
  state = {
    likes: 0,
    colorArray: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    currentColor: 0,
  };

  handleClick = () => {
    let newColor;
    if (this.state.currentColor === 5) {
      newColor = 0;
    } else {
      newColor = this.state.currentColor + 1;
    }
    this.setState({
      likes: this.state.likes + 1,
      currentColor: newColor,
    });
  };

  render() {
    return (
      <div>
        <button
          style={{
            backgroundColor: `${
              this.state.colorArray[this.state.currentColor]
            }`,
          }}
          className="like-button"
          onClick={this.handleClick}
        >
          {this.state.likes} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;

import React, { Component } from 'react';
import './style.css';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      color: 'purple'
    };
    this.incrementClick = this.incrementClick.bind(this);
  }

  incrementClick() {
    let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    this.setState(previousState => {
      return {
        count: previousState.count + 1,
        color: randomColor
      };
    });
  }

  render() {
    return (
      <div>
        <button style={{ backgroundColor: this.state.color }} onClick={this.incrementClick}>
          {this.state.count} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;

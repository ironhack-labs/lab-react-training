import React, { Component } from 'react';
import './style.scss';

class LikeButton extends Component {
  constructor() {
    super();
    let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    this.state = {
      count: 0
    };
    this.incrementClick = this.incrementClick.bind(this);
  }

  incrementClick() {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      };
    });
  }

  render() {
    return (
      <div className="like-button">
        <button style={{ backgroundColor: this.state.color }} onClick={this.incrementClick}>
          {this.state.count} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;

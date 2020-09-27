import React, { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {
  state = {
    likesCnt: 0,
  };

  incLikesCnt = () => {
    this.setState({ likesCnt: this.state.likesCnt + 1 });
  };

  render() {
    const colorsArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const rand = Math.floor(Math.random() * colorsArr.length);

    return (
      <div>
        <button
          className="like-btn"
          onClick={this.incLikesCnt}
          style={{ backgroundColor: `${colorsArr[rand]}` }}
        >
          {this.state.likesCnt} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;

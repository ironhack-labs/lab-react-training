import React, { Component } from 'react';
import './style.scss';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      color: 'purple'
    };
    this.changeLikes = this.changeLikes.bind(this);
  }
  changeLikes() {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const random = Math.floor(Math.random() * this.state.color.length);
    this.setState(previousState => ({
      color: colors[random],
      likes: previousState.likes + 1
    }));
  }

  render() {
    const style = { backgroundColor: `${this.state.color}` };

    return (
      <button onClick={this.changeLikes} className="color" style={style}>
        {this.state.likes} Likes
      </button>
    );
  }
}

export default LikeButton;

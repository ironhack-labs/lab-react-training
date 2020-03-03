import React, { Component } from 'react';
import './style.scss';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0
    };
    this.oneLike = this.oneLike.bind(this);
  }

  oneLike() {
    this.setState(previousState => ({
      likes: previousState.likes + 1
    }));
  }

  render() {
    return <button onClick={this.oneLike}>{this.state.likes} Like</button>;
  }
}

export default LikeButton;

import React, { Component } from 'react';
import './LikeButton.css';
import randomizer from '../RandomFunciotn';

export default class LikeButton extends Component {
  state = {
    likeCount: 0,
  };

  increaseLike = () => {
    console.log('=== > liked!!');
    this.setState({
      likeCount: this.state.likeCount + 1,
    });
  };

  render() {
    return (
      <div className="LikeButton">
        <button onClick={() => this.increaseLike()}>
          {this.state.likeCount} Like
        </button>
      </div>
    );
  }
}

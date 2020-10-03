import React, { Component } from 'react';

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      index: 0,
    };
  }

  handleClick() {
    let { likes, index } = this.state;
    this.setState({
      likes: likes + 1,
      index: index + 1,
    });
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        {' '}
        {this.state.likes} Likes
      </button>
    );
  }
}

import React, { Component } from 'react';

export default class LikeButton extends Component {
  state = {
    count: 0,
  };

  handleCount = () => {
    console.log(this.state.count);
    let count = this.state.count;
    count++;
    this.setState({ count });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleCount}>{this.state.count} Likes</button>
      </div>
    );
  }
}

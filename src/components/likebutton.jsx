import React, { Component } from 'react';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      color: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
      randomcolor: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
      randomcolor: Math.floor(Math.random() * 6),
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.incrementCount}
          style={{ backgroundColor: this.state.color[this.state.randomcolor] }}
        >
          {this.state.count} Likes
        </button>
      </div>
    );
  }
}
export default LikeButton;

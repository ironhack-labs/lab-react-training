import React, { Component } from 'react';

class LikeButton extends Component {
  state = {
    counter: 0,
    bgColors: ['blue', 'green', 'yellow', 'orange', 'red', 'purple'],
    bgColor: 'white',
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
      bgColor: this.state.bgColors[
        this.state.counter % this.state.bgColors.length
      ],
    });
  };

  render() {
    return (
      <button
        style={{ backgroundColor: this.state.bgColor }}
        onClick={this.handleClick}
      >
        {this.state.counter} Likes
      </button>
    );
  }
}

export default LikeButton;

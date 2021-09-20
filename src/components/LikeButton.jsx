import React, { Component } from 'react';

let randomColor = () => {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
export default class LikeButton extends Component {
  state = {
    counter: 0,
    color: randomColor(),
  };
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
      color: randomColor(),
    });
  };

  render() {
    return (
      <div>
        <button
          style={{ backgroundColor: this.state.color }}
          className="IncrementButton border-box"
          onClick={this.increment}
        >
          {this.state.counter} Likes
        </button>
      </div>
    );
  }
}

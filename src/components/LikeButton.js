import React, { Component } from 'react';
import '../assets/css/LikeButton.css';

class LikeButton extends Component {
  state = {
    counter: 0,
    colorIndex: 0,
  };

  colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  increaseCounter = () => {
    this.setState((state) =>
      this.state.colorIndex >= this.colors.length - 1
        ? { counter: state.counter + 1, colorIndex: 0 }
        : {
            counter: state.counter + 1,
            colorIndex: state.colorIndex + 1,
          }
    );
  };

  render() {
    const divStyle = {
      backgroundColor: this.colors[this.state.colorIndex],
    };

    return (
      <div
        className="LikeButton"
        style={divStyle}
        onClick={this.increaseCounter}
      >
        {this.state.counter} Likes
      </div>
    );
  }
}

export default LikeButton;

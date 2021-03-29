import React, { Component } from 'react';
import '../assets/css/LikeButton.css';

class LikeButton extends Component {
  state = {
    counter: 0,
    colorIndex: 0,
  };

  colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  incleaseCounter = () => {
    this.setState((state) =>
      this.state.colorIndex >= this.colors.length - 1
        ? { counter: this.state.counter + 1, colorIndex: 0 }
        : {
            counter: this.state.counter + 1,
            colorIndex: this.state.colorIndex + 1,
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
        onClick={this.incleaseCounter}
      >
        {this.state.counter} Likes
      </div>
    );
  }
}

export default LikeButton;

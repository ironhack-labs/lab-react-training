import React, { Component } from 'react';

class LikeButton extends Component {
  state = {
    //put here my element to change
    counterVal: 0,
    colorIndex: 0,
    color: "",
  };

  incrBtn = () => {
    let colorArr = ['dodgerblue', 'green', 'tomato', 'ebola', 'orange', 'purple', 'yellow' ];

      this.setState({
        counterVal: this.state.counterVal + 1, 
        color: colorArr[this.state.counterVal],
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrBtn} style={{backgroundColor: `${this.state.color}`}}> {this.state.counterVal} Likes</button>
      </div>
    );
  }
}

export default LikeButton;

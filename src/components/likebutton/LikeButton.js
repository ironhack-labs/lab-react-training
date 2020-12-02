import React, { Component } from 'react';

export default class LikeButton extends Component {
  state = {
    count: 0,
    colorCounter: 0
  };

  likeHandler = () => {
    // let setCounter = this.state.count;
    this.setState({
      count: this.state.count + 1,
      colorCounter: this.state.count % 5,
    });
  };

  render() {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const style = { backgroundColor: colors[this.state.colorCounter] };
    return (
      <div>
        <button style={style} onClick={this.likeHandler}>
          Like {this.state.count}
        </button>
      </div>
    );
  }
}

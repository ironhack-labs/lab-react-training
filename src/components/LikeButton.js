import React, { Component } from 'react';

export default class LikeButton extends Component {
  state = {
    clickCount: 0,
    clickColor: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  };

  clickHandler = () => {
      this.setState((state) => ({
        clickCount: this.clickCount + 1
      }))
  };

  colorHandler = () => {
    this.state.clickColor.forEach(color => {
        return color;
    })
  }
 
  render() {
    return (
        {this.clickHandler() && <button onClick={this.clickHandler} style={this.colorHandler}>{this.state.clickCount}</button>}
    );
  }
}
{/* <button onClick={this.clickHandler} style={}>{this.state.clickCount}</button> */}
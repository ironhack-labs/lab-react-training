import React, { Component } from 'react'

export class LikeButton extends Component {
  colors = ['purple','blue','green','yellow','orange','red'];

  getRandom() {
    return Math.floor(Math.random() * (this.colors.length - 0 +1)) + 0;
  }

  state = {
    counter: 0,
    backgroundColor: "none"
  }

  handleBtnClick = () => {
    this.setState({
      counter: this.state.counter + 1,
      backgroundColor: this.colors[this.getRandom()]
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleBtnClick} style={{margin: 10, backgroundColor: this.state.backgroundColor}}>{this.state.counter} Likes</button>
      </div>
    )
  }
}

export default LikeButton;

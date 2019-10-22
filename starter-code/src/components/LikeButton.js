import React, { Component } from 'react';

class LikeButton extends Component {
  state = {
    clickCount: 0,
    backColor: "white"
  }

  colorMapper = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  clickHandler = () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
      backColor: this.colorMapper()
    })
  }

  render() {
    return (
      <div>
        <button style={{ backgroundColor: this.state.backColor }} onClick={this.clickHandler}>Like: {this.state.clickCount}</button>
      </div>
    )
  }
}

export default LikeButton;
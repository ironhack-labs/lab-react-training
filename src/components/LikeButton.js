import React, { Component } from 'react';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      bgColor: 'green'
    };
  }

  counter = () => {
    const arrayColors = ['purple','blue','green','yellow','orange','red']
    const randomColor = arrayColors[(Math.floor(Math.random() * arrayColors.length))]
    const currentCount = this.state.count;
    this.setState({ count: currentCount + 1, bgColor: randomColor });
  };

  render() {
    return (
      <button onClick={this.counter} className="like-button" style={{backgroundColor: this.state.bgColor}}>
        Like: {this.state.count}
      </button>
    );
  }
}

export default LikeButton;

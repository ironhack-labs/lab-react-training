import React, { Component } from 'react';

export default class LikeButton extends Component {
  state = {
    likes: 0,
    backgroundColor: ['purple','blue','green','yellow','orange','red']
  };

/*    changeBackground() {
    for (let i = 0; i < this.state.backgroundColor.length; i++) {
      this.state.backgroundColor[i + 1]
    }
} */

  clickCounter(e) {
    this.setState({
      likes: this.state.likes + 1
       
    });
   // changeBackground()
  }

  render() {
    const style = {
      width: 100,
      padding: 5,
      marginBottom: 5,
      backgroundColor: this.state.backgroundColor[0]
    };
    let button;
    if (this.state.likes === 1) {
      button = (
        <button style={style} onClick={(e) => this.clickCounter(e)}>
          {this.state.likes} Like
        </button>
      );
    } else {
      button = (
        <button style={style} onClick={(e) => this.clickCounter(e)}>
          {this.state.likes} Likes
        </button>
      );
    }
    return <div>{button}</div>;
  }
}

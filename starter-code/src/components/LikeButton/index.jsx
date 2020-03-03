import React, { Component } from 'react';

class Like extends Component {
  constructor() {
    super();
    this.state = {
      like: 0
    };
    this.likeButton = this.likeButton.bind(this);
  }

  likeButton() {
    this.setState({
      like: this.state.like + 1
    });
  }
  //['purple','blue','green','yellow','orange','red'] Missing
  render() {
    return (
      <button onClick={() => this.likeButton()}>
        <span>Like {this.state.like}</span>
      </button>
    );
  }
}

export default Like;

import React, { Component } from 'react';

class LikeButton extends Component {
  constructor() {
    super();
    this.colors = ['purple','blue','green','yellow','orange','red'];
    this.state = {
      btnStyle: { 
        padding: '1em',
        backgroundColor: 'purple',
        border: '0.25em solid purple',
        borderRadius: '0.25em',
        margin: '0.5em'
      },
      count: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.randomColor = this.randomColor.bind(this);
    // this.setBtnBgColor = this.setBtnBgColor.bind(this);
  }

  incrementCount() {
    let count = this.state.count + 1;
    this.setState({
      count
    });
  }

  randomColor() {
    return this.colors[Math.round(Math.random() * this.colors.length)];
  }

  setBtnBgColor() {
    let bgColor = this.randomColor();
    this.setState({
      btnStyle: { 
        padding: '1em',
        backgroundColor: bgColor,
        border: '0.25em solid ' + bgColor,
        borderRadius: '0.25em',
        margin: '0.5em'
      },
    }) 
  }

  render() {
    return (
      <button className="likeButton" style={this.state.btnStyle} onClick={() => {
        this.incrementCount();
        this.setBtnBgColor();
      }}>{this.state.count} Likes</button>
    );
  }

}

export default LikeButton;
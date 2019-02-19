import React, { Component } from 'react';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nbOfLikes: 0
    };
    this.colors = ['purple','blue','green','yellow','orange','red']

    // This binding is necessary
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      nbOfLikes: prevState.nbOfLikes+1
    }));
  }
  render() {
    let colorIndex = this.state.nbOfLikes % this.colors.length
    return (
      <button 
        onClick={this.handleClick}
        style={{
          backgroundColor: this.colors[colorIndex],
          color: 'white',
        }}>
        {this.state.nbOfLikes}
        {' '}
        Like{this.state.nbOfLikes !== 1 && 's'}
      </button>
    );
  }
}

export default LikeButton;

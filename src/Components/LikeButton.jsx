import React, { Component } from 'react';

const colors = ['purple', 'green', 'red', 'yellow', 'dodgerblue'];

class LikeButton extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    //console.log('click click');

    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <button
        style={{
          backgroundColor: colors[Math.round(Math.random() * colors.length)],
          marginRight: '10px',
        }}
        onClick={this.handleIncrement}
      >
        {this.state.count} {this.state.likes === 1 ? 'Like' : 'Likes'}
      </button>
    );
  }
}

export default LikeButton;

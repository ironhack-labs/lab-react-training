import React, { Component } from 'react';

export class LikeButton extends Component {
  state = {
    counter: 0,
  };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {

    return (
      <div>
        <button
          style={{
            width: 150,
            height: 50,
            margin: 10,
          }}
          onClick={this.handleIncrement}
        >
          {this.state.counter} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;

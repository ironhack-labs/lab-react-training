import React, { Component } from 'react';

export default class LikeButton extends Component {
  state = {
    counter: 0,
  };

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <button className="button is-info" onClick={this.clickHandler}>
        {`${this.state.counter} Likes`}
      </button>
    );
  }
}

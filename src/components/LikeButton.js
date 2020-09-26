import React, { Component } from 'react';

export default class LikeButton extends Component {
  state = {
    count: 0,
    index: 0,
    colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  };

  handleSetState = () => {
    this.setState({
      count: this.state.count + 1,
    });

    this.state.index < 5
      ? this.setState({ index: this.state.index + 1 })
      : this.setState({ index: 0 });
  };

  render() {
    return (
      <div>
        <button
        className="like"
          onClick={this.handleSetState}
          style={{ backgroundColor: `${this.state.colors[this.state.index]}` }}
        >
          {this.state.count > 1 ? 'Likes ' : 'Like '}
          {this.state.count}
        </button>
      </div>
    );
  }
}

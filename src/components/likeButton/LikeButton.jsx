import React from 'react';
import './LikeButton.css'

export default class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      count: 0,
    };
  }

  onClick = (e) => {
    this.setState({ clicked: true });
    this.setState((previous) => ({ count: previous.count + 1 }));
  };

  unClick = () => {
    this.setState({ clicked: false });
  };

  render() {
    function getBackgroundColor() {
      const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
      const randomIndexColors = Math.floor(Math.random() * colors.length);
      return colors[randomIndexColors];
    }
    return (
      <button
        className="LikeButton"
        onClick={this.onClick}
        onTransitionEnd={this.unClick}
        style={{ backgroundColor: getBackgroundColor() }}
      >
        {this.state.count} Likes
        {this.props.children}
      </button>
    );
  }
}

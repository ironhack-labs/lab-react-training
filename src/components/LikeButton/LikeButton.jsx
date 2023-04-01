/*JSX DE LA INTERACCIÓN 8*/

import './LikeButton.css';
import React from 'react';

class LikeButton extends React.Component {
  state = {
    count: 0,
    color: 'purple',
  };

  handleColor = () => {
    const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    const currentIndexColor = colorArr.indexOf(this.state.color);
    const nextIndexColor = (currentIndexColor + 1) % colorArr.length;

    return colorArr[nextIndexColor];
  };

  handleLikesCountAndColor = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
        color: this.handleColor(),
      };
    });
  };

  render() {
    return (
      <div className="LikeButton">
        <button
          style={{ color: 'white', backgroundColor: this.state.color }}
          onClick={this.handleLikesCountAndColor}
        >
          {' '}
          {this.state.count} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
import React from 'react';

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

class LikeButton extends React.Component {
  state = {
    count: 0,
  };

  counterLikes = (event) => {
    const clickedButton = event.target;
    clickedButton.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      count: this.state.count + 1,
    });
    clickedButton.style.backgroundColor = clickedButton;
  };

  render() {
    return (
      <div className="Likes-button">
        <button onClick={this.counterLikes}>
          {this.state.count}
          {this.state.count === 1 ? ' Like' : ' Likes'}
        </button>
      </div>
    );
  }
}

export default LikeButton;

import React from 'react';

class LikeButton extends React.Component {
  state = {
    likes: 0,
  };

  handleIncrementCounter = () => {
    this.setState((previousState) => {
      return {
        likes: previousState.likes + 1,
      };
    });
  };

  handleIncrementColor = () => {
    const colors = ['#8409A4', '#0D2CDF', '#2F971B', '#F6F876', '#ECAE56', '#EE3F3F'];
    let random = Math.floor(Math.random() * (colors.length - 0 + 1) + 0);
    const butts = {
      backgroundColor: `${colors[random]}`,
    };
    return butts;
  };

  render() {
    const { likes } = this.state;

    return (
      <>
        <button
          id="btn"
          style={this.handleIncrementColor()}
          onClick={this.handleIncrementCounter}
        >
          {likes} Likes
        </button>
      </>
    );
  }
}


export default LikeButton;
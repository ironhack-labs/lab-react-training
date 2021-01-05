import React from 'react';

class LikeButton extends React.Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  //   randomColor = () => {
  //     const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  //     const random = Math.floor(Math.random() * Math.floor(colors.length));
  //     console.log(random);
  //   };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>{this.state.value} Likes</button>
      </div>
    );
  }
}

export default LikeButton;

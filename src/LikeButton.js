import React from "react";

class LikeButton extends React.Component {
  state = {
    counter1: 0,
    counter2: 0
  };

  handleIncrementCounter1 = () => {
    this.setState((previousState) => {
      return {
        counter1: previousState.counter1 + 1,
      };
    });
  };

  handleIncrementCounter2 = () => {
    this.setState((previousState) => {
      return {
        counter2: previousState.counter2 + 1,
      };
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleIncrementCounter1}>
        {this.state.counter1} Likes
        </button>
        <button onClick={this.handleIncrementCounter2}>
        {this.state.counter2} Likes
        </button>
      </>
    );
  }
}
export default LikeButton; 
// imports
import React from 'react';
import styled from 'styled-components';

//components
class LikeButton extends React.Component {
  state = {
    counter: 0,
    accColor: 0,
    backgrounds: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  };
  sumCounter() {
    this.setState({ ...this.state, counter: this.state.counter + 1 });
    console.log(this.state.counter);
    this.changeColor();
  }
  changeColor() {
    if (this.state.accColor === 5) {
      this.setState({ accColor: 0 });
    } else {
      this.setState({ accColor: this.state.accColor + 1 });
    }
  }
  render() {
    const LikeButton = styled.button`
      background-color: ${this.state.backgrounds[this.state.accColor]};
    `;
    return (
      <div>
        <LikeButton onClick={() => this.sumCounter()}>
          {this.state.counter} Likes
        </LikeButton>
      </div>
    );
  }
}

// exports
export default LikeButton;

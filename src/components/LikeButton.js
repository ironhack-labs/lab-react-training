import React from 'react';
import styled from 'styled-components';

class LikeButton extends React.Component {
  state = {
    name: `Alex`,
    counter: 0,
    colorCounter: 0,
    Color: ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
  };

  colorCounterUp() {
    this.setState(this.state.colorCounter < 5 ? {colorCounter: this.state.colorCounter + 1 , counter: this.state.counter + 1 } : {colorCounter: 0, counter: this.state.counter + 1 })
  }

  render() {
    const LikeBtnDiv = styled.button`
      background-color: ${this.state.Color[this.state.colorCounter]};
    `;

    return (
      <div>
        <LikeBtnDiv
          onClick={
            (() => this.colorCounterUp())
          }
        >
          {this.state.counter} Likes
        </LikeBtnDiv>
      </div>
    );
  }
}

export default LikeButton;

import React, { Component } from 'react';

export default class Dice extends Component {

  state = {
    clicked: false,
  };

  clickHandler = () => {
    this.setState((state, props) => ({
      clicked: !this.state.clicked,
    }));
  };

  render() {
    let randomNumber = Math.floor(Math.random() * Math.floor(6)) + 1;
    return (
      <div>
        <img
          style={{height: '200px'}}
          onClick={this.clickHandler}
          src={`./img/dice${randomNumber}.png`}
          alt="dice"
        />
      </div>
    );
  }
}

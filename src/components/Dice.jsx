import React, { Component } from 'react';

const randomCount = () => {
  const ran = Math.floor(Math.random() * 6) + 1;
  console.log(ran);
  return ran;
};

export class Dice extends Component {
  state = {
    randomNum: 4,
  };
  onClickHandler = () => {
    this.setState({ randomNum: 0 });
    setTimeout(() => {
      this.setState({ randomNum: randomCount() });
    }, 500);
  };
  render() {
    return (
      <div className="border-box">
        <img
          className="dice"
          src={`/img/dice${this.state.randomNum}.png`}
          alt=""
          onClick={this.onClickHandler}
        />
      </div>
    );
  }
}

export default Dice;

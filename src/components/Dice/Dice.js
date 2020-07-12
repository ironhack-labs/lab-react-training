import React, { Component } from 'react';

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = { img: '/img/dice-empty.png' };
    setTimeout(this.click, 1000);
  }
  click = () => {
    this.setState({
      img: '/img/dice' + (Math.floor(Math.random() * 6) + 1) + '.png',
    });
  };
  render() {
    return (
      <img
        src={this.state.img}
        style={{ width: 200 }}
        onClick={this.click}
        alt=""
      />
    );
  }
}
export default Dice;

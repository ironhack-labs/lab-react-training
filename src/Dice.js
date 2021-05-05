import React from 'react';

export default class Dice extends React.Component {
  constructor(state, props) {
    super(props);
    this.diceLookup = {
      0: '/img/dice-empty.png',
      1: '/img/dice1.png',
      2: '/img/dice2.png',
      3: '/img/dice3.png',
      4: '/img/dice4.png',
      5: '/img/dice5.png',
      6: '/img/dice6.png',
    };
    this.state = {
      dice: 0,
    };
  }
  clickHandler = () => {
    this.setState({
      dice : 0
    })
    setTimeout(()=>{
      this.setState({
        dice: diceRoll(),
      });
    }, 1000) 
  };

  render() {
    return (
      <div className="Dice">
        <img
          onClick={this.clickHandler}
          src={this.diceLookup[this.state.dice]}
          alt="piccy"
        />
      </div>
    );
  }
}

function diceRoll() {
  console.log('roll');
  return Math.floor(Math.random() * 6) + 1;
}

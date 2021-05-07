import React from 'react';

class Dice extends React.Component {
  state = {
    src: `/img/dice${Math.ceil(Math.random() * 6)}.png`
  };
  
  rollDice = () => {
    this.setState({
      src: '/img/dice-empty.png'
    });
    setTimeout(() => this.setState({
        src: `/img/dice${Math.ceil(Math.random() * 6)}.png`
      }),
      1000
    );
  };
 
  render() {
    return (
        <img className="Dice" onClick={this.rollDice} src={this.state.src} alt="Dice" />
    );
  }
}
 
export default Dice;
import React, { Component } from 'react';



class Dice extends Component {
  
  state = {
    loading: false,
    idDiceImage: 0
  }

diceImages = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png']

  handleClick = () => {
    setTimeout(() => {
      this.setState({
        idDiceImage: Math.floor(Math.random() * 6), //I put 6 instead of 5 because if I don't put it the number 6 (position 5 in the array) never appears
        loading: false
      });
    }, 1000)

    this.setState({
      loading : true
    });
  }

  render() {
    return (
      <button className="dice-container" onClick={ this.handleClick }>
        <img className="dice-image"
        src={ this.state.loading ? "/img/dice-empty.png" : this.diceImages[this.state.idDiceImage] }
        alt="Dice"/>
      </button>
    );
  }
};


  export default Dice;
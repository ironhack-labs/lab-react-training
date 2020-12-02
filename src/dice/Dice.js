import React, {Component} from 'react';
import'./Dice.css';


class Dice extends Component {
    state = {
        dice: 'img/dice1.png', 
    }
    handleClick = () => {
  const dices = [
      'img/dice1.png', 
      'img/dice2.png', 
      'img/dice3.png', 
      'img/dice4.png', 
      'img/dice5.png',
      'img/dice6.png'];
const emptyDice = 'img/dice-empty.png';
const randomDice = dices[Math.floor(Math.random() * dices.length)];
const interval = setInterval(() => {
        this.setState({ dice: emptyDice}) }, 10000);
        clearInterval(interval);
        this.setState({ dice: randomDice});
    }
    render() {
        return (
            <div className="Dice">
                <img src={ this.state.dice } onClick={ this.handleClick } alt="dice"/>
            </div>
        )
    }
   }
   
   export default Dice;
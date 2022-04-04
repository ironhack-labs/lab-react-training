import { Component } from 'react';
import emptyDice from '../../assets/images/dice-empty.png';
import diceOne from '../../assets/images/dice1.png';
import diceTwo from '../../assets/images/dice2.png';
import diceThree from '../../assets/images/dice3.png';
import diceFour from '../../assets/images/dice4.png';
import diceFive from '../../assets/images/dice5.png';
import diceSix from '../../assets/images/dice6.png';
import './Dice.css'

const diceNumbers = [
  emptyDice,
  diceOne,
  diceTwo,
  diceThree,
  diceFour,
  diceFive,
  diceSix,
];

class Dice extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dice: emptyDice,
    };
  }
  
  randomDice = () => {
    this.setState({
      dice: emptyDice
    });
    
    setTimeout(() => {

      const getRandom = Math.floor(Math.random() * diceNumbers.length);
     
      this.setState({
        dice: diceNumbers[getRandom],
      });
    }, 1000);
  };

  render() {
    return (
      <div className="container">
        <img 
        className="myDice"
        src={this.state.dice} 
        alt="..." 
        onClick={this.randomDice} />
      </div>
    );
  }
}

export default Dice;

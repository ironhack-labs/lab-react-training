import { Component } from 'react';
import './Dice.css';

/* IMAGES */
import diceEmpty from '../../assets/images/dice-empty.png';
import dice1 from '../../assets/images/dice1.png';
import dice2 from '../../assets/images/dice2.png';
import dice3 from '../../assets/images/dice3.png';
import dice4 from '../../assets/images/dice4.png';
import dice5 from '../../assets/images/dice5.png';
import dice6 from '../../assets/images/dice6.png';

class Dice extends Component {

   /* randomDice = () => {
    const Dices = [dice1, dice2, dice3, dice4, dice5, dice6];    
    return Math.random() * (Dices[Dices.length] - Dices[0]) + Dices[0];
   }  */

  state = {
    img: dice3,
  };

  throwDice = () => {
    const Dices = [
      dice1,
      dice2,
      dice3,
      dice4,
      dice5,
      dice6
    ];

    this.setState({img: diceEmpty}, () => {
        setTimeout( () => {
            return this.setState({
              img: Dices[(Math.floor(Math.random() * Dices.length))],
            });
        }, 1000)
    })    
  };

  render() {
    return <img className='Dice-img' onClick={this.throwDice} src={this.state.img} alt="Dice"></img>;
  }
}

export default Dice;

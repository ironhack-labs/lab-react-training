import React, {Component} from 'react';
import dice0 from '../../images/dice-empty.png';
import dice1 from '../../images/dice1.png';
import dice2 from '../../images/dice2.png';
import dice3 from '../../images/dice3.png';
import dice4 from '../../images/dice4.png';
import dice5 from '../../images/dice5.png';
import dice6 from '../../images/dice6.png';
import './Dice.css'

const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];

class Dice extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: dice0

    }
  }

  clickDice = () => {
    setTimeout(()=>{
      const diceRandom = Math.floor(Math.random() * 5 + 1);

      this.setState({
        image: diceArr[diceRandom]
      })

    }, 1000)
  }
  render() {
    return (
      <div>
        <img className="dice-img"
        onClick={this.clickDice}
        src={this.state.image}
        alt="dice-empty"/>
      </div>
    )
  }
}

export default Dice;
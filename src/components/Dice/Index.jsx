import './Index.css'
import { Component } from 'react';
import diceEmpty from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: diceEmpty,
    };
  }

  handleClick = () => {
    this.setState({
      img: diceEmpty,
    });
    setTimeout(() => {
      this.setState({
        img: this.randomImg(),
      });
    }, 1000);
  };

  randomImg = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    switch (random) {
      case 1:
        return dice1;
      case 2:
        return dice2;
      case 3:
        return dice3;
      case 4:
        return dice4;
      case 5:
        return dice5;
      case 6:
        return dice6;
      default:
        return diceEmpty;
    }
  };

  render() {
    return (
      <div className="Dice">
        <img src={this.state.img} alt="dice" onClick={this.handleClick}></img>
      </div>
    );
  }
}

export default Dice;
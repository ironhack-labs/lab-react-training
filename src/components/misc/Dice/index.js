import "./index.css"
import React, { Component } from 'react';
import dice1 from "../../../assets/images/dice1.png"
import dice2 from "../../../assets/images/dice2.png"
import dice3 from "../../../assets/images/dice3.png"
import dice4 from "../../../assets/images/dice4.png"
import dice5 from "../../../assets/images/dice5.png"
import dice6 from "../../../assets/images/dice6.png"
import dice from "../../../assets/images/dice-empty.png"

class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: dice3,
        };
      }

      showRandomDice = () => {

        const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];
        const randomDice = diceArr[Math.floor(Math.random() * diceArr.length)];



        setTimeout(() => {
            this.setState({
                value: dice
            });
          }, 1);

        setTimeout(() => {
            this.setState({
                value: randomDice
            });
          }, 2000);
        };

      


    render() {
        return (
            <div>
                <img
                className='Dice' 
                src={this.state.value}
                onClick={this.showRandomDice}
                alt=''
            />
            </div>
        );
    }
}


export default Dice;
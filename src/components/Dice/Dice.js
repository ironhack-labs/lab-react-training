import './Dice.css';
import React, {Component} from 'react';

import dice0 from "../../assets/images/dice-empty.png";
import dice1 from "../../assets/images/dice1.png";
import dice2 from "../../assets/images/dice2.png";
import dice3 from "../../assets/images/dice3.png";
import dice4 from "../../assets/images/dice4.png";
import dice5 from "../../assets/images/dice5.png";
import dice6 from "../../assets/images/dice6.png";

class Dice extends Component {
    state = {
        dice: dice0
    };

    dicesArr = [dice1, dice2, dice3, dice4, dice5, dice6];

    throwDice(){
        this.setState({
            dice: dice0
        });

        setTimeout(() => {
            this.setState({
                dice: this.dicesArr[Math.floor(Math.random() * this.dicesArr.length)]
            })
        }, 1000)
    }

    render(){
        return (
            <img onClick={() => this.throwDice()} src={this.state.dice} alt="" />
        );
    };
};

export default Dice;
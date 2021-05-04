import React, { Component } from 'react'
import diceEmpty from '../img/dice-empty.png';
import dice1 from '../img/dice1.png';
import dice2 from '../img/dice2.png';
import dice3 from '../img/dice3.png';
import dice4 from '../img/dice4.png';
import dice5 from '../img/dice5.png';
import dice6 from '../img/dice6.png';

export default class Dice extends Component {

    state = {
        index : 0
    }
    
    emptyDice = () => {
        this.setState({
            index: 6
        })
    }

    randomDice = () => {
        this.setState({
            index: Math.floor(Math.random()* 6)
        })
    }

    rollingDice = () => {
        this.emptyDice();
        setTimeout(this.randomDice, 1000)
    }

    render() {
        let dice = [dice1, dice2, dice3, dice4, dice5, dice6, diceEmpty];
        return (
            <div className="randomDice">
              <h1>Dice Iteration</h1>  
              <img src={dice[this.state.index]} alt="Augenzahl" onClick={this.rollingDice} />
            </div>
        )
    }
}

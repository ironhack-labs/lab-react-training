import React, { Component } from 'react'
import './Dice.css'
import dice0 from './dice-empty.png'
import dice1 from './dice1.png'
import dice2 from './dice2.png'
import dice3 from './dice3.png'
import dice4 from './dice4.png'
import dice5 from './dice5.png'
import dice6 from './dice6.png'

export class Dice extends Component {

    state = {
        dice: dice1
    }

    handleDice = () => {
        const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];
        const randomDice = Math.floor(Math.random() * diceArr.length);
        const newDice = diceArr[randomDice];

        this.setState({
            dice: dice0
        })

        setTimeout( () => {
            this.setState({
                dice: newDice
            })
        }, 1000)
        
    }

    render() {
        return (
            <div>
                <img className='dice' src={this.state.dice} onClick={this.handleDice} alt={this.state.dice}/>
            </div>
        )
    }
}

export default Dice

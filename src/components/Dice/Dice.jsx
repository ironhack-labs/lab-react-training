import React, { Component } from "react";
import './Dice.css'

import diceEmpty from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'


class Dice extends Component {

    state = {
        src : dice3
    }

    

    rollDice = () => {
        const dice = [dice1, dice2, dice3, dice4, dice5, dice6]
        const randomN = Math.floor(Math.random()* dice.length)
        const randomDice = dice[randomN]

        this.setState((prevState) => {
            return{
                src: randomDice
            }
        })
    }

    changeDice = () => {
        setTimeout(this.rollDice, 1000)
        this.setState((prevState) => {
            return{
                src: diceEmpty
            }
        })
    }

    render() {

        return(
            <div className="size">
                <img className= "image" src={this.state.src} onClick={this.rollDice}/>
            </div>
        )
    }

}

export default Dice
import React, { Component } from 'react'
import '../styles/Dice.css'

const dicesImg = ["img/dice1.png", "img/dice2.png", "img/dice3.png","img/dice4.png" ,"img/dice5.png", "img/dice6.png" ]


export class Dice extends Component {
    state = {
        currentDice: 'img/dice3.png'
    }

    randomDice() {
     return dicesImg[[Math.floor(Math.random()*dicesImg.length)]]
    }

    displayDice = () => {
        this.setState({currentDice: 'img/dice-empty.png' })
        setTimeout(() => {
            this.setState({currentDice: this.randomDice() })
        }, 1000)

    }
    render() {
        return (
            <div className="Dice" onClick={this.displayDice}>
                <img src={this.state.currentDice} alt="dice face"/>
            </div>
        )
    }
}

export default Dice

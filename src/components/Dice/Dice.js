import React, { Component } from 'react'
import "./Dice.css"

export class Dice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emptyDice : "/img/dice-empty.png",
            randomDice : [
                '/img/dice1.png',
                '/img/dice2.png',
                '/img/dice3.png',
                '/img/dice4.png',
                '/img/dice5.png',
                '/img/dice6.png'
            ]
        }
    }
    random = () => {
        this.setState((state) => ({emptyDice: state.randomDice[Math.floor(Math.random() * 6)]}))
    }

    render() { 
        return (
            <div>
                <img onClick={this.random} className="dice" src={this.state.emptyDice} alt=""></img>
            </div>
        )
    }
}

export default Dice

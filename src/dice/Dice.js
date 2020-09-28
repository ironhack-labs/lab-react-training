import React, { Component } from 'react'
import './Dice.css'

export default class Dice extends Component {
    state = {
        diceRoll: '../img/dice3.png'
    }

    handleOnClick = (e) => {
        e.preventDefault()
        const diceRolls = ['../img/dice1.png', '../img/dice2.png', '../img/dice3.png', '../img/dice4.png', '../img/dice5.png', '../img/dice6.png']

        this.setState({
            diceRoll: '../img/dice-empty.png'
        })

        setTimeout(() => { 
            this.setState({
                diceRoll: diceRolls[Math.floor(Math.random() * diceRolls.length)]
            })
        }, 1000);
    }

    render() {
        return (
            <div className="dice-card">
                <a className="dice-a" href="#" onClick={this.handleOnClick}><img src={this.state.diceRoll}></img></a>
            </div>
        )
    }
}

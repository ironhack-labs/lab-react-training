import React, { Component } from 'react'
import { render } from 'react-dom'
import '../assets/css/Dice.css'

class Dice extends Component {
    state = {
        dice: '/img/dice1.png'
    }


    randomDice = () => {
        const diceArr = [
            '/img/dice1.png',
            '/img/dice2.png',
            '/img/dice3.png',
            '/img/dice4.png',
            '/img/dice5.png',
            '/img/dice6.png'
        ]

        const randomNumber = Math.floor(Math.random() * 5)

        this.setState({
            dice: diceArr[randomNumber]
        })
    }

    handleDiceClick = () => {
        setTimeout(() => {
            this.setState({
                dice: '/img/dice-empty.png'
            })
        }, 1)

        setTimeout(() => {
            this.randomDice()
        }, 1000)
    }


    render() {
        return (
            <div>
                <img className="image" src={this.state.dice} alt='dice' onClick={this.handleDiceClick} />
            </div>
        )
    }


}

export default Dice
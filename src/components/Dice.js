import React, { Component } from 'react'

export default class Dice extends Component {
    state = {
        counter: 0,
    }

    rollDice = () => {
        const randomNum = (min, max) => {
            return Math.round(Math.random() * (max - min) + min);
        }
        this.setState((state) => {
            return {
                counter: 0
            }
        })
        setTimeout(() => {
            this.setState((state) => {
                return {
                    counter: randomNum(1, 6)
                }
            })
        }, 1000)
    }
    diceImg = {
        0: '/img/dice-empty.png',
        1: '/img/dice1.png',
        2: '/img/dice2.png',
        3: '/img/dice3.png',
        4: '/img/dice4.png',
        5: '/img/dice5.png',
        6: '/img/dice6.png',
    }
    render() {
        return (
            <img onClick={this.rollDice} src={this.diceImg[this.state.counter]} alt="dice"/>
        )
    }
}

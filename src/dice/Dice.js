import React, { Component } from 'react'

export default class Dice extends Component {
    state = {
        numbers: ['/img/dice-empty.png', '/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png'],
        currentNumber: 1
    }

    handleClick = () => {

        this.setState({
            currentNumber: 0
        })

        setTimeout(() => {
            this.setState({
                currentNumber: Math.floor(Math.random() * 6) + 1
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <img onClick={this.handleClick} src={this.state.numbers[this.state.currentNumber]} width="100" />
            </div>
        )
    }
}

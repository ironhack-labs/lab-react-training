import React, { Component } from 'react'
import './Dice.css'

export default class Dice extends Component {
    state = {
        display: (Math.floor(Math.random() * (6 - 1)) + 1),
        img: '/img/dice3.png'
    }
    random = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min
    }
    rollDice = () => {
        this.setState({ img: '/img/dice-empty.png' })
        let newDisplay = (Math.floor(Math.random() * (6 - 1)) + 1)
        this.setState({ display: newDisplay })
        setInterval(() => {
            this.setImage()
        }, 1000);

    }
    setImage = () => {
        if (this.state.display === 1) {
            this.setState({ img: '/img/dice1.png' })
        }
        if (this.state.display === 2) {
            this.setState({ img: '/img/dice2.png' })
        }
        if (this.state.display === 3) {
            this.setState({ img: '/img/dice3.png' })
        }
        if (this.state.display === 4) {
            this.setState({ img: '/img/dice4.png' })
        }
        if (this.state.display === 5) {
            this.setState({ img: '/img/dice5.png' })
        }
        if (this.state.display === 6) {
            this.setState({ img: '/img/dice6.png' })
        }
    }
    state = {
        display: (Math.floor(Math.random() * (6 - 1)) + 1),
        img: '/img/dice3.png'
    }

    render() {

        return (

                        <div className='dice' onClick={this.rollDice}>
                            <img src={this.state.img} alt="Dice" />
                        </div>


        )
    }
}

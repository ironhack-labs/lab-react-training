import React, { Component } from 'react'
import './Dice.css'

export default class Dice extends Component {
    state = {
        img: `/img/dice${Math.floor(Math.random() * 6 + 1)}.png` 
    }

    randomDice = () => {
        let randomNumber = Math.floor(Math.random() * 6 + 1)
        this.setState({
            img: `/img/dice-empty.png`
        })
        setTimeout(() => {
            this.setState({
                img: `/img/dice${randomNumber}.png`
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <img className="dice-img" src={this.state.img} alt="" onClick={this.randomDice}></img>
            </div>
        )
    }
}

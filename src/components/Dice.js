import React, { Component } from 'react'
import './Dice.css';


export default class Dice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: "/img/dice1.png",
        }
    }
    rollDice = () => {
        this.setState(({img}) => ( {img: "/img/dice-empty.png" } ))
        setTimeout(this.randomimg, 300)
    }

    randomimg = () => {
        const randomDice = Math.floor(Math.random() * 6) + 1
        this.setState(({img}) => ( {img: `/img/dice${randomDice}.png` } ))
    }
    
    render() {
        return (
            <div >
                <img className="dice" src={this.state.img} alt="Dice" onClick={this.rollDice}></img>
            </div>
        )
    }
}
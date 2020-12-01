import React, { Component } from 'react'
import './Dice.css'

export default class Dice extends Component {

    state = {
        img: '/img/dice1.png'
    }

    clickHandler = () => {
        const images = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png']
        const random = images[Math.floor(Math.random() * images.length)]

        this.setState( (state, props) => ({
            img: '/img/dice-empty.png'
        }))
        
        setTimeout( () => { 

            this.setState( (state, props) => ({
                img: random
            }))

        }, 1000);
    }


    render() {
        return (
            <div className="diceContainer">
                <img onClick={this.clickHandler} src={this.state.img} alt="dice"/>
            </div>
        )
    }
}



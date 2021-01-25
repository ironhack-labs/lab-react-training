import React, { Component } from 'react';
import './Dice.css';

let diceImages = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png'];

class Dice extends Component {

    state = {
        image: diceImages[Math.floor(Math.random() * diceImages.length)]
    }

    handleClick = () => {
        this.setState({
            image: '/img/dice-empty.png'
        })

        setTimeout(() => {
            this.setState({
                image: diceImages[Math.floor(Math.random() * diceImages.length)]
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <img className='dice' src={this.state.image} alt='Dice' onClick={this.handleClick} />    
            </div>
        )
    }
}

export {Dice};
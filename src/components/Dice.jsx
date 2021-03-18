import React, { Component } from 'react';
import './../views/Dice.css'

const dices = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png'];

export class Dice extends Component {
    state = {
        imgSrc : this.randomIndex()
    }

    randomIndex() {
        return dices[Math.round((Math.random() * 5))];
    }   

    handleClick = () => {
        this.setState({imgSrc : '/img/dice-empty.png'});
        setTimeout(() => this.setState({imgSrc : this.randomIndex()}), 1000);
    }

    render() {

        return (
            <div className="Dice">
                <img 
                    src={this.state.imgSrc} 
                    alt=""
                    onClick={() => this.handleClick()}
                />
            </div>
        )
    }
}

export default Dice

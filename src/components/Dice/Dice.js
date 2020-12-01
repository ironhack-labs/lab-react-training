import React, { Component } from 'react'
import './Dice.css';

export default class Dice extends Component {
    state = {
        value: true,
        number: Math.floor(Math.random()*6)
    }

    clickHandler = () => {
        this.setState((state,props) => ({
            value: false
        }))
        setTimeout(() => {
            console.log('off')
            this.setState((state,props) => ({
                value: true,
                number: Math.floor(Math.random()*6)
            }))    
        }, 3000)
        // return value: false
    };

    setToTrue = () => {

    }

    render() {
        return (
            <div className="dice">
                <img onClick={this.clickHandler}src={this.state.value ? `/img/dice${this.state.number}.png` : '/img/dice-empty.png' }/>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Dice extends Component {
    state = {
        img: Math.floor(Math.random() * 6 +1)
    }
    
    clickHandler = () => {
        this.setState(state => ({
            img: '-empty'
        }))
        setTimeout(() => {
            this.setState(state => ({
                img: Math.floor(Math.random() * 6 +1)
            }))
        }, 1000)
    }

    render() {
        return (
           <button onClick={this.clickHandler}>
                <img src={`img/dice${this.state.img}.png`} alt=''/>
           </button>
        )
    }
}
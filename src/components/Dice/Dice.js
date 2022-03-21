import React, { Component } from 'react'

import './Dice.css'
import d0 from "../../assets/images/dice-empty.png";
import d1 from "../../assets/images/dice1.png";
import d2 from "../../assets/images/dice2.png";
import d3 from "../../assets/images/dice3.png";
import d4 from "../../assets/images/dice4.png";
import d5 from "../../assets/images/dice5.png";
import d6 from "../../assets/images/dice6.png";

class Dice extends Component {
   state = {
        src: d0
    }
    arr = [d1, d2, d3, d4, d5, d6]

    handleDice() {
        this.setState({
            src: d0
        })
        setTimeout(() => {
            this.setState({
                src: this.arr[Math.floor(Math.random() * this.arr.length)]
            }) 
        }, 1000)
    }

    render (){
        return (
                <img className='dice' onClick={() => this.handleDice()} src={this.state.src} alt="dice" />
        )
    }
}

export default Dice
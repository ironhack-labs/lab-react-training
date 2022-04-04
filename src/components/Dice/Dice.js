import React, { Component } from 'react';
import dice0 from '../../assets/images/dice-empty.png';
import dice1 from '../../assets/images/dice1.png';
import dice2 from '../../assets/images/dice2.png';
import dice3 from '../../assets/images/dice3.png';
import dice4 from '../../assets/images/dice4.png';
import dice5 from '../../assets/images/dice5.png';
import dice6 from '../../assets/images/dice6.png';
import './Dice.css';

class Dice extends Component {
    state = {
        src: dice0
    }
    arr = [dice1,dice2,dice3,dice4,dice5,dice6]

    handleDice() {
        this.setState({
            src:dice0
        })
        setTimeout(() =>{
            this.setState({
                src: this.arr[Math.floor(Math.random() * this.arr.length)]
            })
        }, 1000)
    }
    render(){
        return(
            <img className='dices' onClick={this.handleDice} src={this.state.src} alt="/" />
        )
    }
}

export default Dice;
import React, { Component } from 'react';

class Dice extends Component {
    
    diceFaces = [
        './img/dice1.png',
        './img/dice2.png',
        './img/dice3.png',
        './img/dice4.png',
        './img/dice5.png',
        './img/dice6.png'
    ]
    
    diceEmpty = './img/dice-empty.png';
    
    diceRandom = Math.floor(Math.random()*this.diceFaces.length);

    state ={
        displayDice:this.diceFaces[this.diceRandom]
    }
    
    throwDice = () => {
        let newRandom = Math.floor(Math.random()*this.diceFaces.length);
        
        this.setState({
            displayDice: this.diceEmpty
        })

        setTimeout(() => {
            this.setState({displayDice:this.diceFaces[newRandom]})
        },1000)
    }


    render(){
        return(
            <img alt="" onClick={this.throwDice} src={this.state.displayDice} />
        )
    }
}

export default Dice;
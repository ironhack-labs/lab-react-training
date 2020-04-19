import React, { Component } from 'react'

const a = '/img/dice1.png';
const b = '/img/dice2.png';
const c = '/img/dice3.png';
const d = '/img/dice4.png';
const e = '/img/dice5.png';
const f = '/img/dice6.png';

class Dice extends Component{
    state = {
        dice: [a, b, c, d, e, f],
        function: true,
      }

    randomDice = () =>{
        if(this.state.function === true){
          return this.state.dice[Math.floor(Math.random() * this.state.dice.length)];  
        } else {
            setTimeout(() => { this.toggleClass() }, 1000);
            return '/img/dice-empty.png';  
        }
    } 
    toggleClass = () => {
        const state = this.state.active;
        this.setState({ 
          function: !state, 
        });
      };
    render(){
        return(
        <div>
            <img onClick={this.toggleClass} src={this.randomDice()} alt=""/>
        </div>
        )
    }
}

export default Dice;
